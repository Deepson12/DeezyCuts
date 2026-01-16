"use client"


import Home from '../pages/Landing';
import Preloader from '@/components/Preloader'
import React, {  useEffect, useState } from 'react'
import '@/app/globals.css'
import '@/app/components.css'
import ImageSec from '@/pages/ImageSec';
import {useLenis} from '@/components/useLenis'
import OurCrafts from '@/pages/OurCrafts';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
// import Navbar from '@/components/Navbar';

gsap.registerPlugin(ScrollTrigger);

const Page = () => {

  useLenis();

  const [loadPreLoader, setloadPreLoader] = useState(false);

    useEffect(()=>{
      const hasPlayed = sessionStorage.getItem("preLoaderPlayed");

      if(!hasPlayed){
        requestAnimationFrame(() => {
        setloadPreLoader(true);
        
      });
      } else {
        // If preloader already played, refresh ScrollTrigger after layout is ready
        const refreshScrollTrigger = () => {
          // Wait for images and layout to settle
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              ScrollTrigger.refresh();
            });
          });
        };
        
        // Refresh on mount and after images load
        if (typeof window !== 'undefined') {
          // Refresh immediately and after window load
          refreshScrollTrigger();
          window.addEventListener('load', refreshScrollTrigger);
          
          // Also refresh after a short delay to catch any late-loading resources
          const timeoutId = setTimeout(refreshScrollTrigger, 300);
          
          return () => {
            window.removeEventListener('load', refreshScrollTrigger);
            clearTimeout(timeoutId);
          };
        }
      }
    
    },[])

   

  
  return (
    <div>
      {
        loadPreLoader && <Preloader onComplete={()=>{setloadPreLoader(false); ScrollTrigger.refresh();}} />
      }
      
      
        
          
        
          <Home/>
          <ImageSec/>
          <OurCrafts/>
          <section className='h-screen'>

          </section>
     
    </div>
  )
}

export default Page