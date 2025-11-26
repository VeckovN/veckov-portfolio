
'use client';

import { useEffect, useState } from "react";

const Header = () => {
    const [activeSection, setActiveSection] = useState('home');

    const navItems = [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'skills', label: 'Skills' },
        { id: 'projects', label: 'Projects' },
        { id: 'contact', label: 'Contact' }
    ]

    const ScrollToSection = (sectionId: string) => {
        //Direct dom manipulation didn't recommended but
        //to keep page.tsx Server Compoennt it's common Next.js Patter for this scenario
        const element = document.getElementById(sectionId);
        if(element){
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }

    useEffect(() =>{
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 100;

            for(let i= navItems.length -1; i >=0; i--){
                const section = document.getElementById(navItems[i].id);
                if(section && section.offsetTop <= scrollPosition){
                    setActiveSection(navItems[i].id);
                    break;
                }
            }
        }
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    },[]);


    return( 
        <header className='fixed top-0 left-0 z-10 w-full bg-hero text-white'>    
            <div className='max-w-[1280px] h-full items-center py-4 px-10 w-full flex  justify-between mx-auto bg-red-100a'>
                <div className='font-rubik text-xl md:text-2xl xl:text-3xl mx-2 cursor-pointer'>
                    NovakV
                </div>
                
                <nav className="hidden md:flex gap-8">
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => ScrollToSection(item.id)}
                            className={`
                                md:text-md lg:text-xl font-inter 
                                hover:text-neon-1 transition-colors relative cursor-pointer
                            ${activeSection === item.id ? 'text-neon-1': ''}
                            `}
                        >
                            {item.label}
                            {activeSection === item.id && ( <span className='absolute -bottom-1 left-0 w-full h-0.5 bg-neon-2'></span> )}
                        </button>
                    ))}
                </nav>

                <div className='flex flex-col md:hidden gap-y-2'>
                    <span className='h-0.5 w-6 bg-amber-50 '></span>
                    <span className='h-0.5 w-6 bg-amber-50 '></span>
                    <span className='h-0.5 w-6 bg-amber-50 '></span>
                </div>
            </div>
           
        </header>
    )
}

export default Header;