'use client';

import {useState, useRef, useEffect} from 'react';

interface UseScrollAnimationOptions {
     threshold?: number;
    rootMargin?: string;
    triggerOnce?: boolean; //can be triggered multiple times
}

//Hooks to trigger animations when element enters viewport
export const useScrollAnimation = ({
    threshold = 0.1,
    rootMargin = '0px',
    triggerOnce = true,
}: UseScrollAnimationOptions = {}) =>{
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() =>{

        const element = ref.current;
        if(!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if(entry.isIntersecting){
                    setIsVisible(true);
                    if(triggerOnce){
                        observer.unobserve(element);
                    }
                }
                else if(!triggerOnce){
                    setIsVisible(false);
                }
            },
            {
                threshold,
                rootMargin
            }
        )

        observer.observe(element);

        return () => {
            observer.unobserve(element);
        }
    },[threshold, rootMargin, triggerOnce])

    return {ref, isVisible};
}

