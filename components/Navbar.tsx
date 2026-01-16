"use client"

import React from 'react'
import '@/app/globals.css'
import '@/app/components.css'
import UseAnimations from "react-useanimations";
import github from 'react-useanimations/lib/menu2';


  


const Navbar = () => {
  
  return (
    <nav className='fixed w-full grid grid-cols-2 items-center px-lg font-manrope uppercase z-20' style={{height: 'var(--navbar-height)', mixBlendMode: "difference"}} >
        <h2 className='justify-self-start font-bold hover-text text-accent' >DeezyCuts • &nbsp;<span className='font-normal'>Kathmandu</span></h2>

        <h2 className='justify-self-end font-bold'>

          <button aria-label='Navigation Open' className='cursor-pointer hover-text'>

          <UseAnimations animation={github} size={40} strokeColor='#E6E6DC' />
          </button>
        </h2>
        
    </nav>
  )
}

export default Navbar

