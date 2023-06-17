import { RemoveShoppingCartOutlined } from "@mui/icons-material"
import { Typography, Box } from "@mui/material"
import MainLayout from '../Layouts/MainLayout'
import Link from "next/link"


const EmptyCartPage = () => {
  return (
    <MainLayout title="Carrito Vacío">
      <Box display='flex' justifyContent='center' alignItems='center' height='calc(100vh - 200px)'
        sx={{ flexDirection: { xs: 'column', sm: 'row' } }}
      >
        <RemoveShoppingCartOutlined color='secondary' sx={{ fontSize: 100 }} />
        <Box display='flex' flexDirection='column' alignItems='center' >
          <Typography variant='h4' marginLeft={2} color='secondary'>Su carrito está vacío</Typography>
          <Link href="/">
            <Typography variant='h4' color='secondary' marginLeft={2}><strong>Regresar</strong></Typography>
          </Link>
        </Box>

      </Box>
    </MainLayout>
  )
}

export default EmptyCartPage