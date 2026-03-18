import React from 'react'
import Container from '../Container'
import { LuFileSpreadsheet } from 'react-icons/lu'
import { PiBagSimple } from 'react-icons/pi'
import Images from '../Images'
import sijan from '../../assets/sijan.png'
import { MdOutlineFileDownload } from 'react-icons/md'

const About = () => {
    return (
        <section id='about'>
            <div className="py-10 bg-[#0A0F1C] font-geist">
                <Container>
                    {/* heading text */}
                    <div className="heading">
                        <h3 className='text-[36px] font-bold text-[#EDEDED] beforeAfter'>About Me</h3>
                    </div>
                    <div className="mt-[72px]">
                        <div className="flex flex-col lg:flex-row gap-y-10 justify-between">
                            {/* left side */}
                            <div className="left lg:w-[816px]">
                                {/* 1st chapter */}
                                <div className="bio flex gap-x-3">
                                    <div className="p-[9px] h-10 w-10 border border-[#2B7FFE] rounded-md ">
                                        <LuFileSpreadsheet size={20} className='text-[#2B7FFE]' />
                                    </div>
                                    <div className="text">
                                        <h4 className='text-[18px] font-medium text-[#2B7FFE]'>Bio</h4>
                                        <p className='text-white/60 text-base pt-3.5'>Frontend Developer with 1+ year of experience building responsive and scalable web applications using React and Next.js. Skilled in turning UI/UX designs into pixel-perfect, high-performing code, with a strong focus on clean architecture, performance optimization, and modern frontend practices.</p>
                                    </div>
                                </div>
                                {/* 2nd chapter */}
                                <div className="experience flex gap-x-3 mt-10">
                                    <div className="p-[9px] h-10 w-10 border border-[#2B7FFE] rounded-md ">
                                        <PiBagSimple size={20} className='text-[#2B7FFE]' />
                                    </div>
                                    <div className="text">
                                        <h4 className='text-[18px] font-medium text-[#2B7FFE]'>Experience</h4>
                                        <h4 className='text-[#EDEDED] text-base pt-3.5'>Front-end Developer (Intern)</h4>
                                        <p className='pt-1 text-white/60 text-base'>Creative IT</p>
                                        <p className='pt-1 text-white/60 text-base'>January 2026 - Present</p>
                                    </div>
                                </div>
                            </div>
                            {/* right side */}
                            <div className="right">
                                {/* img */}
                                <Images imgSrc={sijan} className={'mx-auto lg:mx-0'}/>
                                {/* details */}
                                <div className="mt-5 text-center lg:text-left">
                                    <h4 className='text-[20px] font-medium text-[#EDEDED]'>Majharul Islam</h4>
                                    <p className='pt-1 text-white/60 text-[12px] lg:text-sm'>Frontend Developer (React.js & Next.js)</p>
                                    <p className='pt-1 text-white/60 text-[12px] lg:text-sm'>Creating High-Performance, Modern Web Applications</p>
                                </div>
                                {/* btn */}
                                <div className="btn mt-5">
                                    <button className='py-2 px-3 bg-[#2B7FFE] text-white text-sm font-medium rounded-md flex items-center gap-x-2 cursor-pointer mx-auto lg:mx-0'><MdOutlineFileDownload size={20}/>Download Resume</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </section>
    )
}

export default About