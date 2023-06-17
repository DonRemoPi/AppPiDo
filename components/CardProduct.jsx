import { useContext, useEffect, useState } from "react";
import Image from "next/image"
import { CartContext } from "@/context";
import { Box, Button, Card, CardHeader, Stack, Typography, useMediaQuery, Snackbar, Alert, CardMedia } from "@mui/material"
import Counter from "./Counter";
import SizeSelector from "./SizeSelector";
import ModalIngred from '../components/ModalIngred';
import { currency } from "../utils";



const CardProduct = ({ product }) => {


  const [tempCartProduct, setTempCartProduct] = useState({
    _id: product._id,
    typeProduct: product.typeProduct,
    nameProduct: product.nameProduct,
    cardImage: product.cardImage,
    ingredientes: product.ingredientes,
    size: 'r',
    price: 0,
    priceR: product.priceR,
    priceM: product.priceM,
    priceG: product.priceG,
    quantity: 1,
    subtotal: 0
  })

  const [subtotalInd, setSubtotalInd] = useState()


  const { addProductToCart } = useContext(CartContext)


  const [isImageLoaded, setIsImageLoaded] = useState(false)

  const isBigScreen = useMediaQuery('(min-width:600px)');

  const [stateSuccess, setStateSuccess] = useState({
    open: false,
    vertical: 'top',
    horizontal: 'right',
  });

  const { vertical, horizontal, open } = stateSuccess;


  const handleClose = () => {
    setStateSuccess({ ...stateSuccess, open: false });
  };


  const onSelectedSize = (event) => {

    setTempCartProduct(tempCartProduct => ({
      ...tempCartProduct,
      size: event.target.value
    }));
  };

  const updatedQuantity = (quantity) => {
    setTempCartProduct(tempCartProduct => ({
      ...tempCartProduct,
      quantity
    }));
  }

  // Agrega el producto al carrito 
  const onAddProduct = () => {

    if (!tempCartProduct.size) return
    addProductToCart(tempCartProduct);

    // Actiav la notificación de añadido con éxito
    setStateSuccess({ ...stateSuccess, open: true });
  }

  useEffect(() => {
    const calculateSubtotal = () => {
      const { size, quantity, priceR, priceM, priceG } = tempCartProduct;
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
    setSubtotalInd(subtotalAct);
  }, [tempCartProduct.size, tempCartProduct.quantity]);


  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: 'auto',
        bgcolor: 'var(--color-white)',
        borderRadius: '2.5rem',
        border: 'none',
        boxShadow: '4px 4px 8px #a5a4a4',
        alignItems: 'center',
        color: '#E74423',
        padding: '1.5rem',
        paddingLeft: '0',
        paddingRight: '.5rem',
        marginBottom: '-6.5rem',
        '@media (min-width: 600px)': {
          flexDirection: 'column',
          justifyContent: 'spaceBetween',
          height: 'auto',
          bgcolor: 'var(--color-white)',
          borderRadius: '2.5rem',
          border: 'none',
          boxShadow: '4px 4px 8px #a5a4a4',
          color: '#E74423',
          width: '100%',
          maxWidth: '300px',
          marginBottom: 0,
          padding: 0,
          paddingBottom: '3rem'
        }
      }}
    >


      {/* Retícula 3 columnas contenido de la tarjeta */}
      <Stack
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          paddingRight: '1rem',
          paddingLeft: '1rem',
          width: '100%',
          justifyContent: 'space-between',
          gap: '1rem',
          '@media (min-width: 600px)': {
            flexDirection: 'column',
            gap: 0,
            marginTop: 0
          }
        }}
      >

        {/* Sección de Imagen del producto */}
        <CardMedia
          component="img"
          src={product.cardImage}
          alt="Imagen de producto"
          width={196}
          height={196}
          onLoad={() => setIsImageLoaded(true)}
          sx={{ display: isImageLoaded ? 'block' : 'none', width: { xs: '70px', sm: '196px' }, height: 'auto' }}
        />

        {/* Sección de Información */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            padding: 0,
            alignItems: 'space-between',
            height: '100%',
            width: '50%',
            '@media (min-width: 600px)': {
              width: '100%'
            }

          }}
        >
          <CardHeader
            title={product.nameProduct.toUpperCase()}
            disableTypography={true}
            sx={{
              fontFamily: 'var(--font-prin)',
              fontWeight: '500',
              fontSize: '1.6rem',
              textAlign: 'left',
              padding: 0,
              width: '100%',
              '@media (min-width: 600px)': {
                fontSize: '2.4rem',
                fontWeight: '700',
                textAlign: 'center',
                fontWeigth: '900',
                marginTop: '-3rem',
                whiteSpace: 'nowrap'
              },
              '@media (min-width: 900px)': {
                fontSize: '2.8rem'
              }
            }} />

          {/* Precios de pizzas  */}
          <Typography
            variant="h6"
            component='span'
            sx={{
              color: 'black',
              '@media (min-width: 600px)': {
                width: '80%',
                textAlign: 'center',
                margin: 'auto',
                fontSize: '1.4rem'
              }
            }}
          >
            {
              product.typeProduct === 'pizzas' &&
                tempCartProduct.size === 'r' ? `Price: ${(currency.format(product.priceR)).toString()} ` :

                product.typeProduct === 'pizzas' &&
                  tempCartProduct.size === 'm' ? `Price: ${(currency.format(product.priceM)).toString()} ` :

                  product.typeProduct === 'pizzas' &&
                    tempCartProduct.size === 'g' ? `Price: ${(currency.format(product.priceG)).toString()} `
                    : `Price: ${(currency.format(product.priceR)).toString()} `

            }
          </Typography>


          {/* Ver ingredientes en Modal */}
          <ModalIngred product={product} />


          {/* Lista de ingredientes  */}
          <Box sx={{ minHeight: { sm: '6rem' } }}>
            <ul className="lista__ingredientes" >
              {
                product.ingredientes.map(ingrediente => (
                  <li key={ingrediente} style={{ fontSize: '1.3rem', color: 'black', marginBottom: 0, display: isImageLoaded ? 'block' : 'none' }}>{ingrediente}</li>
                ))
              }
            </ul>
          </Box>


          {/* Selector de tamaño */}
          {
            product.typeProduct === 'pizzas'
              ? <SizeSelector
                selectedSize={tempCartProduct.size}
                onSelectedSize={onSelectedSize}
              />
              : null
          }
        </Box>


        {/* Sección de cantidad y añadir */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: '100%',
            gap: '1rem',
            '@media (min-width: 600px)': {
              alignSelf: 'center',
              width: '80%',
              margin: 'auto',
              marginTop: '1rem',
              height: '100%'

            }

          }}
        >
          {/* ----- Contador ----- */}
          <Counter
            className="counter__smart"
            currentValue={tempCartProduct.quantity}
            updatedQuantity={updatedQuantity}
            maxValue={10}
          />
          <Typography
            variant="h5"
            sx={{
              color: 'black',
              textAlign: 'right',
              '@media (min-width: 600px)': {
                display: 'none'
              }
            }}>
            {currency.format(subtotalInd)}
          </Typography>

          {/* Botón Añadir */}
          <Button
            variant='contained'
            color='primary'
            size='medium'
            onClick={onAddProduct}
            sx={{
              fontSize: '1.2rem',
              height: '2.5rem',
              paddingTop: '.8rem',
              boxShadow: 'none',
              mt: '.7rem',
              '&:hover': {
                boxShadow: 'none',
              },
              '@media (min-width: 600px)': {
                display: 'flex',
                fontSize: '1.8rem',
                height: '4rem',
                paddingTop: '1rem',
                borderRadius: '.8rem',
                whiteSpace: 'nowrap',
                mt: 0,
              }
            }}
          >
            {isBigScreen ? 'Añadir al carrito' : 'Añadir'}
          </Button>

          <Snackbar
            anchorOrigin={{ vertical, horizontal }}
            autoHideDuration={1000}
            open={open}
            onClose={handleClose}
            key={vertical + horizontal}
          >
            <Alert onClose={handleClose} severity="success" sx={{ width: '100%', fontSize: '1.6rem', color: '#1E4620', backgroundColor: '#DDE5D5' }}>
              Añadido al carrito de manera exitosa
            </Alert>
          </Snackbar>
        </Box>

      </Stack>

    </Card>
  )
}

export { CardProduct }




