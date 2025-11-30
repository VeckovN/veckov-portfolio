'use client';

import Image from "next/image";
import AboutCard from "../ui/AboutCard";
import PersonalImage from '../../public/images/PersonalImage.png';
import { useState } from "react";

const About = () => {
    const [selectedYear, setSelectedYear] = useState('2025');

    return (
        <section id="about" className='bg-red-300a py-10 w-full mx-auto flex flex-col items-center xl:items-start bg-about text-white'>
            
            <div className=' bg-red-500a px-6 md:px-10 lg:px-2a max-w-[1280px] w-full mx-auto h-fullmd:px-6 flex flex-col items-center lg:items-start mx-autoa'>
                <h2 className='mb-10 lg:mb-14 text-3xl md:text-4xl lg:text-5xl font-rubik font-bold'>
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
            
                {/* Github Contribution table */}
                <div className='mt-4 bg-red-100a w-full '>
                    <div className='github contribution count by year font-inter text-sm md:text-base lg:text-xl'>
                        920 contirbutions in the last year
                    </div>

                    <div className='my-2 md:my-0 bg-red-400a github-table-with-buttons flex flex-col justify-end md:flex-row-reverse w-full'>
                        <div className='ml-3 flex md:flex-col justify-center gap-x-2 md:gap-y-2'>
                            {/* List of buttons */}

                            {/* <button 
                                className={`
                                    px-5 py-1 border-1 rounded-2xl 
                                    font-rubik font-bold text-[10px]
                                    ${!disabled ?
                                        'border-gray-500 text-gray-500 opacity-90 '
                                        :
                                        `${active ? 'bg-white text-about' : ''}`
                                    }
                                `}
                                disabled={false}
                            >
                                2025
                            </button> */}
                                
                            <button 
                                className={`
                                    px-5 py-1 border-1 rounded-2xl cursor-pointer
                                    font-rubik font-bold text-[10px] md:text-xs lg:text-sm
                                    ${!false ?
                                        'border-gray-500 text-gray-500 opacity-90 '
                                        :
                                        `${true ? 'bg-white text-about' : ''}`
                                    }
                                `}
                                disabled={false}
                            >
                                2026
                            </button>

                            <button 
                                className={`
                                    px-5 py-1 border-1 rounded-2xl cursor-pointer
                                    font-rubik font-bold text-[10px] md:text-xs lg:text-sm
                                    ${!true ?
                                        'border-gray-500 text-gray-500 opacity-90 '
                                        :
                                        `${selectedYear === '2025' ? 'bg-white text-about' : ''}`
                                    }
                                `}
                                onClick={() => setSelectedYear('2025')}
                                disabled={false}
                            >
                                2025
                            </button>

                            <button 
                                className={`
                                    px-5 py-1 border-1 rounded-2xl cursor-pointer
                                    font-rubik font-bold text-[10px] md:text-xs lg:text-sm
                                    ${!true ?
                                        'border-gray-500 text-gray-500 opacity-90 '
                                        :
                                        `${selectedYear === '2024' ? 'bg-white text-about' : ''}`
                                    }
                                `}
                                disabled={false}
                                onClick={() => setSelectedYear('2024')}
                            >
                                2024
                            </button>

                            <button 
                                className={`
                                    px-5 py-1 border-1 rounded-2xl cursor-pointer
                                    font-rubik font-bold text-[10px] md:text-xs lg:text-sm
                                    ${!true ?
                                        'border-gray-500 text-gray-500 opacity-90 '
                                        :
                                        `${selectedYear === '2023' ? 'bg-white text-about' : ''}`
                                    }
                                `}
                                onClick={() => setSelectedYear('2023')}
                                disabled={false}
                            >
                                2023
                            </button>

                        </div>

                        <div className='github-table-from-library mt-4 bg-neon-3 w-full h-[100px] md:h-[110px] lg:h-[140px] max-w-[1200px]'>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;