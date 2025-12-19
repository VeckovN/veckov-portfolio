'use client';

import { FormEvent, useState } from "react";

const ContactForm = () =>{
    const [result, setResult] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        setIsLoading(true);
        const form = event.currentTarget;
        const formData = new FormData(form);
        formData.append("access_key", `${process.env.NEXT_PUBLIC_CONTACT_FORM_ACCESS_KEY}`);

        try{
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });
    
            const data = await response.json();
    
            if(data.success){
                setResult("Success");
                form.reset();
            }
            else{
                setResult("Error");
            }        
        }
        catch(error){
            console.error('error: ', error);
            setResult("Error");
        } finally {
            setIsLoading(false);
        }
  };

    return (
        <form className="w-full h-full" onSubmit={onSubmit}>
            <div className="flex flex-col gap-y-5 gap-x-5 md:flex-row w-full">
                <div className='flex flex-col flex-1 gap-y-2 text-sm md:text-xl'>
                    <label className="font-rubik">Your Name</label>
                    <input 
                        className='
                            border-1 rounded-md border-neon-3 py-4 px-3 font-inter md:text-lg
                            shadow-[0px_0px_6px_1px_var(--color-neon-glow-project)]
                            hover:border-neon-1 hover:text-neon-glow-3  hover:shadow-[0px_0px_5px_1px_var(--color-neon-glow-project)]
                        ' 
                        placeholder="Your Name"
                        type="text" 
                        name="name" 
                        required
                    />
                </div>

                <div className='flex flex-col flex-1 gap-y-2 text-sm md:text-xl'>
                    <label className="font-rubik">Email</label>
                    <input 
                        className='
                            border-1 rounded-md border-neon-3 py-4 px-3 font-inter md:text-lg
                            shadow-[0px_0px_6px_1px_var(--color-neon-glow-project)]
                            hover:border-neon-1 hover:text-neon-glow-3 hover:shadow-[0px_0px_5px_1px_var(--color-neon-glow-project)]
                        ' 
                        placeholder="email@example.com"
                        type="email" 
                        name="email" 
                        required
                    />
                </div>
            </div>

            <div className="mt-5 flex flex-col text-sm md:text-xl gap-y-2">
                    <label className="font-rubik">Message</label>
                    <textarea
                        rows={5}
                        className='
                            border-1 w-full rounded-md border-neon-3 py-4 px-3 font-inter md:text-lg
                            shadow-[0px_0px_5px_1px_var(--color-neon-glow-project)]
                            hover:border-neon-1 hover:text-neon-glow-3 hover:shadow-[0px_0px_5px_1px_var(--color-neon-glow-project)]
                        ' 
                        placeholder="Write message..."
                        name="message" 
                        required
                    />                        
            </div>

            {result && 
                <div className='bg-blue-950a w-full mt-4'>
                    <p className={`text-md font-semibold font-inter text-center ${result == 'Success' ? 'text-white' : 'text-red-300'}`}>
                        {result === 'Success' ? "Thanks for reaching out! I'll get back to you soon." : "Error on sending message, Please try again."}
                    </p>
                    
                </div>
            }

            <div className='mt-5 w-full mx-auto flex justify-center'>
                <button
                    className='
                        flex items-center justify-center gap-2
                        border-1 border-neon-3 rounded-lg text-sm md:text-base font-semibold py-2 w-38 md:w-44
                        disabled:opacity-50 disabled:cursor-default disabled:cursor-not-alloweda
                        cursor-pointer shadow-[0px_0px_6px_1px_var(--color-neon-glow-project)]
                        hover:border-neon-1 hover:text-neon-glow-3 hover:shadow-[0px_0px_5px_1px_var(--color-neon-glow-project)]
                        transition-shadow duration-100 ease-in-out
                    '
                    type="submit"
                    disabled={isLoading}
                >
                    {isLoading ? (
                        <>
                            <svg 
                                className="animate-spin h-5 w-5 " 
                                xmlns="http://www.w3.org/2000/svg" 
                                fill="none" 
                                viewBox="0 0 24 24"
                            >
                                <circle 
                                    className="opacity-25" 
                                    cx="12" 
                                    cy="12" 
                                    r="10" 
                                    stroke="currentColor" 
                                    strokeWidth="4"
                                />
                                <path 
                                    className="opacity-75" 
                                    fill="currentColor" 
                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                />
                            </svg>
                            Sending...
                        </>
                    ) : (
                        'Send Message'
                    )}
                </button>
            </div>

        </form>
    )
}

export default ContactForm;