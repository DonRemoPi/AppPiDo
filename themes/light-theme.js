import { createTheme } from '@mui/material';
import { red } from '@mui/material/colors';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#F1F0DE'
    },
    primary: {
      main: '#018653'
    },
    secondary: {
      main: '#E74423'
    },
    error: {
      main: red.A400
    },
    drawer: {
      background: 'var(--color-primary)',
      marginTop: 'var(--header-height)',
      height: 'auto',
    },
  },
  
  components: {
    MuiAppBar: {
      defaultProps: {
        elevation: 0
      },
      styleOverrides:  {
        root: {
          backgroundColor: '#E74423'
        }
      }
    },
  }  
});

    