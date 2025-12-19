'use client';

import { useState, useEffect } from 'react';

type Breakpoint = 'sm' | 'md' | 'lg' | 'xl';

const breakpoints = {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
};

//change 'width' state on screen width resizing
const useBreakpoint = () => {
    const [breakpoint, setBreakpoint] = useState<Breakpoint>('sm');

    useEffect(() =>{

        const updateBreakpoint = () => {
            const width = window.innerWidth;

            if (width >= breakpoints.xl) {
                setBreakpoint('xl');
            } else if (width >= breakpoints.lg) {
                setBreakpoint('lg');
            } else if (width >= breakpoints.md) {
                setBreakpoint('md');
            } else {
                setBreakpoint('sm');
            }
        }

        updateBreakpoint();

        //Debounce resize handler
        let timeoutId: NodeJS.Timeout;
        const hanldeResize = () => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(updateBreakpoint, 150);
        };

        window.addEventListener('resize', hanldeResize);
        return() => {
            window.removeEventListener('resize', hanldeResize);
            clearTimeout(timeoutId);
        }
    },[])

    return breakpoint;
}

export default useBreakpoint;