import React, { useState, useEffect } from 'react';

function EnjabonadoEstado() {
  const [estado, setEstado] = useState(null);

  const consultarEstado = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/enjabonado/estado`);
      if (!response.ok) {
        throw new Error('Error al consultar el estado');
      }
      const data = await response.text();
      setEstado(data);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    const intervalId = setInterval(consultarEstado, 100);  
    return () => clearInterval(intervalId);  
  }, []);

  return (
    <div style={{
      width: '100px',
      height: '100px',
      backgroundColor: estado === 'ENCENDIDO' ? 'green' : 'red',
    }}>
      {estado}
    </div>
  );
}

export default EnjabonadoEstado;