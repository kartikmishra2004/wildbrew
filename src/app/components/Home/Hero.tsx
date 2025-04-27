"use client";
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {

    const backgroundRef = useRef(null);
    const mountain1Ref = useRef(null);
    const mountain2Ref = useRef(null);
    const mountain3Ref = useRef(null);
    const mountain4Ref = useRef(null);
    const sunraysRef = useRef(null);
    const textRef = useRef(null);

    const containerRef = useRef(null);
    const secondSectionRef = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "50% 50%",
                scrub: true,
            }
        });

        tl.to(mountain1Ref.current, {
            y: -250,
            duration: 1.5
        }, 'a');

        tl.to(mountain2Ref.current, {
            y: -250,
            duration: 0.8
        }, 'a');

        tl.to(mountain3Ref.current, {
            y: -250,
            duration: 0.5
        }, 'a');

        tl.to(mountain4Ref.current, {
            y: -250,
            duration: 0.7
        }, 'a');

        tl.to(sunraysRef.current, {
            y: -350,
            duration: 0.3,
        }, 'a');

        tl.to(textRef.current, {
            y: -250,
            duration: 0.7
        }, 'a');

        tl.to(secondSectionRef.current, {
            y: -250,
            duration: 0.5
        }, 'a');
    });

    return (
        <>
            <section ref={containerRef} className='w-full text-zinc-700 relative h-screen overflow-hidden'>
                <div ref={backgroundRef}>
                    <Image width={1200} height={800} className='w-full h-screen object-cover select-none absolute' src="/background.png" alt="" />
                </div>
                <div ref={mountain1Ref}>
                    <Image width={1200} height={800} className='w-full h-screen object-cover select-none absolute mountain1' src="/mountain1.png" alt="" />
                </div>
                <div ref={mountain2Ref}>
                    <Image width={1200} height={800} className='w-full h-screen object-cover select-none absolute mountain2' src="/mountain2.png" alt="" />
                </div>
                <div ref={textRef} className="w-full select-text h-screen flex flex-col absolute justify-center items-center pb-[22rem] text">
                    <h1 className='text-[6.5rem] font-extrabold tracking-wider text-white'>WILD BREW</h1>
                </div>
                <div ref={mountain3Ref}>
                    <Image width={1200} height={800} className='w-full h-screen object-cover select-none absolute mountain3' src="/mountain3.png" alt="" />
                </div>
                <div ref={mountain4Ref}>
                    <Image width={1200} height={800} className='w-full h-screen object-cover select-none absolute mountain4' src="/mountain4.png" alt="" />
                </div>
                <div ref={sunraysRef}>
                    <Image width={1200} height={800} className='select-none absolute sunrays' src="/sunrays.png" alt="" />
                </div>
            </section>
            <section ref={secondSectionRef} className="w-full h-screen bg-[#e0e7e6] relative z-50"></section>
        </>
    );
}