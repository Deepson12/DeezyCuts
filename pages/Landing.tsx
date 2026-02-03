"use-client"


import ButtonUnd from '@/components/ButtonUnd'
import ParallaxImgs from '@/components/ParallaxImgs'
import React from 'react'

const Landing = () => {

  

  return (
    <section className='h-screen grid grid-cols-6 md:grid-cols-12 gap-10 px-md md:px-lg pb-lg bg-accent text-secondary'>
      <div className='relative col-span-6 md:col-span-12 w-full h-full overflow-hidden mt-(--navbar-height) img'>
        <ParallaxImgs
          src={"/img/otdoor (1).jpg"}
          alt='hero image'
        />
      </div>

      <div className=' relative col-span-6 md:col-span-12 self-end'>
        <ButtonUnd className='absolute right-0 md:bottom-0' title='book now'/>
        <p className='font-manrope text-xl'>Deezy Cuts®</p>
        <h2 className='title-text mt-5'>thinking boldly <br /> crafting visually</h2>
      </div>
    </section>
  )
}

export default Landing