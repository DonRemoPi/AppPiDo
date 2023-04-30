import { useState } from "react";
import Image from "next/image"
import { Box, Button, Card, CardHeader, FormControl, InputLabel, Link, MenuItem, Select, Stack, Typography } from "@mui/material"
import Counter from "./Counter";

const CardProduct = ({ typeProduct, nameProduct, cardImage, price, priceR, priceM, priceG, ingredientes } ) => {

  const [size, setSize] = useState('');

  const [selected, setSelected] = useState(false);



  const handleChange = (event) => {
    setSize(event.target.value);
    setSelected(true);

  };

  return (
      <Card
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems:'center',
          height: 'auto',        
          bgcolor: 'var(--color-white)',
          borderRadius: '2.5rem',
          border: 'none',
          boxShadow: '4px 4px 8px #a5a4a4',         
          alignItems: 'center',
          color: '#E74423',             
          padding: '1.5rem', 
          paddingLeft: '0',
          paddingRight: '.5rem',         
          marginBottom: '-6.5rem',
            '@media (min-width: 600px)': {
              flexDirection: 'column',
              justifyContent: 'spaceBetween',
              height: 'auto',    
              bgcolor: 'var(--color-white)',
              borderRadius: '2.5rem',
              border: 'none',
              boxShadow: '4px 4px 8px #a5a4a4',         
              color: '#E74423',  
              width: '100%',   
              marginBottom: 0,
              padding: 0,      
              paddingBottom: '3rem'           
            }
      }}
      >

  
          {/* Retícula 3 columnas contenido de la tarjeta */}
          <Stack    
            sx={{
              display: 'flex',                
              flexDirection: 'row',
              alignItems: 'center',
              paddingRight: '1rem',
              paddingLeft: '1rem',
              width: '100%',
              justifyContent: 'space-between',  
              gap: '1rem',
              '@media (min-width: 600px)': {
                flexDirection: 'column',
                gap: 0,      
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
                    width: '100%',
                    marginTop: '-1rem',
                    justifyContent: 'center',
                  }                  
              }}
            >

              {/* Imagen pequeña */}
              <Image 
                priority
                width={ 70 }
                height={ 70 }
                src={ cardImage } 
                alt='Imagen de producto'
                className="card__image-small"  
              />

              {/* Imagen grande */}
              <Image 
                priority
                width= { 196 }
                height= { 196 }
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
              alignItems: 'space-between',
              height: '100%',
              width:'50%',
              '@media (min-width: 600px)': {
                width: '100%'
              }

            }}
          >
            <CardHeader 
                title= { nameProduct.toUpperCase() } 
                disableTypography	= { true }                     
                sx={{
                  fontFamily: 'var(--font-prin)',
                  fontWeight: '500',
                  fontSize: '1.6rem',
                  textAlign: 'left',  
                  padding: 0,
                  width: '100%',
                  '@media (min-width: 600px)': {
                    fontSize: '2.8rem',
                    fontWeight: '700',
                    textAlign: 'center',
                    fontWeigth: '900',    
                    marginTop: '-3rem'
                  }       
                }}/>

              {/* Precios de pizzas  */}              
              <Typography 
                variant="h6" 
                component= 'span' 
                sx={{ 
                  color: 'black',                                        
                    '@media (min-width: 600px)': {
                      width: '80%',
                      textAlign: 'center',
                      margin: 'auto',
                      fontSize: '1.4rem'
                    }    
                  }}
                >
                  {
                    typeProduct === 'Pizzas' 
                    ? `R-${priceR} M-${priceM} G-${priceG}`
                    : `Precio: ${price}`
                  }    
                  </Typography>  
                
              
              {/* Ver ingredientes */}
              <Link 
                color="primary"                   
                sx={{
                  fontSize: '1.2rem',
                  paddingLeft: 0,
                  marginTop: 0,
                  marginBottom: '.5rem',
                    '@media (min-width: 600px)': {
                      display: 'none',
                    }

                }}
              > 
                Ver ingredientes...
              </Link>  

              {/* Lista de ingredientes  */}
              <ul className="lista__ingredientes">
                {
                  ingredientes.map( ingrediente => (
                    <li style={{ fontSize: '1.3rem', color: 'black', marginBottom: 0 }}>{ingrediente}</li>

                  ))
                }  
              </ul>

              
              {/* Selector de tamaño */}
              { 
                typeProduct === 'Pizzas' ?
                <FormControl 
                    fullWidth 
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
                        mt: '-1.2rem',
                        '@media (min-width: 600px)': {
                          textAlign: 'center',
                          marginLeft: '3rem',
                          fontSize: '2rem',
                          mt: '-.4rem'
                        }   

                      }}
                  >
                    Tamaño
                  </InputLabel>
                  <Select
                    labelId="select-size"
                    id="select-size"
                    value={size}
                    onChange={ handleChange }
                    sx={{
                      height: '2.5rem',
                      fontSize: '1.2rem',
                      '@media (min-width: 600px)': {
                          width: '80%',
                          margin: 'auto',
                          marginTop: '1rem',
                          height: '3.2rem',
                          fontSize: '1.8rem'
                        }
                    }}
                  >
                    <MenuItem value={10} sx={{fontSize:'1.2rem'}}>R - Regular</MenuItem>
                    <MenuItem value={20} sx={{fontSize:'1.2rem'}}>M - Mediana</MenuItem>
                    <MenuItem value={30} sx={{fontSize:'1.2rem'}}>G - Grande</MenuItem>
                  </Select>
                </FormControl>
                : null
              }
          </Box> 


          {/* Sección de cantidad y añadir */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',                
              height: '100%', 
              gap: '1rem',
              '@media (min-width: 600px)': {
                alignSelf: 'center',
                width: '80%',
                margin: 'auto',
                marginTop: '1rem',
                height: '100%'
                
              } 

            }}
          >
            <Counter className="counter__smart"/>   
            <Typography 
              variant="h5"
              sx={{
                color: 'black',
                textAlign: 'right',                  
                    '@media (min-width: 600px)': {
                      display: 'none'
                    }                  
              }}>
                526
            </Typography>
              
            {/* Botón Añadir */}
              <Button 
                variant='contained'
                color='primary'
                size= 'medium'
                sx={{
                  fontSize: '1.2rem',                   
                  height: '2.5rem',  
                  paddingTop: '.8rem',
                  boxShadow: 'none',
                  '&:hover': {
                    boxShadow: 'none',
                  },                   
                  '@media (min-width: 600px)': {
                    display: 'none'
                  }                  
                }}  
              >
                Añadir
              </Button>

              {/*  Versión grande  */}
               <Button 
                variant='contained'
                color='primary'
                size= 'medium'
                sx={{
                  display: 'none',
                  boxShadow: 'none',
                  '&:hover': {
                    boxShadow: 'none',
                  }, 
                  '@media (min-width: 600px)': {
                    display: 'flex',
                    fontSize: '1.8rem',                   
                    height: '4rem',
                    paddingTop: '1rem',
                    borderRadius: '.8rem',
                    whiteSpace: 'nowrap'
                  }                  
                }}  
              >
                Añadir al carrito
              </Button>
              
          </Box>

          </Stack>
          
      </Card>
  )
}

export { CardProduct }