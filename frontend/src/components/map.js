import React, { useEffect, useRef } from 'react';
import L from 'leaflet';

const MapComponent = () => {
  const mapContainer = useRef(null);  // Ref to the map container

  useEffect(() => {
    // Initialize the map
    const map = L.map(mapContainer.current, {
      center: [43.7, -79.42],  // Latitude and Longitude for Toronto (or any coordinates you want)
      zoom: 13,                 // Default zoom level
    });

    // Add a tile layer (e.g., OpenStreetMap)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    // Optionally, you can add a zoom control or other map features here

    // Cleanup on unmount
    return () => {
      map.remove();
    };
  }, []);

  return (
    <div 
      ref={mapContainer} 
      style={{ height: '500px', width: '100%' }}  // Set map height and width
    />
  );
};

export default MapComponent;
