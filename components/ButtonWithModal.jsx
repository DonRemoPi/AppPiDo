import { useContext, useRef, useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Paper from '@mui/material/Paper';
import Draggable from 'react-draggable';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';
import Image from 'next/image';
import question from '../public/question-fill.svg'
import { ChildModal } from './ChildModal';
import { useRouter } from 'next/router';
import { CartContext } from '../context';


function PaperComponent(props) {
  const draggableRef = useRef(null);

  return (

    <Draggable
      nodeRef={draggableRef}
      cancel={'[class*="MuiDialogContent-root"]'}
      disableScrollLock
    >
      <div ref={draggableRef}>
        <Paper {...props} />
      </div>
    </Draggable>
  );
}



export default function ButtonWithModal({ title, telephone, setTelephone, code, setCode, setCodeError, setTelError, product }) {

  const router = useRouter()

  const { removeAlllCartProducts } = useContext(CartContext)


  const [openModal, setOpenModal] = useState(false);
  const [openChild, setOpenChild] = useState(false);

  const onConfirm = () => {
    const phoneRegex = /^\d{10}$/

    if (title === 'CONFIRMAR') {

      if (product.length <= 0) {
        router.push('/')
      }

      if (code.length === 0) {
        setCodeError(true)
        return
      } else {
        setCodeError(false)
      }

      if (telephone.length === 0 || !phoneRegex.test(telephone)) {
        setTelError(true)
        return
      } else {
        setTelError(false)
      }

    }
    // sendToWhatsApp()

    document.body.style.overflow = "hidden";
    document.body.style.marginRight = '-1.7rem';
    setOpenModal(true);
    document.body.style.overflowY = "scroll";
  };

  // const getPrice = (size, priceR, priceM, priceG) => {
  //   let price = 0;
  //   if (size === 'r') {
  //     price = priceR;
  //   } else if (size === 'm') {
  //     price = priceM;
  //   } else {
  //     price = priceG;
  //   }
  //   return price;
  // };


  // const generarMensajeWhatsApp = () => {

  //   let totalOfOrder = 0
  //   let mensaje = 'Este es su pedido:\n';

  //   product.forEach((item, index) => {
  //     const { typeProduct, nameProduct, quantity, size, priceR, priceM, priceG } = item;

  //     let price = getPrice(size, priceR, priceM, priceG)

  //     mensaje += `Tipo de producto: ${typeProduct}\n`;
  //     mensaje += `Nombre del producto: ${nameProduct}\n`;
  //     mensaje += `Cantidad: ${quantity}\n`;
  //     totalOfOrder += quantity * price

  //     if (index !== product.length - 1) {
  //       mensaje += '\n'; // Agregar una línea en blanco entre cada producto
  //     }

  //   });
  //   mensaje += `Total: ${totalOfOrder}\n`;
  //   return mensaje;
  // };



  // const sendToWhatsApp = () => {

  //   let message = generarMensajeWhatsApp()

  //   const formattedPhoneNumber = telephone.replace(/\s/g, ''); // Elimina espacios en blanco del número de teléfono
  //   const whatsappLink = `https://wa.me/${code}${formattedPhoneNumber}?text=${encodeURIComponent(message)}`;

  //   window.open(whatsappLink);
  // };

  const handleOpenChild = () => {
    removeAlllCartProducts()
    setOpenChild(true);

  };


  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleCloseChild = () => {
    setTelephone('')
    setCode('')
    setOpenModal(false);
    setOpenChild(false);
    router.push('/')

  };



  return (
    <Box
      sx={{ width: '50%' }}>
      {/*  Botón */}
      <Button
        variant='contained'
        color='primary'
        size='medium'
        onClick={onConfirm}
        sx={{
          boxShadow: 'none',
          display: 'flex',
          fontSize: '1.8rem',
          height: '3.5rem',
          width: '100%',
          paddingTop: '1rem',
          borderRadius: '.8rem',
          whiteSpace: 'nowrap',
          background: title === 'CANCELAR' ? 'var(--color-lightgray)' : 'var(--color-primary)',
          color: title === 'CANCELAR' ? 'black' : 'var(--color-white)',
          '@media (min-width: 600px)': {
            height: '4rem'
          },
          '&:hover': {
            boxShadow: 'none',
            backgroundColor: title === 'CANCELAR' ? 'var(--color-gray)' : 'var(--color-primaryhover)'
          },
        }}
      >
        {title}
      </Button>

      {/*  Ventana emergente modal  */}
      <Dialog
        open={openModal}
        onClose={handleCloseModal}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
        disableScrollLock
        sx={{ backdropFilter: 'blur(4px)' }}
      >
        {/* Aquí va el ícono superior  */}
        <DialogTitle
          id='draggable-dialog-title'
          sx={{
            cursor: 'move',
            fontSize: '5rem',
            margin: '3rem auto 0 auto'
          }} >
          <Image width={50} height={51} src={question} alt='icono sigo de interrogación' />
        </DialogTitle>
        <DialogContent >
          <DialogContentText
            sx={{
              fontSize: '2.4rem',
              fontWeight: '900',
              width: '50%',
              textAlign: 'center',
              margin: 'auto',
            }}>
            {title === 'CANCELAR' ? '¿Está seguro que desea cancelar el pedido?' : '¿Está seguro que desea enviar el pedido?'}
          </DialogContentText>
        </DialogContent>
        <DialogActions
          sx={{
            display: 'flex',
            flexDirection: 'column-reverse',
            margin: 'auto'
          }}
        >
          <Button
            variant='contained'
            size='medium'
            onClick={handleCloseModal}
            sx={{
              boxShadow: 'none',
              display: 'flex',
              fontSize: '1.8rem',
              height: '4rem',
              width: '100%',
              paddingTop: '.5rem',
              borderRadius: '.8rem',
              whiteSpace: 'nowrap',
              backgroundColor: 'var(--color-lightgray)',
              color: 'black',
              marginBottom: '5rem',
              '&:hover': {
                boxShadow: 'none',
                backgroundColor: 'var(--color-gray)'
              },
            }}
          >
            Volver
          </Button>
          <Button
            variant='contained'
            size='medium'
            onClick={handleOpenChild}
            sx={{
              boxShadow: 'none',
              display: 'flex',
              fontSize: '1.8rem',
              height: '4rem',
              width: '100%',
              paddingTop: '.5rem',
              borderRadius: '.8rem',
              whiteSpace: 'nowrap',
              backgroundColor: 'var(--color-accent)',
              marginBottom: '1.5rem',
              '&:hover': {
                boxShadow: 'none',
                backgroundColor: 'var(--color-accenthover)'
              },
            }}
          >
            {`${title} PEDIDO`}
          </Button>
        </DialogActions>
      </Dialog>
      <ChildModal
        openChild={openChild}
        handleOpenChild={handleOpenChild}
        handleCloseChild={handleCloseChild}
        title={title}
      />

    </Box>
  );
}