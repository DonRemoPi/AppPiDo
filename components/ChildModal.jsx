import Image from "next/image";
import { Box, Button, Modal, Typography } from "@mui/material";
import equis from '../public/x-circle-fill.svg'
import checked from '../public/checked-circle.svg'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: 'none',
  borderRadius: '2rem',
  boxShadow: 24,
  pt: 3,
  px: 4,
  pb: 3,
};


export function ChildModal( { openChild, handleCloseChild, title }) {

  return (
    <>      
      <Modal
        open={openChild}
        onClose={handleCloseChild}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 250 }}>
          <Box 
            sx={{
              display:'flex', 
              flexDirection: 'column',               
            }}    
          >
            {
              title === 'CANCELAR' 
              ? <Image width={50} height={51} src={ equis }  style={{ margin: '2rem auto 0 auto'}}/>
              : <Image width={50} height={51} src={ checked }  style={{ margin: '2rem auto 0 auto'}}/>
            }
          </Box>
          <Typography 
             sx={{
              fontSize: '2rem',
              fontWeight: '900',
              textAlign: 'center', 
              margin: 'auto',
              mt: '1rem'
            }}>
            { title === 'CANCELAR' ? 'Pedido cancelado' : 'Envío exitoso!!' }
          </Typography>
          <Button 
            variant='contained'
            size= 'medium'
            onClick={ handleCloseChild }
              sx={{
              boxShadow: 'none',
              display: 'flex',
              fontSize: '1.8rem',                   
              height: '4rem',
              width: '100%',
              paddingTop: '.5rem',
              borderRadius: '.8rem',
              whiteSpace: 'nowrap',   
              backgroundColor: title == 'CANCELAR' ? '#E1151A' : '#00875B',
              mt: '1rem',
              mb: '1.5rem',
                '&:hover': {
                    boxShadow: 'none',
                    backgroundColor: title == 'CANCELAR' ? 'var(--color-accenthover)' : '#00744d' 
                  },                       
            }}
          >
           OK
          </Button>
        </Box>
      </Modal>
    </>
  );
}