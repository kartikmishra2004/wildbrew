"use client";
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

export default function Home() {
    return (
        <section className='w-full text-zinc-700'>
            <Parallax pages={2} style={{ top: '0', left: '0' }}>
                <ParallaxLayer offset={0} speed={0.8}>
                    <img className='w-full h-screen object-cover select-none' src="/background.png" alt="" />
                </ParallaxLayer>
                <ParallaxLayer offset={0} speed={1.2}>
                    <img className='w-full h-screen object-cover select-none' src="/mountain1.png" alt="" />
                </ParallaxLayer>
                <ParallaxLayer offset={0} speed={1.4}>
                    <img className='w-full h-screen object-cover select-none' src="/mountain2.png" alt="" />
                </ParallaxLayer>
                <ParallaxLayer offset={0} speed={1}>
                    <div className="w-full select-text h-screen flex flex-col justify-center items-center pb-[22rem]">
                        <h1 className='text-[6.5rem] font-extrabold tracking-wider text-white'>WILD BREW</h1>
                    </div>
                </ParallaxLayer>
                <ParallaxLayer offset={0} speed={1.7}>
                    <img className='w-full h-screen object-cover select-none' src="/mountain3.png" alt="" />
                </ParallaxLayer>
                <ParallaxLayer offset={0} speed={1.7}>
                    <img className='w-full h-screen object-cover select-none' src="/mountain4.png" alt="" />
                </ParallaxLayer>
                <ParallaxLayer offset={0} speed={1.5} style={{ mixBlendMode: "screen" }}>
                    <img className='w-full h-screen object-cover select-none' src="/fog.png" alt="" />
                </ParallaxLayer>
                <ParallaxLayer offset={0} speed={2.6}>
                    <img className=' select-none' src="/sunrays.png" alt="" />
                </ParallaxLayer>
                <ParallaxLayer offset={0.9999} speed={1.7}>
                    <section className='bg-[#fafafa] h-screen w-full'></section>
                </ParallaxLayer>
            </Parallax>
        </section>
    );
}
