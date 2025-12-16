import TechIcon from "./TechIcon";
import { StaticImageData } from "next/dist/shared/lib/get-img-props";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

interface TechCategoryProps {
    title: string;
    items: {title: string, icon: StaticImageData}[];
}

const TechCategory = ({title, items}: TechCategoryProps) =>{

    const { ref: categoryRef, isVisible: isCategoryVisible } = useScrollAnimation({ threshold: .2 });
    
    return(
        <div ref={categoryRef} className='relative flex w-full justify-start items-start pl-6'>
            {/* origin-* is applied, any subsequent transformations (I have 'rotate') applied to the element */}
            <h3 className='
                absolute top-0 rotate-90 origin-top-left
                font-rubik text-xl md:text-2xl xl:text-3xl font-bold whitespace-nowrap tracking-wider
            '>
                {title}
            </h3>
            <div 
                className='
                    w-full
                    grid
                    grid-cols-[repeat(auto-fill,minmax(60px,1fr))]
                    sm:grid-cols-[repeat(auto-fill,minmax(70px,1fr))]
                    md:grid-cols-[repeat(auto-fill,minmax(80px,1fr))]
                    lg:grid-cols-[repeat(auto-fill,minmax(90px,1fr))]
                    gap-x-5 
                    gap-y-4 
                '>
                {items.map((tech, index) => (
                    <TechIcon
                        index={index}
                        isVisible={isCategoryVisible}
                        key={tech.title}
                        title={tech.title}
                        icon={tech.icon}
                    />
                ))}
            </div>
        </div>
    )
}
export default TechCategory