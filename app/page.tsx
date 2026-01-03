"use client"

import Preloader from '@/components/Preloader'
import React, {  useEffect, useState } from 'react'

const Page = () => {
  const [loadPreLoader, setloadPreLoader] = useState(() =>
  !!sessionStorage.getItem("preLoaderPlayed") ? false : true
);
    // const [checkDone, setCheckDone] = useState(false);

    useEffect(()=>{
      const hasPlayed = sessionStorage.getItem("preLoaderPlayed");

      if(!hasPlayed){
        requestAnimationFrame(() => {
        setloadPreLoader(true);
        
      });
      }
    
    },[])

    //  if (!checkDone) return null;
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