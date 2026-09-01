import React from 'react'
import Container from '../Container'
import { allProjects } from '../data/projectSApi'
import Project from '../Project'

const Projects = () => {
    return (
        <>
        <section id='projects' className="relative bg-[#0a0f1c] overflow-hidden w-full max-w-full">
            <div className="absolute top-[40%] left-[-10%] w-[400px] h-[400px] bg-[#fe9a00] blur-[150px] opacity-10 pointer-events-none"></div>
            <div className="lg:py-25 py-15 font-geist relative z-10 w-full">
                <Container>
                    {/* heading text */}
                    <div className="heading text-center lg:text-left mb-4">
                        <h3 className='text-[30px] lg:text-[40px] font-bold text-[#ededed] inline-block relative'>
                            Projects
                            <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-linear-to-r from-[#fe9a00] to-transparent"></span>
                        </h3>
                    </div>
                    {/* subtitle */}
                    <div className="mb-12 text-center lg:text-left">
                        <p className='text-[15px] text-[#ededed]/60 lg:w-[559px] leading-relaxed font-light'>
                            Explore some of the personal and team-based projects I have built showcasing my skills and expertise.
                        </p>
                    </div>
                    {/* project grid */}
                    <div className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 items-stretch gap-6 lg:gap-5 w-full relative z-10">
                        {allProjects.map((item) => (
                            <div key={item.id} className="h-full">
                                <Project
                                    projectImg={item.projectImg}
                                    projectName={item.projectName}
                                    projectType={item.projectType}
                                    projectDetails={item.projectDetails}
                                    techStack={item.techStack}
                                    liveLink={item.liveLink}
                                    githubLink={item.githubLink}
                                />
                            </div>
                        ))}
                    </div>
                    {/* btn */}
                    <div className="flex justify-center mt-16 relative z-10">
                        <a href="https://github.com/sijan666" target="_blank" rel="noreferrer" className="px-8 py-3 text-sm font-medium tracking-wide text-[#fe9a00] bg-[#fe9a00]/10 border border-[#fe9a00]/30 rounded-xl hover:bg-[#fe9a00] hover:text-white hover:shadow-[0_0_15px_rgba(254,154,0,0.5)] transition-all duration-300 inline-block">
                            View More Projects
                        </a>
                    </div>
                </Container>
            </div>
        </section>
        </>
    )
}

export default Projects