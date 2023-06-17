import { useContext } from "react";
import Link from "next/link";
import { UIContext } from "../context/ui/UIContext";
import { Container, Typography, Stack, AppBar, IconButton, Tooltip, tooltipClasses, Badge } from "@mui/material";
import { styled } from '@mui/material/styles';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';
import { BtnMenu } from '../components'
import { CartContext } from "@/context";

const Header = () => {

  const { numberOfItems } = useContext(CartContext)

  const { setOpenSideBar } = useContext(UIContext);
  const openSideMenu = () => {
    setOpenSideBar(true)
  }
  const menuArr = ['Home', 'pizzas', 'empanadas', 'bebidas', 'postres'];


  const BootstrapTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} arrow classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
      color: theme.palette.common.black,
    },
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.black,
      fontSize: '1.2rem'
    },
  }));



  const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      top: 10,
      border: 'none',
      fontSize: '1.6rem',
    },
  }));

  function notificationsLabel(count) {
    if (count === 0) {
      return 'no notifications';
    }
    if (count > 99) {
      return 'more than 99 notifications';
    }
    return `${count} notifications`;
  }

  return (
    <AppBar
      position='sticky'
      elevation={0}
      sx={{
        height: 'var(--header-height)',
        color: 'var(--text-main-color)'
      }}>
      <Container
        maxWidth='lg'
        sx={{
          height: '100%',
          justifyContent: 'space-between',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          fontFamily: 'var(--font-prin)',

        }}
      >
        {/* Menú hamburguesa */}
        <IconButton
          onClick={openSideMenu}

          sx={{
            color: 'var(--color-white)',
            '@media (min-width: 900px)': {
              display: 'none'
            }
          }}>
          < MenuIcon
            sx={{
              fontSize: '3.2rem'
            }}
          />
        </IconButton>

        {/* Logotipo de Don Remolo  */}
        <Link href='/'>
          <Typography
            variant='h4'
            component='h1'
            sx={{
              alignSelf: 'center',
              fontFamily: 'var(--font-sec)',
              color: 'var(--color-white)',
              mt: '.8rem'
            }}
          >
            DON REMOLO
          </Typography>
        </Link>

        {/* NavBar Grupo Menú desde home hasta postres */}
        <Stack
          sx={{
            display: 'none',
            height: '100%',
            '@media (min-width: 900px)': {
              display: 'flex',
              alignItems: 'center'
            }
          }}
        >
          <Stack display='flex' flexDirection='row' height='100%' >
            {/* Aquí se renderizan los botones de la barra de menú */}
            {
              menuArr.map(option => {
                return (
                  <BtnMenu key={option} nameBtn={option} />
                )
              })
            }
          </Stack>
        </Stack>

        {/* Botón de Carrito y contador */}
        <Stack display='flex' flexDirection='row' alignItems='center' color=' var(--color-white)' sx={{ mr: '1.5rem' }} >
          {/* Contador o badge */}
          <Link href={numberOfItems <= 0 ? '/emptyCart' : '/carrito'}>
            <BootstrapTooltip title="Tu pedido" sx={{ fontSize: '2.4rem' }}>
              <IconButton aria-label={notificationsLabel(9)}>
                <StyledBadge
                  badgeContent={numberOfItems > 9 ? '+9' : numberOfItems}
                  color="primary"
                >
                  < ShoppingCartIcon
                    sx={{
                      fontSize: '2.3rem',
                      marginLeft: '-3.5rem',
                      color: 'white'
                    }}
                  />
                </StyledBadge>
              </IconButton>
            </BootstrapTooltip >
          </Link>
        </Stack>
      </Container>
    </AppBar>
  )
};

export { Header }


