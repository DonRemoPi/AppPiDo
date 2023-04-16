
import React from 'react';
import { ActiveLink } from '../components/ActiveLink'

const BtnMenu = ({ nameBtn }) => {

  return (
    <>
    <ActiveLink 
        href={ nameBtn === 'Home' ? '/' : `/${nameBtn}Page` } 
        nameBtn={ nameBtn }
      >                           
       </ActiveLink> 

    </>          
  )
}

export default BtnMenu;