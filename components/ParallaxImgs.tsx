"use client"

import React, { useRef, useEffect } from 'react'
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface ImageProps {
    src: string,
    alt: string,
    priority?: boolean
}

const ParallaxImgs = ({src, alt, priority = false}: ImageProps) => {
    const imageRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        const image = imageRef.current;
        if (!image) return;

        // Ensure ScrollTrigger is registered
        gsap.registerPlugin(ScrollTrigger);
        
        const parent = image.parentElement;
        
        const ctx = gsap.context(() => {
            if (parent) {
                gsap.fromTo(image, 
                    { y: "-10%" },
                    { 
                        y: "10%", 
                        ease: "none",
                        scrollTrigger: {
                            trigger: parent,
                            start: "top bottom", 
                            end: "bottom top",   
                            scrub: 1, // Add some smoothing to match the previous lerp feel
                        }
                    }
                );
            }
        }, parent || undefined);

        return () => {
            ctx.revert();
        };
    }, []);

    return (
        <Image 
            ref={imageRef}
            src={src}
            alt={alt}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            quality={90}
            className='object-cover'
            style={{ transform: 'scale(1.25)' }}
            priority={priority}
        />
    )
}

export default ParallaxImgs