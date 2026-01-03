"use client"

import Preloader from '@/components/Preloader'
import React, {  useEffect, useState } from 'react'

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
      
      
        <section>
          Hell
        </section>
     
    </div>
  )
}

export default Page