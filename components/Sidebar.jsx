import Link from "next/link"
import Image from "next/image";
import { Box, Divider, Drawer, List, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material"
import  LocalPizzaIcon from '@mui/icons-material/LocalPizza';
import HomeIcon from '@mui/icons-material/Home';
import empanadasIcon from '../assets/empanadas-icon.svg';
import bebidas from '../assets/bebidas.svg'
import postres from '../assets/postres.svg'


const menuItems = [ 'Home', 'Pizzas', 'Empanadas', 'Bebidas', 'Postres' ]

export const Sidebar = () => {
  return (
    <Drawer
      anchor="left"
      open={ false }
      onClose={ () => console.log('cerrando') }
    >
      <Box sx={{ width: 250 }}>

        <Box
          sx={{
            padding: '5px 10px'
          }}
        >
          <Typography variant='h4'>Menú</Typography>
        </Box>
        <List>
          {
            menuItems.map( ( nameBtn ) => (
              <>
              <Link href={`${nameBtn}Page`} >
                <ListItemButton  key={ nameBtn }>
                  <ListItemIcon>
                      { nameBtn === 'Home'
                        ? <HomeIcon sx={{ color: 'var(--color-white)'}} /> :      
                        nameBtn === 'Pizzas'
                        ? <LocalPizzaIcon sx={{ color: 'var(--color-white)'}} /> : 
                        nameBtn ===  'Empanadas'  
                        ? <Image width={23} height={21} src={ empanadasIcon } alt='Icono de empanadas' /> : 
                        nameBtn === 'Bebidas'
                        ? <Image width={13} height={17} src={ bebidas } alt='Icono de bebidas' /> : 
                        nameBtn === 'Postres'
                        ? <Image width={18} height={19} src={ postres } alt='Icono de postres' /> : null
                      }
                  </ListItemIcon>
                  <ListItemText primary={ nameBtn } />      
                </ListItemButton>
              </Link>
             { nameBtn !== 'Postres' && <Divider/> }
             </>

            ))
          }
        </List>
      </Box>

    </Drawer>
  )
}

