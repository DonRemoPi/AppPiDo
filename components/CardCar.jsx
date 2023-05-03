import { useState } from "react";
import Image from "next/image"
import { Box, Card, CardHeader, FormControl, IconButton, InputLabel, MenuItem, Select, Stack, Typography } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';
import Counter from "./Counter";

const CardCar = ({ typeProduct, nameProduct, cardImage, price, priceR, priceM, priceG, ingredientes } ) => {

  const [size, setSize] = useState('');
  const [selected, setSelected] = useState(false);

  const handleChange = (event) => {
    setSize(event.target.value);
    setSelected(true);
  };

  const nameProductActual = typeProduct === 'Bebidas' ? nameProduct + ', ' + ingredientes : nameProduct;

  return (
      <Card
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems:'center',
          height: '10rem',        
          bgcolor: 'var(--color-white)',
          borderRadius: '1.5rem',
          border: 'none',
          boxShadow: '4px 4px 8px #a5a4a4',         
          alignItems: 'center',
          color: '#E74423',             
          padding: '1.5rem', 
          paddingLeft: '0',
          paddingRight: '.5rem',   
          width: '100%',      
            '@media ( min-width: 600px )': {
              justifyContent: 'space-between',
              alignItems: 'center',
              borderRadius: '2.5rem',
              paddingRight: '1rem',                                  
              height: '10rem',
            }
      }}
      >

  
        {/* Ccontenido de la tarjeta */}
        <Stack    
          sx={{
            display: 'flex',                
            flexDirection: 'row',
            alignItems: 'center',
            paddingRight: '1rem',
            width: '100%',
            height: '100%',
            justifyContent: 'space-between',  
            gap: '1rem',
            '@media (min-width: 600px)': {
              alignItems: 'center',
              flexDirection: 'row',              
              marginTop: 0           
          }               
          }}
        >
                
            {/* Sección de Imagen del producto */}
            <Box
              sx={{
                width: '20%',
                  '@media (min-width: 600px)': {
                    display: 'flex',                                        
                    justifyContent: 'center',
                    marginLeft: '1rem'
                  },
                  '@media (min-width: 1200px)': {
                    width: '10%',
                    marginLeft: '1rem'
                  }

              }}
            >

              {/* Imagen pequeña */}
              <Image 
                priority
                width={ 80 }
                height={ 80 }
                src={ cardImage } 
                alt='Imagen de producto'
                className="card__image-small"

              />

              {/* Imagen grande */}
              <Image 
                priority
                width= { 120 }
                height= { 120 }
                src= { cardImage } 
                alt='Imagen de producto'  
                className="card__image-big"                 
              />                      
            </Box>
                      
            {/* Sección de Información */}
            <Box               
              sx={{
                display: 'flex',
                flexDirection: 'column',
                padding: 0,
                height: '100%',
                width:'50%',
                ml: '1rem',
                '@media (min-width: 600px)': {
                  width: '50%',
                  flexDirection: 'row',
                  alignItems: 'center',
                }
              }}
            >
            {/* Subsección sin selector */}
            <Box               
              sx={{
                display: 'flex',
                flexDirection: 'column',
                padding: 0,
                height: '100%',
                width:'100%',
                ml: '1rem',
                '@media (min-width: 600px)': {                  
                  width: '70%'
                },
                '@media (min-width: 1200px)': {
                  width: '40%'
                }
 
              }}
            >            

            {/*  Titpo de producto */}
            <Typography 
              variant="h5"
                sx={{
                  color: 'black',
                  fontWeight: '500',                
                }}
            >
              { typeProduct }
            </Typography> 

              {/* Nombre del producto  */}
              <CardHeader 
                title=  { nameProductActual }
                disableTypography	= { true }                     
                sx={{
                  fontFamily: 'var(--font-prin)',
                  fontWeight: '400',
                  fontSize: '1.2rem',
                  textAlign: 'left',  
                  padding: 0,
                  width: '100%',
                  color: 'black',                  
                  '@media (min-width: 600px)': {
                    fontSize: '1.4rem',
                    fontWeight: '400',                    
                    fontWeigth: '900',                        
                  }       
                }}/>                   

              </Box>

              {/* Selector de tamaño */}
              { 
                typeProduct === 'Pizzas' ?
                <FormControl 
                    fullWidth 
                    sx={{ 
                      display: 'flex', 
                      alignSelf: 'start',
                      width: '100%',
                      '@media (min-width: 1200px)': {
                        width: '50%'
                      }
                    }}
                >
                  <InputLabel
                    htmlFor="select-size"
                    shrink={selected}
                    size="large"
                      sx={{
                        fontSize: '1.4rem',
                        transition: 'opacity 0.2s ease-in-out', // Agregamos una transición de opacidad
                        opacity: selected ? 0 : 1, // Hacemos que el label desaparezca cuando se selecciona una opción
                        display: 'flex',
                        mt: '-.5rem',
                        '@media (min-width: 600px)': {
                          textAlign: 'left',
                          fontSize: '2rem',
                          mt: '-1rem'
                        }   
                      }}
                  >
                    Tamaño
                  </InputLabel>
                  <Select
                    className="select__icon select__icon-car"
                    id="select-size"
                    labelId="select-size"
                    value={ size }
                    onChange={ handleChange }
                    sx={{
                      height: '2.5rem',
                      fontSize: '1.2rem',
                      mt: '.8rem',
                      '@media (min-width: 600px)': {
                          width: '80%',                          
                          mt: 0,                          
                          height: '4rem',
                          fontSize: '1.8rem',
                          width: '100%',
                          justifySelf: 'left'
                        }
                    }}
                  >
                    <MenuItem className='MenuItem' value={10} sx={{fontSize:'1.2rem'}}>R - Regular</MenuItem>
                    <MenuItem className='MenuItem' value={20} sx={{fontSize:'1.2rem'}}>M - Mediana</MenuItem>
                    <MenuItem className='MenuItem' value={30} sx={{fontSize:'1.2rem'}}>G - Grande</MenuItem>
                  </Select>
                </FormControl>
                : null
              }
          </Box> 


          {/* Sección de cantidad y subtotal */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',                
              height: '100%',                 
                '@media (min-width: 600px)': {
                  flexDirection: 'row',
                  alignItems: 'start',
                  width: '30%',
                  margin: 'auto',                  
                  height: '100%',
                  gap: '1rem'
                  
                } 

            }}
          >
            {/* Contador */}
            <Counter className="counter__smart"/>   

            <Typography 
              variant="h5"
              sx={{
                color: 'black',
                textAlign: 'right',   
                marginRight: '.5rem',               
                    '@media (min-width: 600px)': {        
                      width: '20%',
                      marginTop: '1rem'                      
                    }, 
                    '@media (min-width: 1200px)': {        
                      width: '50%',                      
                    }
                    
              }}>
                $4.00
            </Typography>    
          </Box>


          {/* Botón de eliminar  */}
          <Box 
            sx={{ 
              width: '8%', 
              marginLeft: '-1rem',
              '@media (min-width: 600px)': {
                marginLeft: 0, 
                width: '6%'               
              }
             
            }}
          >            
            <IconButton sx={{ color: 'var(--color-lightgray)'
          
          }}>

                <DeleteIcon 
                  sx={{
                    fontSize: '2.8rem',
                      '@media (min-width: 600px)': {
                        display: 'flex',
                        marginTop: '-3rem'
                      },
                      '&:hover': {
                          color: 'var(--color-accent)'
                        },                                               
                  }}
                />
              </IconButton>   
          </Box>
        </Stack>          
      </Card>
  )
}

export { CardCar }