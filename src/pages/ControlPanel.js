import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Controles from './Controles';
import EtapasEstado from './EtapasEstado';
import EtapasControl from './EtapasControl';
function ControlPanel() {
  const navigate = useNavigate();
  const videoRef = useRef(null);
  const [imageStates, setImageStates] = useState({
    banda: false,
    enjabonado: false,
    cepillado: false,
    secado: false,
  });
  useEffect(() => {
    const hasPassedLogin = sessionStorage.getItem('hasPassedLogin');
    if (hasPassedLogin !== 'true') navigate('/login');
  }, [navigate]);
  const [videoState, setVideoState] = useState({
    started: false,
    paused: false,
  });
  const handleInicioClick = () => {
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play();
        setVideoState((prevState) => ({ ...prevState, started: true }));
      }
    }, 800);
  };
  const handleParoClick = () => {
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    }, 1000);
  };
  const handlePausaClick = () => {
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.pause();
        setVideoState((prevState) => ({ ...prevState, paused: true }));
      }
    }, 800);
  };
  const handleContinuarClick = () => {
    setTimeout(() => {
      if (videoRef.current && videoState.started && videoState.paused) {
        videoRef.current.play();
        setVideoState((prevState) => ({ ...prevState, paused: false }));
      }
    }, 800);
  };     
  const handleToggleImage = (imageKey) => {
    setImageStates((prevStates) => ({
      ...prevStates,
      [imageKey]: !prevStates[imageKey],
    }));
  };
  return (
    <div style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
      <div style={{ position: 'relative', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {Object.keys(imageStates).map((key) => (
          imageStates[key] && (
            <div key={key} style={{ position: 'absolute', top: 0, left: 0, zIndex: 2, width: '100%', height: '100%' }}>
              <img
                src={`/${key}.png`}
                alt={key}
                style={{ width: '100%', height: '100%', objectFit: 'contain', backgroundColor: 'white' }}
              />
            </div>
          )
        ))}
        <EtapasControl 
                 handleToggleImage={handleToggleImage}
        /> 
        <div style={{  zIndex: 4 }}>
          <EtapasEstado />
        </div>
        <div style={{ width: '100%', height: '0', paddingBottom: '56.25%', position: 'relative', zIndex: 0, display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
          <video
            ref={videoRef}
            style={{ width: '100%', height: '100%', objectFit: 'contain', position: 'absolute', top: 0, left: 0 }}
          >
            <source src="/video1.mp4" type="video/mp4" />
            Tu navegador no soporta el elemento de video.
          </video>
        </div>
        <div style={{ position: 'absolute', top: '50%', left: 0, transform: 'translateY(-50%)', zIndex: 6 }}>
        <Controles
            onInicioClick={handleInicioClick}
            onParoClick={handleParoClick}
            onPausaClick={handlePausaClick}
            onContinuarClick={handleContinuarClick}
            videoState={videoState}
            setVideoState={setVideoState}
          />
        </div>
      </div>
    </div>
  );
}
export default ControlPanel;