"use-client"


import ButtonUnd from '@/components/ButtonUnd'
import Image from 'next/image'
import React from 'react'

const Landing = () => {

  

  return (
    <section className='h-dvh grid grid-cols-12 gap-10 px-lg pb-lg'>
      <div className='relative col-span-12 w-full h-130 overflow-hidden mt-(--navbar-height)'>
        <Image
          src={"/img/otdoor.jpg"}
          alt='hero image'
          fill
          sizes="100vw"
          quality={90}
          style={{ objectPosition: 'center 50%' }}
          className='object-cover'
          priority
        />
      </div>

      <div className=' relative col-span-12 self-end'>
        <ButtonUnd className='absolute right-0 bottom-0' title='book now'/>
        <p className='font-manrope text-xl'>Deezy Cuts®</p>
        <h2 className='title-text mt-5'>thinking boldly <br /> crafting visually</h2>
      </div>
    </section>
  )
}

export default Landing