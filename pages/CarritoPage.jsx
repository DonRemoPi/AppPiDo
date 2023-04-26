import { Container, Typography } from "@mui/material"
import MainLayout from "../Layouts/MainLayout"
import Counter from "../components/Counter"
import { CarouselFooter } from "../components/CarouselFooter"

const CarritoPage = () => {
  return (
     <MainLayout title=' Carrito | Don Remolo' >
        <Container
            maxWidth= 'lg'
          sx={{
              minHeight: '56vh',  
              height: 'auto',        
              justifyContent: 'center',
              alignItems: 'center',
          }}
        >
          <Typography
            variant='h4'
            sx={{
              marginBottom: '5rem',   
              marginTop: '2rem',  
              color: '#E74423',              
              fontFamily: 'var(--font-prin)',
              fontWeight: '700'
            }}
         >
         CARRITO DE COMPRA
          </Typography>   
          <div className="carousel__footer">
          </div>     
          <Counter />
         </Container>
      </MainLayout>
  )
}

export default CarritoPage


