'use client';

import { useScrollAnimation } from '../hooks/useScrollAnimation';

import JSIcon from '../../public/images/TechIcons/js.svg';
import TSIcon from '../../public/images/TechIcons/typescript.svg';
import ReactIcon from '../../public/images/TechIcons/react.svg';
import ReduxIcon from '../../public/images/TechIcons/redux.svg';
import TailwindIcon from '../../public/images/TechIcons/tailwindcss.svg';
import SassIcon from '../../public/images/TechIcons/sass.svg';
import HtmlIcon from '../../public/images/TechIcons/html5.svg';
import CssIcon from '../../public/images/TechIcons/css3.svg';

import NodejsIcon from '../../public/images/TechIcons/nodejs.svg';
import ExpressIcon from '../../public/images/TechIcons/expressjs.svg';
import SocketioIcon from '../../public/images/TechIcons/socketio.svg';
import RabbitmqIcon from '../../public/images/TechIcons/RabbitMQ.svg';

import MongodbIcon from '../../public/images/TechIcons/mongodb.svg';
import PostgresqlIcon from '../../public/images/TechIcons/postgresql.svg';
import RedisIcon from '../../public/images/TechIcons/redis.svg';
import Neo4jIcon from '../../public/images/TechIcons/neo4j.svg';
import ElasticIcon from '../../public/images/TechIcons/elastic.svg';
import MysqlIcon from '../../public/images/TechIcons/mysql.svg';

import DockerIcon from '../../public/images/TechIcons/docker.svg';
import KubernetesIcon from '../../public/images/TechIcons/kubernetes.svg';
import JenkinsIcon from '../../public/images/TechIcons/jenkins.svg';
import JestIcon from '../../public/images/TechIcons/jest.svg';
import GitIcon from '../../public/images/TechIcons/git.svg';
import ViteIcon from '../../public/images/TechIcons/vitejs.svg';
import FigmaIcon from '../../public/images/TechIcons/figma.svg';

import TechCategory from '../ui/TechCategory';

const Tech = () =>{

    const { ref: titleTextRef, isVisible: isTitleTextVisible } = useScrollAnimation({ threshold: .2 });

    return (
        <section id='skills' className="py-10 sm:pb-15 md:pb-30 w-full bg-linear-to-b from-section-gradient-1  to-section-gradient-2 text-white">

            <div className='px-6 md:px-10 lg:px-2a max-w-[1280px] w-full mx-auto h-full flex flex-col items-center lg:items-start'>
                <h2 
                    ref={titleTextRef} 
                    className={`
                        mb-12 xl:mb-8 text-3xl md:text-4xl xl:text-5xl text-center w-full font-rubik font-bold
                        ${isTitleTextVisible ? 'animate-[slide-down_.3s_ease-in_forwards]' : 'opacity-0'}    
                    `}
                >
                    Technologies I Use
                </h2>

                <div className='
                    xl:py-10
                    w-full
                    grid
                    grid-cols-1
                    gap-x-8
                    gap-y-14
                    xs:gap-y-15
                    md:gap-y-18
                    xl:gap-y-25
                '>
                    <TechCategory
                        title="Front-End"
                        items={[
                            { title: "JavaScript", icon: JSIcon },
                            { title: "TypeScript", icon: TSIcon },
                            { title: "React", icon: ReactIcon },
                            { title: "Redux", icon: ReduxIcon },
                            { title: "Tailwind", icon: TailwindIcon },
                            { title: "SASS", icon: SassIcon },
                            { title: "HTML", icon: HtmlIcon },
                            { title: "CSS", icon: CssIcon },
                        ]}
                    />

                    <TechCategory
                        title="Back-End"
                        items={[
                            { title: "Node.js", icon: NodejsIcon},
                            { title: "Express.js", icon: ExpressIcon },
                            { title: "Typescript", icon: TSIcon },
                            { title: "Socket.IO", icon: SocketioIcon },
                            { title: "RabbitMQ", icon: RabbitmqIcon },
                        ]}
                    />

                    <TechCategory
                        title="Databases"
                        items={[
                            { title: "MongoDB", icon: MongodbIcon },
                            { title: "PostgreSQL", icon: PostgresqlIcon },
                            { title: "Redis", icon: RedisIcon },
                            { title: "Neo4j", icon: Neo4jIcon },
                            { title: "ElasticSearch", icon: ElasticIcon },
                            { title: "MySQL", icon: MysqlIcon },
                        ]}
                    />

                    <TechCategory
                        title="Devops & Tools"
                        items={[
                            { title: "Docker", icon: DockerIcon },
                            { title: "Kubernetes", icon: KubernetesIcon },
                            { title: "Jenkins", icon: JenkinsIcon },
                            { title: "Jest", icon: JestIcon },
                            { title: "Git", icon: GitIcon },
                            { title: "Vite", icon: ViteIcon },
                            { title: "Figma", icon: FigmaIcon },
                        ]}
                    />

                </div>

            </div>
        </section>
    )
}

export default Tech;