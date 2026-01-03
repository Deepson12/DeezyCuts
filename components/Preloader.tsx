"use client"


import LogoPaths from '@/components/svg'
import React, { useLayoutEffect, useRef, useState } from 'react'
import '@/app/globals.css'
import '@/app/components.css'
import gsap from 'gsap'

const Preloader = ({onComplete}: {onComplete?: ()=> void}) => {

  const [showLoader, setShowLoader] = useState(true);
  const [logoLoader, setLogoLoader] = useState(false);


  const preloadSpamRef = useRef<(HTMLSpanElement | null)[]>([]);
    const preloadBoxRef = useRef<HTMLDivElement | null>(null);


  const preLoadText = "DeezyCuts";
  const preLoadArray = Array.from(preLoadText);


  
  const [svgComplete, setsvgComplete] = useState(false);

  useLayoutEffect(()=>{

    


    const ctx = gsap.context(()=>{


      


      const tl= gsap.timeline({
        onComplete: ()=> {
          setShowLoader(false);
          setLogoLoader(true);
        
        }
      });

      


      
      tl.to(preloadSpamRef.current, {
       
        y:0,
        duration: 0.75,
        stagger: 0.05
      })

      tl.to(preloadSpamRef.current, {
        
        y: "-100%",
        duration: 0.75,
        stagger: {
          each: 0.05,
          from: "end"
        }
      }, "+=1")

      

      
    })

    return ()=> ctx.revert();
  },[])

  useLayoutEffect(()=>{
    if (!svgComplete) return;

    const ctx = gsap.context(()=>{

        gsap.to(preloadBoxRef.current,{
            height: 0,
            duration: 1,
            ease: "expo.in",
            onComplete: ()=>{
              onComplete?.();
              sessionStorage.setItem("preLoaderPlayed", "true");
            }
        })
    })

    return ()=> ctx.revert();

  }, [svgComplete, onComplete])





  return (
    <div ref={preloadBoxRef} className='fixed w-screen h-screen bg-primary'>
      <div className='absolute-center'>
        {showLoader && 
        <h2  className="title-text color-secondary w-fit h-fit overflow-hidden">
          {
            preLoadArray.map((value, index)=>(
              <span ref={(el) => {
                preloadSpamRef.current[index] = el
              }} key={index} className='inline-block translate-y-full'>{value}</span>
            ))
          }
        </h2>
        }
        {logoLoader && !svgComplete &&(

          <LogoPaths onComplete={()=> {
            setsvgComplete(true);
          }}/>
        )
        }
      </div>    
      
    </div>
  )
}

export default Preloader