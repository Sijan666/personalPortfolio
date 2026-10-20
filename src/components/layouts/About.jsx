import React from 'react'
import Container from '../Container'
import { LuFileSpreadsheet } from 'react-icons/lu'
import { PiBagSimple } from 'react-icons/pi'
import { MdOutlineFileDownload } from 'react-icons/md'
import Images from '../Images'
import sijan from '../../assets/sijan.png'

const EXPERIENCES = [
    {
        role: "Software Engineer (Intern)",
        company: "Desvert",
        duration: "September 2026 - Present",
        active: true
    },
    {
        role: "Front-End Developer (Intern)",
        company: "Creative IT Institute",
        duration: "January 2026 - July 2026",
        active: false
    }
]

const About = () => {
    return (
        <section id='about' className="relative bg-[#0a0f1c] overflow-hidden w-full max-w-full selection:bg-[#fe9a00] selection:text-[#0a0f1c]">
            {/* Immersive Ambient Glow */}
            <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[#fe9a00]/10 blur-[150px] opacity-70 pointer-events-none"></div>
            <div className="absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] rounded-full bg-blue-900/10 blur-[120px] opacity-50 pointer-events-none"></div>
            <div className="py-20 lg:py-32 font-geist relative z-10 w-full">
                <Container>
                    <div className="flex items-center gap-4 mb-12 lg:mb-16">
                        <span className="h-px w-12 bg-[#fe9a00]" />
                        <h3 className='text-3xl lg:text-4xl font-bold text-white tracking-tight'>
                            About <span className="text-transparent bg-clip-text bg-linear-to-r from-[#fe9a00] to-yellow-500">Me</span>
                        </h3>
                        <span className="h-px flex-1 bg-linear-to-r from-[#fe9a00]/50 to-transparent" />
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch w-full">
                        {/* left column */}
                        <div className="lg:col-span-8 w-full flex flex-col gap-6 lg:gap-8">
                            <div className="group relative overflow-hidden rounded-4xl border border-white/5 bg-[#0a0f1c]/40 p-8 lg:p-10 backdrop-blur-2xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.05),0_8px_32px_rgba(0,0,0,0.3)] transition-all duration-500 hover:border-white/10 hover:bg-[#0a0f1c]/60">
                                {/* hover */}
                                <div className="absolute -inset-px bg-linear-to-br from-[#fe9a00]/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                                <div className="relative z-10 flex flex-col sm:flex-row gap-6 lg:gap-8 items-start">
                                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-[#fe9a00]/20 bg-[#fe9a00]/10 shadow-[0_0_20px_rgba(254,154,0,0.1)] transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                                        <LuFileSpreadsheet size={26} className='text-[#fe9a00]' />
                                    </div>
                                    <div className="flex-1">
                                        <h4 className='text-2xl font-bold text-white mb-4'>The Architect Behind the Code</h4>
                                        <p className='text-gray-400 text-base lg:text-lg leading-relaxed font-light'>
                                            Hi, I'm <span className="text-white font-medium">Majharul Islam</span>. I specialize in building highly scalable, intelligent web applications. As a <span className="text-[#fe9a00] font-medium">Full-Stack AI Architect</span> and <span className="text-[#fe9a00] font-medium">WordPress Expert</span>, I bridge the gap between pixel-perfect frontends (React, Next.js, Tailwind) and robust backends (Node.js, MongoDB). 
                                            <br className="hidden sm:block" /><br className="hidden sm:block" />
                                            My true passion lies in integrating modern AI solutions (like RAG pipelines) and turning complex business requirements into seamless, automated digital experiences.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="group relative overflow-hidden rounded-4xl border border-white/5 bg-[#0a0f1c]/40 p-8 lg:p-10 backdrop-blur-2xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.05),0_8px_32px_rgba(0,0,0,0.3)] transition-all duration-500 hover:border-white/10 hover:bg-[#0a0f1c]/60">
                                <div className="relative z-10 flex flex-col sm:flex-row gap-6 lg:gap-8 items-start">
                                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-[#fe9a00]/20 bg-[#fe9a00]/10 shadow-[0_0_20px_rgba(254,154,0,0.1)] transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3">
                                        <PiBagSimple size={26} className='text-[#fe9a00]' />
                                    </div>
                                    <div className="w-full flex-1">
                                        <h4 className='text-2xl font-bold text-white mb-8'>Career Journey</h4>
                                        {/* Vertical Timeline */}
                                        <div className="relative border-l border-white/10 ml-3 pl-8 space-y-8">
                                            {EXPERIENCES.map((exp, index) => (
                                                <div key={index} className="relative group/item">
                                                    {/* Timeline Node */}
                                                    <span className={`absolute -left-[41px] top-1.5 h-4 w-4 rounded-full border-2 transition-all duration-300 ${exp.active ? 'border-[#fe9a00] bg-[#0a0f1c] shadow-[0_0_15px_rgba(254,154,0,0.6)]' : 'border-white/20 bg-[#0a0f1c] group-hover/item:border-[#fe9a00]/50'}`}>
                                                        {exp.active && (
                                                            <span className="absolute inset-0 m-auto h-2 w-2 rounded-full bg-[#fe9a00] animate-pulse" />
                                                        )}
                                                    </span>
                                                    {/* Content */}
                                                    <div>
                                                        <h5 className={`text-lg font-bold transition-colors duration-300 ${exp.active ? 'text-white' : 'text-gray-300 group-hover/item:text-white'}`}>
                                                            {exp.role}
                                                        </h5>
                                                        <p className='text-[#fe9a00] font-medium text-sm mt-1'>{exp.company}</p>
                                                        <div className="mt-3 px-3 py-1 bg-white/5 border border-white/5 rounded-md inline-block">
                                                            <p className='text-xs font-mono tracking-widest text-gray-400'>
                                                                {exp.duration}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* right column */}
                        <div className="lg:col-span-4 w-full relative group overflow-hidden rounded-4xl border border-white/5 bg-[#0a0f1c]/40 p-8 lg:p-10 backdrop-blur-2xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.05),0_8px_32px_rgba(0,0,0,0.3)] flex flex-col items-center justify-center transition-all duration-500 hover:border-white/10 hover:bg-[#0a0f1c]/60">
                            {/* Top Accent Line */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-linear-to-r from-transparent via-[#fe9a00] to-transparent opacity-50 transition-all duration-500 group-hover:w-3/4 group-hover:opacity-100" />
                            {/* Image */}
                            <div className="mb-8">
                                <Images 
                                    imgSrc={sijan} 
                                    className={'w-32 h-32 lg:w-40 lg:h-40 object-cover rounded-xl shadow-lg'}
                                />
                            </div>
                            {/* Details */}
                            <div className="w-full text-center">
                                <h4 className='text-3xl font-bold text-white tracking-tight mb-2'>Majharul Islam</h4>
                                <p className='text-[#fe9a00] text-sm font-semibold uppercase tracking-widest mb-4'>AI Architect & Dev</p>
                                <p className='text-gray-400 text-sm leading-relaxed max-w-[250px] mx-auto'>
                                    Transforming complex ideas into high-performance, automated digital reality.
                                </p>
                            </div>
                            {/* Magnetic Outline Button */}
                            <div className="mt-8 w-full">
                                <a 
                                    href="/resumeMajharul.pdf" 
                                    download="Majharul_Islam_Resume.pdf" 
                                    className="group relative flex w-full h-12 items-center justify-center gap-2 overflow-hidden rounded-full border border-[#fe9a00] bg-transparent text-sm font-bold tracking-wide text-[#fe9a00] transition-all duration-300 hover:bg-[#fe9a00] hover:text-white hover:shadow-[0_0_20px_rgba(254,154,0,0.4)] active:scale-95"
                                >
                                    <MdOutlineFileDownload size={20} />
                                    Download Resume
                                    {/* Shine Sweep Element */}
                                    <div className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full" />
                                </a>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </section>
    )
}

export default About