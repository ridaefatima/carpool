import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Cards from './components/Cards';
import Map from './pages/Map';
import Homepage from './pages/Homepage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/Map" element={<Map/>} />
      </Routes>
    </Router>
  );
}

export default App;
