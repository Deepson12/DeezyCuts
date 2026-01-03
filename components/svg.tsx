"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

export default function LogoPaths({onComplete}: {onComplete?: ()=>void}) {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const path1Ref = useRef<SVGPathElement | null>(null);

  useLayoutEffect(() => {
    if (!svgRef.current || !path1Ref.current ) return;

    const ctx = gsap.context(() => {
      const p1 = path1Ref.current!;
    

      const length1 = p1.getTotalLength();
    
      

      
      gsap.set(p1, {
        strokeDasharray: length1,
        strokeDashoffset: length1
      });

      
      const tl = gsap.timeline({ 
        onComplete: ()=>{
          onComplete?.();
        }
       });

      tl.to(p1, {
        strokeDashoffset: 0,
        duration: 1.5,
        ease: "sine.inOut"
      })
      .to(p1, {
        strokeDashoffset: -length1,
        duration: 1.5,
        ease: "sine.inOut",
        
      })
      // .set(p1, { strokeDashoffset: length1 });

      

      
    }, svgRef); 

    return () => ctx.revert(); 
  }, [onComplete]);

  return (
    <>
    <svg 
    ref={svgRef} 
    width="83" 
    height="143" 
    viewBox="0 0 211 352" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    style={{ willChange: "stroke-dashoffset, transform" }}
    shapeRendering="geometricPrecision">

    <path 
    ref={path1Ref} 
    d="M-33 9.89949L108.5 151.399L13.5 246.399V50.8995M257 76.8995L108.5 225.399L246 362.899" 
    stroke="#141415" 
    strokeWidth="12" 
    strokeLinecap="butt"
    strokeLinejoin="miter"
    strokeMiterlimit="4.28366"
    vectorEffect="non-scaling-stroke"/>
    </svg>




        </>
  );
}
