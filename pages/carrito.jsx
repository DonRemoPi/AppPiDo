import { useContext } from "react";
import { CartContext } from '../context'
import { Box, Container, Stack, Typography } from "@mui/material"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MainLayout from "../Layouts/MainLayout"
import { CardCar } from "../components/CardCar"
import { Telephone } from "../components/Telephone";
import { currency } from "../utils";


const CarritoPage = () => {


  const { cart, updateCartQuantity, updateCartSize, removeCartProduct, total } = useContext(CartContext)



  const onNewCardQuantity = (product, newQuantityValue) => {
    product.quantity = newQuantityValue;
    updateCartQuantity(product)
  }

  const onNewCardSize = (product, newSizeValue) => {
    product.size = newSizeValue;
    updateCartSize(product);
  };


  var i = 1
  return (
    <MainLayout title=' Carrito | Don Remolo' >
      <Container
        maxWidth='lg'
        sx={{
          minHeight: '56vh',
          height: 'auto',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 0,
          paddingBottom: '50%',
          '@media (min-width: 768px)': {
            minHeight: 0,
            paddingBottom: '10%'

          }
        }}
      >
        <Typography
          variant='h4'
          sx={{
            marginBottom: '.5rem',
            marginTop: '-1rem',
            color: '#E74423',
            fontFamily: 'var(--font-prin)',
            fontWeight: '700',
            textAlign: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            '@media (min-width: 600px)': {
              marginBottom: '1rem',
              marginTop: 0,
              fontSize: '2.8rem'
            }
          }}
        >
          CARRITO DE COMPRA
          <ShoppingCartIcon
            sx={{
              fontSize: '2.3rem',
              marginLeft: '1rem',
            }}
          />
        </Typography>

        {/* Mensaje de tipo de pago */}
        <Box
          sx={{
            display: 'flex',
            width: '100%',
            height: 'auto',
            padding: '1rem',
            marginBottom: '1rem',
            backgroundColor: 'var(--color-succes)',
            gap: '1rem',
          }}
        >

          {/* Franja decorativa izquierda  */}
          <Box
            sx={{
              width: '1rem',
              height: 'auto',
              backgroundColor: 'green',
              margin: '-1rem',
              marginRight: '1rem'
            }}
          >
          </Box>

          {/* Texto sobre el medio de pago */}
          <Typography
            sx={{
              color: 'black',
              fontSize: '1.2rem',
              lineHeight: '1.4rem',
              '@media(min-width: 1200px)': {
                fontSize: '1.4rem'
              }
            }}
          >
            Estimado cliente: Sólo aceptamos como medio de pago: efectivo y con servicio delivery bajo coordinación con nuestros repartidores vía whatsApp.
          </Typography>
        </Box>

        <Stack
          sx={{
            gap: '1rem',
            '@media (min-width: 600px)': {
              display: 'flex',
              flexDirection: 'column',
              gap: '2rem'
            },
          }}
        >
          {
            cart.map(product => {
              i = i + 1
              return (
                <CardCar
                  key={i}
                  product={product}
                  onNewCardQuantity={onNewCardQuantity}
                  onNewCardSize={(value) => onNewCardSize(product, value)}
                  onRemoveProductInCart={() => removeCartProduct(product)}
                />
              );
            })
          }
        </Stack>

        {/* Total a pagar  */}
        <Typography
          variant='h4'
          sx={{
            marginTop: '.5rem',
            textAlign: 'right',
            width: '100%',
            paddingRight: '13%',
            paddingLeft: 'auto',
            '@media (min-width: 420px)': {
              paddingRight: '12%',
              mt: '1rem',
            },
            '@media (min-width: 600px)': {
              paddingRight: '9%',
              mt: '2rem'
            },

            '@media (min-width: 768px)': {
              paddingRight: '10%',
            },

            '@media (min-width: 900px)': {
              paddingRight: '8%'
            },

          }}
        >
          Total: <strong>{currency.format(total)}</strong>
        </Typography>

        {/* Divisor */}
        <hr style={{ margin: '.5rem 0' }} />

        {/* Mensaje para introducir teléfono  */}
        <Typography
          sx={{
            fontSize: '1.2rem',
            textAlign: 'left',
            lineHeight: '1.2rem',
            '@media (min-width: 600px)': {
              fontSize: '1.8rem',
              mt: '2rem',
              lineHeight: '2rem'
            },
          }}
        >
          Por favor, ingrese su número de teléfono con el código de área correspondiente.
        </Typography>

        {/* Grupo de botones */}
        <Stack
          sx={{
            marginTop: '-1rem',
            '@media (min-width: 600px)': {
              mt: '2rem'
            },
          }}
        >
          {/* Entradas código de país y número telefónico */}
          <Telephone product={cart} />
        </Stack>

      </Container>


    </MainLayout>
  )
}

export default CarritoPage


