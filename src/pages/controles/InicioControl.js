import React from 'react';

function InicioControl({ onClick }) {
  const handleClick = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/controlesplc/inicio/control`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ estado: 'ACTIVO' }),
      });
      if (!response.ok) {
        throw new Error('Error al activar el control');
      }
    } catch (error) {
      console.error(error.message);
    }
    onClick && onClick();
  };

  return <button onClick={handleClick}>Inicio</button>;
}

export default InicioControl;