
'use client';

import { GitHubCalendar, Year } from 'react-github-calendar'
import useBreakpoint from '@/components/hooks/useBreakpoint';

interface GithubActivityCalendarProps {
    selectedYear: Year;
}

const GithubActivityCalendar = ({selectedYear}: GithubActivityCalendarProps) =>{
    const breakpoint = useBreakpoint();

    const getCalendarSize = () => {
        switch (breakpoint) {
            case 'sm':
                return { blockSize: 10, fontSize: 14 };
            case 'md':
                return { blockSize: 12, fontSize: 14 };
            case 'lg':
                return { blockSize: 12, fontSize: 14 };
            case 'xl':
                return { blockSize: 13, fontSize: 15 };
            default:
                return { blockSize: 11, fontSize: 12 };
        }
    }

    const {blockSize, fontSize} = getCalendarSize();
    
    return (
        <div className='
            w-full px-3 py-1 bg-white text-black rounded-md 
            shadow-[0px_0px_15px_1px_var(--color-neon-glow),inset_0px_0px_30px_1px_var(--color-neon-glow-3)]
        '>
            <GitHubCalendar 
                username='VeckovN' 
                year={selectedYear}
                blockSize={blockSize}
                theme={{
                    dark: ['#e9f7faff', '#7ce8fdff', '#3ba9beff', '#29889bff', 'rgba(20, 94, 110, 1)'],
                }}
                fontSize={fontSize}
            />
        </div>
    )
}

export default GithubActivityCalendar