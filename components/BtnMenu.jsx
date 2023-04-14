import Link from 'next/link';
import React from 'react'
import { Button, Typography } from '@mui/material'
import { LocalPizzaIcon } from '@mui/icons-material/LocalPizza';
import empanadasIcon from '../assets/empanadas-icon.svg'
import Image from 'next/image';

export const BtnMenu = ({nameBtn}) => {
  return (
    <Button
      border = 'none'
      sx={{
        width: '140px',
        height: '63px',
        backgroundColor: 'transparent',
        borderRadius: 0,
          '&:hover': {
            backgroundColor: '#DA3F22', 
          }     
      }}
    >
      { nameBtn === 'PIZZAS'
        ? <LocalPizzaIcon/> :
        nameBtn ===  'EMPANADAS'
        ? <Image width={23} height={21} src={ empanadasIcon } /> : null
      }

      <Link 
        href='/' 
        sx={{
          width: '100px',
          height: '100%',
        }}
      >                      
        <Typography variant='h6'                       
          
          sx={{
            fontFamily: 'var(--font-prin-cond)',
            textAlign: 'center',
            fontWeight: '700',
            letterSpacing: '1px',       
            color: 'var(--color-white)',
            ml: '5px'
          }}>{ nameBtn }
        </Typography>
       </Link>        
    </Button>
  )
}

export default BtnMenu;