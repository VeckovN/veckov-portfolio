import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface ProjectCardProps {
    title: string;
    subTitle: string;
    shortDesc: string;
    techList: TechListInterface[];
    techMoreCount?: number;
    categoryList: string[];
    listTitle: string;
    listItems: ProjectCardListItemProp[];
    image: StaticImageData;
    githubUrl?: string;
    githubData?: {
        url:string;
        icon:StaticImageData
    }
    liveUrl?: string;
    liveInfoData?: {
        url:string;
        icon:StaticImageData
    }
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
    subTitle,
    shortDesc,
    techList,
    techMoreCount,
    categoryList,
    listTitle,
    listItems,
    image,
    githubData,
    liveInfoData
}: ProjectCardProps) =>{

    return (
        <div className="max-w-[450px] md:max-w-[580px] min-h-[1000px]a  w-fulla h-full bg-red-100 flex rounded-t-xl flex-col bg-red-100a">
            <div className='image rounded-xl'>
                {/* include images for each breakpoint */}
                <Image
                    src={image}
                    alt='Growiva'
                    className="w-full h-full lg:min-h-[370px]"
                />
            </div>

            {/* To ensure that all ProjectCard components in the same grid row 
                visually align — especially the bottom action buttons — i use
                flex-grow proportions (flex-1, flex-2, flex-4) on specific sections. 
            
                Taht makes the 'shorter' container that has more spaces been streacted to equal height ,
                as bigger component at the same row and matching their sections
            */}

           {/* flex-1 → lets the whole content block stretch so all cards match height */}
            <div className='flex-1 relative px-5 md:px-6 py-3 flex flex-col border-b border-x-1 rounded-b-xl border-neon-2 bg-project-card'>
            {/* <div className=' flex-1 relative px-5 md:px-6 py-3 flex flex-col border-b border-x-1 rounded-b-xl border-neon-2 bg-project-card'> */}
                <div className='absolute top-2 right-2 flex gap-x-2'>
                    {categoryList.map((el) => (
                        <div key={`${el}-category`} className='text-xs md:text-[13px] font-semibold border-1 border-hero-p rounded-lg px-2 py-1 text-center'>
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
                    <div className='mb-2 w-full bg-red-100a w-20'>
                        <h4 className='text-sm md:text-xl'>
                            Tech Stack
                        </h4> 

                        <div className='h-[1px] w-19 md:w-26 mb-1 mx-autoa  bg-neon-3'>

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
                            <button className='text-[9px] sm:text-xsa md:text-[13px] items-center border-1 border-neon1 h-6 px-2 md:h-8 md:px-3 rounded-xl'>
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

                    <button className='mt-2 ml-2 font-rubik font-medium border-1 border-white px-2 py-1 md:py-[6px] rounded-2xl w-16 md:w-22 text-[9px] md:text-[13px]'>
                        Find more
                    </button>  
                </div>

                {/* flex-1 → keeps button row at the bottom without stretching */}
                <div className='flex-1'>
                     {/* GlowLine */}
                    <div className='mt-3 md:mt-4 w-full h-[1px] bg-neon-1'></div>
                
                    <div className="flex-1 mt-3 md:mt-4 w-full flex justify-between font-rubik">
                        <a 
                            href={githubData?.url}
                            target="_blank"
                            // rel="noopener noreferrer"
                            className={`
                                ${githubData?.url ? 'visible' : 'invisible'} 
                                text-[9px] md:text-[13px] font-bold flex gap-x-1 items-center border-1 border-neon1
                                px-1 py-1 md:px-2 md:py-2 rounded-md group
                                hover:border-neon-1
                            `}
                        >
                            {githubData?.icon && (
                                <Image 
                                    className='w-4 h-4 md:w-5 md:h-5'
                                    src={githubData.icon}
                                    alt="github"
                                />
                            )}
                            <div className='group-hover:text-neon-1'>Source</div>
                        </a>
                        <Link
                            href={`/project/${title}`} 
                            className="
                                text-[9px] md:text-[14px] font-bold flex gap-x-1 items-center 
                                border-1 border-neon1 px-5 py-1 md:px-8 md:py-2 rounded-md 
                                hover:bg-neon-1
                            "
                        >
                            View Details
                        </Link>
                    
                        <a 
                            href={liveInfoData?.url}
                            target="_blank"
                            className={`
                                ${liveInfoData?.url ? 'visible' : 'invisible'}  
                                text-[9px] md:text-[13px]  font-bold flex gap-x-1 
                                items-center border-1 border-neon1 px-4 py-1 rounded-md
                                hover:border-neon-1
                            `}
                        > 
                            {liveInfoData?.icon && (
                                <Image
                                    className='w-4 h-4'
                                    src={liveInfoData.icon}
                                    alt='live-icon'
                                />
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