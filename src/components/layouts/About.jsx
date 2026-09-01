import React from 'react'
import Container from '../Container'
import { LuFileSpreadsheet } from 'react-icons/lu'
import { PiBagSimple } from 'react-icons/pi'
import Images from '../Images'
import sijan from '../../assets/sijan.png'
import { MdOutlineFileDownload } from 'react-icons/md'

const About = () => {
    return (
        <>
        <section id='about' className="relative bg-[#0a0f1c] overflow-hidden w-full max-w-full">
            <div className="absolute top-[30%] left-[-10%] w-75 h-75 bg-[#fe9a00] blur-[120px] opacity-10 pointer-events-none"></div>
            <div className="py-15 lg:py-25 font-geist relative z-10 w-full">
                <Container>
                    {/* heading text */}
                    <div className="heading text-center lg:text-left mb-12 lg:mb-16">
                        <h3 className='text-[30px] lg:text-[40px] font-bold text-[#ededed] inline-block relative'>
                            About Me
                            <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-linear-to-r from-[#fe9a00] to-transparent"></span>
                        </h3>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center w-full">
                        {/* left side */}
                        <div className="left lg:col-span-8 w-full flex flex-col gap-6">
                            {/* bio */}
                            <div className="bio flex flex-col md:flex-row gap-5 p-6 lg:p-8 bg-white/2 border border-white/5 backdrop-blur-xl rounded-3xl hover:bg-white/3 hover:border-white/8 transition-all duration-300 shadow-[0_8px_30px_rgba(0,0,0,0.2)]">
                                <div className="p-3 h-12 w-12 shrink-0 flex items-center justify-center bg-[#fe9a00]/10 border border-[#fe9a00]/20 rounded-xl">
                                    <LuFileSpreadsheet size={22} className='text-[#fe9a00]' />
                                </div>
                                <div className="text flex-1">
                                    <h4 className='text-[20px] font-semibold text-[#ededed] mb-3'>Bio</h4>
                                    <p className='text-[#ededed]/60 text-[15px] leading-relaxed font-light wrap-break-word'>
                                        Frontend Developer with 1+ year of experience building responsive and scalable web applications using React and Next.js. Skilled in turning UI/UX designs into pixel-perfect, high-performing code, with a strong focus on clean architecture, performance optimization, and modern frontend practices.
                                    </p>
                                </div>
                            </div>
                            {/* experience */}
                            <div className="experience flex flex-col md:flex-row gap-5 p-6 lg:p-8 bg-white/2 border border-white/5 backdrop-blur-xl rounded-3xl hover:bg-white/3 hover:border-white/8 transition-all duration-300 shadow-[0_8px_30px_rgba(0,0,0,0.2)]">
                                <div className="p-3 h-12 w-12 shrink-0 flex items-center justify-center bg-[#fe9a00]/10 border border-[#fe9a00]/20 rounded-xl">
                                    <PiBagSimple size={22} className='text-[#fe9a00]' />
                                </div>
                                <div className="text w-full flex-1">
                                    <h4 className='text-[20px] font-semibold text-[#ededed] mb-4'>Experience</h4>
                                    <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-3 pb-4 border-b border-white/5">
                                        <div>
                                            <h4 className='text-[#fe9a00] text-base font-medium'>Front-end Developer (Intern)</h4>
                                            <p className='text-[#ededed]/80 text-sm mt-1'>Creative IT</p>
                                        </div>
                                        <div className="px-3 py-1.5 bg-white/3 border border-white/5 rounded-full inline-block w-fit">
                                            <p className='text-[#ededed]/50 text-xs font-mono tracking-wider'>January 2026 - July 2026</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* right side */}
                        <div className="right lg:col-span-4 w-full p-6 lg:p-8 bg-white/2 border border-white/5 backdrop-blur-xl rounded-3xl flex flex-col items-center  text-center lg:text-left hover:bg-white/3 hover:border-white/8 transition-all duration-300 shadow-[0_8px_30px_rgba(0,0,0,0.2)]">
                            {/* img */}
                            <div className="">
                                <Images imgSrc={sijan} className={'w-32 h-32 lg:w-40 lg:h-40 object-cover rounded-xl'}/>
                            </div>
                            {/* details */}
                            <div className="w-full text-center">
                                <h4 className='text-[22px] font-bold text-[#ededed] tracking-wide'>Majharul Islam</h4>
                                <div className="mt-2 space-y-1.5">
                                    <p className='text-[#fe9a00] text-sm font-medium'>Frontend Developer (React.js & Next.js)</p>
                                    <p className='text-[#ededed]/50 text-xs leading-relaxed'>Creating High-Performance, Modern Web Applications</p>
                                </div>
                            </div>
                            {/* btn */}
                            <div className="mt-8 w-full flex justify-center lg:justify-start">
                                {/* <a href="/resumeMajharul.pdf" download="Majharul_Islam_Resume.pdf" className="px-6 py-2.5 w-full justify-center text-sm font-medium tracking-wide text-[#fe9a00] bg-[#fe9a00]/10 border border-[#fe9a00]/30 rounded-xl hover:bg-[#fe9a00] hover:text-white hover:shadow-[0_0_15px_rgba(254,154,0,0.5)] transition-all duration-300 inline-flex items-center gap-x-2 group">
                                    <MdOutlineFileDownload size={20} />
                                    Download Resume
                                </a> */}
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </section>
        </>
    )
}

export default About