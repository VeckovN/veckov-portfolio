
'use client'; //this is neede to use states

import { useEffect, useState } from "react";

type SectionRefsType = { [key:string]: HTMLElement | null}

const Header = ({ sectionRefs }: { sectionRefs: { current: SectionRefsType } }) => {

    //Register sectionsRefs
    //apply click login on certain click

    //"Home" by default 
    const [activeSection, setActiveSection] = useState('home');

    const ScrollToSection = (sectionId: string) => {
        console.log("sectionScrollID : ", sectionId)
        // console.log("Ref Clicked: ", sectionRefs[sectionId].current);
        const element = sectionRefs.current[sectionId];
        console.log("section Element: ", element);

        if(element){
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }

    //Initiallize Section refs
    useEffect(() =>{
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 100;

            for(let i= navItems.length -1; i >=0; i--){
                const section = sectionRefs.current[navItems[i].id];
                if(section && section.offsetTop <= scrollPosition){
                    setActiveSection(navItems[i].id);
                    break;
                }
            }
        }
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    },[]); //when is section changed

    const navItems = [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'skills', label: 'Skills' },
        { id: 'projects', label: 'Projects' },
        { id: 'contact', label: 'Contact' }
    ]

    return( 
        <header className='fixed top-0a left-0a w-full bg-hero text-white'>    
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