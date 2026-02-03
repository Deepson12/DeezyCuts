import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'


gsap.registerPlugin(ScrollTrigger);

const Pricing = () => {
  
  const secRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    let rafId: number;

    const waitForTrigger = () => {
      const prevST = ScrollTrigger.getById('our');

      if (prevST && secRef.current) {
        ScrollTrigger.create({
          trigger: secRef.current,
          start: () => prevST.end,
          end: () => prevST.end + window.innerHeight,
          markers: true,
        });

        ScrollTrigger.refresh();
      } else {
        rafId = requestAnimationFrame(waitForTrigger);
      }
    };

    waitForTrigger();

    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <section ref={secRef} className='pricing h-screen'>

    </section>
  )
}

export default Pricing