
const About = ({sectionRef}: {sectionRef: (el: HTMLElement | null)=> void}) => {
    return (
        <section ref={sectionRef} className='bg-red-300 h-[900px]'>
            <h2 className=''>
                About me
            </h2>
        </section>
    )
}

export default About;