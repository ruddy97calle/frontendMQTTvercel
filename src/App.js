import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Inicio from './pages/Inicio';
import ControlPanel from './pages/ControlPanel'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/login" element={<Login />} />
        <Route path="/control-panel" element={<ControlPanel />} /> 
      </Routes>
    </Router>
  );
}

export default App;
