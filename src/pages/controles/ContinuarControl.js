import React from 'react';
import './Controles.css';
function ContinuarControl({ onClick }) {
  const handleClick = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/controlesplc/continuar/control`, {
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
  return (
    <div className="boton-controles">
      <button className="boton-control continuar" onClick={handleClick}>
        Continuar
      </button>
    </div>
  );
}
export default ContinuarControl;