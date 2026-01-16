"use client"

import ParallaxImgs from '@/components/ParallaxImgs';
import React, { useEffect, useState } from 'react'
import Marquee from "react-fast-marquee";
const ImageSec = () => {
 
  


  return (
    <div className=' bg-secondary  mt-[clamp(5rem,10vw,10rem)] text-accent'>
      <div className='pt-[clamp(5rem,10vw,10rem)] '>

      <Marquee direction='left' speed={150}>
        <div className='flex font-manrope text-[clamp(1.5rem,8vw,9rem)] leading-[100%] uppercase'>
          <p>Good haircuts are heard before they’re seen•</p>
        </div>
      </Marquee>
      <Marquee direction='left' speed={200}>
        <div className='flex font-manrope text-[clamp(1.5rem,8vw,9rem)] leading-[100%] uppercase'>
          <p>Good haircuts are heard before they’re seen•</p>
        </div>
      </Marquee>
      </div>

      <div className=' grid grid-rows-2 grid-cols-2'>
        <div className='relative col-span-2 h-[clamp(16rem,50vw,60rem)] w-[clamp(12rem,37.5vw,45rem)] overflow-hidden -translate-y-[clamp(2rem,10vw,4rem)] justify-self-center'>

        <ParallaxImgs src='/img/pic-1.jpg' alt='barber'/>
        </div>

         <div className='relative  h-[clamp(15rem,45vw,55rem)] w-[clamp(11.25rem,33.75vw,41.25rem)] overflow-hidden -translate-y-[clamp(10rem,25vw,20rem)] justify-self-center'>

        <ParallaxImgs src='/img/pic-2.jpg' alt='barber'/>
        </div>

         <div className='relative  h-[clamp(15rem,45vw,55rem)] w-[clamp(11.25rem,33.75vw,41.25rem)] overflow-hidden -translate-y-[clamp(6rem,10vw,8rem)] '>

        <ParallaxImgs src='/img/otdoor.jpg' alt='barber'/>
        </div>
        
      </div>
    </div>
  )
}

export default ImageSec