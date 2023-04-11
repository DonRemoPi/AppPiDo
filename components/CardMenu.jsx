import { Card, CardActionArea, CardContent, CardHeader } from "@mui/material"
import Image from "next/image"
import pizza from "../assets/pizza.png"

const CardMenu = () => {
  return (
    <CardActionArea>
      <Card
        sx={{
          height: '390px',        
          bgcolor: 'var(--color-bg)',
          borderRadius: '25px',
          border: '1px solid black',
          boxShadow: '5px 10px 15px #000000;',         
          alignItems: 'center',
          cursor: 'pointer',
          color: '#E74423',   
          transition: '0.2s',        
          '&:hover': {
            color: '#000000',
            backgroundColor: 'var(--color-accent)',
            transform: 'scale(1.05)'
        } 
        }}
      >

          <CardHeader 
            title='pizza' 
            disableTypography	= { true }                     
            sx={{
              fontFamily: 'var(--font-prin)',
              mt: '25px',
              fontSize: '36px',
              textAlign: 'center',
          }}/>
          <CardContent
            sx= {{
              display: 'flex',
              justifyContent: 'center'
            }}
          >
            <Image width={219} height={219} src={pizza} alt='Imagen de producto'/>
          </CardContent>
      </Card>
    </CardActionArea>
  )
}

export {CardMenu}

