import { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { Box } from '@mui/material';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));


function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other} disableScrollLock>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function ModalIngred({ product }) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: { sm: 'none' } }}>
      <Button variant="text" onClick={handleClickOpen} sx={{ padding: 0, cursor: 'pointer', fontSize: '1.4rem', mt: '-2px', mb: '-2px' }}>
        Ingredientes
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        sx={{ backdropFilter: 'blur(4px)' }}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose} variant='h4'>
          Ingredientes
        </BootstrapDialogTitle>
        <Box sx={{ paddingRight: '5rem' }}>
          <ul>
            {
              product.ingredientes.map(ingrediente => (
                <li key={ingrediente} style={{ fontSize: '1.8rem', color: 'black', marginBottom: 0, display: 'block' }}>{ingrediente}</li>
              ))
            }
          </ul>
        </Box>
        <DialogActions>
        </DialogActions>
      </BootstrapDialog>
    </Box>
  );
}