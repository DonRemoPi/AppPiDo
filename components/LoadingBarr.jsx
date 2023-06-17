import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Logo from '../public/logo-completo-grande.svg';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import HomePage from '../pages/Home';

const LoadingBarr = () => {
  const [showLoader, setShowLoader] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const hasVisited = localStorage.getItem('hasVisited');

    if (hasVisited) {
      setShowLoader(false);
    }
  }, []);

  useEffect(() => {
    if (showLoader) {
      const duration = 4000; // Duración total de la animación en milisegundos
      const increment = 100 / (duration / 16); // Calcular el incremento de progreso por cada 16ms (aproximadamente 60 fps)
      let currentProgress = 0;
      let animationFrameId;

      const animate = () => {
        currentProgress += increment;
        setProgress(currentProgress);

        if (currentProgress < 100) {
          animationFrameId = requestAnimationFrame(animate);
        } else {
          setShowLoader(false);
          localStorage.setItem('hasVisited', true);
        }
      };

      animationFrameId = requestAnimationFrame(animate);

      return () => {
        cancelAnimationFrame(animationFrameId);
      };
    }
  }, [showLoader]);

  return (
    <>
      {showLoader ? (
        <Box
          sx={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '50%',
            '@media (min-width: 600px)': {
              height: '50%',
              marginTop: '15%',
            },
          }}
        >
          <div style={{ position: 'relative' }}>
            <Image src={Logo} alt='Logo' width={280} height={260} />

            <LinearProgress
              variant='determinate'
              value={progress}
              style={{
                position: 'absolute',
                backgroundColor: '#e64e4e42',
                height: '1.5rem',
                borderRadius: '1rem',
                bottom: '-2rem',
                left: '1rem',
                width: '100%',
              }}
              sx={{
                '& .MuiLinearProgress-bar': {
                  backgroundColor: '#E74423',
                },
              }}
            />
          </div>
        </Box>
      ) : (
        <>{!showLoader && <HomePage />}</>
      )}
    </>
  );
};

export { LoadingBarr };
