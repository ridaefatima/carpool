import React from 'react'
import { useState } from 'react';
import MapComponent from '../components/map';  // Import MapComponent from map.js

function Map() {
  // Set initial coordinates and zoom level
  const [center, setCenter] = useState([43.7, -79.42]); // Example: Toronto coordinates
  const [zoom, setZoom] = useState(13);  // Default zoom level

  return (
    <div>
      <h1>My Map</h1>
      {/* Render MapComponent with center and zoom props */}
      <MapComponent center={center} zoom={zoom} />
    </div>
  );
}

export default Map