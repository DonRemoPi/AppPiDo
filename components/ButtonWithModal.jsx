import { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Paper from '@mui/material/Paper';
import Draggable from 'react-draggable';
import Button from '@mui/material/Button';
import { Box, Modal, Typography } from '@mui/material';
import Image from 'next/image';
import question from '../public/question-fill.svg'
import { ChildModal } from './ChildModal';


function PaperComponent(props) {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
      disableScrollLock
    >
      <Paper {...props} />
    </Draggable>
  );
}



export default function ButtonWithModal({ title }) {

  const [openModal, setOpenModal] = useState(false);
  const [openChild, setOpenChild] = useState(false);


  const handleClickOpenModal = () => {
    document.body.style.overflow = "hidden";
    document.body.style.marginRight = '-1.7rem';
    setOpenModal(true);
    document.body.style.overflowY = "scroll";
  };

  const handleOpenChild = () => {
    document.body.style.overflow = "hidden";
    document.body.style.marginRight = '-1.7rem';
    setOpenChild(true);
  };


  const handleCloseModal = () => {
    setOpenModal(false); 
  };

  const handleCloseChild = () => {
    setOpenModal(false); 
    setOpenChild(false);
  };

   const handleOpenFinalCancelModal = () => {
    setOpenFinalCancelDialog(false);
  };


  return (
    <Box
      sx={{ width:'50%' }}>
      {/*  Botón */}
      <Button 
        variant='contained'
        color='primary'
        size= 'medium'
        onClick={ handleClickOpenModal }
        sx={{
          boxShadow: 'none',
          display: 'flex',
          fontSize: '1.8rem',                   
          height: '3.5rem',
          width: '100%',
          paddingTop: '1rem',
          borderRadius: '.8rem',
          whiteSpace: 'nowrap',       
          background:  title === 'CANCELAR' ? 'var(--color-lightgray)' : 'var(--color-primary)',    
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
       { title }
      </Button>    
      
      {/*  Ventana emergente modal  */}
      <Dialog
        open={ openModal }
        onClose={ handleCloseModal }
        PaperComponent={ PaperComponent }
        aria-labelledby="draggable-dialog-title"
      >
          {/* Aquí va el ícono superior  */}
        <DialogTitle 
          id='draggable-dialog-title'
          sx={{ 
            cursor: 'move', 
            fontSize: '5rem',            
            margin: '3rem auto 0 auto'           
        }} >
          <Image width={50} height={51} src={ question }/>
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
            { title === 'CANCELAR' ? '¿Está seguro que desea cancelar el pedido?' : '¿Está seguro que desea enviar el pedido?' }
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
            size= 'medium'
            onClick={ handleCloseModal }
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
            size= 'medium'
            onClick={ handleOpenChild }
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
            { `${title} PEDIDO` }
          </Button>
        </DialogActions>
      </Dialog>        
      <ChildModal
        openChild = { openChild }
        handleOpenChild = { handleOpenChild }
        handleCloseChild = { handleCloseChild }  
        title = { title } 
      />

    </Box>
  );
}