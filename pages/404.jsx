import MainLayout from '@/Layouts/MainLayout'
import { Box, Typography } from '@mui/material'

const Page404 = () => {
  return (
    <MainLayout title='Page not found' pageDescription='No hay nada que mostrar'>
      <Box display='flex' justifyContent='center' alignItems='center' height='calc(100vh - 200px)'
        sx={{ flexDirection: { xs: 'column', sm: 'row' } }}
      >
        <Typography variant='h1' component='h2' fontSize={80} fontWeight={200} color='secondary'>404 |</Typography>
        <Typography variant='h4' marginLeft={2} color='secondary'>No encontramos el contenido</Typography>

      </Box>
    </MainLayout>
  )
}

export default Page404