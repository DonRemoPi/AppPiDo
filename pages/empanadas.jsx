import Head from 'next/head'
import { useRouter } from 'next/router'
import { Container, Grid, Typography } from '@mui/material'
import { SnackbarProvider } from 'notistack';
import MainLayout from '../Layouts/MainLayout'
import { CardProduct, FullScreenLoading } from '../components'
import { useProducts } from '../hooks/useProducts.js';


const EmpanadasPage = () => {

  const router = useRouter()
  const { asPath } = router
  const product = asPath?.replace(/^\//, '');

  const nameProduct = product;
  const nameActual = nameProduct;

  const { products, isLoading } = useProducts('/products?typeProduct=empanadas');

  if (isLoading) {
    return <FullScreenLoading />;
  }


  return (
    <>
      <SnackbarProvider maxSnack={3}>
        <Head>
          <title>{products.typeProduct}</title>
        </Head>
        <MainLayout title={'Don Remolo | Empanadas '}>
          <Container
            maxWidth='lg'
            sx={{
              overflow: 'auto',
              minHeight: '56vh',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 0,
              paddingBottom: '50%',
              '@media (min-width: 768px)': {
                minHeight: 0,
                paddingLeft: '10rem',
                paddingRight: '10rem',
                height: 'auto',
                paddingBottom: '10%'

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
                textAlign: 'center',
                '@media (min-width: 600px)': {
                  marginBottom: '2rem',
                  marginTop: '1rem',
                  fontSize: '2.8rem'
                }
              }}
            >
              {nameProduct?.toUpperCase()}
            </Typography>

            <Grid container
              spacing={8}
              sx={{
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
                isLoading

                  ? <FullScreenLoading />
                  : products.map(product => {

                    if (nameActual === product?.typeProduct) {

                      return (
                        <Grid
                          xs={12}
                          sm={6}
                          lg={4}
                          item
                          key={product.cardImage}
                        >
                          <CardProduct
                            product={product}
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
      </SnackbarProvider>

    </>
  )
}


export default EmpanadasPage



