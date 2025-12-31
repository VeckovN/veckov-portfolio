import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import GithubIcon from "./GithubIcon";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

interface ProjectCardProps {
    title: string;
    slug: string;
    subTitle: string;
    shortDesc: string;
    techList: TechListInterface[];
    techMoreCount?: number;
    projectSource: string;
    categoryList: string[];
    listTitle: string;
    listItems: ProjectCardListItemProp[];
    image: StaticImageData;
    githubUrl?: string;
    liveUrl?: string;
}

interface TechListInterface {
    name:string,
    icon:StaticImageData
}

interface ProjectCardListItemProp {
    listName: string;
    listContet: string;
}

const ProjectCard = ({
    title,
    slug,
    subTitle,
    shortDesc,
    techList,
    techMoreCount,
    projectSource,
    categoryList,
    listTitle,
    listItems,
    image,
    githubUrl,
    liveUrl
}: ProjectCardProps) =>{

    const { ref: projectContainerRef, isVisible: isProjectContainerVisible } = useScrollAnimation({ threshold: .2 });

    return (
        <div 
            ref={projectContainerRef} 
            className={`
                max-w-[450px] md:max-w-[580px] min-h-[1000px]a h-full flex rounded-t-xl flex-col
                ${isProjectContainerVisible ? 'animate-[blur-slide-up_.3s_ease-in_forwards] delay-100' : 'opacity-0'}
            `}
        >
            <div className='relative overflow-hidden rounded-t-xl'>
                <Image
                    src={image}
                    alt='Growiva'
                    className="
                        w-full 
                        h-[300px] 
                        md:h-[360px]
                        lg:h-[370px] 
                        lg:min-h-[370px]a
                        object-cover 
                        object-top 
                        "
                />

                <div 
                    className='
                        bg-about text-neon-1 absolute top-2 right-2 border-1 py-1 w-16 md:w-23 text-center font-rubik 
                        text-[9px] md:text-[13px] ashadow-[inset_0px_0px_3px_1px_var(--color-neon-glow-project)] rounded-2xl 
                    '>
                    {projectSource}
                </div>  
            </div>

           {/* flex-1 → lets the whole content block stretch so all cards match height */}
            <div className='flex-1 relative px-5 md:px-6 py-3 flex flex-col border-b border-x-1 rounded-b-xl border-neon-2 bg-project-card'>
                <div className='absolute top-2 right-2 flex gap-x-2'>
                    {categoryList.map((el) => (
                        <div key={`${el}-category`} className='text-xs md:text-[13px] font-rubik font- border-1 border-hero-p rounded-xl px-3 py-1 text-center'>
                            {el}
                        </div>
                    )
                    )}
                </div>
                
                {/* flex-2 → medium growth; balances title/subtitle height between cards */}
                <div className='flex-2 mt-5'>
                    <div className='flex flex-col font-rubik'>
                        <h3 className='text-xl md:text-2xl font-bold'>
                            {title} 
                        </h3>
                        <h4 className='text-base md:text-xl font-semibold'>
                            {subTitle}
                        </h4>

                        <p className='text-sm md:text-lg mt-1 '>
                           {shortDesc}
                        </p>
                    </div>
                </div>

                <div className='flex-1 mt-4 w-full h-full flex flex-col flex-wrap font-rubik'>
                    {/* Here want to keep width of this h4 children (not of parent container) -> i manually set w-20 but want to avoid it */}
                    <div className='mb-2 w-full w-20'>
                        <h4 className='text-sm md:text-xl'>
                            Tech Stack
                        </h4> 

                        <div className='h-[1px] w-19 md:w-26 mb-1 mx-autoa  bg-white shadow-[0px_1px_5px_1px_var(--color-neon-glow-project)]'>

                        </div>
                    </div>
    
                    <div className='w-full flex items-center gap-x-2'>
                        <div className='flex w-fulla flex-wrap gap-x-1.5 gap-y-1 sm:gap-x-2 md:gap-x-3'>
                            {techList.map((tech) =>
                                <Image
                                    key={tech.name}
                                    className='w-[26px] h-[30px] xs:w-[30px] xs:h-[35px] sm:w-[35px] sm:h-[40px]  md:w-[42px] md:h-[45px]'     
                                    src={tech.icon}
                                    alt='techIcon'
                                />
                            )}
                        </div>

                        {techMoreCount && (
                            <button className='
                                h-6 px-2 md:h-8 md:px-3 rounded-xl
                                text-[9px] md:text-[13px] items-center border-1 cursor-pointer  
                                hover:text-neon-glow-3 hover:shadow-[0px_0px_5px_1px_var(--color-neon-glow-project)]
                                transition-shadow transition-colors duration-100 ease-in-out 
                            '>
                                +{techMoreCount} more
                            </button>
                        )
                        }

                    </div>
                </div>  

                {/* flex-4 → largest growth; absorbs space so bottom buttons align across cards */}
                <div className='flex-4 mt-4 flex flex-col'>
                    <div className='text-sm md:text-xl'>
                        {listTitle}
                    </div>

                    <div className='pl-6 mt-2 flex flex-col gap-y-1 text-xs md:text-base'>
                        {listItems.map((item) => (
                             <li key={`${item.listName}`}>
                                <span className='font-bold'>{item.listName}</span> -
                                {item.listContet}
                            </li>
                        ))}
                        
                    </div>

                    <button className='
                        mt-2 ml-2 px-2 py-1 md:py-[6px] w-18 md:w-22 text-[10px] md:text-[13px] 
                        font-rubik font-medium border-1 border-white rounded-2xl cursor-pointer
                        hover:text-neon-glow-3 hover:shadow-[0px_0px_5px_1px_var(--color-neon-glow-project)]
                        transition-shadow transition-colors duration-100 ease-in-out 
                    '>
                        Find more
                    </button>  
                </div>

                {/* flex-1 → keeps button row at the bottom without stretching */}
                <div className='flex-1'>
                     {/* GlowLine */}
                    <div className='mt-4 md:mt-4 w-full h-[1px] bg-white shadow-[0px_1px_5px_1px_var(--color-neon-glow-project)]'></div>
                
                    <div className="flex-1 mt-4 md:mt-4 w-full flex justify-between font-rubik">
                        <a 
                            href={githubUrl}
                            target="_blank"
                            className={`
                                ${githubUrl ? 'visible' : 'invisible'} 
                                text-xs  md:text-[13px] font-bold flex gap-x-1 items-center border-1 border-neon1
                                px-1 py-1 md:px-2 md:py-2 rounded-md cursor-pointer group
                                hover:text-neon-glow-3 hover:shadow-[0px_0px_5px_1px_var(--color-neon-glow-project)]
                                transition-shadow transition-colors duration-100 ease-in-out 
                            `}
                        >
                            {githubUrl && (
                                <GithubIcon 
                                    className='w-4 h-4 md:w-5 md:h-5 group-hover:text-glow-3 transition-colors duration-200'
                                />
                            )}
                            <div>Source</div>
                        </a>
                        <Link
                            href={`/project/${slug}`} 
                            className="
                                text-xs md:text-[14px] font-semibold flex gap-x-1 items-center 
                                border-1 px-3 py-[6px] md:px-8 sm:py-[7px]a md:py-2 rounded-md cursor-pointer
                                hover:text-neon-glow-3 hover:shadow-[0px_0px_10px_1px_var(--color-neon-glow-project)]
                                transition-shadow transition-colors duration-100 ease-in-out
                            "
                        >
                            View Details
                        </Link>
                    
                        <a 
                            href={liveUrl}
                            target="_blank"
                            className={`
                                ${liveUrl ? 'visible' : 'invisible'}  
                                text-xs md:text-[13px] font-bold flex gap-x-1 
                                items-center border-1 border-neon1 px-4 py-1 rounded-md cursor-pointer
                                hover:text-neon-glow-3 hover:shadow-[0px_0px_5px_1px_var(--color-neon-glow-project)]
                                transition-shadow transition-colors duration-100 ease-in-out 
                            `}
                        > 
                            {liveUrl && (
                                <svg className='w-4 h-4 group-hover:text-glow-3 transition-colors duration-200' viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.69389 0.533735C5.69389 0.392179 5.75012 0.256422 5.85022 0.156327C5.95031 0.0562326 6.08607 0 6.22763 0L9.43003 0C9.57663 0 9.70971 0.0590666 9.80649 0.155139L9.80721 0.156562L9.80863 0.157274C9.90819 0.257242 9.96399 0.392647 9.96377 0.533735V3.73614C9.96377 3.8777 9.90754 4.01346 9.80744 4.11355C9.70735 4.21364 9.57159 4.26988 9.43003 4.26988C9.28848 4.26988 9.15272 4.21364 9.05263 4.11355C8.95253 4.01346 8.8963 3.8777 8.8963 3.73614V1.82181L4.46986 6.24825C4.36868 6.34253 4.23486 6.39386 4.09658 6.39142C3.95831 6.38898 3.82638 6.33296 3.72859 6.23518C3.6308 6.13739 3.57479 6.00546 3.57235 5.86718C3.56991 5.72891 3.62124 5.59509 3.71551 5.49391L8.14195 1.06747H6.22763C6.08607 1.06747 5.95031 1.01124 5.85022 0.911142C5.75012 0.811047 5.69389 0.67529 5.69389 0.533735Z" fill="#E9E9E9"/>
                                    <path d="M1.6012 2.4913C1.45965 2.4913 1.32389 2.54753 1.2238 2.64762C1.1237 2.74772 1.06747 2.88348 1.06747 3.02503V8.36238C1.06747 8.657 1.30658 8.89611 1.6012 8.89611H6.93855C7.08011 8.89611 7.21586 8.83988 7.31596 8.73979C7.41605 8.63969 7.47229 8.50393 7.47229 8.36238V5.51579C7.47229 5.37424 7.52852 5.23848 7.62861 5.13839C7.72871 5.03829 7.86447 4.98206 8.00602 4.98206C8.14758 4.98206 8.28333 5.03829 8.38343 5.13839C8.48352 5.23848 8.53975 5.37424 8.53975 5.51579V8.36238C8.53975 8.78705 8.37106 9.19432 8.07077 9.4946C7.77049 9.79489 7.36322 9.96358 6.93855 9.96358H1.6012C1.17654 9.96358 0.769266 9.79489 0.468982 9.4946C0.168698 9.19432 0 8.78705 0 8.36238V3.02503C0 2.60037 0.168698 2.19309 0.468982 1.89281C0.769266 1.59253 1.17654 1.42383 1.6012 1.42383H4.44779C4.58934 1.42383 4.7251 1.48006 4.8252 1.58016C4.92529 1.68025 4.98152 1.81601 4.98152 1.95756C4.98152 2.09912 4.92529 2.23488 4.8252 2.33497C4.7251 2.43507 4.58934 2.4913 4.44779 2.4913H1.6012Z" fill="#E9E9E9"/>
                                </svg>                                
                            )}
                            <div className='group-hover:text-neon-1'>Live</div>
                        </a>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default ProjectCard;