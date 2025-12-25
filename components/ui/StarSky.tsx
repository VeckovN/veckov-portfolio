'use client';

import {useEffect, useRef} from 'react';

interface StarSkyProps {
    starColorRGB?: [number, number, number];
    starCount?: number;
    speedBlink?: number;
    starFallingSpeed?: number;
    starFallingFrequency?: number;
}

interface Star {
    x: number;
    y: number;
    z: number;
    brightness: number;
    blinkSpeed: number;
    blinkPhase: number;
}

interface MeteorPreset {
  start: { x: number; y: number };
  end: { x: number; y: number };
  rotate: number;
}

const METEOR_PRESETS = (w: number, h: number): MeteorPreset[] => [
  {
    start: { x: w + 100, y: h * 0.1 },
    end:   { x: -w - 200, y: h + 100 },
    rotate: -20,
  },
  {
    start: { x: w + 200, y: h * 0.15 },
    end:   { x: -w - 600, y: h + 600 },
    rotate: -25,
  },
  {
    start: { x: w + 300, y: h * 0.3 },
    end:   { x: -w - 800, y: h + 800 },
    rotate: -20,
  },
  {
    start: { x: -300, y: h * 0.2 },
    end:   { x: w + 800, y: h + 700 },
    rotate: -145,
  },
  {
    start: { x: -100, y: h * 0.1 },
    // end:   { x: w + 800, y: h + 700 },
    end:   { x: w + 900, y: h + 700 },
    rotate: -145,
  },
//   {
//     start: { x: w * 0.7, y: -300 },
//     end:   { x: -500, y: h + 900 },
//     rotate: -60,
//   },
//   {
//     start: { x: w * 0.8, y: -300 },
//     end:   { x: -500, y: h + 900 },
//     rotate: -60,
//   },
];

