'use client';

import Image from 'next/image';
import TreesSvg from '../../public/images/Trees.svg';

const Hero = () => {
    const ScrollToProjectSection = () => {
        const element = document.getElementById('projects');
        const header = document.getElementById('header');

        if(!element) return;

        const headerHeight = header ? header.offsetHeight : 0; 
        const elementTop = element.getBoundingClientRect().top + window.scrollY;

        window.scrollTo({
            top: elementTop - headerHeight,  
            behavior: "smooth",
        });        
    }

    return (
        <section id='home' className='relative min-h-screen w-full bg-hero'>
            <div className='absolute bottom-0 w-full max-h-[320px]a'>
                {/* <Image
                    priority
                    className='w-full'
                    src={TreesSvg}
                    alt="TreesSvg"
                /> */}
            </div>

            <div className='relative px-6 md:px-10 max-w-[1280px] w-full mx-auto h-full pt-[32vh] sm:pt-[30vh]'>
                {/* Github Glow Icon */}
                <a 
                    href='https://github.com/VeckovN' 
                    target="_blank"
                    className='absolute right-[2%] top-[10%] md:top-[14%]' 
                >
                    <svg 
                        className="h-38 w-38 md:h-40 lg:h-48 lg:w-48 " 
                        width="151" 
                        height="148" 
                        viewBox="0 0 151 148" 
                        fill="none"
                    >
                        <g id="Group 24">
                            <g id="body" filter="url(#filterGlow)">
                            <path fillRule="evenodd" clipRule="evenodd" d="M75.1758 51.0558C61.8569 51.0558 51.0566 61.4977 51.0566 74.3799C51.0566 84.6854 57.9675 93.4279 67.5508 96.5123C68.7558 96.7286 69.1983 96.0064 69.1983 95.3903C69.1983 94.8341 69.176 92.9968 69.1656 91.0479C62.4556 92.4588 61.0397 88.2959 61.0397 88.2959C59.9426 85.6 58.3617 84.8832 58.3617 84.8832C56.173 83.4355 58.5267 83.4657 58.5267 83.4657C60.9483 83.6298 62.2239 85.8692 62.2239 85.8692C64.3751 89.4342 67.8663 88.4037 69.2427 87.8081C69.4591 86.3006 70.0842 85.2713 70.774 84.6889C65.4168 84.0999 59.7848 82.0996 59.7848 73.1624C59.7848 70.616 60.7274 68.5353 62.2703 66.9016C62.0195 66.3145 61.1939 63.9422 62.5035 60.7295C62.5035 60.7295 64.5285 60.1026 69.1376 63.1203C71.0619 62.6031 73.1257 62.3432 75.1758 62.3343C77.2247 62.3432 79.2896 62.6024 81.2176 63.1195C85.8211 60.1019 87.8437 60.7287 87.8437 60.7287C89.1565 63.9411 88.3309 66.3137 88.0805 66.9008C89.627 68.5346 90.5628 70.6152 90.5628 73.1617C90.5628 82.12 84.9204 84.0921 79.5497 84.67C80.4152 85.3938 81.186 86.8136 81.186 88.9892C81.186 92.11 81.158 94.6217 81.158 95.3899C81.158 96.0106 81.5926 96.7379 82.8148 96.5089C92.3925 93.4213 99.2953 84.6815 99.2953 74.3799C99.2949 61.4985 88.4959 51.0558 75.1758 51.0558Z" fill="white"/>
                        </g>
                            <path id="tail" d="M60.1893 84.5436C60.1362 84.6595 59.9477 84.6943 59.776 84.6151C59.6002 84.5394 59.5024 84.3814 59.5591 84.2651C59.611 84.1454 59.7999 84.1126 59.9745 84.1925C60.1502 84.2686 60.2501 84.4281 60.1889 84.544L60.1893 84.5436ZM61.1663 85.5977C61.0517 85.7008 60.8268 85.6529 60.6742 85.4895C60.5161 85.3273 60.4865 85.1098 60.6035 85.0052C60.7225 84.9024 60.9406 84.9511 61.0988 85.1133C61.2561 85.2779 61.2873 85.4934 61.1667 85.598L61.1663 85.5977ZM62.1177 86.9406C61.9699 87.0402 61.7278 86.9472 61.5785 86.7398C61.4307 86.532 61.4307 86.2828 61.5825 86.1836C61.7314 86.0839 61.9699 86.1739 62.1217 86.3794C62.2686 86.5899 62.2686 86.8394 62.1177 86.9406ZM63.4201 88.2387C63.2883 88.3797 63.0063 88.3419 62.8002 88.1499C62.5898 87.9618 62.531 87.6941 62.6632 87.5536C62.7974 87.4122 63.0806 87.4516 63.2879 87.6424C63.4984 87.8301 63.5619 88.0982 63.4209 88.2384L63.4201 88.2387ZM65.2174 88.9923C65.1587 89.175 64.8879 89.258 64.6143 89.18C64.3415 89.1 64.163 88.8865 64.2189 88.7018C64.2748 88.5176 64.5476 88.4315 64.8228 88.5145C65.0956 88.5941 65.2741 88.8065 65.2174 88.9923ZM67.1917 89.1317C67.1985 89.3241 66.9668 89.4832 66.6804 89.4871C66.3917 89.4936 66.158 89.3376 66.1552 89.1483C66.1552 88.954 66.3821 88.7969 66.6705 88.7914C66.9568 88.7864 67.1921 88.9409 67.1921 89.1313L67.1917 89.1317ZM69.0281 88.8297C69.0625 89.017 68.8632 89.2097 68.5784 89.2611C68.2988 89.3113 68.0392 89.1947 68.0033 89.0089C67.9689 88.8165 68.1718 88.6238 68.4514 88.574C68.7366 88.5265 68.9922 88.6393 69.0281 88.8297Z" fill="white"/>
                        </g>
                        <defs>
                            <filter id="filterGlow" x="0.000801086" y="0" width="150.35" height="147.608" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset/>
                                <feGaussianBlur stdDeviation="0.607808"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_107_813"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset/>
                                <feGaussianBlur stdDeviation="1.21562"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/>
                                <feBlend mode="normal" in2="effect1_dropShadow_107_813" result="effect2_dropShadow_107_813"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset/>
                                <feGaussianBlur stdDeviation="4.25465"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/>
                                <feBlend mode="normal" in2="effect2_dropShadow_107_813" result="effect3_dropShadow_107_813"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset/>
                                <feGaussianBlur stdDeviation="8.50931"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/>
                                <feBlend mode="normal" in2="effect3_dropShadow_107_813" result="effect4_dropShadow_107_813"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset/>
                                <feGaussianBlur stdDeviation="14.5874"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/>
                                <feBlend mode="normal" in2="effect4_dropShadow_107_813" result="effect5_dropShadow_107_813"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset/>
                                <feGaussianBlur stdDeviation="25.5279"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/>
                                <feBlend mode="normal" in2="effect5_dropShadow_107_813" result="effect6_dropShadow_107_813"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect6_dropShadow_107_813" result="shape"/>
                            </filter>
                        </defs>
                    </svg>
                </a>
                <div className='
                        flex flex-col items-center text-center font-inter
                        md:items-start md:px-10a mx:px-0a
                    '>
                    <h3 className='pb-2 text-4xl xl:text-5xl text-white font-bold drop-shadow-[0_0_1px_var(--color-neon-2)]'>Hi, I'm</h3>
                    <h2 className='text-[42px] leading-[1.0] text-5xla xl:text-6xl text-white font-rubik font-bold drop-shadow-[0_0_3px_var(--color-neon-2)]'> Novak Veckov</h2>
                    <div className='md:hidden py-2 flex justify-center'>
                        <div className='md:hidden'>
                            <div className='text-2xl font-bold text-white drop-shadow-[0_0_10px_var(--color-neon-2)]'>Full Stack Developer </div>                    
                            <p className="mt-1 text-center text-hero-p font-bold">
                                I build production-ready web  applications with modern technologies.
                            </p>
                        </div>

                    </div>

                    <div className='hidden md:flex flex-start max-w-[600px] xl:max-w-[800px]'>
                        <div className='py-1 text-2xl xl:text-3xl font-bold text-white text-start'>
                            <span className='drop-shadow-[0_0_10px_var(--color-neon-2)]'>Full Stack Developer.</span>  
                            <span className='ml-1 text-centera text-hero-p '> 
                                I build production-ready web applications with modern technologies.
                            </span> 
                        </div>
                    </div>

                    <button 
                        className='
                            mt-2 text-white text-sm font-rubik font-semibold border-2 py-2.5 px-7 rounded-3xl
                            md:text-sm md:mt-3 xl:text-base
                            cursor-pointer hover:text-neon-glow-3 hover:shadow-[0px_0px_10px_1px_var(--color-neon-glow-project)]
                            transition-shadow transition-colors duration-100 ease-in-out
                        '
                        onClick={() => ScrollToProjectSection()}
                        
                        >
                        View Projects
                    </button>

                </div>
            </div>
            
        </section>
    )
}


export default Hero;