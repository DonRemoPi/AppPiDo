import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Logo from '../../public/Logo.svg';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
// import { Home } from '../Home';

const LoadingBarr = () => {
  const [progresHome, setHome] = useState(false);
  const [progress, setProgress] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 10 : prevProgress + 10));
    }, 400);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Box
      sx={{
        height: '75%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        '@media (max-width: 600px)': {
          height: '50%',
        },
      }}
    >
      <div style={{ position: 'relative' }}>
        <Image src={Logo} alt='Logo' width={200} height={260} />
        <LinearProgress
  variant='determinate'
  value={progress}
  style={{
    position: 'absolute',
    backgroundColor: '#00000042',
    height: '15px',
    borderRadius: '10px',
    bottom: 0,
    left: 0,
    width: '100%',
  }}
  sx={{
    '& .MuiLinearProgress-bar': {
      backgroundColor: '#E74423',
    },
  }}
/>
  {/* <Home/> */}
      </div>
    </Box>
  );
};

export  {LoadingBarr};
