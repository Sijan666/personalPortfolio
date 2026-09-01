import React from 'react'
import Container from '../Container'
import { BsDatabase, BsLayoutTextWindowReverse } from 'react-icons/bs'
import { IoLogoCss3, IoLogoHtml5, IoLogoJavascript } from 'react-icons/io'
import { SiEslint, SiExpress, SiFirebase, SiJavascript, SiMongodb, SiMongoose, SiNetlify, SiNpm, SiPostman, SiPrettier, SiRedux, SiTypescript } from 'react-icons/si'
import { FaCube, FaFigma, FaGitAlt, FaGithub, FaGlobe, FaInfinity, FaMobileAlt, FaNodeJs, FaReact, FaYarn } from 'react-icons/fa'
import { RiGraduationCapFill, RiNextjsFill, RiTailwindCssFill, RiTerminalBoxLine } from 'react-icons/ri'
import { IoCodeSlash, IoLogoVercel } from 'react-icons/io5'
import { VscVscode } from 'react-icons/vsc'
import { CgPerformance } from 'react-icons/cg'
import { GrTechnology } from 'react-icons/gr'

const TechStack = () => {
    return (
        <>
        <section id='techStack' className="relative bg-[#0a0f1c] overflow-hidden w-full max-w-full">
            <div className="absolute top-[20%] right-[-10%] w-[350px] h-[350px] bg-[#fe9a00] blur-[150px] opacity-10 pointer-events-none"></div>
            <div className="lg:py-25 py-15 font-geist relative z-10 w-full">
                <Container>
                    {/* heading text */}
                    <div className="heading text-center lg:text-left mb-4">
                        <h3 className='text-[30px] lg:text-[40px] font-bold text-[#ededed] inline-block relative'>
                            Tech Stack
                            <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-linear-to-r from-[#fe9a00] to-transparent"></span>
                        </h3>
                    </div>
                    {/* subtitle */}
                    <div className="mb-12 text-center lg:text-left">
                        <p className='text-[15px] text-[#ededed]/60 w-full max-w-full lg:max-w-[559px] mx-auto lg:mx-0 leading-relaxed font-light'>
                            From frontend frameworks to backend systems, databases, DevOps, and key development principles this is my tech toolkit.
                        </p>
                    </div>
                    {/* grid layout */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-start w-full">
                        {/* frontend */}
                        <div className="frontend flex flex-col p-5 sm:p-6 lg:p-8 bg-white/2 border border-white/5 backdrop-blur-xl rounded-3xl hover:bg-white/3 hover:border-white/8 transition-all duration-300 shadow-[0_8px_30px_rgba(0,0,0,0.2)]">
                            <div className="flex gap-x-4 items-center">
                                <div className="p-3 h-12 w-12 shrink-0 flex items-center justify-center bg-[#fe9a00]/10 border border-[#fe9a00]/20 rounded-xl">
                                    <BsLayoutTextWindowReverse size={22} className='text-[#fe9a00]'/>
                                </div>
                                <div className="text flex-1">
                                    <div className="flex flex-wrap items-center gap-2 mb-1">
                                        <h4 className='text-[20px] text-[#ededed] font-semibold'>Frontend</h4>
                                        <span className='px-2 py-0.5 rounded-md bg-[#4ad08e]/10 border border-[#4ad08e]/20 text-[#4ad08e] text-[10px] uppercase tracking-wider font-medium'>Advanced</span>
                                    </div>
                                    <p className='text-[#ededed]/50 text-sm font-light'>Building responsive and dynamic user interfaces.</p>
                                </div>
                            </div>
                            <div className="icons flex flex-wrap mt-6 gap-2.5">
                                {/* 1 */}
                                <div className="py-2.5 px-3.5 bg-white/2 border border-white/5 hover:border-[#fe9a00]/30 hover:bg-[#fe9a00]/5 rounded-xl flex items-center gap-x-2.5 transition-all duration-300 group">
                                    <IoLogoHtml5 size={18} className='text-[#E34F26] group-hover:scale-110 transition-transform duration-300' />
                                    <h4 className='text-[#ededed]/80 text-[13px] font-medium tracking-wide'>HTML5</h4>
                                </div>
                                {/* 2 */}
                                <div className="py-2.5 px-3.5 bg-white/2 border border-white/5 hover:border-[#fe9a00]/30 hover:bg-[#fe9a00]/5 rounded-xl flex items-center gap-x-2.5 transition-all duration-300 group">
                                    <IoLogoCss3 size={18} className='text-[#007ACC] group-hover:scale-110 transition-transform duration-300' />
                                    <h4 className='text-[#ededed]/80 text-[13px] font-medium tracking-wide'>CSS3</h4>
                                </div>
                                {/* 3 */}
                                <div className="py-2.5 px-3.5 bg-white/2 border border-white/5 hover:border-[#fe9a00]/30 hover:bg-[#fe9a00]/5 rounded-xl flex items-center gap-x-2.5 transition-all duration-300 group">
                                    <SiJavascript size={18} className='text-[#F7DF1E] group-hover:scale-110 transition-transform duration-300' />
                                    <h4 className='text-[#ededed]/80 text-[13px] font-medium tracking-wide'>JavaScript</h4>
                                </div>
                                {/* 4 */}
                                <div className="py-2.5 px-3.5 bg-white/2 border border-white/5 hover:border-[#fe9a00]/30 hover:bg-[#fe9a00]/5 rounded-xl flex items-center gap-x-2.5 transition-all duration-300 group">
                                    <SiTypescript size={18} className='text-[#3178C6] group-hover:scale-110 transition-transform duration-300' />
                                    <h4 className='text-[#ededed]/80 text-[13px] font-medium tracking-wide'>TypeScript</h4>
                                </div>
                                {/* 5 */}
                                <div className="py-2.5 px-3.5 bg-white/2 border border-white/5 hover:border-[#fe9a00]/30 hover:bg-[#fe9a00]/5 rounded-xl flex items-center gap-x-2.5 transition-all duration-300 group">
                                    <FaReact size={18} className='text-[#61DAFB] group-hover:scale-110 transition-transform duration-300' />
                                    <h4 className='text-[#ededed]/80 text-[13px] font-medium tracking-wide'>React.js</h4>
                                </div>
                                {/* 6 */}
                                <div className="py-2.5 px-3.5 bg-white/2 border border-white/5 hover:border-[#fe9a00]/30 hover:bg-[#fe9a00]/5 rounded-xl flex items-center gap-x-2.5 transition-all duration-300 group">
                                    <RiNextjsFill size={18} className='text-[#ffffff] group-hover:scale-110 transition-transform duration-300' />
                                    <h4 className='text-[#ededed]/80 text-[13px] font-medium tracking-wide'>Next.js</h4>
                                </div>
                                {/* 7 */}
                                <div className="py-2.5 px-3.5 bg-white/2 border border-white/5 hover:border-[#fe9a00]/30 hover:bg-[#fe9a00]/5 rounded-xl flex items-center gap-x-2.5 transition-all duration-300 group">
                                    <SiRedux size={18} className='text-[#764ABC] group-hover:scale-110 transition-transform duration-300' />
                                    <h4 className='text-[#ededed]/80 text-[13px] font-medium tracking-wide'>Redux</h4>
                                </div>
                                {/* 8 */}
                                <div className="py-2.5 px-3.5 bg-white/2 border border-white/5 hover:border-[#fe9a00]/30 hover:bg-[#fe9a00]/5 rounded-xl flex items-center gap-x-2.5 transition-all duration-300 group">
                                    <RiTailwindCssFill size={18} className='text-[#06B6D4] group-hover:scale-110 transition-transform duration-300' />
                                    <h4 className='text-[#ededed]/80 text-[13px] font-medium tracking-wide'>Tailwind CSS</h4>
                                </div>
                            </div>
                        </div>
                        {/* backend */}
                        <div className="backend flex flex-col p-5 sm:p-6 lg:p-8 bg-white/2 border border-white/5 backdrop-blur-xl rounded-3xl hover:bg-white/3 hover:border-white/8 transition-all duration-300 shadow-[0_8px_30px_rgba(0,0,0,0.2)]">
                            <div className="flex gap-x-4 items-center">
                                <div className="p-3 h-12 w-12 shrink-0 flex items-center justify-center bg-[#fe9a00]/10 border border-[#fe9a00]/20 rounded-xl">
                                    <IoCodeSlash size={22} className='text-[#fe9a00]'/>
                                </div>
                                <div className="text flex-1">
                                    <div className="flex flex-wrap items-center gap-2 mb-1">
                                        <h4 className='text-[20px] text-[#ededed] font-semibold'>Backend</h4>
                                        <span className='px-2 py-0.5 rounded-md bg-[#fe626b]/10 border border-[#fe626b]/20 text-[#fe626b] text-[10px] uppercase tracking-wider font-medium'>Beginner</span>
                                    </div>
                                    <p className='text-[#ededed]/50 text-sm font-light'>Creating robust APIs and server-side applications.</p>
                                </div>
                            </div>
                            <div className="icons flex flex-wrap mt-6 gap-2.5">
                                {/* 1 */}
                                <div className="py-2.5 px-3.5 bg-white/2 border border-white/5 hover:border-[#fe9a00]/30 hover:bg-[#fe9a00]/5 rounded-xl flex items-center gap-x-2.5 transition-all duration-300 group">
                                    <FaNodeJs size={18} className='text-[#339933] group-hover:scale-110 transition-transform duration-300' />
                                    <h4 className='text-[#ededed]/80 text-[13px] font-medium tracking-wide'>Node.js</h4>
                                </div>
                                {/* 2 */}
                                <div className="py-2.5 px-3.5 bg-white/2 border border-white/5 hover:border-[#fe9a00]/30 hover:bg-[#fe9a00]/5 rounded-xl flex items-center gap-x-2.5 transition-all duration-300 group">
                                    <SiExpress size={18} className='text-[#ffffff] group-hover:scale-110 transition-transform duration-300' />
                                    <h4 className='text-[#ededed]/80 text-[13px] font-medium tracking-wide'>Express.js</h4>
                                </div>
                            </div>
                        </div>
                        {/* database */}
                        <div className="database flex flex-col p-5 sm:p-6 lg:p-8 bg-white/2 border border-white/5 backdrop-blur-xl rounded-3xl hover:bg-white/3 hover:border-white/8 transition-all duration-300 shadow-[0_8px_30px_rgba(0,0,0,0.2)]">
                            <div className="flex gap-x-4 items-center">
                                <div className="p-3 h-12 w-12 shrink-0 flex items-center justify-center bg-[#fe9a00]/10 border border-[#fe9a00]/20 rounded-xl">
                                    <BsDatabase size={22} className='text-[#fe9a00]'/>
                                </div>
                                <div className="text flex-1">
                                    <div className="flex flex-wrap items-center gap-2 mb-1">
                                        <h4 className='text-[20px] text-[#ededed] font-semibold'>Database</h4>
                                        <span className='px-2 py-0.5 rounded-md bg-[#fe626b]/10 border border-[#fe626b]/20 text-[#fe626b] text-[10px] uppercase tracking-wider font-medium'>Beginner</span>
                                    </div>
                                    <p className='text-[#ededed]/50 text-sm font-light'>Managing and designing efficient data storage solutions.</p>
                                </div>
                            </div>
                            <div className="icons flex flex-wrap mt-6 gap-2.5">
                                {/* 1 */}
                                <div className="py-2.5 px-3.5 bg-white/2 border border-white/5 hover:border-[#fe9a00]/30 hover:bg-[#fe9a00]/5 rounded-xl flex items-center gap-x-2.5 transition-all duration-300 group">
                                    <SiMongodb size={18} className='text-[#47A248] group-hover:scale-110 transition-transform duration-300' />
                                    <h4 className='text-[#ededed]/80 text-[13px] font-medium tracking-wide'>MongoDB</h4>
                                </div>
                                {/* 2 */}
                                <div className="py-2.5 px-3.5 bg-white/2 border border-white/5 hover:border-[#fe9a00]/30 hover:bg-[#fe9a00]/5 rounded-xl flex items-center gap-x-2.5 transition-all duration-300 group">
                                    <SiMongoose size={18} className='text-[#880000] group-hover:scale-110 transition-transform duration-300' />
                                    <h4 className='text-[#ededed]/80 text-[13px] font-medium tracking-wide'>Mongoose</h4>
                                </div>
                                {/* 3 */}
                                <div className="py-2.5 px-3.5 bg-white/2 border border-white/5 hover:border-[#fe9a00]/30 hover:bg-[#fe9a00]/5 rounded-xl flex items-center gap-x-2.5 transition-all duration-300 group">
                                    <SiFirebase size={18} className='text-[#DD2C00] group-hover:scale-110 transition-transform duration-300' />
                                    <h4 className='text-[#ededed]/80 text-[13px] font-medium tracking-wide'>Firebase</h4>
                                </div>
                            </div>
                        </div>
                        {/* devops */}
                        <div className="devops flex flex-col p-5 sm:p-6 lg:p-8 bg-white/2 border border-white/5 backdrop-blur-xl rounded-3xl hover:bg-white/3 hover:border-white/8 transition-all duration-300 shadow-[0_8px_30px_rgba(0,0,0,0.2)]">
                            <div className="flex gap-x-4 items-center">
                                <div className="p-3 h-12 w-12 shrink-0 flex items-center justify-center bg-[#fe9a00]/10 border border-[#fe9a00]/20 rounded-xl">
                                    <FaInfinity size={22} className='text-[#fe9a00]'/>
                                </div>
                                <div className="text flex-1">
                                    <div className="flex flex-wrap items-center gap-2 mb-1">
                                        <h4 className='text-[20px] text-[#ededed] font-semibold'>DevOps</h4>
                                        <span className='px-2 py-0.5 rounded-md bg-[#4ad08e]/10 border border-[#4ad08e]/20 text-[#4ad08e] text-[10px] uppercase tracking-wider font-medium'>Advanced</span>
                                    </div>
                                    <p className='text-[#ededed]/50 text-sm font-light'>Deployment, CI/CD, and server management.</p>
                                </div>
                            </div>
                            <div className="icons flex flex-wrap mt-6 gap-2.5">
                                {/* 1 */}
                                <div className="py-2.5 px-3.5 bg-white/2 border border-white/5 hover:border-[#fe9a00]/30 hover:bg-[#fe9a00]/5 rounded-xl flex items-center gap-x-2.5 transition-all duration-300 group">
                                    <FaGitAlt size={18} className='text-[#F05032] group-hover:scale-110 transition-transform duration-300' />
                                    <h4 className='text-[#ededed]/80 text-[13px] font-medium tracking-wide'>Git</h4>
                                </div>
                                {/* 2 */}
                                <div className="py-2.5 px-3.5 bg-white/2 border border-white/5 hover:border-[#fe9a00]/30 hover:bg-[#fe9a00]/5 rounded-xl flex items-center gap-x-2.5 transition-all duration-300 group">
                                    <FaGithub size={18} className='text-[#ffffff] group-hover:scale-110 transition-transform duration-300' />
                                    <h4 className='text-[#ededed]/80 text-[13px] font-medium tracking-wide'>GitHub</h4>
                                </div>
                                {/* 3 */}
                                <div className="py-2.5 px-3.5 bg-white/2 border border-white/5 hover:border-[#fe9a00]/30 hover:bg-[#fe9a00]/5 rounded-xl flex items-center gap-x-2.5 transition-all duration-300 group">
                                    <IoLogoVercel size={18} className='text-[#ffffff] group-hover:scale-110 transition-transform duration-300' />
                                    <h4 className='text-[#ededed]/80 text-[13px] font-medium tracking-wide'>Vercel</h4>
                                </div>
                                {/* 4 */}
                                <div className="py-2.5 px-3.5 bg-white/2 border border-white/5 hover:border-[#fe9a00]/30 hover:bg-[#fe9a00]/5 rounded-xl flex items-center gap-x-2.5 transition-all duration-300 group">
                                    <SiNetlify size={18} className='text-[#00C7B7] group-hover:scale-110 transition-transform duration-300' />
                                    <h4 className='text-[#ededed]/80 text-[13px] font-medium tracking-wide'>Netlify</h4>
                                </div>
                                {/* 5 */}
                                <div className="py-2.5 px-3.5 bg-white/2 border border-white/5 hover:border-[#fe9a00]/30 hover:bg-[#fe9a00]/5 rounded-xl flex items-center gap-x-2.5 transition-all duration-300 group">
                                    <SiPostman size={18} className='text-[#F7B93E] group-hover:scale-110 transition-transform duration-300' />
                                    <h4 className='text-[#ededed]/80 text-[13px] font-medium tracking-wide'>Postman</h4>
                                </div>
                            </div>
                        </div>
                        {/* tools */}
                        <div className="tools flex flex-col p-5 sm:p-6 lg:p-8 bg-white/2 border border-white/5 backdrop-blur-xl rounded-3xl hover:bg-white/3 hover:border-white/8 transition-all duration-300 shadow-[0_8px_30px_rgba(0,0,0,0.2)]">
                            <div className="flex gap-x-4 items-center">
                                <div className="p-3 h-12 w-12 shrink-0 flex items-center justify-center bg-[#fe9a00]/10 border border-[#fe9a00]/20 rounded-xl">
                                    <GrTechnology size={22} className='text-[#fe9a00]'/>
                                </div>
                                <div className="text flex-1">
                                    <div className="flex flex-wrap items-center gap-2 mb-1">
                                        <h4 className='text-[20px] text-[#ededed] font-semibold'>Tools</h4>
                                        <span className='px-2 py-0.5 rounded-md bg-[#fe9a00]/10 border border-[#fe9a00]/20 text-[#fe9a00] text-[10px] uppercase tracking-wider font-medium'>Intermediate</span>
                                    </div>
                                    <p className='text-[#ededed]/50 text-sm font-light'>Design, coding, and productivity tools.</p>
                                </div>
                            </div>
                            <div className="icons flex flex-wrap mt-6 gap-2.5">
                                {/* 1 */}
                                <div className="py-2.5 px-3.5 bg-white/2 border border-white/5 hover:border-[#fe9a00]/30 hover:bg-[#fe9a00]/5 rounded-xl flex items-center gap-x-2.5 transition-all duration-300 group">
                                    <FaFigma size={18} className='text-[#F24E1E] group-hover:scale-110 transition-transform duration-300' />
                                    <h4 className='text-[#ededed]/80 text-[13px] font-medium tracking-wide'>Figma</h4>
                                </div>
                                {/* 2 */}
                                <div className="py-2.5 px-3.5 bg-white/2 border border-white/5 hover:border-[#fe9a00]/30 hover:bg-[#fe9a00]/5 rounded-xl flex items-center gap-x-2.5 transition-all duration-300 group">
                                    <VscVscode size={18} className='text-[#007ACC] group-hover:scale-110 transition-transform duration-300' />
                                    <h4 className='text-[#ededed]/80 text-[13px] font-medium tracking-wide'>VS Code</h4>
                                </div>
                                {/* 3 */}
                                <div className="py-2.5 px-3.5 bg-white/2 border border-white/5 hover:border-[#fe9a00]/30 hover:bg-[#fe9a00]/5 rounded-xl flex items-center gap-x-2.5 transition-all duration-300 group">
                                    <RiTerminalBoxLine size={18} className='text-white group-hover:scale-110 transition-transform duration-300' />
                                    <h4 className='text-[#ededed]/80 text-[13px] font-medium tracking-wide'>Terminal</h4>
                                </div>
                                {/* 4 */}
                                <div className="py-2.5 px-3.5 bg-white/2 border border-white/5 hover:border-[#fe9a00]/30 hover:bg-[#fe9a00]/5 rounded-xl flex items-center gap-x-2.5 transition-all duration-300 group">
                                    <SiNpm size={18} className='text-[#CB3837] group-hover:scale-110 transition-transform duration-300' />
                                    <h4 className='text-[#ededed]/80 text-[13px] font-medium tracking-wide'>NPM</h4>
                                </div>
                                {/* 5 */}
                                <div className="py-2.5 px-3.5 bg-white/2 border border-white/5 hover:border-[#fe9a00]/30 hover:bg-[#fe9a00]/5 rounded-xl flex items-center gap-x-2.5 transition-all duration-300 group">
                                    <FaYarn size={18} className='text-[#2C8EBB] group-hover:scale-110 transition-transform duration-300' />
                                    <h4 className='text-[#ededed]/80 text-[13px] font-medium tracking-wide'>Yarn</h4>
                                </div>
                                {/* 6 */}
                                <div className="py-2.5 px-3.5 bg-white/2 border border-white/5 hover:border-[#fe9a00]/30 hover:bg-[#fe9a00]/5 rounded-xl flex items-center gap-x-2.5 transition-all duration-300 group">
                                    <SiEslint size={18} className='text-[#4B32C3] group-hover:scale-110 transition-transform duration-300' />
                                    <h4 className='text-[#ededed]/80 text-[13px] font-medium tracking-wide'>ESLint</h4>
                                </div>
                                {/* 7 */}
                                <div className="py-2.5 px-3.5 bg-white/2 border border-white/5 hover:border-[#fe9a00]/30 hover:bg-[#fe9a00]/5 rounded-xl flex items-center gap-x-2.5 transition-all duration-300 group">
                                    <SiPrettier size={18} className='text-[#F7B93E] group-hover:scale-110 transition-transform duration-300' />
                                    <h4 className='text-[#ededed]/80 text-[13px] font-medium tracking-wide'>Prettier</h4>
                                </div>
                            </div>
                        </div>
                        {/* fundamentals */}
                        <div className="fundamentals flex flex-col p-5 sm:p-6 lg:p-8 bg-white/2 border border-white/5 backdrop-blur-xl rounded-3xl hover:bg-white/3 hover:border-white/8 transition-all duration-300 shadow-[0_8px_30px_rgba(0,0,0,0.2)]">
                            <div className="flex gap-x-4 items-center">
                                <div className="p-3 h-12 w-12 shrink-0 flex items-center justify-center bg-[#fe9a00]/10 border border-[#fe9a00]/20 rounded-xl">
                                    <RiGraduationCapFill size={22} className='text-[#fe9a00]'/>
                                </div>
                                <div className="text flex-1">
                                    <div className="flex flex-wrap items-center gap-2 mb-1">
                                        <h4 className='text-[20px] text-[#ededed] font-semibold'>Fundamentals</h4>
                                        <span className='px-2 py-0.5 rounded-md bg-[#4ad08e]/10 border border-[#4ad08e]/20 text-[#4ad08e] text-[10px] uppercase tracking-wider font-medium'>Advanced</span>
                                    </div>
                                    <p className='text-[#ededed]/50 text-sm font-light'>Core web development concepts and best practices.</p>
                                </div>
                            </div>
                            <div className="icons flex flex-wrap mt-6 gap-2.5">
                                {/* 1 */}
                                <div className="py-2.5 px-3.5 bg-white/2 border border-white/5 hover:border-[#fe9a00]/30 hover:bg-[#fe9a00]/5 rounded-xl flex items-center gap-x-2.5 transition-all duration-300 group">
                                    <FaMobileAlt size={18} className='text-[#fe9a00] group-hover:scale-110 transition-transform duration-300' />
                                    <h4 className='text-[#ededed]/80 text-[13px] font-medium tracking-wide'>Responsive Design</h4>
                                </div>
                                {/* 2 */}
                                <div className="py-2.5 px-3.5 bg-white/2 border border-white/5 hover:border-[#fe9a00]/30 hover:bg-[#fe9a00]/5 rounded-xl flex items-center gap-x-2.5 transition-all duration-300 group">
                                    <FaGlobe size={18} className='text-[#00C950] group-hover:scale-110 transition-transform duration-300' />
                                    <h4 className='text-[#ededed]/80 text-[13px] font-medium tracking-wide'>Cross-browser Compatibility</h4>
                                </div>
                                {/* 3 */}
                                <div className="py-2.5 px-3.5 bg-white/2 border border-white/5 hover:border-[#fe9a00]/30 hover:bg-[#fe9a00]/5 rounded-xl flex items-center gap-x-2.5 transition-all duration-300 group">
                                    <CgPerformance size={18} className='text-[#FB2C36] group-hover:scale-110 transition-transform duration-300' />
                                    <h4 className='text-[#ededed]/80 text-[13px] font-medium tracking-wide'>Performance Optimization</h4>
                                </div>
                                {/* 4 */}
                                <div className="py-2.5 px-3.5 bg-white/2 border border-white/5 hover:border-[#fe9a00]/30 hover:bg-[#fe9a00]/5 rounded-xl flex items-center gap-x-2.5 transition-all duration-300 group">
                                    <FaCube size={18} className='text-[#F6339A] group-hover:scale-110 transition-transform duration-300' />
                                    <h4 className='text-[#ededed]/80 text-[13px] font-medium tracking-wide'>Component-Driven Architecture</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </section>
        </>
    )
}

export default TechStack