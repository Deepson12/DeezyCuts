"use client"

import React, {useEffect, useRef} from 'react'
import { useLenis } from './useLenis'
import Image from 'next/image';

interface ImageProps {
    src: string,
    alt: string
}


const lerp = (start : number, end: number, factor: number) => start+ (end-start) * factor;

const ParallaxImgs = ({src, alt}:ImageProps) => {
    const imageRef = useRef<HTMLImageElement>(null);

    const bounds =  useRef<{top: number, bottom: number} | null>(null)
    const currentTranslateY = useRef(0);
    const targetTranslateY = useRef(0);
    const refId = useRef<number | null>(null);


    useEffect(()=>{
       
        const updateBounds = ()=>{
            if(imageRef.current){
                const rect = imageRef.current.getBoundingClientRect();
                bounds.current = {
                    top: rect.top + window.scrollY,
                    bottom: rect.bottom + window.scrollY
                }
            }
        }

        updateBounds();
        window.addEventListener("resize", updateBounds);

        const handleScroll = ()=>{
            

            if(bounds.current && imageRef.current){
                const scrollY = window.scrollY;
                const elementTop = bounds.current.top;
                const elementHeight = bounds.current.bottom - bounds.current.top;
                const windowHeight = window.innerHeight;
                
                
                const elementCenter = elementTop + elementHeight / 2;
                const viewportCenter = scrollY + windowHeight / 2;
                const distanceFromCenter = viewportCenter - elementCenter;
                const maxDistance = (windowHeight + elementHeight) / 2;
                const progress = distanceFromCenter / maxDistance;
                
                
                targetTranslateY.current = progress * 100;
            }
        }

        window.addEventListener("scroll", handleScroll);

        const animate = ()=>{
            if(imageRef.current){
                currentTranslateY.current = lerp(currentTranslateY.current, targetTranslateY.current, 0.1);

                if(Math.abs(currentTranslateY.current-targetTranslateY.current)> 0.01){
                    imageRef.current.style.transform =`translateY(${currentTranslateY.current}px) scale(1.25)`;
                }
            }

            refId.current =requestAnimationFrame(animate);
        }


        animate();

        return()=>{
            window.removeEventListener("resize", updateBounds);
            window.removeEventListener("scroll", handleScroll);

            if(refId.current){
                cancelAnimationFrame(refId.current);
            }
        }
    }, []);


    useLenis();
  return (


    <Image 
        ref={imageRef}
        src={src}
        alt={alt}
        style={{
            willChange: "transform",
            transform: "translateY(0) scale(1.25)",
            objectPosition: 'center 50%'
        }}
        fill
          sizes="80vw"
          quality={90}
          className='object-cover absolute'
          priority
          

    />
  )
}

export default ParallaxImgs