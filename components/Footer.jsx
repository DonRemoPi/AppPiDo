import { Stack, Typography, Container } from "@mui/material";
// import  logoSymbol from '../assets/logo.png';
import linkedin from '../assets/linkedin.svg'
import Image from "next/image";

const Footer = () => {
   
  
  return(
    <Stack
       direction= 'row'   
       sx={{
        position: 'absolute',
        top: '75vh',
        backgroundColor: '#E7E0C0',
        minHeight: '25%',
        height: 'auto',
        width: '100%',        
        justifyContent: 'space-between',
        alignSelf: 'start',
        // '@media (max-width: 600px)': {
        //   height: '50%',}
    }}>
      <Container
        maxWidth='lg'  
        sx={{
        width: '100%',        
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',        
        alignItems: 'center',
        }}
       >
      {/* Logo pizzería */}
      <Stack
        direction='column'
        sx={{
          alignItems: 'center'
        }}
      >
          {/* <Image width={92} height={75} src={logoSymbol} alt='Imagen de producto'/> */}
          <Typography variant='h5'                     
            sx={{
              fontFamily: 'var(--font-prin)',
              marginTop: '25px',
              color: '#E74423',    
              marginTop: '5px'        
            }}>pizzas
          </Typography>
      </Stack>

      {/* Inforación de colaborador */}
      <Stack
        direction='row'
        spacing = { 2 }
        sx={{
          flexWrap: 'wrap'
        }}
      >

        <Stack>
          <Typography variant= 'subtitle1' sx={{fontWeight:'bold', marginBottom: '0px'}}>Product Owner | Diseñadora UX/UI </Typography>
          <Typography variant= 'body2'sx={{ marginTop: '-5px', marginBottom: '10px'}}>Paola Rivero </Typography>
          <Stack 
            direction= 'row' 
            spacing={1}
            sx={{
              alignItems: 'center'
            }}>
            <Image width={28} height={28} src={linkedin} alt='Imagen de producto'/>
            <Stack>
                <Typography variant= 'body2' sx={{lineHeight:'14px', fontSize:'12px'}}>ing.paorivero@gmail.com </Typography>
                <Typography variant= 'body2'>(+58) 414 116 62 68</Typography>
              </Stack> 
          </Stack>
        </Stack>

        {/* Inforación de colaborador         */}
        <Stack>
          <Typography variant= 'subtitle1' sx={{fontWeight:'bold', marginBottom: '0px'}}>Product Owner | Diseñadora UX/UI </Typography>
          <Typography variant= 'body2'sx={{ marginTop: '-5px', marginBottom: '10px'}}>Paola Rivero </Typography>
          <Stack 
            direction= 'row' 
            spacing={1}
            sx={{
              alignItems: 'center'
            }}>
            <Image width={28} height={28} src={linkedin} alt='Imagen de producto'/>
            <Stack>
                <Typography variant= 'body2' sx={{lineHeight:'14px', fontSize:'12px'}}>ing.paorivero@gmail.com </Typography>
                <Typography variant= 'body2'>(+58) 414 116 62 68</Typography>
              </Stack> 
          </Stack>
        </Stack>

        {/* Inforación de colaborador         */}
        <Stack>
          <Typography variant= 'subtitle1' sx={{fontWeight:'bold', marginBottom: '0px'}}>Product Owner | Diseñadora UX/UI </Typography>
          <Typography variant= 'body2'sx={{ marginTop: '-5px', marginBottom: '10px'}}>Paola Rivero </Typography>
          <Stack 
            direction= 'row' 
            spacing={1}
            sx={{
              alignItems: 'center'
            }}>
            <Image width={28} height={28} src={linkedin} alt='Imagen de producto'/>
            <Stack>
                <Typography variant= 'body2' sx={{lineHeight:'14px', fontSize:'12px'}}>ing.paorivero@gmail.com </Typography>
                <Typography variant= 'body2'>(+58) 414 116 62 68</Typography>
              </Stack> 
          </Stack>
        </Stack>

        {/* Inforación de colaborador         */}
        <Stack>
          <Typography variant= 'subtitle1' sx={{fontWeight:'bold', marginBottom: '0px'}}>Product Owner | Diseñadora UX/UI </Typography>
          <Typography variant= 'body2'sx={{ marginTop: '-5px', marginBottom: '10px'}}>Paola Rivero </Typography>
          <Stack 
            direction= 'row' 
            spacing={1}
            sx={{
              alignItems: 'center'
            }}>
            <Image width={28} height={28} src={linkedin} alt='Imagen de producto'/>
            <Stack>
                <Typography variant= 'body2' sx={{lineHeight:'14px', fontSize:'12px'}}>ing.paorivero@gmail.com </Typography>
                <Typography variant= 'body2'>(+58) 414 116 62 68</Typography>
              </Stack> 
          </Stack>
        </Stack>

        {/* Inforación de colaborador         */}
        <Stack>
          <Typography variant= 'subtitle1' sx={{fontWeight:'bold', marginBottom: '0px'}}>Product Owner | Diseñadora UX/UI </Typography>
          <Typography variant= 'body2'sx={{ marginTop: '-5px', marginBottom: '10px'}}>Paola Rivero </Typography>
          <Stack 
            direction= 'row' 
            spacing={1}
            sx={{
              alignItems: 'center'
            }}>
            <Image width={28} height={28} src={linkedin} alt='Imagen de producto'/>
            <Stack>
                <Typography variant= 'body2' sx={{lineHeight:'14px', fontSize:'12px'}}>ing.paorivero@gmail.com </Typography>
                <Typography variant= 'body2'>(+58) 414 116 62 68</Typography>
              </Stack> 
          </Stack>
        </Stack>

      </Stack>
      
      </Container>
  </Stack>  
  )
}

export {Footer}
