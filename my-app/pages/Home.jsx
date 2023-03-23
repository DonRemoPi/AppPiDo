import React from 'react';
import Head from 'next/head';
import { Container, Typography, Stack } from '@mui/material';
import MainLayout from '../Layouts/MainLayout/MainLayout';
import { CardMenu } from './components/CardMenu';


const Home = () => {
  return (
    <>
      <Head>
        <title>Pizzeria Don Remolo | Home </title>
      </Head>
      <MainLayout>
        <Container
            maxWidth= 'xl'
          sx={{
              minHeight: '70vh',  
              height: 'auto',             
              justifyContent: 'center',
              alignItems: 'center',
          }}
        >
          <Typography
            variant='h4'
            sx={{
              color: '#E74423',
              marginTop: '28px',
              fontFamily: 'var(--font-prin)'
            }}
         >
          Menu
          </Typography>   
          <Stack
            direction= 'row'
            sx= {{
              marginTop: '59px',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(313px, 1fr))',
              gap: '50px',
              '&:hover': {
                color: '#F1F0DE'
              } 
            }}
          >
            <Stack                           
            >             
              <CardMenu />
            </Stack>

            <Stack                           
            >             
              <CardMenu />
            </Stack>
            <Stack                           
            >             
              <CardMenu />
            </Stack>
            <Stack                           
            >             
              <CardMenu />
            </Stack>


          </Stack>
        </Container>
      </MainLayout>  
    </>
  );
}

export { Home };



    // <Box sx={{
    //   height: '100vh',
    //   display: 'flex',
    //   justifyContent: 'center',
    //   alignItems: 'center',
    // }}>
    //   <Typography variant="h2" component="h1"
    //     sx={{
    //       color: black
    //     }}
    //   >
    //     Welcome to my website!
    //   </Typography>
    // </Box>


    //  <Grid 
    //   container
    //   spacing={2}
    //   sx= {{
    //     marginTop:'15px'
    //   }}
    // >
    //   <Grid item xs={6}>
    //     <Stack direction='row'spacing={2}>
    //       <LocationOn/>
    //         { location
    //           ? <a target='_blank' href={blog}><Typography>{location}</Typography></a>
    //           : <Typography>Not available</Typography> 
    //         }
    //       <Typography></Typography>
    //     </Stack>
    //   </Grid>
 

   