'use client';
import { ReactElement, useState, useEffect } from "react";
import { StaticImageData } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

interface TechIconProps {
    index: number;
    title: string;
    icon: StaticImageData;
    isVisible: boolean;
}

const TechIcon = ({title, icon, index, isVisible}: TechIconProps):ReactElement =>{
    // const randomDelay = Math.random() * 150;
    const [randomDelay, setRandomDelay] = useState<number | null>(null);
    // const [randomDelay] = useState(() => Math.random() * 60);
    const entryAnimationDelay = index * 0.08; //ms -> depends on the index

    useEffect(() => {
        setRandomDelay(Math.random() * 60);
    },[])
    
    return (
        <div 
            className={`
                flex flex-col items-center opacity-0
                ${isVisible ? 'animate-[slide-up-close_.3s_ease-in_forwards]' : 'opacity-0'}
            `}
            style={{animationDelay: `${entryAnimationDelay}s`}}
            >
            <div 
                className='
                    w-[55px] h-[55px]
                    sm:w-[62px] sm:h-[62px]
                    md:w-[72px] md:h-[72px]
                    lg:w-[80px] lg:h-[80px]
                    border-1 rounded-lg lg:rounded-2xl border-neon-1
                    shadow-[0px_0px_5px_1px_var(--color-neon-glow),inset_0px_0px_6px_1px_var(--color-neon-inset)]
                    hover:drop-shadow-[0_0_1px_var(--color-neon-2)] cursor-pointer
                    animate-[neon-blink_6s_ease-in-out_infinite] transition-drop-shadow duration-100
                '
                style={{animationDelay: `${randomDelay}s`}}
            >
                <div className='flex justify-center items-cetner w-full h-full'>
                    <Image
                        className="w-full p-2 lg:p-3 flexa "
                        src={icon}
                        alt={`${title}-icon`}
                    />
                </div>
            </div>
            {/* <p className='mt-1 text-[10px] sm:text-[11px] md:text-xs lg:text-sm text-center font-inter drop-shadow-[0_0_1px_var(--color-neon-2)]'>{title}</p> */}
            <p className='mt-1 text-[10px] sm:text-[11px] md:text-xs lg:text-sm text-center font-inter'>{title}</p>
        </div>
    )
}

export default TechIcon;