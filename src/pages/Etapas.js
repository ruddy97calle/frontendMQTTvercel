import React from 'react';
import BandaTransportadoraControl from './etapas/BandaTransportadoraControl';
import BandaTransportadoraEstado from './etapas/BandaTransportadoraEstado';
import CepilladoControl from './etapas/CepilladoControl';
import CepilladoEstado from './etapas/CepilladoEstado';
import EnjabonadoControl from './etapas/EnjabonadoControl';
import EnjabonadoEstado from './etapas/EnjabonadoEstado';
import SecadoControl from './etapas/SecadoControl';
import SecadoEstado from './etapas/SecadoEstado';

function Etapas() {
  return (
    <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', height: '100vh' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ marginBottom: '20px' }}>
          <BandaTransportadoraControl />
          <BandaTransportadoraEstado />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <EnjabonadoControl />
          <EnjabonadoEstado />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <CepilladoControl />
          <CepilladoEstado />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <SecadoControl />
          <SecadoEstado />
        </div>
      </div>
    </div>
  );
}

export default Etapas;