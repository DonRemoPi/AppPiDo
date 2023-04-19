import '../styles/globlals.css'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { lightTheme, darkTheme } from '../themes'
import { UIProvider } from '../context/ui'


export default function App({ Component, pageProps }) {
  return (
    <UIProvider>
      <ThemeProvider theme={ lightTheme }>
        <CssBaseline/>
        <Component {...pageProps} />      
      </ThemeProvider>
    </UIProvider>
  )
}
