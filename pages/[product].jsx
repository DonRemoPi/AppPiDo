import Head from 'next/head'
import { useRouter } from 'next/router'
import { Container, Grid, Typography } from '@mui/material'
import MainLayout from '../Layouts/MainLayout.jsx'
import { productData } from '../data/productData.js'
import { CardProduct } from '../components/CardProduct.jsx'


const Product = () => {

 const router = useRouter()
 const { product } = router.query
  
 const nameProduct = product === 'PizzasPage' ? 'Pizzas' :
                     product === 'EmpanadasPage' ? 'Empanadas' :
                     product === 'BebidasPage' ? 'Bebidas' : 
                     product === 'PostresPage' ? 'Postres' : null 

  const nameActual = nameProduct;
  

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
              marginTop: 0,
                '@media (min-width: 768px)': {
                  paddingLeft: '10rem',
                  paddingRight: '10rem'              
                }
          }}
        >
          <Typography
            variant='h4'
            sx={{
              marginBottom: '1.5rem',   
              marginTop: 0,  
              color: '#E74423',              
              fontFamily: 'var(--font-prin)',
              fontWeight: '700',
              textAlign: 'center'
            }}
          >
            { nameProduct?.toUpperCase() }
          </Typography>   
            
          <Grid container                                   
              spacing={8}
            sx= {{          
                '@media (max-width: 600px)': {
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '2rem'
                },

              '&:hover': {
                color: '#F1F0DE'
              } 
            }}
          >

           {
            productData.map(({ typeProduct, nameProduct, cardImage, price, priceR, priceM, priceG, ingredientes }) => {
              if (nameActual === typeProduct) {
                return (
                  <Grid 
                    xs={12}
                    sm={6}
                    lg={4}  
                    item key={nameProduct}
                  >
                    <CardProduct
                      typeProduct={typeProduct}
                      nameProduct={nameProduct}
                      cardImage={cardImage}
                      price={price}
                      priceR={priceR}
                      priceM={priceM}
                      priceG={priceG}
                      ingredientes={ingredientes}
                    />
                  </Grid>
                );
              } else {
                return null;
              }
            })
           } 
          </Grid>
        </Container>
      </MainLayout>        
    </>
  )
}

export default Product

