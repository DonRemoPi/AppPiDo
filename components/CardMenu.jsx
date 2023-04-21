import { useRouter } from 'next/router';
import { Card, CardActionArea, CardContent, CardHeader } from "@mui/material"
import Image from "next/image"

const CardMenu = ({ nameProduct, cardImage }) => {
 
  const router = useRouter();

  const handleRoute = () => {
    router.push(`${nameProduct}Page`);
  }


  return (
    <CardActionArea onClick={handleRoute}>
      <Card
        sx={{
          height: '36rem',        
          bgcolor: 'var(--color-white)',
          borderRadius: '2.5rem',
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
            title= { nameProduct.toUpperCase() } 
            disableTypography	= { true }                     
            sx={{
              fontFamily: 'var(--font-prin)',
              mt: '2.5rem',
              fontWeight: '900',
              fontSize: '3.2rem',
              textAlign: 'center',
          }}/>
          <CardContent
            sx= {{
              display: 'flex',
              justifyContent: 'center'
            }}
          >
            <Image priority width={196} height={196} src={cardImage} alt='Imagen de producto'/>
          </CardContent>
      </Card>
    </CardActionArea>
  )
}

export {CardMenu}

