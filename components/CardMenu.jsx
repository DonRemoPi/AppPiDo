import { Card, CardActionArea, CardContent, CardHeader } from "@mui/material"
import Image from "next/image"
import pizza from "../assets/pizza.png"

const CardMenu = () => {
  return (
    <CardActionArea>
      <Card
        sx={{
          height: '360px',        
          bgcolor: 'white',
          borderRadius: '25px',
          border: 'none',
          boxShadow: '4px 4px 8px #a5a4a4',         
          alignItems: 'center',
          cursor: 'pointer',
          color: '#E74423',   
          transition: '0.2s',        
          '&:hover': {
            transform: 'scale(1.03)'
        } 
        }}
      >

          <CardHeader 
            title='PIZZA' 
            disableTypography	= { true }                     
            sx={{
              fontFamily: 'var(--font-prin)',
              mt: '25px',
              fontWeight: '900',
              fontSize: '32px',
              textAlign: 'center',
          }}/>
          <CardContent
            sx= {{
              display: 'flex',
              justifyContent: 'center'
            }}
          >
            <Image width={196} height={229} src={pizza} alt='Imagen de producto'/>
          </CardContent>
      </Card>
    </CardActionArea>
  )
}

export {CardMenu}

