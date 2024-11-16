import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const MapComponent = () => {
  const mapContainer = useRef(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    // Initialize map with zoom controls enabled
    const map = L.map(mapContainer.current, {
      center: [43.7, -79.42],
      zoom: 13,
      zoomControl: true,     // Enable zoom controls (+/- buttons)
      dragging: true,        // Enable dragging
      scrollWheelZoom: true, // Enable scroll wheel zoom
      doubleClickZoom: true, // Enable double click zoom
      boxZoom: true,         // Enable box zoom
      keyboard: true,        // Enable keyboard navigation
      touchZoom: true,       // Enable touch zoom
    });

    // Add zoom control to top-right corner
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

    // Force a map invalidation and redraw
    setTimeout(() => {
      map.invalidateSize();
    }, 100);

    return () => {
      map.remove();
    };
  }, []);

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