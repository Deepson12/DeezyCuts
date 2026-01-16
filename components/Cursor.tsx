"use client"

import gsap from 'gsap';

import React, { useEffect, useRef } from 'react'

const Cursor = () => {
  const cursorRef = useRef<HTMLInputElement>(null);

  useEffect(()=>{

    const cursor = cursorRef.current;

    if(!cursor) return;
    if('ontouchstart' in window) return;

    let mouseX = 0;
    let mouseY = 0;
    let x =0;
    let y=0;

    const moveMouse = (e: MouseEvent)=>{
      mouseX = e.clientX;
      mouseY = e.clientY;
    }

    window.addEventListener('mousemove', moveMouse);

    gsap.ticker.add(()=>{
      x+= (mouseX - x)* 0.045;
      y+= (mouseY - y) * 0.045;

      gsap.set(cursor, {x, y});
    })


    


    return ()=>{
      window.removeEventListener('mousemove', moveMouse);
      gsap.ticker.remove(()=>{});
    }
  },[])

  useEffect(()=>{
    const cursor = cursorRef.current;

    if(!cursor) return;
    if('ontouchstart' in window) return;

    const textList = document.querySelectorAll(".hover-text");

    textList.forEach((list)=>{
      list.addEventListener('mouseenter', ()=>{
        gsap.to(cursor, {
          scale: 0.2,
          duration:0.5,
          ease: "power3.out",
          backgroundColor: "#fff",
          borderColor: "transparent"
        })
      })

      list.addEventListener('mouseleave', ()=>{
        gsap.to(cursor, {
          scale: 1,
          duration: 0.5,
          ease: 'power3.out',
          backgroundColor: "transparent",
          
          borderColor: "#141415"
        })
      })
    })


    return ()=>{
      textList.forEach((list)=>{
        list.removeEventListener('mouseenter', ()=>{})
        list.removeEventListener('mouseleave', ()=>{})
      })
    }
  },[])


  return (
    
    <div ref={cursorRef} className='fixed z-20 h-15 w-15 shadow-[0_0_0_2px_var(--color-accent)] rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none hidden lg:block mix-blend-difference'>
      
    </div>
  )
}

export default Cursor
