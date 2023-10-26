import React, { useState } from 'react';

function BandaTransportadoraControl() {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = async () => {
    const nuevoEstado = isOn ? 'APAGADO' : 'ENCENDIDO';
    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/banda-transportadora/control`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ estado: nuevoEstado }),
      });
      if (!response.ok) {
        throw new Error('Error al cambiar el estado');
      }
      setIsOn(!isOn);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <button onClick={handleToggle}>
      {isOn ? 'ENCENDIDO' : 'APAGADO'}
    </button>
  );
}

export default BandaTransportadoraControl;