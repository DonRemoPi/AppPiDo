import React, { useState } from 'react';
import { Button, Box, Stack, Typography } from '@mui/material';



export default function Counter() {

 
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (value) => {
    setQuantity(value);
  };

  return (
    <Stack 
      direction='row' 
        sx={{
          width: '100%'
        }}
    >
            
      {/* - Reducir cantidad */}
      <Button 
        disabled={quantity === 1}
        onClick={() => handleQuantityChange(quantity - 1)}
        sx={{
          backgroundColor: 'var(--color-accent)',
          color: 'var(--color-white)',
          height: '2.5rem',
          minWidth: '2.5rem',
          width: '25%',
          padding: 0,
          fontSize: '1.8rem',
          borderTopRightRadius: 0,
          borderBottomRightRadius: 0, 
          border: '1px solid var(--color-accent)',
          '@media (min-width: 600px)': {
            height: '4rem',
            fontSize: '3rem'
          },
          
          '&:hover': {
            backgroundColor: '#c71e00',         
          }     
        }}
      >
        -
      </Button>
      <Box
        sx={{
          backgroundColor: 'var(--color-white)',
          minWidth: '3.5rem',
          width: '50%',
          height: '2.5rem',
          border: '1px solid var(--color-gray)',
          borderLeft: 'none',
          borderRight: 'none',
            '@media (min-width: 600px)': {
              height: '4rem'
            }
        }}
      >
        <Typography 
          variant='h5'
          sx={{
            textAlign: 'center',
            height: '100%', 
            lineHeight: '2.4rem',   
            color: 'var(--color-gray)',  
            '@media (min-width: 600px)': {
              fontSize: '1.8rem',
              lineHeight: '4rem',  
            },      
          }}
        >
          {quantity}
        </Typography>
      </Box>

      {/* + Aumentar cantidad */}
      <Button 
        disabled={quantity === 20} 
        onClick={ () => handleQuantityChange(quantity + 1) }
        sx={{
          backgroundColor: 'var(--color-accent)',
          color: 'var(--color-white)',
          height: '2.5rem',
          minWidth: '2.5rem',
          width: '25%',
          padding: 0,
          fontSize: '1.4rem',
          borderTopLeftRadius: 0,
          borderBottomLeftRadius: 0, 
          border: '1px solid var(--color-accent)',
          '@media (min-width: 600px)': {
            height: '4rem',
            fontSize: '2.4rem'
          },
            '&:hover': {
              backgroundColor: '#c71e00', 
             }     
        }}
      >
        +
      </Button>

    </Stack>
  )
}



           
            {/* <Button variant="contained" color="primary" onClick={handleNext} className={classes.button}>
              Comprar 
            </Button> */}