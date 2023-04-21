import { useRouter } from 'next/router';
import Image from "next/image"
import { Card, CardActionArea, CardContent, CardHeader } from "@mui/material"
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';

const CardMenu = ({ nameProduct, cardImage }) => {
 
  const router = useRouter();

  const handleRoute = () => {
    router.push(`${nameProduct}Page`);
  }


  return (
    <CardActionArea onClick={handleRoute}>
      <Card
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems:'center',
          height: '10rem',        
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
            }, 
            '@media (min-width: 600px)': {
              flexDirection: 'column-reverse',
              justifyContent: 'start',
              height: '36rem',    
              bgcolor: 'var(--color-white)',
              borderRadius: '2.5rem',
              border: 'none',
              boxShadow: '4px 4px 8px #a5a4a4',         
              cursor: 'pointer',
              color: '#E74423',        
            }
      }}
      >

          <CardContent
            sx= {{             
              '@media (min-width: 600px)': {
                display: 'flex',
                justifyContent: 'center',
              }
            }}
          >
             {/* Imagen pequeña */}
            <Image 
              priority
              width={ 70 }
              height={ 70 }
              src={ cardImage } 
              alt='Imagen de producto'
              className="card__image-small"  
            />

            {/* Imagen grande */}
            <Image 
              priority
              width= { 196 }
              height= { 196 }
              src= { cardImage } 
              alt='Imagen de producto'  
              className="card__image-big"             
            />           
          </CardContent>

          <CardHeader 
            title= { nameProduct.toUpperCase() } 
            disableTypography	= { true }                     
            sx={{
              fontFamily: 'var(--font-prin)',
              fontWeight: '500',
              fontSize: '2.4rem',
              textAlign: 'left',
                '@media (min-width: 600px)': {
                  fontSize: '3.2rem',
                  fontWeight: '700',
                  mt: '2.5rem',
                  textAlign: 'center',
                  fontWeigth: '900'                  
                }       
          }}/>

          <ArrowForwardIosRoundedIcon 
            sx={{
              fontSize: '2.4rem', 
              marginRight: '2rem', 
              marginLeft: 'auto', 
              color: 'var(--color-lightgray)', 

                '@media (min-width: 600px)': {
                  display:'none'
                }

            }}/>

      </Card>
    </CardActionArea>
  )
}

export {CardMenu}

