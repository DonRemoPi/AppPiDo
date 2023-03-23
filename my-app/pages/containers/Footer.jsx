import { Stack, Typography } from "@mui/material";
import { logoSymbol } from '../assets/logo-small.png';
import Image from "next/image";

const Footer = () => {
   
  
  return(
    <Stack
       direction= 'row' 
       sx={{
        backgroundColor: '#E7E0C0',
        minHeight: '25%',
        height: 'auto',
        width: '100%',        
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'start'
        // '@media (max-width: 600px)': {
        //   height: '50%',}
    }}>
      <Stack>
          <Image width={92} height={75} src={logoSymbol} alt='Imagen de producto'/>
          <Typography variant='h5'                     
            sx={{
              fontFamily: 'var(--font-prin)',
              marginTop: '25px',
              color: '#E74423',            
            }}>pizzas
          </Typography>

      </Stack>
    </Stack>
  )
};

export {Footer}
