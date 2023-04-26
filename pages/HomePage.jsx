import React from 'react';
import Head from 'next/head';
import { Container, Typography, Grid } from '@mui/material';
import MainLayout from '../Layouts/MainLayout';
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
              display: 'flex',
              marginTop: '0',
              flexDirection: 'column',
              height: 'auto',
              justifyContent: 'center',
              alignItems: 'center',
              paddingBottom: '30%',
                '@media (min-width: 600px)': {
                  marginTop: '3%',
                  paddingBottom: '45%',              
                },
                '@media (min-width: 800px)': {
                  paddingLeft: '10rem',
                  paddingRight: '10rem'
                },
                '@media (min-width: 900px)': {
                  paddingBottom: '25%',              
                },
                '@media (min-width: 1200px)': {
                  paddingLeft: '0rem',
                  paddingRight: '0rem',
                  paddingBottom: '10%',              
                }                
          }}
        >
          <Typography
            variant='h4'
            sx={{
              marginBottom: '5%',
              marginTop: '0px',
              color: '#E74423',
              fontFamily: 'var(--font-prin)',
              fontWeight: '700',
              '@media (min-width: 600px)': {
                  fontSize:'3.2rem'
                },              
            }}
         >
          MENÚ
          </Typography>   
            
          <Grid container                                   
              spacing={3}
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
                item key={ nameProduct }
                >             
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

export default HomePage;   