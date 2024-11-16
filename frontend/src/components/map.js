import React, { useEffect, useRef } from 'react';
import L from 'leaflet';

const Map = ({ style }) => {  // Accept style as a prop
  const mapContainer = useRef(null);  // Reference for the map container

  useEffect(() => {
    // Initialize map
    const map = L.map(mapContainer.current, {
      center: [40.679404, -73.997512],  // Set default center (Carroll Gardens)
      zoom: 13,  // Set default zoom level
    });

    // Add OpenStreetMap tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);

    // Cleanup map on unmount
    return () => {
      map.remove();
    };
  }, []);

  return (
    <div 
      ref={mapContainer} 
      style={{
        height: '50px',  // Set a very small height for the map
        width: '50px',   // Set width as 50px to make it small
        ...style,        // Allow additional custom styles to override default ones
      }}
    />
  );
};

export default Map;
