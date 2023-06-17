import { useRouter } from "next/router";
import Link from "next/link"
import Image from "next/image";
import { Button, Typography } from "@mui/material"
import LocalPizzaIcon from '@mui/icons-material/LocalPizza';
import HomeIcon from '@mui/icons-material/Home';
import empanadasIcon from '../assets/empanadas-icon.svg';
import bebidas from '../assets/bebidas.svg'
import postres from '../assets/postres.svg'


const styleActive = {
  backgroundColor: 'var(--color-primary)'
}

export const ActiveLink = ({ nameBtn, href }) => {

  const { asPath } = useRouter();
  const spaceBtn = nameBtn === 'Home' ? '0px' : '.5rem';

  return (
    <Link
      href={href}
      style={asPath === href ? styleActive : null}
    >
      <Button
        border='none'
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'row',
          backgroundColor: 'transparent',
          borderRadius: 0,
          pl: '1.5rem',
          pr: '1.5rem',
          gap: `${spaceBtn}`,
          '&:hover': {
            backgroundColor: '#DA3F22',
          }
        }}
      >
        {nameBtn === 'Home'
          ? <HomeIcon sx={{ color: 'var(--color-white)', fontSize: '2.3rem', width: 'auto' }} /> :
          nameBtn === 'pizzas'
            ? <LocalPizzaIcon sx={{ color: 'var(--color-white)', fontSize: '2.3rem', width: 'auto' }} /> :
            nameBtn === 'empanadas'
              ? <Image component='img' width='auto' height={21} src={empanadasIcon} alt='Icono de empanadas' /> :
              nameBtn === 'bebidas'
                ? <Image width={13} height={17} src={bebidas} alt='Icono de bebidas' /> :
                nameBtn === 'postres'
                  ? <Image width={18} height={19} src={postres} alt='Icono de postres' /> : null
        }

        <Typography variant='h5'
          sx={{
            fontFamily: 'var(--font-prin-cond)',
            textAlign: 'center',
            fontWeight: '700',
            letterSpacing: '1px',
            color: 'var(--color-white)'
          }}>
          {nameBtn !== 'Home' ? nameBtn : null}
        </Typography>
      </Button>
    </Link>
  )
}
