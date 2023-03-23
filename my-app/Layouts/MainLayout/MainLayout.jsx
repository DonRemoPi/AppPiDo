import { Header, Footer } from '../../pages/containers'
import { Box } from '@mui/material'


export default function MainLayout(props) {
  const {  children } = props
  return (
    <Box 
      sx={{
      minHeight: '100vh',
      height: '100vh',
      display: 'flex',      
      flexDirection: 'column',
      width: '100%',
      backgroundColor: '#F1F0DE'
      }}
    >
      <Header />
      { children }
      <Footer />
    </Box>
  )
}