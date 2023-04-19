
import React from 'react';
import { ActiveLink } from '../components/ActiveLink'

export const BtnMenu = ({ nameBtn }) => {

  return (
    <>
    <ActiveLink 
        href={ nameBtn === 'Home' ? '/' : `/${nameBtn}Page` } 
        nameBtn={ nameBtn }
        className="bnt__active"
      >                           
       </ActiveLink> 

    </>          
  )
}

