import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase-config'; // Adjust this import based on your firebase config file location

const MapComponent = () => {
  const mapContainer = useRef(null);
  const [markers, setMarkers] = useState([]);

  // Fetch data from Firebase
  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "parsed_csv_data"));
      const markersData = [];
      
      querySnapshot.forEach((doc) => {
        const data = doc.data().data;
        if (data && data[4] && data[5]) { // Check if coordinates exist
          markersData.push({
            id: data[0],
            name: data[1],
            coordinates: [
              parseFloat(data[4].replace('"', '').replace('"', '')), // Clean and parse lat
              parseFloat(data[5].replace('"', '').replace('"', ''))  // Clean and parse lng
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

    L.control.zoom({
      position: 'topright'
    }).addTo(map);

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
      L.marker(marker.coordinates)
        .bindPopup(`
          <div>
            <h3>${marker.name}</h3>
            <p>ID: ${marker.id}</p>
            <p>Location: ${marker.coordinates[0]}, ${marker.coordinates[1]}</p>
          </div>
        `)
        .addTo(map);
    });

    // If we have markers, fit the map bounds to show all markers
    if (markers.length > 0) {
      const bounds = L.latLngBounds(markers.map(marker => marker.coordinates));
      map.fitBounds(bounds, { padding: [50, 50] });
    }

    setTimeout(() => {
      map.invalidateSize();
    }, 100);

    return () => {
      map.remove();
    };
  }, [markers]); // Re-run when markers update

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
    </div>
  );
};

export default MapComponent;