// const StarSky = ({starColor, starCount, speedBlink = 0.06, speedFalling} :StarSkyProps) => {
const StarSky = ({
    starColorRGB = [255, 255, 255], 
    starCount= 800, 
    speedBlink = 0.06,
    starFallingSpeed = 7,
    starFallingFrequency = 6
}: StarSkyProps) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const animationFrameRef = useRef<number>(null);

    useEffect(() =>{

        const canvas = canvasRef.current;
        if(!canvas) return;

        const context = canvas.getContext('2d');
        if(!context) return;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resizeCanvas();

        window.addEventListener('resize', resizeCanvas);

        const createStars = (count: number):Star[] =>{
            const stars:Star[] = [];
            for(let i=0; i<count; i++){
                stars.push({
                    x: Math.random() * 1600 - 800,
                    y: Math.random() * 900 - 450,
                    z: Math.random() * 1000,
                    brightness: 0.4, // Default 40% brightness
                    blinkSpeed: Math.random() * speedBlink * 2 + speedBlink, // Random blink speed
                    blinkPhase: Math.random() * Math.PI * 2, // Random starting phase
                });
            }
            return stars;
        }

        const stars:Star[] = createStars(starCount);

        const clearCanvas = () => {
            context.clearRect(0, 0, canvas.width, canvas.height);
        };


        const drawStar = (x: number, y: number, brightness: number) => {
            context.fillStyle = `rgba(${starColorRGB[0]}, ${starColorRGB[1]}, ${starColorRGB[2]}, ${brightness})`;
            context.fillRect(Math.floor(x), Math.floor(y), 1.5, 1.5);
        };

        let lastTime: number = 0;
        const tick = (currentTime: number) => {
            const deltaTime = currentTime - lastTime;
            lastTime = currentTime;

            // console.log('FPS:', Math.round(1000 / deltaTime));

            clearCanvas();

            const cx = canvas.width / 2;
            const cy = canvas.height / 2;

            stars.forEach((star) => {
                // Calculate 2D position from 3D coordinates
                const x = cx + star.x / (star.z * 0.001);
                const y = cy + star.y / (star.z * 0.001);

                //skip stars outside of the viewport
                if (x < 0 || x >= canvas.width || y < 0 || y >= canvas.height) {
                    return;
                }

                // Calculate blinking effect (70-100% oscillation)
                const depth = star.z / 1000;
                const depthBrightness = 1 - depth * depth;

                // Update blink phase (creates animation) - increased multiplier for visible effect
                star.blinkPhase += star.blinkSpeed * deltaTime * 0.01;

                // Calculate blinking intensity (oscillates -0.3 to +0.3)
                const blinkEffect = Math.sin(star.blinkPhase) * 0.3;
                // Combine: base brightness + blink effect, then multiply by depth
                const finalBrightness = (star.brightness + blinkEffect) * depthBrightness;

                drawStar(x, y, finalBrightness);
            });

            // requestAnimationFrame(tick);
            animationFrameRef.current = requestAnimationFrame(tick);
        };

        // requestAnimationFrame(init);
        animationFrameRef.current = requestAnimationFrame(tick);

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        };
    },[starCount, speedBlink]);


    const spawnMeteor = () => {
        // const container = document.body; // or a ref div
        const container = containerRef.current;
        if (!container) return;

        const { width: w, height: h } = container.getBoundingClientRect();
        

        const presets = METEOR_PRESETS(w, h);
        // const presets = METEOR_PRESETS(window.innerWidth, window.innerHeight);
        // const presets = METEOR_PRESETS(rect.width, rect.height);
        const preset = presets[Math.floor(Math.random() * presets.length)];

        const meteor = document.createElement('div');

        meteor.className = `
            pointer-events-none
            absolute
            w-[160px]
            h-[2px]
            bg-gradient-to-r
            from-white
            via-white/80
            to-transparent
            opacity-90
        `;

        meteor.style.left = `${preset.start.x}px`;
        meteor.style.top = `${preset.start.y}px`;
        meteor.style.transform = `rotate(${preset.rotate}deg)`;
        // meteor.style.transition = `transform 1000ms linear, opacity 300ms linear`;

        const dx = preset.end.x - preset.start.x;
        const dy = preset.end.y - preset.start.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        const duration = Math.max(
            1200,
            distance / (starFallingSpeed * 0.6)
        );

        // console.log("duration: ", duration);

         meteor.style.transition = `
            transform ${duration}ms linear,
            opacity 500ms linear
        `;
        
        container.appendChild(meteor);

        // force reflow
        meteor.getBoundingClientRect();

        meteor.style.transform = `
            translate(
                ${preset.end.x - preset.start.x}px,
                ${preset.end.y - preset.start.y}px
            )
            rotate(${preset.rotate}deg)
        `;

        meteor.style.opacity = '0';

        setTimeout(() => meteor.remove(), 1200);
    };

    useEffect(() => {
        let meteorTimeout: number;

        const scheduleMeteor = () => {
            const delay =
                starFallingFrequency * 1000 * (0.7 + Math.random() * 0.6);

            meteorTimeout = window.setTimeout(() => {
                spawnMeteor();
                scheduleMeteor();
            }, delay);
        };

        scheduleMeteor();

        return () => {
        clearTimeout(meteorTimeout);
        };
    },[])

    return (
        <div ref={containerRef} className='absolute inset-0 overflow-hidden pointer-events-none'>
            <canvas
                ref={canvasRef}
                className='absolute inset-0a w-full h-full mix-blend-screen z-0'
                // style={{
                //     zIndex:0,
                //     // padding:0,
                //     // margin:0,
                //     position: 'absolute',
                //     top: 0,
                //     right: 0,
                //     bottom: 0,
                //     left: 0,
                //     // opacity:1,
                //     width: '100%',
                //     height: '100%',
                //     pointerEvents: 'none',
                //     mixBlendMode: 'screen'
                // }}
            >

            </canvas>

        </div>
    )
}

export default StarSky;