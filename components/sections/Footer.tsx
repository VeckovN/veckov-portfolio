const Footer = () => {
    return (
        <footer className='pt-15 pb-5 px-6  w-full   bg-about'>
            <div className='max-w-[1280px] w-full mx-auto flex flex-col items-center'>
                <div className=' w-full h-[1px] bg-neon-3 shadow-[0px_0px_3px_0px_var(--color-neon-2)]'></div>
                <div className='mt-5 flex flex-col items-center font-rubik text-white'>
                    <div className='text-sm md:text-base lg:text-xl'>&copy; 2026 Novak Veckov. All Rights reserved</div>
                    <p className='mt-1 text-xs md:text-sm lg:text-base'>Built with Next.js, Typescript and Tailwind</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;