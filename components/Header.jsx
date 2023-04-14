import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Box, Container, Typography, Stack, AppBar, Button, IconButton } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import BtnMenu from '../components/BtnMenu'

const Header = () => {
   
  const menuArr = [ 'PIZZAS', 'EMPANADAS', 'BEBIDAS', 'POSTRES' ];   

  return(
    <AppBar 
      position= 'sticky'
      elavation= {0}
     sx={{    
        height: '63px',  
        color: 'var(--text-main-color)',
        // '@media (max-width: 600px)': {
        //   height: '50%'
        // }
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
        <Typography
          variant='h5'
          sx={{            
            alignSelf: 'center',
            fontFamily: 'var(--font-sec)',
            color:'var(--color-white)'
          }}
        >
        DON REMOLO
       </Typography>
        <Stack 
          sx={{
            display: 'flex',
            flexDirection: 'row',
            // gap: '50px',
            
          }}>
            <Button>
              <IconButton>
                <HomeIcon     
                  sx={{
                    color: 'var(--color-white)'
                  }}/>
              </IconButton>
            </Button>
            
            {
              menuArr.map( option => {
                return(
                  <BtnMenu key={option} nameBtn= { option }/>                         
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
          <Typography variant='h6'                     
            sx={{
            fontFamily: 'var(--font-prin)',
            marginTop: '5px'            
          }}>25
          </Typography>
        </Stack>
      </Container>             
    </AppBar>
  )
};

export { Header }


