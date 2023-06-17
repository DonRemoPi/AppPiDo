import Carousel from 'react-material-ui-carousel'
import { colabsData } from '@/data/colabsData'
import ColabCarousel from '../components/ColabCarousel'
import { Box } from '@mui/material'


export function CarouselFooter() {


    return (
        <Carousel

            autoPlay={true}
            animation="slide"
            fullHeightHover={false}

            navButtonsProps={{
                style: { backgroundColor: 'var(--color-primary)' }
            }}

            indicatorContainerProps={{
                style: {
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-evenly'
                }
            }}

            indicatorIconButtonProps={{
                style: {
                    backgroundColor: 'transparent',
                    border: '1px solid var(--color-primary)',
                    color: 'transparent'
                }
            }}


            activeIndicatorIconButtonProps={{
                style: {
                    backgroundColor: 'var(--color-primary)',
                    color: 'var(--color-primary)',
                }
            }}

            sx={{
                display: 'flex',
                flexDirection: 'column',
                width: '70vw',
                alignItems: 'center',
                justifyContent: 'center',
                marginLeft: '5%',
                marginRight: 0
            }}
        >

            {
                colabsData.map((colaborador, index) => {
                    return (
                        <Box
                            key={index}
                            sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                width: '100%',
                                '@media (min-width: 400px)': {
                                    paddingLeft: '5%'
                                },

                                '@media (min-width: 420px)': {
                                    paddingLeft: '10%'
                                },


                                '@media (min-width: 490px)': {
                                    paddingLeft: '20%'
                                }

                            }}
                        >

                            <ColabCarousel
                                rol={colaborador.rol}
                                specialty={colaborador.specialty}
                                name={colaborador.name}
                                linkedin={colaborador.linkedin}
                                email={colaborador.email}
                            />

                            {
                                colabsData.length > index + 1 && (
                                    <ColabCarousel
                                        rol={colabsData[index + 1]?.rol}
                                        specialty={colabsData[index + 1]?.specialty}
                                        name={colabsData[index + 1]?.name}
                                        linkedin={colabsData[index + 1]?.linkedin}
                                        email={colabsData[index + 1]?.email}
                                    />

                                )}
                        </Box>
                    )

                })}
        </Carousel>
    )
}




