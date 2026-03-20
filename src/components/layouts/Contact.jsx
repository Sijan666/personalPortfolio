import React from 'react'
import Container from '../Container'
import { LuMail } from 'react-icons/lu'
import { MdOutlineContactPage } from 'react-icons/md'
import { FaDiscord, FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa'
import { GrInstagram } from 'react-icons/gr'

const Contact = () => {
    return (
        <>
        <section id='contact'>
            <div className="py-25 bg-[#0A0F1C] font-geist">
                <Container>
                    {/* heading text */}
                    <div className="heading">
                        <h3 className='text-[36px] font-bold text-[#EDEDED] beforeAfter'>Contact Me</h3>
                        <p className='text-bsae text-[#99A1AF] lg:w-[559px] leading-6 pt-8'>I'm always happy to discuss opportunities, answer questions, or explore new ideas. Send a message or connect online.</p>
                    </div>
                    <div className="mt-10">
                        <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
                            {/* left info */}
                            <div className="leftInfo lg:w-1/2">
                                {/* 1 */}
                                <div className="flex gap-x-3 lg:w-[444px]">
                                    <div className="p-[9px] h-10 w-10 border border-[#2B7FFE]/30 rounded-lg">
                                        <MdOutlineContactPage  size={20} className='text-[#2B7FFE]'/>
                                    </div>
                                    <div className="text">
                                        <h4 className='text-base text-[#2B7FFE] font-medium leading-6'>Contact Information</h4>
                                        <p className='text-white/60 text-sm leading-5'>Reach me directly via email or phone for questions or collaborations.</p>
                                        {/* contact */}
                                        <div className="mt-5">
                                            {/* 1 */}
                                            <div className="flex gap-x-3">
                                                <LuMail size={22} className='text-[#2B7FFE]'/>
                                                <div className="text">
                                                    <h4 className='text-sm font-medium leading-5 text-[#EDEDED]'>Email</h4>
                                                    <h5 className='pt-1 text-sm text-white/70'>majharulislamsijan.dev@gmail.com</h5>
                                                </div>
                                            </div>
                                            {/* 2 */}
                                            <div className="flex gap-x-3 mt-4">
                                                <LuMail size={22} className='text-[#2B7FFE]'/>
                                                <div className="text">
                                                    <h4 className='text-sm font-medium leading-5 text-[#EDEDED]'>Phone</h4>
                                                    <h5 className='pt-1 text-sm text-white/70'>+8801828871277</h5>
                                                </div>
                                            </div>
                                            {/* 3 */}
                                            <div className="flex gap-x-3 mt-4">
                                                <LuMail size={22} className='text-[#2B7FFE]'/>
                                                <div className="text">
                                                    <h4 className='text-sm font-medium leading-5 text-[#EDEDED]'>Location</h4>
                                                    <h5 className='pt-1 text-sm text-white/70'>Dhaka , Bangladesh</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* 2 */}
                                <div className="flex gap-x-3 lg:w-[444px] mt-10">
                                    <div className="p-[9px] h-10 w-10 border border-[#2B7FFE]/30 rounded-lg">
                                        <MdOutlineContactPage  size={20} className='text-[#2B7FFE]'/>
                                    </div>
                                    <div className="text">
                                        <h4 className='text-base text-[#2B7FFE] font-medium leading-6'>Connect with Me</h4>
                                        <p className='text-white/60 text-sm leading-5'>Stay connected on social media for collaborations or updates.</p>
                                        {/* contact */}
                                        <div className="mt-5">
                                            <div className="socialIcons flex lg:gap-x-5 gap-x-8 items-center text-white/50">
                                                <FaGithub size={22} className="cursor-pointer hover:text-[#2B7FFE] duration-300"/>
                                                <FaLinkedin size={22} className="cursor-pointer hover:text-[#2B7FFE] duration-300"/>
                                                <FaFacebook size={22} className="cursor-pointer hover:text-[#2B7FFE] duration-300"/>
                                                <GrInstagram size={22} className="cursor-pointer hover:text-[#2B7FFE] duration-300"/>
                                                <FaDiscord size={22} className="cursor-pointer hover:text-[#2B7FFE] duration-300"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* right Form */}
                            <div className="rightForm lg:w-1/2 w-full">
                                <div className="bg-white/2 border border-white/5 rounded-xl p-5 ">
                                    <form className='flex flex-col gap-4'>
                                        {/* name */}
                                        <div className="name">
                                            <h4 className='text-sm text-white/70 pb-4'>Name</h4>
                                            <div className="input-container">
                                                <input type="text" id="" placeholder=" " className="input"/>
                                                <label className="label">Enter your name</label>
                                            </div>
                                        </div>
                                        {/* email */}
                                        <div className="email">
                                            <h4 className='text-sm text-white/70 pb-4'>Email</h4>
                                            <div className="input-container">
                                                <input type="email" id="" placeholder=" " className="input"/>
                                                <label className="label">Enter your email</label>
                                            </div>
                                        </div>
                                        {/* subject */}
                                        <div className="subject">
                                            <h4 className='text-sm text-white/70 pb-4'>Subject</h4>
                                            <div className="input-container">
                                                <input type="text" id="" placeholder=" " className="input"/>
                                                <label className="label">Enter subject</label>
                                            </div>
                                        </div>
                                        {/* message */}
                                        <div className="message">
                                            <h4 className='text-sm text-white/70 pb-4'>Message</h4>
                                            <div className="textarea-container w-full">
                                                <textarea id="message" placeholder=" "className="textarea"></textarea>
                                                <label htmlFor="message" className="textarea-label">Enter your message</label>
                                            </div>
                                        </div>
                                    </form>
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

export default Contact