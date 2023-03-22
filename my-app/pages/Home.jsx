import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Home = () => {
  return (
    <Box sx={{
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <Typography variant="h2" component="h1">
        Welcome to my website!
      </Typography>
    </Box>
  );
}

export { Home };
