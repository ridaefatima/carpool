import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase-config';

const MapComponent = () => {
  const mapContainer = useRef(null);
  const [markers, setMarkers] = useState([]);

  // Define custom pin icon
  const customIcon = L.divIcon({
    className: 'custom-marker',
    html: `<div class="marker-container">
             <div class="pin"></div>
           </div>`,
    iconSize: [30, 30],
    iconAnchor: [15, 30],
    popupAnchor: [0, -30]
  });

  // Fetch data from Firebase
  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "parsed_csv_data"));
      const markersData = [];
      
      querySnapshot.forEach((doc) => {
        const data = doc.data().data;
        if (data && data[4] && data[5]) {
          markersData.push({
            id: data[0],
            name: data[1],
            coordinates: [
              parseFloat(data[4].replace(/"/g, '')),
              parseFloat(data[5].replace(/"/g, ''))
            ]
          });
        }
      });
      
      setMarkers(markersData);
    };

    fetchData().catch(console.error);
  }, []);

  // Initialize map and add markers
  useEffect(() => {
    if (!mapContainer.current) return;

    // Create map instance
    const map = L.map(mapContainer.current, {
      center: [43.7, -79.42],
      zoom: 13,
      zoomControl: true,
      dragging: true,
      scrollWheelZoom: true,
      doubleClickZoom: true,
      boxZoom: true,
      keyboard: true,
      touchZoom: true,
    });

    // Add zoom control
    L.control.zoom({
      position: 'topright'
    }).addTo(map);

    // Add tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 19,
      minZoom: 1,
      tileSize: 256,
      zoomOffset: 0,
      detectRetina: true
    }).addTo(map);

    // Add markers to the map
    markers.forEach(marker => {
      L.marker(marker.coordinates, { icon: customIcon })
        .bindPopup(`
          <div class="custom-popup">
            <h3 class="popup-title">${marker.name}</h3>
            <p class="popup-text">ID: ${marker.id}</p>
            <p class="popup-text">Location: ${marker.coordinates[0]}, ${marker.coordinates[1]}</p>
          </div>
        `)
        .addTo(map);
    });

    // Fit bounds if we have markers
    if (markers.length > 0) {
      const bounds = L.latLngBounds(markers.map(marker => marker.coordinates));
      map.fitBounds(bounds, { padding: [50, 50] });
    }

    setTimeout(() => {
      map.invalidateSize();
    }, 100);

    // Cleanup
    return () => {
      map.remove();
    };
  }, [markers]);

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div
        ref={mapContainer}
        className="w-[500px] h-[500px] relative z-0"
        style={{
          border: '1px solid #ccc',
          backgroundColor: '#f8f8f8'
        }}
      />
      <style jsx>{`
        .custom-marker {
          background: transparent;
          border: none;
        }
        
        .marker-container {
          width: 30px;
          height: 30px;
          position: relative;
        }
        
        .pin {
          width: 30px;
          height: 30px;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background: #ef4444;
          border: 2px solid #fff;
          border-radius: 50% 50% 50% 0;
          transform-origin: 0% 100%;
          transform: translate(-50%, -50%) rotate(-45deg);
          box-shadow: 0 2px 4px rgba(0,0,0,0.3);
          cursor: pointer;
          transition: all 0.2s ease;
        }
        
        .pin:hover {
          background: #dc2626;
          transform: translate(-50%, -50%) rotate(-45deg) scale(1.1);
        }
        
        .custom-popup {
          padding: 12px;
        }
        
        .popup-title {
          font-weight: bold;
          margin-bottom: 8px;
        }
        
        .popup-text {
          font-size: 14px;
          color: #666;
          margin: 4px 0;
        }
      `}</style>
    </div>
  );
};

export default MapComponent;