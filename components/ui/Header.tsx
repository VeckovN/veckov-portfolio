'use client';

import { useEffect, useState } from "react";

const Header = () => {
    const [activeSection, setActiveSection] = useState('home');
    const [isVisible, setIsVisible] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [fadeOut, setFadeOut] = useState(false);

    const navItems = [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'skills', label: 'Skills' },
        { id: 'projects', label: 'Projects' },
        { id: 'contact', label: 'Contact' }
    ]

    const ScrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if(!element) return;

        const doScroll = () => {
            const header = document.getElementById('header');
            //For all other sections the header height must be calculated on scroll position
            //The moblie nav will have '0' beacause it doesn't containes 'header' id as prop
            const headerHeight = header ? header.offsetHeight : 0;
            const elementTop = element.getBoundingClientRect().top + window.scrollY;
            
            if(sectionId === 'about'){
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                return;
            }
     
            window.scrollTo({
                top: elementTop - headerHeight,  
                behavior: "smooth",
            });

        }
        
        if(isMobileMenuOpen){
            setIsMobileMenuOpen(false);
            ///Wait on moble menu animation / layout flush
            requestAnimationFrame(() =>{
                requestAnimationFrame(doScroll);
            })
        }
        else{
            doScroll();
        }
        
    }

    useEffect(() => {
        const sections = navItems.map(item =>
            document.getElementById(item.id)
        );

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if(entry.isIntersecting){
                        setActiveSection(entry.target.id);
                    }
                })
            },
            {
                root: null,
                // rootMargin: "-30% 0px -50% 0px", 
                rootMargin: "-30% 0px -80% 0px", 
                threshold: 0,  
            }
        );

        sections.forEach(section => {
            if (section) observer.observe(section);
        });

        return () => observer.disconnect();

    },[]);

    useEffect(() => {
        const about = document.getElementById("about");
        if (!about) return;

        const aboutTop = about.offsetTop + 40;
        let isScrollActive = false;
        // let isFadingOut = false;

        // Scroll handler activated only inside About zone
        function handleScroll() {
            const scrollPos = window.scrollY;
    
            // console.log("fadeOut:" ,fadeOut);

            //The prbolme is there scrtollPos 
            if(scrollPos >= aboutTop){
                if(!isVisible){
                    setIsVisible(true);
                    setFadeOut(false);
                }
            } else {

                if(isVisible && !fadeOut){
                    // console.log("FADE OUT: ", fadeOut);
                    setFadeOut(true);
                    setTimeout(() => {
                        setIsVisible(false);
                        setFadeOut(false);
                    }, 100); // must match animation duration
                }
            }
        }

        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];

                // If About section is near viewport → enable scroll tracking
                if (entry.isIntersecting) {
                    if (!isScrollActive) {
                        window.addEventListener("scroll", handleScroll);
                        isScrollActive = true;
                    }
                } else {
                    // When About is not intersecting, clean scroll listener
                    if (isScrollActive) {
                        window.removeEventListener("scroll", handleScroll);
                        isScrollActive = false;
                    }
                }
            },
            {
                root: null,
                threshold: 0,
            }
        );

        observer.observe(about);

        return () => {
            observer.disconnect();
            window.removeEventListener("scroll", handleScroll);
        };
    }, [isVisible, fadeOut]);


    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [isMobileMenuOpen]);

    //only if the siMobileMenuOpen and isVisible becomes false (after removing )
    //the fade out animation shoud be trigger (that means the isVisible shold be delay for enouight for fade-out)
    return( 
        <header 
            id='header'
            className={`
                animate-slide-down top-0 left-0 w-full text-white z-30
                ${isVisible 
                    ? 
                        `animate-slide-down fixed bg-about shadow-[0px_2px_10px_0px_var(--color-neon-glow-3)]
                        ${fadeOut ? 'animate-[slide-up_.3s_ease-in_forwards]' : ''}
                    `
                    : 'absolute'
                }
                ${isMobileMenuOpen ? 'bg-mobile-header': ''}
            `}>    
            <div className='max-w-[1280px] h-full items-center py-4 px-10 w-full flex justify-between mx-auto'>
                <div className='font-rubik text-xl md:text-2xl xl:text-3xl mx-2 cursor-pointer'>
                    NovakV
                </div>
                
                <nav className="hidden md:flex gap-8">
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => ScrollToSection(item.id)}
                            className={`
                                md:text-md lg:text-lg font-inter
                                drop-shadow-[0_0_20px_var(--color-neon-3)] 
                                hover:text-neon-1 transition-colors duration-200 relative cursor-pointer
                            ${activeSection === item.id ? 'text-neon-1': ''}
                            `}
                        >
                            {item.label}
                            {activeSection === item.id && (
                                <span 
                                    className={`
                                        absolute -bottom-1 left-0 h-0.5 bg-neon-2
                                        transition-all duration-300 ease-out
                                        shadow-[0_0_8px_var(--color-neon-2)]
                                        ${activeSection === item.id ? 'w-full opacity-100' : 'w-0 opacity-0'}
                                    `}
                                /> 
                            )}
                        </button>
                    ))}
                </nav>

                <button 
                    className='flex flex-col md:hidden gap-y-2 cursor-pointer group
                    '
                    onClick={() => setIsMobileMenuOpen((prev)=> !prev)}
                >
                    <span className={`
                        h-0.5 w-7 bg-white delay-100 transition-all duration-150 
                        group-hover:shadow-[0_0_20px_var(--color-neon-3) group-hover:bg-neon-glow-2
                        ${isMobileMenuOpen ? 'rotate-45 translate-y-2 group-hover:shadow-[0_0_20px_var(--color-neon-red)' : ''}
                    `}></span>
                    <span className={`
                        h-0.5 w-7 bg-white delay-75 transition-all duration-150 
                        group-hover:shadow-[0_0_20px_var(--color-neon-3) group-hover:bg-neon-glow-2
                        ${isMobileMenuOpen ? 'opacity-0' : ''}
                    `}></span>
                    <span className={`
                        h-0.5 w-7 bg-white delay-0 transition-all duration-150 
                        group-hover:shadow-[0_0_20px_var(--color-neon-3) group-hover:bg-neon-glow-2
                        ${isMobileMenuOpen ? '-rotate-45 -translate-y-3' : ''}
                    `}></span>
                </button>
            </div>

            {isMobileMenuOpen && (
                <div 
                    className="
                        w-full font-inter pt-3 pb-6 bg-mobile-header animate-[slide-down_.3s_ease-in_forwards]
                        rounded-b-2xl shadow-[0px_2px_10px_0px_var(--color-neon-glow-3)]
                        "
                    style={{ clipPath: 'inset(10px 0px -20px 0px)' }}
                >
                    
                    <div className="flex flex-col relativea top-[8%]a">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => ScrollToSection(item.id)}
                                className="
                                    text-center text-lg py-2 font-inter hover:text-neon-2 transition-colors cursor-pointer
                                    drop-shadow-[0_0_8px_var(--color-neon-2)]
                                "
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>
                </div>
            )}
           
        </header>
    )
}

export default Header;