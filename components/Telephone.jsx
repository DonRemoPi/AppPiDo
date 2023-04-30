import { Box, Button, FormControl, InputLabel, MenuItem, OutlinedInput, Select, TextField } from '@mui/material'
import { useState } from 'react';


export const Telephone = () => {
  const [code, setCode] = useState('');
  const [selected, setSelected] = useState(false);

  
  const handleChange = (event) => {
    setCode(event.target.value);
    setSelected(true);
  };


  return (
    <>
      {/* Selector del código de país */}
        <FormControl 
          fullWidth 
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '.5rem',                   
                '@media (min-width: 1200px)': {
                  width: '100%',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }                            
              }}              
        >

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            gap: '1rem',
            alignItems: 'center',    
            '@media (min-width: 1200px)': {
              width: '40%'
            }
          }}        
        >
          <InputLabel
            htmlFor="select-size"
            shrink={ selected }
            size="large"
              sx={{
                fontSize: '1.4rem',
                transition: 'opacity 0.2s ease-in-out', // Agregamos una transición de opacidad
                opacity: selected ? 0 : 1, // Hacemos que el label desaparezca cuando se selecciona una opción
                display: 'flex',
                mt: '1rem',
                '@media (min-width: 600px)': {
                  textAlign: 'left',                  
                  fontSize: '1.8rem',
                  mt: '-.4rem'
                }   
              }}
          >
            Código
          </InputLabel>
          <Select
            labelId="select-code"
            id="select-code"
            value={ code }
            onChange={ handleChange }
            sx={{
              height: '2.5rem',
              fontSize: '1.2rem',
              mt: '1.8rem',
              backgroundColor: 'white',
              width: '50%',
              height: '3.5rem',
              '@media (min-width: 600px)': {
                  width: '50%',
                  margin: 'auto',
                  mt: '.5rem',
                  height: '4rem',
                  fontSize: '1.8rem'
                }
            }}
          >
            <MenuItem value={10} sx={{fontSize:'1.2rem'}}>+54 Argentina </MenuItem>
            <MenuItem value={20} sx={{fontSize:'1.2rem'}}>+57 Colombia </MenuItem>
            <MenuItem value={30} sx={{fontSize:'1.2rem'}}>+52 México </MenuItem>
            <MenuItem value={40} sx={{fontSize:'1.2rem'}}>+58 Venezuela </MenuItem>

          </Select>
          
          {/* Input del teléfono  */}  
          <OutlinedInput 
            placeholder="Teléfono" 
              sx={{
                width: '50%',
                backgroundColor: 'white',
                height: '3.5rem',
                fontSize: '1.4rem',                
                marginTop: '1.6rem',
                '@media (min-width: 600px)': {
                  width: '50%',                
                  mt: '.5rem',
                  height: '4rem',
                  fontSize: '1.8rem'
                }
                
              }}          
          />
        </Box>  


        {/* Botones cancelar y enviar */}
        <Box
          sx= {{
            display: 'flex',
            flexDirection: 'row',
            gap: '1rem',
            '@media (min-width: 1200px)': {
              width: '50%'
            }
          }}
        >
       
          {/*  Botón cancelar  */}
          <Button 
            variant='contained'
            color='primary'
            size= 'medium'
            sx={{
              boxShadow: 'none',
              display: 'flex',
              fontSize: '1.8rem',                   
              height: '3.5rem',
              width: '50%',
              paddingTop: '1rem',
              borderRadius: '.8rem',
              whiteSpace: 'nowrap',       
              background: 'var(--color-lightgray)',    
              color: 'black',                           
                '&:hover': {
                  boxShadow: 'none',
                  backgroundColor: 'var(--color-gray)'
                },                     
            }}  
           >
            Cancelar
          </Button>

         {/*  Botón confirmar  */}
          <Button 
            variant='contained'
            color='primary'
            size= 'medium'
            sx={{
              boxShadow: 'none',
              display: 'flex',
              fontSize: '1.8rem',                   
              height: '3.5rem',
              width: '50%',
              paddingTop: '1rem',
              borderRadius: '.8rem',
              whiteSpace: 'nowrap',                                      
                '&:hover': {
                  boxShadow: 'none',
                },                     
            }}  
           >
            Confirmar
          </Button>
        </Box>
          
      </FormControl>          

  </> 
  )
}
