import React, { useRef } from 'react'
import Container from '../Container'
import { LuMail } from 'react-icons/lu'
import { MdOutlineContactPage } from 'react-icons/md'
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa'
import { GrInstagram } from 'react-icons/gr'
import Button from '../Button'
import emailjs from '@emailjs/browser';


const Contact = () => {

    // email js
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_y315zst', 'template_2u72gov', form.current, 'y7o7ZXi1gyIaKWOLJ')
        .then(
            () => {
                console.log('SUCCESS!');
                alert("Message sent successfully!");
                form.current.reset();
            },
            (error) => {
                console.log('FAILED...', error.text);
                alert("Something went wrong. Please try again.");
            },
        );
    };
    // email js

    return (
        <>
        <section id='contact'>
            <div className="lg:py-25 py-10 bg-[#0A0F1C] font-geist">
                <Container>
                    {/* heading text */}
                    <div className="heading text-center lg:text-left">
                        <h3 className='text-[30px] lg:text-[36px] font-bold text-[#EDEDED] beforeAfter'>Contact Me</h3>
                        <p className='text-base text-[#99A1AF] lg:w-[559px] leading-6 pt-8'>I'm always happy to discuss opportunities, answer questions, or explore new ideas. Send a message or connect online.</p>
                    </div>
                    <div className="mt-10">
                        <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-10">
                            {/* left info */}
                            <div className="leftInfo lg:w-1/2">
                                {/* 1 */}
                                <div className="flex gap-x-3 lg:w-[444px] w-full">
                                    <div className="p-[9px] h-10 w-10 border border-[#2B7FFE]/30 rounded-lg">
                                        <MdOutlineContactPage  size={20} className='text-[#2B7FFE]'/>
                                    </div>
                                    <div className="text">
                                        <h4 className='text-base text-[#2B7FFE] font-medium leading-6'>Contact Information</h4>
                                        <p className='text-white/60 text-[12px] lg:text-sm leading-5 '>Reach me directly via email or phone for questions or collaborations.</p>
                                        {/* contact */}
                                        <div className="mt-5">
                                            {/* 1 */}
                                            <div className="flex gap-x-3">
                                                <LuMail size={22} className='text-[#2B7FFE]'/>
                                                <div className="text">
                                                    <h4 className='text-[12px] lg:text-sm font-medium leading-5 text-[#EDEDED]'>Email</h4>
                                                    <h5 className='pt-1 text-[12px] lg:text-sm text-white/70'>majharulislamsijan.dev@gmail.com</h5>
                                                </div>
                                            </div>
                                            {/* 2 */}
                                            <div className="flex gap-x-3 mt-4">
                                                <LuMail size={22} className='text-[#2B7FFE]'/>
                                                <div className="text">
                                                    <h4 className='text-[12px] lg:text-sm font-medium leading-5 text-[#EDEDED]'>Phone</h4>
                                                    <h5 className='pt-1 text-[12px] lg:text-sm text-white/70'>+8801828871277</h5>
                                                </div>
                                            </div>
                                            {/* 3 */}
                                            <div className="flex gap-x-3 mt-4">
                                                <LuMail size={22} className='text-[#2B7FFE]'/>
                                                <div className="text">
                                                    <h4 className='text-sm font-medium leading-5 text-[#EDEDED]'>Location</h4>
                                                    <h5 className='pt-1 text-[12px] lg:text-sm text-white/70'>Dhaka , Bangladesh</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* 2 */}
                                <div className="flex gap-x-3 lg:w-[444px] mt-10 w-full">
                                    <div className="p-[9px] h-10 w-10 border border-[#2B7FFE]/30 rounded-lg">
                                        <MdOutlineContactPage  size={20} className='text-[#2B7FFE]'/>
                                    </div>
                                    <div className="text">
                                        <h4 className='text-base text-[#2B7FFE] font-medium leading-6'>Connect with Me</h4>
                                        <p className='text-white/60 text-[12px] lg:text-sm leading-5'>Stay connected on social media for collaborations or updates.</p>
                                        {/* contact */}
                                        <div className="mt-5">
                                            <div className="socialIcons flex lg:gap-x-5 gap-x-8 items-center text-white/50">
                                                <a href="https://github.com/Sijan666" target="_blank">
                                                    <FaGithub size={22} className="cursor-pointer hover:text-[#2B7FFE] duration-300"/>
                                                </a>
                                                <a href="https://www.linkedin.com/in/majharulislamdev/" target="_blank">
                                                    <FaLinkedin size={22} className="cursor-pointer hover:text-[#2B7FFE] duration-300"/>
                                                </a>
                                                <a href="https://www.facebook.com/majharul.islam.666/" target="_blank">
                                                    <FaFacebook size={22} className="cursor-pointer hover:text-[#2B7FFE] duration-300"/>
                                                </a>
                                                <a href="https://instagram.com/majharul_sijan" target="_blank">
                                                    <GrInstagram size={22} className="cursor-pointer hover:text-[#2B7FFE] duration-300"/>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* right Form */}
                            <div className="rightForm lg:w-1/2 w-full">
                                <div className="bg-white/2 border border-white/5 rounded-xl p-5 ">
                                    <form ref={form} onSubmit={sendEmail} className='flex flex-col gap-4'>
                                        {/* name */}
                                        <div className="name">
                                            <h4 className='text-sm text-white/70 pb-4'>Name</h4>
                                            <div className="input-container">
                                                <input type="text" name="user_name" required  id="" placeholder=" " className="input"/>
                                                <label className="label">Enter your name</label>
                                            </div>
                                        </div>
                                        {/* email */}
                                        <div className="email">
                                            <h4 className='text-sm text-white/70 pb-4'>Email</h4>
                                            <div className="input-container">
                                                <input type="email" name="user_email" required  id="" placeholder=" " className="input"/>
                                                <label className="label">Enter your email</label>
                                            </div>
                                        </div>
                                        {/* subject */}
                                        <div className="subject">
                                            <h4 className='text-sm text-white/70 pb-4'>Subject</h4>
                                            <div className="input-container">
                                                <input type="text" name="subject" id="" placeholder=" " className="input"/>
                                                <label className="label">Enter subject</label>
                                            </div>
                                        </div>
                                        {/* message */}
                                        <div className="message">
                                            <h4 className='text-sm text-white/70 pb-4'>Message</h4>
                                            <div className="textarea-container w-full">
                                                <textarea id="message" name="message" placeholder=" "className="textarea"></textarea>
                                                <label htmlFor="message" className="textarea-label">Enter your message</label>
                                            </div>
                                        </div>
                                        {/* btn */}
                                        <div className="btn">
                                            <Button btnText={"Send Message"} type="submit" value="Send" className={'py-2 bg-[#2B7FFE] text-base leading-6 text-white/90 rounded-md w-full'}/>
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