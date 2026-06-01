import React from 'react'
import Container from '../Container'
import { allProjects } from '../data/projectSApi'
import Project from '../Project'

const Projects = () => {
    return (
        <>
        <section id='projects'>
            <div className="lg:py-25 py-10 bg-[#0A0F1C]">
                <Container>
                    {/* heading text */}
                    <div className="heading text-center lg:text-left">
                        <h3 className='lg:text-[36px] text-[30px] font-bold text-[#EDEDED] beforeAfter'>Projects</h3>
                        <p className='text-base text-[#99A1AF] lg:w-[559px] leading-6 pt-8'>Explore some of the personal and team-based projects I have built showcasing my skills and expertise.</p>
                    </div>
                    
                    <div className="mt-10">
                        <div className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 items-center gap-5">
                            {allProjects.map((item)=>(
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
                    </div>
                    {/* btn */}
                    <div className="flex justify-center mt-12">
                        <a href="https://github.com/sijan666" target="_blank" className="cursor-pointer px-8 py-3 text-sm font-medium tracking-wide text-[#EDEDED] border border-[#374151] rounded-lg hover:bg-[#1F2937] transition-all duration-300 inline-block">
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