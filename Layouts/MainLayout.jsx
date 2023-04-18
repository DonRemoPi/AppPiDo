import Head from 'next/head'
import { Header, Footer, Sidebar } from '../components'
import { Box } from '@mui/material'


export default function MainLayout(props) {
  const {  children, title } = props
  return (
    <Box    
      sx={{
      flexGrow: 1,  
      minHeight: '100vh',
      height: '100vh',
      }}
    >
    <Head>
      <title>{ title }</title>
    </Head>  
    <Header />
    <Sidebar />

    <Box
      sx={{
        pt: '30px',
        pb: '100px' 
    }}
    >
      { children }
    </Box>

    <Footer />

    </Box>
  )
}