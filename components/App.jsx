import React from "react";
import Box from '@mui/material/Box';
import { Footer } from '../components/Footer';
import { LoadingBarr } from '../components/LoadingBarr';

const App = () => {
  return (
    <Box sx={{
      height: 'var(--header-height)',
      width: '100%',
      m: 0,
      p: 0,
      border: 'none',
      backgroundColor: '#F1F0DE'
    }}>
      <LoadingBarr />
      <Footer/>
    </Box>
  );
};

export { App };
