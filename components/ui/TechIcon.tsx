import { ReactElement } from "react";
import { StaticImageData } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

interface TechIconProps {
    title: string;
    icon: StaticImageData;
}

const TechIcon = ({title, icon}: TechIconProps):ReactElement =>{
    return (
        <div className='w-fulla h-fulla flex flex-col items-center bg-red-100a'>
            <div 
                className='
                    border-1 rounded-lg lg:rounded-2xl border-neon-2 
                    w-[55px] h-[55px]
                    sm:w-[62px] sm:h-[62px]
                    md:w-[72px] md:h-[72px]
                    lg:w-[80px] lg:h-[80px]
                '
            >
                <div className='flex justify-center items-cetner w-full h-full'>
                    <Image
                        className="w-full p-2 lg:p-3 flexa "
                        src={icon}
                        alt={`${title}-icon`}
                    />
                </div>
            </div>
            <p className='mt-1 text-[10px] sm:text-[11px] md:text-xs lg:text-sm text-center font-inter'>{title}</p>
        </div>
    )
}

export default TechIcon;