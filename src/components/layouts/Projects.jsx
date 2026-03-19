import React from 'react'
import Container from '../Container'
import { allProjects } from '../data/projectSApi'
import Project from '../Project'


const Projects = () => {
    return (
        <>
        <section id='projects'>
            <div className="py-25 bg-[#0A0F1C]">
                <Container>
                    {/* heading text */}
                    <div className="heading">
                        <h3 className='text-[36px] font-bold text-[#EDEDED] beforeAfter'>Projects</h3>
                        <p className='text-bsae text-[#99A1AF] lg:w-[559px] leading-6 pt-8'>Explore some of the personal and team-based projects I have built showcasing my skills and expertise.</p>
                    </div>
                    <div className="mt-10">
                        <div className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 items-center gap-5">
                            {allProjects.map((item)=>(
                                <div key={item.id} className="">
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
                </Container>
            </div>
        </section>
        </>
    )
}

export default Projects