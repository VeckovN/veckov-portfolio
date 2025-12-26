'use client';

import {useEffect, useRef} from 'react';

interface StarSkyProps {
    starColorRGB?: [number, number, number];
    starCount?: number;
    speedBlink?: number;
}

interface Star {
    x: number;
    y: number;
    z: number;
    brightness: number;
    blinkSpeed: number;
    blinkPhase: number;
}

const StarSky = ({
    starColorRGB = [255, 255, 255], 
    starCount= 400, 
    speedBlink = 0.05,
}: StarSkyProps) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const animationFrameRef = useRef<number>(null);
    const starsRef = useRef<Star[]>([])

    useEffect(() =>{
        const canvas = canvasRef.current;
        if(!canvas) return;

        const context = canvas.getContext('2d');
        if(!context) return;

        const createStars = (count: number):Star[] =>{
            const stars:Star[] = [];

            const w = canvas.width;
            const h = canvas.height;

            for(let i=0; i<count; i++){
                stars.push({
                    x: Math.random() * w,
                    y: Math.random() * h,
                    z: Math.random() * 500,
                    brightness: 0.3, // Default 40% brightness
                    blinkSpeed: Math.random() * speedBlink * 2 + speedBlink, // Random blink speed
                    blinkPhase: Math.random() * Math.PI * 2, // Random starting phase
                });
            }
            return stars;
        }

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;

            starsRef.current = createStars(starCount);
        };
        resizeCanvas();

        window.addEventListener('resize', resizeCanvas);

        
        const clearCanvas = () => {
            context.clearRect(0, 0, canvas.width, canvas.height);
        };

        const drawStar = (x: number, y: number, brightness: number) => {
            context.fillStyle = `rgba(${starColorRGB[0]}, ${starColorRGB[1]}, ${starColorRGB[2]}, ${brightness})`;
            context.fillRect(Math.floor(x), Math.floor(y), 1.6, 1.6);
        };

        let lastTime: number = 0;
        const tick = (currentTime: number) => {
            const deltaTime = currentTime - lastTime;
            lastTime = currentTime;

            clearCanvas();

            starsRef.current.forEach((star) => {
                const scale = 1 - star.z / 1000;
                const x = star.x;
                const y = star.y;

                if (x < -10 || x >= canvas.width + 10 || y < -10 || y >= canvas.height + 10) {
                    return;
                }
                const depthBrightness = 0.3 + scale * 0.7;

                // Update blink phase (creates animation) - increased multiplier for visible effect
                star.blinkPhase += star.blinkSpeed * deltaTime * 0.01;
                // Calculate blinking intensity (oscillates -0.3 to +0.3)
                const blinkEffect = Math.sin(star.blinkPhase) * 0.3;
                // Combine: base brightness + blink effect, then multiply by depth
                const finalBrightness = (star.brightness + blinkEffect) * depthBrightness;

                drawStar(x, y, finalBrightness);
            });

            animationFrameRef.current = requestAnimationFrame(tick);
        };

        animationFrameRef.current = requestAnimationFrame(tick);

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        };
    },[starCount, speedBlink]);

    return (
        <canvas
            ref={canvasRef}
            className='absolute inset-0 w-full h-full mix-blend-screen z-0'
            style={{ pointerEvents: 'none' }}
        />
    )
}

export default StarSky;