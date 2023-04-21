import React, { useContext } from "react";
import { Box, Container, Typography, Stack, AppBar, Button, IconButton, Tooltip, tooltipClasses } from "@mui/material";
import { styled } from '@mui/material/styles';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';
import { BtnMenu } from '../components'
import Link from "next/link";
import { UIContext } from "../context/ui/UIContext";

const Header = () => {

  const { setOpenSideBar }  = useContext(UIContext);
   const openSideMenu = () => {
     setOpenSideBar(true)
   }
  const menuArr = [ 'Home', 'Pizzas', 'Empanadas', 'Bebidas', 'Postres' ];   


const BootstrapTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.common.black,
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.black,
    fontSize: '1.2rem'
  },
}));


  return(
    <AppBar 
      position= 'sticky'
      elavation= {0}
     sx={{    
        height: 'var(--header-height)',  
        color: 'var(--text-main-color)'
    }}>
      <Container
        maxWidth='lg'
         sx={{
          height:'100%',
          justifyContent:'space-between',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          fontFamily: 'var(--font-prin)',

         }} 
      >
      {/* Menú hamburguesa */}
      <IconButton 
        onClick={ openSideMenu }

        sx={{
          color: 'var(--color-white)',           
          '@media (min-width: 900px)': {
            display: 'none'
          }
        }}>
        < MenuIcon 
          sx={{
            fontSize: '3.2rem'
          }}
        />
      </IconButton>   

      {/* Logotipo de Don Remolo  */}
      <Link href='/'>
        <Typography
            variant='h4'
            component='h1'
            sx={{            
              alignSelf: 'center',
              fontFamily: 'var(--font-sec)',
              color:'var(--color-white)',
              mt: '.8rem'
            }}
          >
          DON REMOLO
        </Typography>
      </Link>
       
       {/* NavBar Grupo Menú desde home hasta postres */}
       <Stack
          sx={{
            display: 'none',
            height: '100%',
           '@media (min-width: 900px)': {
             display: 'flex', 
             alignItems: 'center'            
            }
          }}
        >
          <Stack 
            sx={{
              display: 'flex',
              flexDirection: 'row',
              height: '100%' 
            }}>
   
            {/* Aquí se renderizan los botones de la barra de menú */}
            {
              menuArr.map( option => {
                return(
                  <BtnMenu key={option} nameBtn= { option } />                         
                )})              
            }             
          </Stack>
       </Stack>

       {/* Botón de Carrito y contador */}
        <Stack
          sx= {{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            color: 'var(--color-white)',              

          }}
        >
         <Link href='/CarritoPage'>
          <BootstrapTooltip  title="Tu pedido" sx={{fontSize:'2.4rem'}}>
              <IconButton sx={{ color: 'var(--color-white)' }}>
                  < ShoppingCartIcon 
                  sx={{
                    fontSize: '2.3rem'
                  }}
                  />
                </IconButton>   
            </BootstrapTooltip >
         </Link> 
          <Box            
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'var(--color-primary)',
              height: '2.8rem',
              width: '2.8rem',
              borderRadius: '50%'                         
            }}
          >
            <Typography variant='h5'                     
              sx={{              
              fontFamily: 'var(--font-prin-cond)',
              fontWeight: 900
            }}>3
            </Typography>
          </Box>
        </Stack>
      </Container>             
    </AppBar>
  )
};

export { Header }


