'use client';

import { projects } from '@/data/projects.data';
import ProjectCard from '../ui/ProjectCard';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Projects = () => {

    const { ref: titleTextRef, isVisible: isTitleTextVisible } = useScrollAnimation({ threshold: .5});

    return (
        <section id='projects' className="py-10 w-full bg-linear-to-b from-section-gradient-2  to-section-gradient-1 text-white">
            <div className='max-w-[1280px] px-2 w-full mx-auto flex flex-col items-center lg:items-start h-full font-inter'> 
                <div ref={titleTextRef} className='px-2 pb-6 max-w-100 md:max-w-none w-full'>
                    <h2 className={`
                        mb-5 xl:mb-8 text-3xl md:text-4xl xl:text-5xl text-center w-full font-rubik font-bold
                        ${isTitleTextVisible ? 'animate-[slide-down-close_.3s_ease-in_forwards]' : 'opacity-0'}
                    `}>
                        Features Projects
                    </h2>

                    <div className={`
                            mb-8 md:text-xl lg:text-2xl text-center
                            ${isTitleTextVisible ? 'animate-[slide-up-close_.3s_ease-in_forwards] delay-75' : 'opacity-0'}
                        `}>
                        A showcase of my projects, demonstrating my skills of full-stack development
                    </div>
                </div>

                <div className="px-2 w-full gap-y-10 gap-x-4 grid grid-cols-1 lg:grid-cols-2 justify-items-center lg:justif-between">
                    {projects.map((project) =>(
                        <ProjectCard
                            key={project.title}
                            {...project}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects