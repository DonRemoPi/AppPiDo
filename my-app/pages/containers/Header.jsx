import React from "react";
import { Box, Container, Typography, Stack } from "@mui/material";
import Image from "next/image";
import logoSmall from '../assets/logo-small.png'
import moto from '../assets/moto.svg'
import Link from "next/link";
import { display, textAlign } from "@mui/system";

const Header = () => {
   
  const menuArr = [ 'PIZZAS', 'EMPANADAS', 'BEBIDAS', 'POSTRES' ];   

  return(
    <Box sx={{
        backgroundColor: '#E74423',
        height: '60px',
        width: '100%',
        display: 'flex',
        justifyContent: 'spaceBetween',
        alignItems: 'center',
        alignSelf: 'stretch',
        color: 'var(--text-main-color)',
        '@media (max-width: 600px)': {
          height: '50%'
        }
    }}>
      <Container
        maxWidth='xl'
         sx={{
          height:'100%',
          justifyContent:'space-between',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          fontFamily: 'var(--font-prin)',

         }} 
      >
        <Image width={49} height={40} src={logoSmall} alt='Logo Header'/>
        <Stack 
          sx={{
            display: 'flex',
            flexDirection: 'row',
            gap: '50px'
          }}>
            {
              menuArr.map( option => {
                return(
                  <Link 
                    href='/' 
                    key='option'
                  >                      
                    <Typography variant='h6'                     
                      sx={{
                      fontFamily: 'var(--font-prin)',
                      fontWeight: '400',
                      letterSpacing: '1px',        
                        '&:hover': {
                          color: '#F1F0DE' 
                        }     
                    }}>{ option }
                     </Typography>
                  </Link>                                  
                )})              
            }             
        </Stack>
        <Stack
          sx= {{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: '10px'
          }}
        >
          <Image width={33} height={25} src={moto} alt='Logo moto de compras'/>
          <Typography variant='h6'                     
            sx={{
            fontFamily: 'var(--font-prin)',
            marginTop: '5px'            
          }}>25
          </Typography>
        </Stack>
      </Container>             
    </Box>
  )
};

export { Header }


