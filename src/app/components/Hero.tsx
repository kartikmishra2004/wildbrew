"use client"
import { useRef } from "react";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image";
gsap.registerPlugin(ScrollTrigger)


export default function Hero() {

    const textRef = useRef(null);
    const screenRef = useRef(null);
    const cursorRef = useRef(null);
    const text2Ref = useRef(null);

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
        });

        document.addEventListener('mousemove', (e) => {
            gsap.to(cursorRef.current, {
                x: e.clientX - 8,
                y: e.clientY - 6,
            });
        });
    });

    const handleGrow = () => {
        gsap.to(cursorRef.current, {
            scale: 4,
        });
    }

    const handleShrink = () => {
        gsap.to(cursorRef.current, {
            scale: 1,

        });
    }

    return (
        <>
            <div ref={cursorRef} className="bg-white w-6 rounded-full h-6 fixed mix-blend-difference z-40"></div>
            <section className='w-full h-screen bg-zinc-900 flex justify-center items-center'>
                <div onMouseEnter={handleGrow} onMouseLeave={handleShrink} ref={text2Ref} className="w-max h-max cursor-pointer flex relative">
                    <h1 className="text-5xl font-bold text-white">HOVER ME</h1>
                    <div className="w-64 h-12 absolute z-50">
                    </div>
                </div>
            </section>
            <section ref={screenRef} className='w-full h-screen flex items-center bg-[#fff6ea] overflow-hidden'>
                <h1 ref={textRef} className="text-[35vw] text-[#442600] font-bold">EXPERIENCES</h1>
            </section>
            <section className='w-full h-screen bg-slate-900'></section>
        </>
    )
}