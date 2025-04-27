"use client"
import { useRef } from "react";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)


export default function Hero() {

    const textRef = useRef(null);
    const screenRef = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: screenRef.current,
                start: "top 0%",
                end: "top -300%",
                scrub: true,
                pin: true,
            }
        });

        tl.to(textRef.current, {
            transform: "translateX(-60%)",
        })
    });

    return (
        <>
            <section className='w-full h-screen bg-zinc-900'></section>
            <section ref={screenRef} className='w-full h-screen flex items-center bg-[#fff6ea] overflow-hidden'>
                <h1 ref={textRef} className="text-[35vw] text-zinc-900 font-bold">EXPERIENCES</h1>
            </section>
            <section className='w-full h-screen bg-slate-900'></section>
        </>
    )
}