import React from "react";
import Box from '@mui/material/Box';
import { Footer } from '../containers/Footer';
import { LoadingBarr } from '../containers/LoadingBarr';

const App = () => {
  return (
    <Box sx={{
      height: '100vh',
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
