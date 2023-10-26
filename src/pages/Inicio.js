import React from 'react';
import { Link } from 'react-router-dom';

function Inicio() {
  return (
    <div>
      <h1>SISTEMA AUTOMATIZADO DE LAVADO DE AUTOMÓVILES</h1>
      <Link to="/login" style={{ position: 'absolute', top: '10px', right: '10px' }}>
        CLIC AQUÍ PARA INICIAR SESIÓN
      </Link>
    </div>
  );
}

export default Inicio;
