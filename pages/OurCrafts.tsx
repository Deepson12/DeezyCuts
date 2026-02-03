import Image from 'next/image'
import React, { useEffect, useRef } from 'react'

import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const OurCrafts = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imgBoxRef = useRef<HTMLDivElement>(null);

  const styles = [
    {cut: "Fade", img: "pic-1 (1).jpg"},
    {cut: "Fade", img: "pic-1 (1).jpg"},
    {cut: "Fade", img: "pic-1 (1).jpg"},
    {cut: "Fade", img: "pic-1 (1).jpg"},
    {cut: "Fade", img: "pic-1 (1).jpg"},
    {cut: "Fade", img: "pic-1 (1).jpg"},
    {cut: "Fade", img: "pic-1 (1).jpg"},
    {cut: "Fade", img: "pic-1 (1).jpg"},
   
  ]


  useEffect(()=>{
    if (!imgBoxRef.current || !sectionRef.current) return;

    const imgBox = imgBoxRef.current;
    const section = sectionRef.current;

   
    const setupScroll = () => {
      
      const cards = imgBox.querySelectorAll(':scope > div');
      if (cards.length === 0) return;

      const lastCard = cards[cards.length - 1] as HTMLElement;
      const lastCardRight = lastCard.offsetLeft + lastCard.offsetWidth;
      const visibleWidth = window.innerWidth;
      
     
      const scrollDistance = lastCardRight - visibleWidth;
      
      if (scrollDistance <= 0) return;

      
      const horizontalTween = gsap.to(imgBox, {
        x: -scrollDistance,
        ease: "none",
        scrollTrigger: {
          id: "our",
          trigger: section,
          start: "top top",        
          end: `+=${scrollDistance}`, 
          scrub: 1,                 
          pin: true, 
          invalidateOnRefresh: true               
        }
      });
    };

    ScrollTrigger.refresh();
    setTimeout(setupScroll, 100);


    
    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger === section) {
          trigger.kill();
        }
      });
    };
  }, [])

  return (
    <section ref={sectionRef} className='section bg-secondary text-accent h-screen flex flex-col px-lg'>
        <h1 className='title-text-white uppercase mt-(--navbar-height)'>
          Our Crafts
        </h1>
        <div className=' flex  flex-1 items-center overflow-hidden'>
          <div ref={imgBoxRef} className=' img-box flex gap-10'>


          {styles.map((value, index)=>(

            <div className='  w-[clamp(20rem,25vw,30rem)] h-[clamp(26.6rem,33.3vw,40rem)] shrink-0  flex flex-col gap-5' key={index}>
              <div className='relative w-full h-full overflow-hidden'>
              <Image
                
                src={`/img/${value.img}`}
                alt='hehehee'
                fill
                
                quality={90}
                className='object-cover'
                priority
                />
                </div>
              <p className='font-manrope text-xl uppercase'>{value.cut}</p>
            </div>
           
              ))}



          </div>
           

          
        </div>
    </section>
  )
}

export default OurCrafts