import { Typography, Container, Grid, Box, Stack } from "@mui/material";
import  logo from '../public/logo-completo.svg';
import Image from "next/image";
import { colabsData } from '../data/colabsData'
import Colaborador from '../components/Colaborador'
import { CarouselFooter } from '../components/CarouselFooter'


export const Footer = () => {
   
  
  return(
    <Box
      direction='column'
       sx={{
        position: 'fixed',       
        bottom: 0,
        backgroundColor: '#E7E0C0',
        minHeight: '25%',
        height: 'auto',
        width: '100%' 
    }}>
      <Container
        maxWidth='lg'  
        sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',        
        alignItems: 'center',        
        mt: '27px',
        }}
       >
      <Grid container
        sx={{
          alignItems: 'start',
          display: 'none',

            '@media (min-width: 600px)': {
                display: 'flex'
             } 
        }}
      >

        <Grid 
          item
          xs= { 4 }
          sm= { 3 }
          md= { 2 }
        >          
          {/* Logo pizzería */}     
          <Image width={101} height={93} src={logo} alt='Logo Don Remolo'/>
        </Grid> 
          

        {/* Grupo de colaboradores Información de colaborador */}
        <Grid item container
          xs= { 8 }
          sm= { 9 }
          md= { 10 }          
          spacing={1}
        >
          {/* Información de colaborador */}
          {
            colabsData.map(({ rol, specialty, name, linkedin, email }) => {
              return(
                <Colaborador 
                  key={name}
                  rol={ rol }
                  specialty= { specialty }
                  name= { name }
                  linkedin = { linkedin }
                  email = { email }
                />
              )
            })
          }
        </Grid>        
      </Grid>   


      {/* Carrusel de colaboradores*/}
        <Stack 
          direction= 'row'

          sx={{
            display: 'flex',
            alignItems: 'start', 
            '@media (min-width: 600px)': {
                display: 'none'
             }                        
          }}
        >
          {/* Logo pizzería */}     
          <Image width={95} height={87} src={logo} alt='Logo Don Remolo'/>

          {/* Componente carrusel */} 
          <CarouselFooter  />
      </Stack>    
    </Container>
    

    {/* Derechos reservados */}
    <Typography 
      variant="subtitle1" 
      align="center" 
      sx={{ 
        mt: '20px',
        mb: '20px',
          '@media (min-width: 600px)': {
              mt: '40px',
              mb: '20px',        
          } 
        }}>
        ©2023. Todos los derechos reservados
      </Typography>

  </Box>  
  )
}

