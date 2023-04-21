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
        <Typography variant= 'h5' sx={{fontWeight:'bold', marginBottom: '0px'}}>{ rol } </Typography>
        <Typography variant= 'h5' sx={{fontWeight:'bold', marginBottom: '0px', marginTop: '-.5rem'}}>{ specialty } </Typography>
        <Typography variant= 'h6'sx={{ marginTop: '-5.rem', marginBottom: '1rem', fontWeight: '400' }}>{ name }</Typography>
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
              <IconButton edge='start' sx={{ marginTop: '-1rem' }}>
                <a href={linkedin} target="_blank" ><LinkedInIcon sx={{color: '#0A66C2', fontSize: '3.2rem' }}/></a>
              </IconButton> 
              
              <IconButton edge='start' sx={{ marginTop: '-1rem' }}>
                 <a href={`mailto: ${email}`} ><EmailIcon sx={{color: 'var(--color-accent)',  fontSize: '3.2rem'}}/></a>
              </IconButton> 

            </Stack> 
          </Stack>
        </Grid>
  )
}

export default Colaborador;