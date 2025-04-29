"use client"
import { useRef } from "react";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);


export default function Hero() {

    const textRef = useRef<HTMLHeadingElement | null>(null);
    const screenRef = useRef<HTMLElement | null>(null);
    const cursorRef = useRef<HTMLDivElement | null>(null);
    const text2Ref = useRef<HTMLDivElement | null>(null);
    const imageRef = useRef<HTMLDivElement | null>(null);

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

        document.body.addEventListener("mouseenter", () => {
            gsap.to(cursorRef.current, {
                opacity: 1,
                duration: 0.3,
            })
        });

        document.body.addEventListener("mouseleave", () => {
            gsap.to(cursorRef.current, {
                opacity: 0,
                duration: 0.3,
            })
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
            scale: 3.5,
        });
    }

    const handleGrowImage = () => {
        gsap.to(cursorRef.current, {
            scale: 4,
            mixBlendMode: "normal",
            backgroundColor: '#ffffffd0',
            onStart: () => {
                if (!cursorRef.current) return;
                cursorRef.current.innerHTML = '<h1 class="text-[3px]">VIEW MORE</h1>';
            }
        })
    }

    const handleShrink = () => {
        gsap.to(cursorRef.current, {
            scale: 1,
        });
    }

    const handleShrinkImage = () => {
        gsap.to(cursorRef.current, {
            scale: 1,
            mixBlendMode: "difference",
            backgroundColor: '#ffffff',
            onStart: () => {
                if (!cursorRef.current) return;
                cursorRef.current.innerHTML = '';
            }
        });
    }

    return (
        <>
            <div ref={cursorRef} className="bg-white w-6 rounded-full h-6 fixed mix-blend-difference flex justify-center items-center pt-0.5 z-40"></div>
            <section className='w-full h-screen bg-zinc-900 flex justify-around items-center'>
                <div onMouseEnter={handleGrowImage} onMouseLeave={handleShrinkImage} ref={imageRef} className="w-max h-max cursor-pointer flex relative">
                    <Image alt="image" src={'/1.jpg'} width={400} height={300} />
                    <div className="absolute h-[533px] w-[400px] z-50">
                    </div>
                </div>
                <div onMouseEnter={handleGrow} onMouseLeave={handleShrink} ref={text2Ref} className="w-max h-max cursor-pointer flex relative">
                    <h1 className="text-5xl font-bold text-white">HOVER ME</h1>
                    <div className="w-64 h-12 absolute z-50">
                    </div>
                </div>
            </section>
            <section ref={screenRef} className='w-full h-screen flex items-center bg-[#fff6ea] overflow-hidden'>
                <h1 ref={textRef} className="text-[30vw] text-zinc-800 font-bold">EXPERIENCES</h1>
            </section>
            <section className='w-full h-screen bg-slate-900'></section>
        </>
    )
}