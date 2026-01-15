"use client"


import Home from '../pages/Landing';
import Preloader from '@/components/Preloader'
import React, {  useEffect, useState } from 'react'
import '@/app/globals.css'
import '@/app/components.css'
import ImageSec from '@/pages/ImageSec';

const Page = () => {
  const [loadPreLoader, setloadPreLoader] = useState(false);

    useEffect(()=>{
      const hasPlayed = sessionStorage.getItem("preLoaderPlayed");

      if(!hasPlayed){
        requestAnimationFrame(() => {
        setloadPreLoader(true);
        
      });
      }
    
    },[])

  
  return (
    <div>
      {
        loadPreLoader && <Preloader onComplete={()=>setloadPreLoader(false)} />
      }
      
      
        <main>
          
         
          <Home/>
          <ImageSec/>
        </main>
     
    </div>
  )
}

export default Page