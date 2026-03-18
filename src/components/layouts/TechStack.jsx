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
        <section id='techStack'>
            <div className="py-25 bg-[#0A0F1C] font-geist">
                <Container>
                    {/* heading text */}
                    <div className="heading">
                        <h3 className='text-[36px] font-bold text-[#EDEDED] beforeAfter'>Tech Stack</h3>
                    </div>
                    <div className="mt-8">
                        <p className='text-bsae text-[#99A1AF] lg:w-[559px] leading-6'>From frontend frameworks to backend systems, databases, DevOps, and key development principle this is my tech toolkit.</p>
                    </div>
                    <div className="mt-10">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {/* frontend */}
                            <div className="frontEnd rounded-xl p-5 border border-white/5 bg-white/2">
                                <div className="flex gap-x-3 items-center">
                                    <div className="p-[9px] h-10 w-10 border border-[#2B7FFE]/30 rounded-lg">
                                        <BsLayoutTextWindowReverse size={20} className='text-[#2B7FFE]'/>
                                    </div>
                                    <div className="text">
                                        <h4 className='text-base text-[#EDEDED] font-medium'>Frontend <span className='text-[12px] text-[#4AD08E]'>(Advanced)</span></h4>
                                        <p className='text-[#6A7282] text-sm'>Building responsive and dynamic user interfaces.</p>
                                    </div>
                                </div>
                                <div className="icons flex flex-wrap mt-5 gap-2">
                                    {/* 1 */}
                                    <div className="py-2 px-3 bg-[#FFFFFF]/5 border border-[#FFFFFF]/10 rounded-md flex items-center gap-x-2">
                                        <IoLogoHtml5 size={16} className='text-[#E34F26]' />
                                        <h4 className='text-[#D1D5DC] text-[12px] font-medium'>HTML5</h4>
                                    </div>
                                    {/* 2 */}
                                    <div className="py-2 px-3 bg-[#FFFFFF]/5 border border-[#FFFFFF]/10 rounded-md flex items-center gap-x-2">
                                        <IoLogoCss3 size={16} className='text-[#007ACC]' />
                                        <h4 className='text-[#D1D5DC] text-[12px] font-medium'>CSS3</h4>
                                    </div>
                                    {/* 1st */}
                                    <div className="py-2 px-3 bg-[#FFFFFF]/5 border border-[#FFFFFF]/10 rounded-md flex items-center gap-x-2">
                                        <SiJavascript  size={16} className='text-[#F7DF1E]' />
                                        <h4 className='text-[#D1D5DC] text-[12px] font-medium'>JavaScript</h4>
                                    </div>
                                    {/* 1st */}
                                    <div className="py-2 px-3 bg-[#FFFFFF]/5 border border-[#FFFFFF]/10 rounded-md flex items-center gap-x-2">
                                        <SiTypescript  size={16} className='text-[#3178C6]' />
                                        <h4 className='text-[#D1D5DC] text-[12px] font-medium'>TypeScript</h4>
                                    </div>
                                    {/* 1st */}
                                    <div className="py-2 px-3 bg-[#FFFFFF]/5 border border-[#FFFFFF]/10 rounded-md flex items-center gap-x-2">
                                        <FaReact  size={16} className='text-[#61DAFB]' />
                                        <h4 className='text-[#D1D5DC] text-[12px] font-medium'>React.js</h4>
                                    </div>
                                    {/* 1st */}
                                    <div className="py-2 px-3 bg-[#FFFFFF]/5 border border-[#FFFFFF]/10 rounded-md flex items-center gap-x-2">
                                        <RiNextjsFill  size={16} className='text-[#000000]' />
                                        <h4 className='text-[#D1D5DC] text-[12px] font-medium'>Next.js</h4>
                                    </div>
                                    {/* 1st */}
                                    <div className="py-2 px-3 bg-[#FFFFFF]/5 border border-[#FFFFFF]/10 rounded-md flex items-center gap-x-2">
                                        <SiRedux  size={16} className='text-[#764ABC]' />
                                        <h4 className='text-[#D1D5DC] text-[12px] font-medium'>Redux</h4>
                                    </div>
                                    {/* 1st */}
                                    <div className="py-2 px-3 bg-[#FFFFFF]/5 border border-[#FFFFFF]/10 rounded-md flex items-center gap-x-2">
                                        <RiTailwindCssFill  size={16} className='text-[#06B6D4]' />
                                        <h4 className='text-[#D1D5DC] text-[12px] font-medium'>Tailwind CSS</h4>
                                    </div>
                                </div>
                            </div>
                            {/* backend */}
                            <div className="backEnd rounded-xl p-5 border border-white/5 bg-white/2">
                                <div className="flex gap-x-3 items-center">
                                    <div className="p-[9px] h-10 w-10 border border-[#2B7FFE]/30 rounded-lg">
                                        <IoCodeSlash size={20} className='text-[#2B7FFE]'/>
                                    </div>
                                    <div className="text">
                                        <h4 className='text-base text-[#EDEDED] font-medium'>Backend  <span className='text-[12px] text-[#FE626B]'>(Beginner)</span></h4>
                                        <p className='text-[#6A7282] text-sm'>Creating robust APIs and server-side applications.</p>
                                    </div>
                                </div>
                                <div className="icons flex flex-wrap mt-5 gap-2">
                                    {/* 1 */}
                                    <div className="py-2 px-3 bg-[#FFFFFF]/5 border border-[#FFFFFF]/10 rounded-md flex items-center gap-x-2">
                                        <FaNodeJs  size={16} className='text-[#339933]' />
                                        <h4 className='text-[#D1D5DC] text-[12px] font-medium'>Node.js</h4>
                                    </div>
                                    {/* 2 */}
                                    <div className="py-2 px-3 bg-[#FFFFFF]/5 border border-[#FFFFFF]/10 rounded-md flex items-center gap-x-2">
                                        <SiExpress  size={16} className='text-[#000000]' />
                                        <h4 className='text-[#D1D5DC] text-[12px] font-medium'>Express.js</h4>
                                    </div>
                                </div>
                            </div>
                            {/* database */}
                            <div className="dataBase rounded-xl p-5 border border-white/5 bg-white/2">
                                <div className="flex gap-x-3 items-center">
                                    <div className="p-[9px] h-10 w-10 border border-[#2B7FFE]/30 rounded-lg">
                                        <BsDatabase  size={20} className='text-[#2B7FFE]'/>
                                    </div>
                                    <div className="text">
                                        <h4 className='text-base text-[#EDEDED] font-medium'>Database  <span className='text-[12px] text-[#FE626B]'>(Beginner)</span></h4>
                                        <p className='text-[#6A7282] text-sm'>Managing and designing efficient data storage solutions.</p>
                                    </div>
                                </div>
                                <div className="icons flex flex-wrap mt-5 gap-2">
                                    {/* 1 */}
                                    <div className="py-2 px-3 bg-[#FFFFFF]/5 border border-[#FFFFFF]/10 rounded-md flex items-center gap-x-2">
                                        <SiMongodb   size={16} className='text-[#47A248]' />
                                        <h4 className='text-[#D1D5DC] text-[12px] font-medium'>MongoDB</h4>
                                    </div>
                                    {/* 2 */}
                                    <div className="py-2 px-3 bg-[#FFFFFF]/5 border border-[#FFFFFF]/10 rounded-md flex items-center gap-x-2">
                                        <SiMongoose   size={16} className='text-[#880000]' />
                                        <h4 className='text-[#D1D5DC] text-[12px] font-medium'>Mongoose</h4>
                                    </div>
                                    {/* 3 */}
                                    <div className="py-2 px-3 bg-[#FFFFFF]/5 border border-[#FFFFFF]/10 rounded-md flex items-center gap-x-2">
                                        <SiFirebase  size={16} className='text-[#DD2C00]' />
                                        <h4 className='text-[#D1D5DC] text-[12px] font-medium'>Firebase</h4>
                                    </div>
                                </div>
                            </div>
                            {/* devops */}
                            <div className="devops rounded-xl p-5 border border-white/5 bg-white/2">
                                <div className="flex gap-x-3 items-center">
                                    <div className="p-[9px] h-10 w-10 border border-[#2B7FFE]/30 rounded-lg">
                                        <FaInfinity   size={20} className='text-[#2B7FFE]'/>
                                    </div>
                                    <div className="text">
                                        <h4 className='text-base text-[#EDEDED] font-medium'>DevOps <span className='text-[12px] text-[#FE626B]'>(Beginner)</span></h4>
                                        <p className='text-[#6A7282] text-sm'>Deployment, CI/CD, and server management.</p>
                                    </div>
                                </div>
                                <div className="icons flex flex-wrap mt-5 gap-2">
                                    {/* 1 */}
                                    <div className="py-2 px-3 bg-[#FFFFFF]/5 border border-[#FFFFFF]/10 rounded-md flex items-center gap-x-2">
                                        <FaGitAlt size={16} className='text-[#F05032]' />
                                        <h4 className='text-[#D1D5DC] text-[12px] font-medium'>Git</h4>
                                    </div>
                                    {/* 2 */}
                                    <div className="py-2 px-3 bg-[#FFFFFF]/5 border border-[#FFFFFF]/10 rounded-md flex items-center gap-x-2">
                                        <FaGithub  size={16} className='text-[#F5F5F5]' />
                                        <h4 className='text-[#D1D5DC] text-[12px] font-medium'>GitHub</h4>
                                    </div>
                                    {/* 3 */}
                                    <div className="py-2 px-3 bg-[#FFFFFF]/5 border border-[#FFFFFF]/10 rounded-md flex items-center gap-x-2">
                                        <IoLogoVercel  size={16} className='text-[#000000]' />
                                        <h4 className='text-[#D1D5DC] text-[12px] font-medium'>Vercel</h4>
                                    </div>
                                    {/* 4 */}
                                    <div className="py-2 px-3 bg-[#FFFFFF]/5 border border-[#FFFFFF]/10 rounded-md flex items-center gap-x-2">
                                        <SiNetlify   size={16} className='text-[#00C7B7]' />
                                        <h4 className='text-[#D1D5DC] text-[12px] font-medium'>Netlify</h4>
                                    </div>
                                    {/* 5 */}
                                    <div className="py-2 px-3 bg-[#FFFFFF]/5 border border-[#FFFFFF]/10 rounded-md flex items-center gap-x-2">
                                        <SiPostman   size={16} className='text-[#F7B93E]' />
                                        <h4 className='text-[#D1D5DC] text-[12px] font-medium'>Postman</h4>
                                    </div>
                                </div>
                            </div>
                            {/* tools */}
                            <div className="tools rounded-xl p-5 border border-white/5 bg-white/2">
                                <div className="flex gap-x-3 items-center">
                                    <div className="p-[9px] h-10 w-10 border border-[#2B7FFE]/30 rounded-lg">
                                        <GrTechnology    size={20} className='text-[#2B7FFE]'/>
                                    </div>
                                    <div className="text">
                                        <h4 className='text-base text-[#EDEDED] font-medium'>Tools  <span className='text-[12px] text-[#2B7FFE]'>(Intermediate)</span></h4>
                                        <p className='text-[#6A7282] text-sm'>Design, coding, and productivity tools.</p>
                                    </div>
                                </div>
                                <div className="icons flex flex-wrap mt-5 gap-2">
                                    {/* 1 */}
                                    <div className="py-2 px-3 bg-[#FFFFFF]/5 border border-[#FFFFFF]/10 rounded-md flex items-center gap-x-2">
                                        <FaFigma  size={16} className='text-[#F24E1E]' />
                                        <h4 className='text-[#D1D5DC] text-[12px] font-medium'>Figma</h4>
                                    </div>
                                    {/* 2 */}
                                    <div className="py-2 px-3 bg-[#FFFFFF]/5 border border-[#FFFFFF]/10 rounded-md flex items-center gap-x-2">
                                        <VscVscode   size={16} className='text-[#007ACC]' />
                                        <h4 className='text-[#D1D5DC] text-[12px] font-medium'>VS Code</h4>
                                    </div>
                                    {/* 3 */}
                                    <div className="py-2 px-3 bg-[#FFFFFF]/5 border border-[#FFFFFF]/10 rounded-md flex items-center gap-x-2">
                                        <RiTerminalBoxLine   size={16} className='text-white' />
                                        <h4 className='text-[#D1D5DC] text-[12px] font-medium'>Terminal</h4>
                                    </div>
                                    {/* 4 */}
                                    <div className="py-2 px-3 bg-[#FFFFFF]/5 border border-[#FFFFFF]/10 rounded-md flex items-center gap-x-2">
                                        <SiNpm  size={16} className='text-[#CB3837]' />
                                        <h4 className='text-[#D1D5DC] text-[12px] font-medium'>NPM</h4>
                                    </div>
                                    {/* 5 */}
                                    <div className="py-2 px-3 bg-[#FFFFFF]/5 border border-[#FFFFFF]/10 rounded-md flex items-center gap-x-2">
                                        <FaYarn   size={16} className='text-[#2C8EBB]' />
                                        <h4 className='text-[#D1D5DC] text-[12px] font-medium'>Yarn</h4>
                                    </div>
                                    {/* 6 */}
                                    <div className="py-2 px-3 bg-[#FFFFFF]/5 border border-[#FFFFFF]/10 rounded-md flex items-center gap-x-2">
                                        <SiEslint    size={16} className='text-[#4B32C3]' />
                                        <h4 className='text-[#D1D5DC] text-[12px] font-medium'>ESLint</h4>
                                    </div>
                                    {/* 7 */}
                                    <div className="py-2 px-3 bg-[#FFFFFF]/5 border border-[#FFFFFF]/10 rounded-md flex items-center gap-x-2">
                                        <SiPrettier    size={16} className='text-[#F7B93E]' />
                                        <h4 className='text-[#D1D5DC] text-[12px] font-medium'>Prettier</h4>
                                    </div>
                                </div>
                            </div>
                            {/* fundamentals */}
                            <div className="fundamentals rounded-xl p-5 border border-white/5 bg-white/2">
                                <div className="flex gap-x-3 items-center">
                                    <div className="p-[9px] h-10 w-10 border border-[#2B7FFE]/30 rounded-lg">
                                        <RiGraduationCapFill    size={20} className='text-[#2B7FFE]'/>
                                    </div>
                                    <div className="text">
                                        <h4 className='text-base text-[#EDEDED] font-medium'>Fundamentals   <span className='text-[12px] text-[#2B7FFE]'>(Intermediate)</span></h4>
                                        <p className='text-[#6A7282] text-sm'>Core web development concepts and best practices.</p>
                                    </div>
                                </div>
                                <div className="icons flex flex-wrap mt-5 gap-2">
                                    {/* 1 */}
                                    <div className="py-2 px-3 bg-[#FFFFFF]/5 border border-[#FFFFFF]/10 rounded-md flex items-center gap-x-2">
                                        <FaMobileAlt   size={16} className='text-[#2B7FFE]' />
                                        <h4 className='text-[#D1D5DC] text-[12px] font-medium'>Responsive Design</h4>
                                    </div>
                                    {/* 2 */}
                                    <div className="py-2 px-3 bg-[#FFFFFF]/5 border border-[#FFFFFF]/10 rounded-md flex items-center gap-x-2">
                                        <FaGlobe    size={16} className='text-[#00C950]' />
                                        <h4 className='text-[#D1D5DC] text-[12px] font-medium'>Cross-browser Compatibility</h4>
                                    </div>
                                    {/* 3 */}
                                    <div className="py-2 px-3 bg-[#FFFFFF]/5 border border-[#FFFFFF]/10 rounded-md flex items-center gap-x-2">
                                        <CgPerformance    size={16} className='text-[#FB2C36]' />
                                        <h4 className='text-[#D1D5DC] text-[12px] font-medium'>Performance Optimization</h4>
                                    </div>
                                    {/* 4 */}
                                    <div className="py-2 px-3 bg-[#FFFFFF]/5 border border-[#FFFFFF]/10 rounded-md flex items-center gap-x-2">
                                        <FaCube   size={16} className='text-[#F6339A]' />
                                        <h4 className='text-[#D1D5DC] text-[12px] font-medium'>Component-Driven Architecture</h4>
                                    </div>
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