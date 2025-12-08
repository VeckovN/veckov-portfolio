import EmailIcon from "@/public/images/Contact/Email.svg";
import LocationIcon from "@/public/images/Contact/location.svg"; 
import GithubIcon from "@/public/images/Contact/contactGithub.svg"; 
import LinkedinIcon from "@/public/images/Contact/contactLinkedin.svg"; 

import Image from "next/image";
import ContactForm from "@/components/ui/ContactForm";

const Contact = () =>{
    return(
        <section id="contact" className='bg-red-300a pt-15 pb-10 w-full mx-auto flex flex-col items-center xl:items-start bg-about text-white'>
        
            <div className='bg-red-500a px-6 md:px-10 xl:px-2a max-w-[1280px] w-full mx-auto flex flex-col items-center mx-autoa'>

                <div className='px-3 pb-6 md:px-5 w-full'>
                    <h2 className='mb-5 xl:mb-8 text-3xl md:text-4xl xl:text-5xl text-center w-full font-rubik font-bold'>
                        Get In Touch
                    </h2>

                    <div className='mb-8 md:text-xl xl:text-2xl text-center'>
                        I’m open to full-time roles, collaborations, and selected freelance projects.
                    </div>
                </div>

                <div className="w-full flex flex-col xl:flex-row gap-x-6 bg-blue-950a max-w-[550px] md:max-w-[720px] xl:max-w-none xl:mt-5">
                    
                    <div className="w-full bg-red-500a flex flex-col gap-y-4 xl:gap-y-6 xl:mt-9 mx-auto">
                        
                        <a 
                            href="mailto:novakveckovdev@gmail.com?subject=Portfolio Contact"
                            className="flex w-full py-3 border-1 border-neon-3 rounded-lg hover:border-neon-2 cursor-pointer"
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

                        <div className="flex w-full py-3 border-1 border-neon-3 rounded-lg hover:border-neon-2">
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
                                className="p-1 border-1 border-neon-3 rounded-md"
                            >
                                <Image 
                                    className='w-7 md:w-9'
                                    src={GithubIcon}
                                    alt="github"

                                />
                            </a>

                            <a 
                                href='https://rs.linkedin.com/in/novak-veckov-4299aa1a1'
                                target="_blank"
                                className="p-1 border-1 border-neon-3 rounded-md"
                            >
                                <Image 
                                    className='w-7 md:w-9'
                                    src={LinkedinIcon}
                                    alt="github"

                                />
                            </a>
                        </div>
                    </div>

                    <div className='w-full flex bg-red-300a mt-10 xl:mt-0'>
                        <ContactForm/>
                    </div>

                </div>
            </div>

        </section>
    )
}

export default Contact;