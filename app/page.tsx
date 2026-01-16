"use client"


import Home from '../pages/Landing';
import Preloader from '@/components/Preloader'
import React, {  useEffect, useState } from 'react'
import '@/app/globals.css'
import '@/app/components.css'
import ImageSec from '@/pages/ImageSec';
import {useLenis} from '@/components/useLenis'
// import Navbar from '@/components/Navbar';



const Page = () => {

  useLenis();

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
      
      
        
          
        
          <Home/>
          <ImageSec/>
        
     
    </div>
  )
}

export default Page