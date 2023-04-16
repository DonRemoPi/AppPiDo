import Carousel from 'react-material-ui-carousel'
import { colabsData } from '@/data/colabsData'
import ColabCarousel from '../components/ColabCarousel'
import { Box } from '@mui/material'

export function CarouselFooter( ) {
   

   return (
        <Carousel
            sx= {{     
              width: '65vw'             
            }}
        >
      
            {                
              colabsData.map((colaborador, index) => {
                    return(
                        <Box 
                            key={index}
                            sx={{
                                display: 'flex',
                                flexDirection: 'row'
                            }}
                        >
                        <ColabCarousel
                        rol={ colaborador.rol }
                        specialty= { colaborador.specialty }
                        name= { colaborador.name }
                        linkedin = { colaborador.linkedin }
                        email = { colaborador.email }
                        />

                        {
                        colabsData.length > index + 1 && (
                            <ColabCarousel
                                rol={ colabsData[index + 1]?.rol }
                                specialty= { colabsData[index + 1]?.specialty }
                                name= { colabsData[index + 1]?.name }
                                linkedin = { colabsData[index + 1]?.linkedin }
                                email = { colabsData[index + 1]?.email }
                                />
                        )}
                        </Box>
                    )
                
             } )}
        </Carousel>
    )
}




// {colaboradores
//   .slice(0, colaboradores.length - (colaboradores.length % 2))
//   .map((colaborador, index) => {
//     if (index % 2 === 0) {
//       return (
//         <div className="row" key={index}>
//           <div className="col">
//             <p>Nombre: {colaborador.nombre}</p>
//             <p>Edad: {colaborador.edad}</p>
//             <p>Puesto: {colaborador.puesto}</p>
//           </div>
//           <div className="col">
//             <p>Nombre: {colaboradores[index + 1].nombre}</p>
//             <p>Edad: {colaboradores[index + 1].edad}</p>
//             <p>Puesto: {colaboradores[index + 1].puesto}</p>
//           </div>
//         </div>
//       );
//     }
//   })}