import React, { useState, useEffect, useCallback } from 'react';
import InicioControl from './controles/InicioControl';
import ParoControl from './controles/ParoControl';
import PausaControl from './controles/PausaControl';
import ContinuarControl from './controles/ContinuarControl';
import Indicador from './controles/Indicador';

function Controles() {
  const [color, setColor] = useState('red');
  const [contador, setContador] = useState(60);
  const [intervalId, setIntervalId] = useState(null);

  const handleInicio = () => {
    setColor('green');
    const id = setInterval(() => {
      setContador(prevContador => prevContador - 1);
    }, 1000);
    setIntervalId(id);
  };

  const handleParo = useCallback(() => {
    setColor('red');
    clearInterval(intervalId);
    setContador(60);
  }, [intervalId]);

  const handlePausa = () => {
    setColor('blue');
    clearInterval(intervalId);
  };

  const handleContinuar = () => {
    setColor('green');
    const id = setInterval(() => {
      setContador(prevContador => prevContador - 1);
    }, 1000);
    setIntervalId(id);
  };

  useEffect(() => {
    if (contador === 0) {
      handleParo();
    }
  }, [contador, handleParo]);

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'flex-start', 
      justifyContent: 'center', 
      height: '100%', 
      padding: '10px' 
    }}>
      <InicioControl onClick={handleInicio} />
      <ParoControl onClick={handleParo} />
      <PausaControl onClick={handlePausa} />
      <ContinuarControl onClick={handleContinuar} />
      <Indicador color={color} contador={contador} />
    </div>
  );
}

export default Controles;