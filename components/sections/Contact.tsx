'use client';
import EmailIcon from "@/public/images/Contact/Email.svg";
import LocationIcon from "@/public/images/Contact/location.svg"; 
import LinkedinIcon from "@/public/images/Contact/contactLinkedin.svg"; 
import GithubIcon from "@/components/ui/GithubIcon";
import Image from "next/image";
import ContactForm from "@/components/ui/ContactForm";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const Contact = () =>{

    const { ref: titleTextRef, isVisible: isTitleTextVisible } = useScrollAnimation({ threshold: 0 });
    const { ref: infoContainerRef, isVisible: isInfoContainerVisible } = useScrollAnimation({ threshold: .2});
    const { ref: contactContainerRef, isVisible: isContactContainerVisible } = useScrollAnimation({ threshold: .4});

    return(
        <section id="contact" className='pt-10 pb-10 sm:py-15 md:py-20 w-full mx-auto flex flex-col items-center xl:items-start bg-about text-white'>
        
            <div className='px-6 md:px-10 xl:px-2a max-w-[1280px] w-full mx-auto flex flex-col items-center'>

                <div className='px-3 pb-6 md:px-5 w-full'>
                    <h2 
                        ref={titleTextRef} 
                        className={`
                            mb-5 xl:mb-8 text-3xl md:text-4xl xl:text-5xl text-center w-full font-rubik font-bold
                            ${isTitleTextVisible ? 'animate-[slide-down-close_.3s_ease-in_forwards]' : 'opacity-0'}
                        `}
                    >
                        Get In Touch
                    </h2>

                    <div
                        className={`
                            mb-8 md:text-xl xl:text-2xl text-center
                            ${isTitleTextVisible ? 'animate-[slide-up-close_.3s_ease-in_forwards] delay-75' : 'opacity-0'}
                        `}
                    >
                        I’m open to full-time roles, collaborations, and selected freelance projects.
                    </div>
                </div>

                <div className="w-full flex flex-col xl:flex-row gap-x-6 bg-blue-950a max-w-[550px] md:max-w-[720px] xl:max-w-none xl:mt-5">            
                    
                    <div 
                        ref={infoContainerRef} 
                        className={`
                            w-full bg-red-500a flex flex-col gap-y-4 xl:gap-y-6 xl:mt-9 mx-auto
                            ${isInfoContainerVisible ? 'animate-[slide-down_.3s_ease-in_forwards] xl:animate-[slide-right_.3s_ease-in_forwards]' : 'opacity-0'}
                        `}
                    >
                        <a 
                            href="mailto:novakveckovdev@gmail.com?subject=Portfolio Contact"
                            className="
                                flex w-full py-3 border-1 border-neon-3 rounded-lg cursor-pointer
                                shadow-[0px_0px_6px_1px_var(--color-neon-glow-project)]
                                hover:border-neon-1 hover:text-neon-glow-3  hover:shadow-[0px_0px_5px_1px_var(--color-neon-glow-project)]
                                transition-shadow transition-colors duration-100 ease-in-out 
                            "
                        >
                            <Image
                                className="w-8a h-8a ml-4"
                                src={EmailIcon}
                                alt="EmailIcon"

                            />

                            <div className="ml-4 flex flex-col justify-center">
                                <div className="font-rubik text-sm md:text-xl">
                                    Email
                                </div>
                                <p className="font-inter text-xs md:text-base">
                                    Click to Email
                                </p>
                            </div>
                        </a>

                        <div 
                            className="
                                flex w-full py-3 border-1 border-neon-3 rounded-lg cursor-pointer
                                shadow-[0px_0px_6px_1px_var(--color-neon-glow-project)]
                                hover:border-neon-1 hover:text-neon-glow-3  hover:shadow-[0px_0px_5px_1px_var(--color-neon-glow-project)]
                                transition-shadow transition-colors duration-100 ease-in-out
                            ">
                            <Image
                                className="w-8h h-8a ml-4"
                                src={LocationIcon}
                                alt="LocationIcon"

                            />

                            <div className="ml-4 flex flex-col justify-center">
                                <div className="font-rubik text-sm md:text-xl">
                                    Location
                                </div>
                                <p className="font-inter text-xs md:text-base">
                                    Niš, Serbia
                                </p>

                            </div>
                        </div>

                        <div className="flex gap-x-4 xl:gap-x-5 xl:mt-1 items-start bg-red-100a">
                            <a 
                                href='https://github.com/VeckovN'
                                target="_blank"
                                aria-label="Visit my Github profile"
                                className="
                                    p-1 border-1 border-neon-3 rounded-md cursor-pointer
                                    shadow-[0px_0px_6px_1px_var(--color-neon-glow-project)]
                                    hover:border-neon-1 hover:text-neon-glow-3 hover:shadow-[0px_0px_5px_1px_var(--color-neon-glow-project)]
                                    transition-shadow duration-100 ease-in-out
                                "
                            >
                                <GithubIcon
                                    className='w-7 md:w-9'
                                />
                            </a>

                            <a 
                                href='https://rs.linkedin.com/in/novak-veckov-4299aa1a1'
                                target="_blank"
                                 aria-label="Visit my LinkedIn profile"
                                className="
                                    p-1 border-1 border-neon-3 rounded-md cursor-pointer
                                    shadow-[0px_0px_6px_1px_var(--color-neon-glow-project)]
                                    hover:border-neon-1 hover:text-neon-glow-3 hover:shadow-[0px_0px_5px_1px_var(--color-neon-glow-project)]
                                    transition-shadow duration-100 ease-in-out
                                "
                            >
                                <Image 
                                    className='w-7 md:w-9'
                                    src={LinkedinIcon}
                                    alt="linkedin"
                                />
                            </a>
                        </div>
                    </div>

                    <div
                        ref={contactContainerRef} 
                        className={`
                            w-full flex mt-10 xl:mt-0
                            ${isContactContainerVisible ? 'animate-[slide-up_.3s_ease-in_forwards] xl:animate-[slide-left_.3s_ease-in_forwards]' : 'opacity-0'}
                        `}
                    >
                        <ContactForm/>
                    </div>

                </div>
            </div>

        </section>
    )
}

export default Contact;