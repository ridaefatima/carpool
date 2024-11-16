import React from 'react';
import Map from '../components/map.js';  // Make sure the path is correct

const MapPage = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Map style={{ maxWidth: '100px', maxHeight: '50px' }} />
    </div>
  );
};

export default MapPage;
