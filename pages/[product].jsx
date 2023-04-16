import Head from 'next/head'
import { useRouter } from 'next/router'
import { Container, Grid, Typography } from '@mui/material'
import MainLayout from '../Layouts/MainLayout/MainLayout.jsx'
import { cardMenuData } from  '../data/cardMenuData.js'
import { CardMenu } from '../components/CardMenu.jsx'

const Product = () => {

 const router = useRouter()
 const { product } = router.query
  
 const nameProduct = product === 'PizzasPage' ? 'Pizzas' :
                     product === 'EmpanadasPage' ? 'Empanadas' :
                     product === 'BebidasPage' ? 'Bebidas' : 
                     product === 'PostresPage' ? 'Postres' : null 

  return (
       <>
      <Head>
        <title>{ product }</title>
      </Head>
      <MainLayout title={`${ product } Page | Don Remolo`}>
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
         { nameProduct?.toUpperCase() }
          </Typography>   
            
          {/* <Grid container                                   
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
          </Grid> */}
        </Container>
      </MainLayout>        
    </>
  )
}

export default Product

