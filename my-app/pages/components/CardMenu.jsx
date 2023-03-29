import { Stack, Typography } from "@mui/material"
import Image from "next/image"
import pizza from "../assets/pizza.png"

const CardMenu = () => {
  return (
    <Stack
      sx={{
        height: '390px',
        width: '100%',
        backgroundColor: '#F1F0DE',
        borderRadius: '25px',
        border: '1px solid black',
        boxShadow: '5px 10px 15px #000000;',         
        alignItems: 'center',
        gap: '36px', 
        cursor: 'pointer',
        '&:hover': {
          backgroundColor: 'var(--color-accent)',
          color: 'black',
          textColor: '#000000'
       } 
      }}
    >
        <Typography variant='h4'                     
          sx={{
            fontFamily: 'var(--font-prin)',
            marginTop: '25px',
            color: '#E74423',
            
        }}>pizza
          </Typography>

        <Image width={219} height={219} src={pizza} alt='Imagen de producto'/>

    </Stack>
  )
}

export {CardMenu}

