import Link from "next/link"
import Image from "next/image";
import { Box, Divider, Drawer, List, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material"
import LocalPizzaIcon from '@mui/icons-material/LocalPizza';
import HomeIcon from '@mui/icons-material/Home';
import empanadasIcon from '../assets/empanadas-icon.svg';
import bebidas from '../assets/bebidas.svg'
import postres from '../assets/postres.svg'
import { useContext } from "react";
import { UIContext } from "../context/ui";


const menuItems = ['Home', 'pizzas', 'empanadas', 'bebidas', 'postres']


export const Sidebar = () => {


  const { openSideBar, setOpenSideBar } = useContext(UIContext)

  const closeSideMenu = () => {
    setOpenSideBar(false)
  }

  return (
    <Drawer
      anchor="left"
      open={openSideBar}
      onClose={closeSideMenu}
      PaperProps={{
        sx: {
          backgroundColor: (theme) => theme.palette.drawer.background,
          marginTop: (theme) => theme.palette.drawer.marginTop,
          height: (theme) => theme.palette.drawer.height
        }
      }}
      sx={{ backdropFilter: 'blur(4px)' }}
    >
      <Box sx={{ width: 250 }}>


        <List>
          {
            menuItems.map((nameBtn) => (

              <div key={nameBtn}>

                <Link href={nameBtn} onClick={closeSideMenu}>
                  <ListItemButton >
                    <ListItemIcon>
                      {nameBtn === 'Home'
                        ? <HomeIcon sx={{ color: 'var(--color-white)', fontSize: '2.3rem', width: 'auto' }} /> :
                        nameBtn === 'pizzas'
                          ? <LocalPizzaIcon sx={{ color: 'var(--color-white)', fontSize: '2.3rem', width: 'auto' }} /> :
                          nameBtn === 'empanadas'
                            ? <Image width={23} height={21} src={empanadasIcon} alt='Icono de empanadas' className="width_auto" /> :
                            nameBtn === 'bebidas'
                              ? <Image width={13} height={17} src={bebidas} alt='Icono de bebidas' style={{ marginLeft: '4px', width: 'auto' }} /> :
                              nameBtn === 'postres'
                                ? <Image width={18} height={19} src={postres} alt='Icono de postres' /> : null
                      }
                    </ListItemIcon>

                    <ListItemText
                      primary={
                        <Typography variant="subtitle1" sx={{ textTransform: 'capitalize', fontWeight: 500, fontSize: 18, color: 'var(--color-white)' }}>
                          {nameBtn}
                        </Typography>
                      }
                    />
                  </ListItemButton>
                </Link>
                {nameBtn !== 'Postres' && <Divider />}
              </div>

            ))
          }
        </List>
      </Box>

    </Drawer>
  )
}

