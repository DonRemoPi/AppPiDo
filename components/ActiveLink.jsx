import { useRouter } from "next/router";
import Link from "next/link"
import Image from "next/image";
import { Button, Typography } from "@mui/material"
import  LocalPizzaIcon from '@mui/icons-material/LocalPizza';
import HomeIcon from '@mui/icons-material/Home';
import empanadasIcon from '../assets/empanadas-icon.svg';
import bebidas from '../assets/bebidas.svg'
import postres from '../assets/postres.svg'


const styleActive = {
  backgroundColor: 'var(--color-primary)'
}

export const ActiveLink = ({ nameBtn, href }) => {
  
  const { asPath } = useRouter();
  const spaceBtn = nameBtn === 'Home' ? '0px' : '5px';
  
  return (
    <Link 
     href={ href }
     style={ asPath === href ? styleActive : null }
    >        
    <Button
      border = 'none'
      height = '100%'
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: 'transparent',
        borderRadius: 0,
        pl: '15px',
        pr: '15px',
        gap: `${spaceBtn}`,
          '&:hover': {
            backgroundColor: '#DA3F22', 
          }     
      }}
    >
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

      <Typography variant='h6'                              
          sx={{
            fontFamily: 'var(--font-prin-cond)',
            textAlign: 'center',
            fontWeight: '700',
            letterSpacing: '1px',       
            color: 'var(--color-white)'            
          }}>
            { nameBtn !== 'Home' ? nameBtn : null }
        </Typography>
     </Button>
     </Link> 
    )
}
