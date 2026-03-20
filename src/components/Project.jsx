import React from 'react'
import Images from './Images'
import { SiExpress, SiFirebase, SiJquery, SiMongodb, SiNextdotjs, SiNodedotjs, SiReact, SiSocketdotio, SiTailwindcss } from 'react-icons/si';
import { FaArrowUpRightFromSquare, FaBootstrap, FaStripeS } from 'react-icons/fa6';
import { BsGithub } from 'react-icons/bs';


const Project = ({className , projectImg , projectName , projectType , projectDetails ,techStack = [] , liveLink , githubLink}) => {

const allTechIcons = {
    "Next.js": <SiNextdotjs className="text-white"/>,
    "Tailwind CSS": <SiTailwindcss className="text-[#38bdf8]"/>,
    "Node.js": <SiNodedotjs className="text-[#339933]"/>,
    "Express.js": <SiExpress className="text-white"/>,
    "MongoDB": <SiMongodb className="text-[#47A248]"/>,
    "Socket.IO": <SiSocketdotio  className="text-[#FFCA28]"/>,
    "Firebase": <SiFirebase className="text-[#FFCA28]"/>,
    "React.js": <SiReact className="text-[#61DAFB]"/>,
    "Stripe": <FaStripeS  className="text-[#61DAFB]"/>,
    "Bootstrap": <FaBootstrap   className="text-[##7718F6]"/>,
    "jQuery": <SiJquery    className="text-[##186EB1]"/>,
};


    return (
        <>
        <div className={`${className} p-3 border border-white/5 rounded-xl bg-white/2 font-geist flex flex-col h-full`}>
            <Images imgSrc={projectImg} className={'mx-auto w-full rounded-lg'}/>
            <div className="details mt-4 flex flex-col grow">
                <div className="flex gap-x-1 items-baseline">
                    <h4 className='text-[18px] font-medium text-[#EDEDED]'>{projectName}</h4>
                    {projectType && (
                        <h5 className={`text-[12px] font-medium ${projectType === 'Team Project' ? 'text-[#4AD08E]' : 'text-[#FE626B]'}`}>
                            ({projectType})
                        </h5>
                    )}
                </div>
                <div className="mt-auto">
                    <p className='pt-[5px] text-sm text-white/70 leading-5'>{projectDetails}</p>
                </div>
                <div className="mt-auto pt-4 pb-3">
                    <h4 className='text-sm text-[#EDEDED]'>Tech stack:</h4>
                    <div className="mt-1 flex flex-wrap items-center gap-1">
                        {techStack.map((item) => (
                            <div key={item.id} className="flex items-center gap-2 px-1.5 py-1 bg-white/5 border border-white/10 rounded-md text-xs text-[#EDEDED]">
                                {allTechIcons[item.name]} 
                                <span>{item.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="pt-3 mt-auto border-t border-white/10">
                    <div className="flex items-center justify-between">
                        <a href={liveLink} className="hover:text-[#FE9A00] text-white duration-300 font-semibold text-sm flex items-center gap-2 cursor-pointer">
                            Live Preview 
                            <FaArrowUpRightFromSquare />
                        </a>
                        <a href={githubLink} className="text-gray-400 text-xl hover:text-[#FE9A00] transition-colors duration-300 cursor-pointer">
                            <BsGithub/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Project