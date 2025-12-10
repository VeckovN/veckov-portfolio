'use client';

import Image from "next/image";
import { useState } from "react";
import AboutCard from "../ui/AboutCard";
import PersonalImage from '../../public/images/PersonalImage.png';
import GithubActivityCalendar from "../ui/GithubActiviyCalendar";

const About = () => {
    const [selectedYear, setSelectedYear] = useState(2025);

    const yearButtons = [
        {year: 2026, disabled: true},
        {year: 2025, disabled: false},
        {year: 2024, disabled: false},
        {year: 2023, disabled: false}
    ]

    return (
        <section id="about" className='bg-red-300a py-10 w-full mx-auto flex flex-col items-center xl:items-start bg-about text-white'>
            
            <div className=' bg-red-500a px-6 md:px-10 lg:px-2a max-w-[1280px] w-full mx-auto h-fullmd:px-6 flex flex-col items-center lg:items-start mx-autoa'>
                <h2 className='mb-10 lg:mb-14 text-3xl md:text-4xl xl:text-5xl font-rubik font-bold'>
                    About me
                </h2>
                <div className='bg-blue-900a w-fulla grid gap-y-7 gap-x-6 grid-cols-1 md:gap-y-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                    <AboutCard category="location" context="Niš, Serbia"/>
                    <AboutCard category="university" context="Faculty of Electronic Engineering CS Department"/>
                    <AboutCard category="focus" context="Full-Stack Developer"/>
                    <AboutCard category="interests" context="Web Dev, Architecture"/>
                </div>

                <div className='bg-blue-400a mt-10 flex flex-col-reverse md:flex-row items-center gap-y-10 gap-x-6 text-base'>
                    <div className=''>
                        <Image
                            src={PersonalImage}
                            alt='personalImage'
                            className="h-fulla min-w-[220px] lg:w-[250px] rounded-xl"
                        />
                    </div>

                    <div className="bg-red-600a max-w-[500px] lg:max-w-[700px] flex flex-col gap-y-3 font-inter text-base lg:text-xl">
                        <p>I'm a Full-Stack Developer based in Niš, Serbia, 
                            finishing my Computer Science degree in 2026.
                        </p>
                        <p>
                            I build web applications — the kind that handle real 
                            complexity and actually ship.  I love the moment when a complex system
                            finally  clicks together and works.
                        </p>
                        <p>
                            I build web applications — the kind that handle real 
                            complexity and actually ship.  I love the moment when a complex system
                            finally  clicks together and works.
                        </p>
                        <p>
                            <span className='font-semibold'>What drives me?</span> I love the moment when a complex system finally  clicks together and works.
                        </p>
                    </div>
                </div>

                <h3 className="w-full mt-10 font-rubik font-bold text-base md:text-lg lg:text-2xl">Constant in material and always improving</h3>
            

                <div className='mt-4 bg-red-100a w-full '>
                    <div className='my-2 w-full md:my-0 flex flex-col justify-end md:flex-row-reverse'>
                        <div className='ml-3 flex md:flex-col justify-center gap-x-2 md:gap-y-2'>
                            {
                                yearButtons.map(({year, disabled}) => {
                                    const isSelected = selectedYear === year;
                                
                                    return(
                                        <button 
                                            key={year}
                                            className={`
                                                px-5 py-1 border-1 rounded-2xl
                                                font-rubik font-bold text-[10px] md:text-xs lg:text-sm
                                                transition-all duration-200
                                                ${disabled 
                                                    ? 'border-gray-500 text-gray-500 opacity-90 cursor-not-allowed' 
                                                    : isSelected 
                                                        ? 'bg-white text-about shadow-[0px_0px_5px_1px_var(--color-neon-glow)] border-neon-glow'
                                                        : 'hover:border-neon-3 hover:text-neon-3 cursor-pointer'
                                                }
                                            `}
                                            onClick={() => !disabled && setSelectedYear(year)}
                                            disabled={disabled}
                                        >
                                            {year}
                                        </button>
                                    )
                                })
                            }

                        </div>

                        <div className='mt-4  w-full h-full md:w-[90%] max-w-[870px] xl:max-w-[930px] h-[100px]'>
                            <GithubActivityCalendar selectedYear={selectedYear}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;