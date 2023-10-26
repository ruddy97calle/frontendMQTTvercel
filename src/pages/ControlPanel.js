import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Controles from './Controles';
import Etapas from './Etapas';
import Background from './Background/Background'; 

function ControlPanel() {
  const navigate = useNavigate();

  useEffect(() => {
    const hasPassedLogin = sessionStorage.getItem('hasPassedLogin');
    if (hasPassedLogin !== 'true') {
      navigate('/login');
    }
  }, [navigate]);

  return (
    <div style={{ position: 'relative', height: '100vh' }}>
      <Background /> 
      <div style={{ display: 'flex', justifyContent: 'space-between', height: '100vh', position: 'absolute', top: 0, left: 0, right: 0 }}>
        <Controles />
        <Etapas />
      </div>
    </div>
  );
}

export default ControlPanel;
