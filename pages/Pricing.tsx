import React, { useEffect, useRef } from 'react'
import Image from 'next/image';
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'


gsap.registerPlugin(ScrollTrigger);

const Pricing = () => {
  
  const secRef = useRef<HTMLElement | null>(null);
  const titleRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let rafId: number;

    const waitForTrigger = () => {
      const prevST = ScrollTrigger.getById('our');

      if (prevST && secRef.current && titleRef.current) {
        gsap.to(titleRef.current, {
          
          scrollTrigger: {
            trigger: secRef.current,
            start: () => `top${prevST.end}`, 
            end: () => `bottom bottom`, 
            pin:titleRef.current,
            invalidateOnRefresh: true,
            // markers: true
          }
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
    <section ref={secRef} className=' relative pricing h-[400vh] bg-secondary'>
      <div ref={titleRef} className='absolute z-10 flex flex-col items-center gap-5 top-[40vh] -translate-y-1/2 w-full text-center'>
        
      <p className='font-manrope text-xl text-white'>Get Started</p>
      <h2 className='title-text-white text-center'>Join the <br /> Community</h2>
      </div>
      <div className='grid grid-cols-3 md:grid-cols-5 h-full w-full relative'>
       
        <div className='relative h-full'>
          <div className='absolute w-[60%] h-60 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2'>

           <Image
                          
                          src={`/img/otdoor (1).jpg`}
                          alt='hehehee'
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          quality={90}
                          className='object-cover'
                          />
            </div>
            <div className='absolute right-0 top-0 h-full w-px bg-white/20 mask-[linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]'></div>
        </div>
        <div className='relative h-full'>
          <div className='absolute w-[60%] h-60 top-[calc(50%-60vh)]  -translate-y-1/2 left-1/2 -translate-x-1/2'>

           <Image
                          
                          src={`/img/otdoor (1).jpg`}
                          alt='hehehee'
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          quality={90}
                          className='object-cover'
                          />
            </div>
            <div className='absolute right-0 top-0 h-full w-px bg-white/20 mask-[linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]'></div>
        </div>
        <div className='hidden md:block relative h-full'>
          <div className='absolute w-[60%] h-60 top-[calc(50%+30vh)]  -translate-y-1/2 left-1/2 -translate-x-1/2'>

           <Image
                          
                          src={`/img/otdoor (1).jpg`}
                          alt='hehehee'
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          quality={90}
                          className='object-cover'
                          />
            </div>
            <div className='absolute right-0 top-0 h-full w-px bg-white/20 mask-[linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]'>
            </div>
        </div>
        <div className=' hidden md:block relative h-full'>
          <div className='absolute w-[60%] h-60 top-[calc(50%-60vh)]  -translate-y-1/2 left-1/2 -translate-x-1/2'>

           <Image
                          
                          src={`/img/otdoor (1).jpg`}
                          alt='hehehee'
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          quality={90}
                          className='object-cover'
                          />
            </div>
            <div className='absolute right-0 top-0 h-full w-px bg-white/20 mask-[linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]'></div>
        </div>
        <div className=' hidden md:block relative h-full'>
          <div className='absolute w-[60%] h-60 top-[calc(50%-30vh)]  -translate-y-1/2 left-1/2 -translate-x-1/2'>

           <Image
                          
                          src={`/img/otdoor (1).jpg`}
                          alt='hehehee'
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          quality={90}
                          className='object-cover'
                          />
            </div>
            <div className='absolute right-0 top-0 h-full w-px bg-white/20 mask-[linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]'></div>
        </div>
        
      </div>        
    </section>
  )
}

export default Pricing