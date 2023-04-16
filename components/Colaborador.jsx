import React from 'react'
import { Grid, IconButton, Stack, Typography } from '@mui/material'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

const Colaborador = ({ rol, specialty, name, linkedin, email }) => {


  return (
      <Grid 
        item 
        xs={12}  
        sm={4}
        lg={2}
        >
        <Typography variant= 'subtitle1' sx={{fontWeight:'bold', marginBottom: '0px'}}>{ rol } </Typography>
        <Typography variant= 'subtitle1' sx={{fontWeight:'bold', marginBottom: '0px', marginTop: '-5px'}}>{ specialty } </Typography>
        <Typography variant= 'body2'sx={{ marginTop: '-5px', marginBottom: '10px'}}>{ name }</Typography>
        <Stack 
          direction= 'row' 
          spacing={1}
          sx={{
            alignItems: 'center'
          }}>

            {/* Iconos de redes sociales */}
            <Stack
              direction= 'row'
            >
              <IconButton edge='start' sx={{ marginTop: '-10px' }}>
                <a href={linkedin} target="_blank" ><LinkedInIcon sx={{color: '#0A66C2', fontSize: '32px' }}/></a>
              </IconButton> 
              
              <IconButton edge='start' sx={{ marginTop: '-10px' }}>
                 <a href={`mailto: ${email}`} ><EmailIcon sx={{color: 'var(--color-accent)',  fontSize: '32px'}}/></a>
              </IconButton> 

            </Stack> 
          </Stack>
        </Grid>
  )
}

export default Colaborador;