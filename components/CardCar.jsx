import { useEffect, useState } from "react";
import Image from "next/image"
import { Box, Card, CardHeader, CardMedia, IconButton, Stack, Typography } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';
import Counter from "./Counter";
import SizeSelector from "./SizeSelector";
import { currency } from "../utils";

const CardCar = ({ product, onNewCardQuantity, onNewCardSize, onRemoveProductInCart }) => {

  const [subtotal, setSubtotal] = useState()

  const onSelectedSize = (event) => {
    const value = event.target.value;
    if (value === 'r' || value === 'm' || value === 'g') {
      onNewCardSize(value);
    }
  };


  useEffect(() => {
    const calculateSubtotal = () => {
      const { size, quantity, priceR, priceM, priceG } = product;
      let price = 0;
      if (size === 'r') {
        price = priceR;
      } else if (size === 'm') {
        price = priceM;
      } else {
        price = priceG;
      }
      return quantity * price;
    };

    const subtotalAct = calculateSubtotal();
    setSubtotal(subtotalAct);
  }, [product.size, product.quantity]);



  const nameProductActual = product.typeProduct === 'bebidas' ? product.nameProduct + ', ' + product.ingredientes : product.nameProduct;

  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: '10rem',
        bgcolor: 'var(--color-white)',
        borderRadius: '1.5rem',
        border: 'none',
        // boxShadow: '4px 4px 8px #a5a4a4',
        alignItems: 'center',
        color: '#E74423',
        padding: '1.5rem',
        paddingLeft: '0',
        paddingRight: '.5rem',
        width: '100%',
        '@media ( min-width: 600px )': {
          justifyContent: 'space-between',
          alignItems: 'center',
          borderRadius: '2.5rem',
          paddingRight: '1rem',
          height: '10rem',
        }
      }}
    >


      {/* Contenido de la tarjeta */}
      <Stack
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          paddingRight: '1rem',
          width: '100%',
          height: '100%',
          justifyContent: 'space-between',
          gap: '1rem',
          '@media (min-width: 600px)': {
            alignItems: 'center',
            flexDirection: 'row',
            marginTop: 0
          }
        }}
      >

        {/* Sección de Imagen del producto */}
        <Box
          sx={{
            width: '20%',
            marginLeft: '.5rem',
            '@media (min-width: 600px)': {
              display: 'flex',
              justifyContent: 'center',
              marginLeft: '1rem'
            },
            '@media (min-width: 1200px)': {
              width: '10%',
              marginLeft: '2rem'
            }
          }}
        >
          <CardMedia
            component="img"
            src={product.cardImage}
            alt='Imagen de producto'
            sx={{
              width: '100%',
              minWidth: '80px',
              height: 'auto',
              '@media (min-width: 600px)': {
                width: '95px',
                height: '95px',
              },
              '@media (min-width: 960px)': {
                width: '10vw',
                height: '10vw',
                maxWidth: '110px',
                maxHeight: '110px',
              },
            }}
          />
        </Box>


        {/* Sección de Información */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            padding: 0,
            height: '100%',
            width: '50%',
            ml: '1rem',
            '@media (min-width: 600px)': {
              width: '50%',
              flexDirection: 'row',
              alignItems: 'center',
            }
          }}
        >
          {/* Subsección sin selector */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              padding: 0,
              height: '100%',
              width: '100%',
              ml: '1rem',
              '@media (min-width: 600px)': {
                width: '70%'
              },
              '@media (min-width: 1200px)': {
                width: '40%'
              }

            }}
          >

            {/*  Titpo de producto */}
            <Typography
              variant="h5"
              sx={{
                color: 'black',
                fontWeight: '500',
                textTransform: 'capitalize'
              }}
            >
              {product.typeProduct}
            </Typography>

            {/* Nombre del producto  */}
            <CardHeader
              title={nameProductActual}
              disableTypography={true}
              sx={{
                fontFamily: 'var(--font-prin)',
                fontWeight: '400',
                fontSize: '1.2rem',
                textAlign: 'left',
                padding: 0,
                width: '100%',
                color: 'black',
                '@media (min-width: 600px)': {
                  fontSize: '1.4rem',
                  fontWeight: '400',
                  fontWeigth: '900',
                }
              }} />

          </Box>

          {/* Selector de tamaño */}
          {
            product.typeProduct === 'pizzas'
              ? (
                <SizeSelector
                  selectedSize={product.size}
                  onSelectedSize={onSelectedSize}
                />
              )
              : null
          }
        </Box>


        {/* Sección de cantidad y subtotal */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: '100%',
            '@media (min-width: 600px)': {
              flexDirection: 'row',
              alignItems: 'start',
              width: '30%',
              margin: 'auto',
              height: '100%',
              gap: '1rem'

            }

          }}
        >
          {/* Contador */}
          <Counter
            className="counter__smart"
            currentValue={product.quantity}
            updatedQuantity={(value) => onNewCardQuantity(product, value)}
            maxValue={10}
          />
          <Typography
            variant="h5"
            sx={{
              color: 'black',
              textAlign: 'right',
              marginRight: '.5rem',
              '@media (min-width: 600px)': {
                width: '20%',
                marginTop: '1rem'
              },
              '@media (min-width: 1200px)': {
                width: '50%',
              }

            }}>
            {currency.format(subtotal)}
          </Typography>
        </Box>


        {/* Botón de eliminar  */}
        <Box
          sx={{
            width: '8%',
            marginLeft: '-1rem',
            '@media (min-width: 600px)': {
              marginLeft: 0,
              width: '6%'
            }

          }}
        >
          <IconButton
            onClick={onRemoveProductInCart}
            sx={{
              color: 'var(--color-lightgray)'
            }}>

            <DeleteIcon
              sx={{
                fontSize: '2.8rem',
                '@media (min-width: 600px)': {
                  display: 'flex',
                  marginTop: '-3rem'
                },
                '&:hover': {
                  color: 'var(--color-accent)'
                },
              }}
            />
          </IconButton>
        </Box>
      </Stack>
    </Card>
  )
}

export { CardCar }