import Image from "next/image";
import { ReactElement } from "react";

import LocationIcon from '../../public/images/About/LocationAbout.svg';
import UniversityIcon from '../../public/images/About/UniversityAbout.svg';
import FocusIcon from '../../public/images/About/FocusAbout.svg';
import InterestsIcon from '../../public/images/About/InterestsAbout.svg';

type CategoryTypes = 'location' | 'university' | 'focus' | 'interests';

interface AboutCardProps {
    category: CategoryTypes;
    context: string;
}

const CardIcons = (category: CategoryTypes) =>{
    if(category === 'location') return LocationIcon;
    if(category === 'university') return UniversityIcon;
    if(category === 'focus') return FocusIcon;
    if(category === 'interests') return InterestsIcon;
}

const AboutCard = ({category, context}: AboutCardProps):ReactElement => {
    return (
        <div className='relative w-[230px] h-[80px] border-1 border-neon-2 rounded-lg flex flex-col'>
            <div className='px-1 absolute top-2 left-1'>
                <Image
                    src={CardIcons(category)}
                    alt={`${category}-icon`}
                />
            </div>
            <div className="mt-1 gap-y-1 flex flex-col h-full justify-center  items-center">

                <div className="font-rubik text-base font-semibold">
                    {category.charAt(0).toUpperCase()}{category.slice(1)}
                </div>
                <p className='px-4 font-inter text-xs text-center'>
                    {context}
                </p>
            </div>
        </div>
    )
}

export default AboutCard