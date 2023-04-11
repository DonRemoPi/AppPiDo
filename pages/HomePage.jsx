import React from 'react';
import Head from 'next/head';
import { Container, Typography, Stack, Grid } from '@mui/material';
import MainLayout from '../Layouts/MainLayout/MainLayout';
import { CardMenu } from '../components/CardMenu';


const HomePage = () => {
  return (
    <>
      <Head>
        <title>Pizzeria Don Remolo | Home </title>
      </Head>
      <MainLayout title='Home Page | Don Remolo'>
        <Container
            maxWidth= 'xl'
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
              marginBottom: '59px',     
              color: '#E74423',              
              fontFamily: 'var(--font-prin)'
            }}
         >
          Menu
          </Typography>   
          
          <Grid container spacing= { 5 }            
            sx= {{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(313px, 1fr))',
              gap: '50px',
              '&:hover': {
                color: '#F1F0DE'
              } 
            }}
          >
            <Grid item   >             
              <CardMenu />
            </Grid>
          
            <Grid item   >             
              <CardMenu />
            </Grid>
            
            <Grid item   >             
              <CardMenu />
            </Grid>
            
            <Grid item  >             
              <CardMenu />
            </Grid>                  

          </Grid>
        </Container>
      </MainLayout>  
    </>
  );
}

export { HomePage };   