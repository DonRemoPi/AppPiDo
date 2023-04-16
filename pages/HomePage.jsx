import React from 'react';
import Head from 'next/head';
import { Container, Typography, Grid } from '@mui/material';
import MainLayout from '../Layouts/MainLayout/MainLayout';
import { CardMenu } from '../components/CardMenu';
import { cardMenuData } from '../data/cardMenuData'


const HomePage = () => {

  return (
    <>
      <Head>
        <title>Pizzería Don Remolo | Home </title>
      </Head>
      <MainLayout title='Home Page | Don Remolo'>
        <Container
            maxWidth= 'lg'
          sx={{
              minHeight: '56vh',  
              height: 'auto',        
              justifyContent: 'center',
              alignItems: 'center',
          }}
        >
          <Typography
            variant='h4'
            sx={{
              marginBottom: '50px',   
              marginTop: '20px',  
              color: '#E74423',              
              fontFamily: 'var(--font-prin)',
              fontWeight: '700'
            }}
         >
          MENÚ
          </Typography>   
            
          <Grid container                                   
              spacing={4}
            sx= {{  
              '&:hover': {
                color: '#F1F0DE'
              } 
            }}
          >

           {
            cardMenuData.map( ({ nameProduct, cardImage }) => {
              return (
                <Grid 
                  xs={12}
                  sm={6}
                  lg={3}
                item key={ nameProduct } >             
                  <CardMenu 
                    nameProduct = { nameProduct }
                    cardImage = { cardImage }
                  />
                </Grid>                  
              )
            })
           } 
          </Grid>
        </Container>
      </MainLayout>        
    </>
  );
}

export { HomePage };   