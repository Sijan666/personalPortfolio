import Container from '../Container';
import { LuMail } from 'react-icons/lu';
import { MdOutlineContactPage } from 'react-icons/md';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import { GrInstagram } from 'react-icons/gr';
import Button from '../Button';
import emailjs from '@emailjs/browser';

import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const contactSchema = z.object({
    user_name: z.string().min(1, "Name is required"),
    user_email: z.string().min(1, "Email is required").email("Please enter a valid email address"),
    subject: z.string().min(1, "Subject is required"),
    message: z.string().min(5, "Message must be at least 5 characters long")
});

const Contact = () => {

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting }
    } = useForm({
        resolver: zodResolver(contactSchema)
    });

    const onSubmit = async (data) => {
        try {
            await emailjs.send(
                'service_y315zst', 
                'template_2u72gov', 
                data,
                'y7o7ZXi1gyIaKWOLJ'
            );
            console.log('SUCCESS!');
            alert("Message sent successfully!");
            reset();
        } catch (error) {
            console.log('FAILED...', error);
            alert("Something went wrong. Please try again.");
        }
    };

    return (
        <section id='contact'>
            <div className="lg:py-25 py-10 bg-[#0A0F1C] font-geist">
                <Container>
                    <div className="heading text-center lg:text-left">
                        <h3 className='text-[30px] lg:text-[36px] font-bold text-[#EDEDED] beforeAfter'>Contact Me</h3>
                        <p className='text-base text-[#99A1AF] lg:w-[559px] leading-6 pt-8'>I'm always happy to discuss opportunities, answer questions, or explore new ideas. Send a message or connect online.</p>
                    </div>
                    <div className="mt-10">
                        <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-10">
                            {/* Left Info */}
                            <div className="leftInfo lg:w-1/2">
                                <div className="flex gap-x-3 lg:w-[444px] w-full">
                                    <div className="p-[9px] h-10 w-10 border border-[#2B7FFE]/30 rounded-lg">
                                        <MdOutlineContactPage size={20} className='text-[#2B7FFE]'/>
                                    </div>
                                    <div className="text">
                                        <h4 className='text-base text-[#2B7FFE] font-medium leading-6'>Contact Information</h4>
                                        <p className='text-white/60 text-[12px] lg:text-sm leading-5 '>Reach me directly via email or phone for questions or collaborations.</p>
                                        <div className="mt-5">
                                            <div className="flex gap-x-3">
                                                <LuMail size={22} className='text-[#2B7FFE]'/>
                                                <div className="text">
                                                    <h4 className='text-[12px] lg:text-sm font-medium leading-5 text-[#EDEDED]'>Email</h4>
                                                    <h5 className='pt-1 text-[12px] lg:text-sm text-white/70'>majharulislamsijan.dev@gmail.com</h5>
                                                </div>
                                            </div>
                                            <div className="flex gap-x-3 mt-4">
                                                <LuMail size={22} className='text-[#2B7FFE]'/>
                                                <div className="text">
                                                    <h4 className='text-[12px] lg:text-sm font-medium leading-5 text-[#EDEDED]'>Phone</h4>
                                                    <h5 className='pt-1 text-[12px] lg:text-sm text-white/70'>+8801828871277</h5>
                                                </div>
                                            </div>
                                            <div className="flex gap-x-3 mt-4">
                                                <LuMail size={22} className='text-[#2B7FFE]'/>
                                                <div className="text">
                                                    <h4 className='text-sm font-medium leading-5 text-[#EDEDED]'>Location</h4>
                                                    <h5 className='pt-1 text-[12px] lg:text-sm text-white/70'>Dhaka, Bangladesh</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-x-3 lg:w-[444px] mt-10 w-full">
                                    <div className="p-[9px] h-10 w-10 border border-[#2B7FFE]/30 rounded-lg">
                                        <MdOutlineContactPage size={20} className='text-[#2B7FFE]'/>
                                    </div>
                                    <div className="text">
                                        <h4 className='text-base text-[#2B7FFE] font-medium leading-6'>Connect with Me</h4>
                                        <p className='text-white/60 text-[12px] lg:text-sm leading-5'>Stay connected on social media for collaborations or updates.</p>
                                        <div className="mt-5">
                                            <div className="socialIcons flex lg:gap-x-5 gap-x-8 items-center text-white/50">
                                                <a href="https://github.com/Sijan666" target="_blank" rel="noreferrer">
                                                    <FaGithub size={22} className="cursor-pointer hover:text-[#2B7FFE] duration-300"/>
                                                </a>
                                                <a href="https://www.linkedin.com/in/majharulislamdev/" target="_blank" rel="noreferrer">
                                                    <FaLinkedin size={22} className="cursor-pointer hover:text-[#2B7FFE] duration-300"/>
                                                </a>
                                                <a href="https://www.facebook.com/majharul.islam.666/" target="_blank" rel="noreferrer">
                                                    <FaFacebook size={22} className="cursor-pointer hover:text-[#2B7FFE] duration-300"/>
                                                </a>
                                                <a href="https://instagram.com/majharul_sijan" target="_blank" rel="noreferrer">
                                                    <GrInstagram size={22} className="cursor-pointer hover:text-[#2B7FFE] duration-300"/>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Form */}
                            <div className="rightForm lg:w-1/2 w-full">
                                <div className="bg-white/2 border border-white/5 rounded-xl p-5 ">
                                    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4' noValidate>
                                        {/* Name */}
                                        <div className="name">
                                            <h4 className='text-sm text-white/70 pb-4'>Name</h4>
                                            <div className="input-container">
                                                <input type="text" {...register("user_name")} placeholder=" " className={`input ${errors.user_name ? 'border-red-500' : ''}`}/>
                                                <label className="label">Enter your name</label>
                                            </div>
                                            {errors.user_name && <span className="text-red-500 text-xs mt-1 block">{errors.user_name.message}</span>}
                                        </div>
                                        {/* Email */}
                                        <div className="email">
                                            <h4 className='text-sm text-white/70 pb-4'>Email</h4>
                                            <div className="input-container">
                                                <input type="email" {...register("user_email")} placeholder=" " className={`input ${errors.user_email ? 'border-red-500' : ''}`}/>
                                                <label className="label">Enter your email</label>
                                            </div>
                                            {errors.user_email && <span className="text-red-500 text-xs mt-1 block">{errors.user_email.message}</span>}
                                        </div>
                                        {/* Subject */}
                                        <div className="subject">
                                            <h4 className='text-sm text-white/70 pb-4'>Subject</h4>
                                            <div className="input-container">
                                                <input 
                                                    type="text" 
                                                    {...register("subject")}
                                                    placeholder=" " 
                                                    className={`input ${errors.subject ? 'border-red-500' : ''}`}
                                                />
                                                <label className="label">Enter subject</label>
                                            </div>
                                            {errors.subject && <span className="text-red-500 text-xs mt-1 block">{errors.subject.message}</span>}
                                        </div>
                                        {/* Message */}
                                        <div className="message">
                                            <h4 className='text-sm text-white/70 pb-4'>Message</h4>
                                            <div className="textarea-container w-full">
                                                <textarea 
                                                    id="message" 
                                                    rows={5} 
                                                    {...register("message")}
                                                    placeholder=" "
                                                    className={`textarea ${errors.message ? 'border-red-500' : ''}`}
                                                ></textarea>
                                                <label htmlFor="message" className="textarea-label">Enter your message</label>
                                            </div>
                                            {errors.message && <span className="text-red-500 text-xs mt-1 block">{errors.message.message}</span>}
                                        </div>
                                        {/* Submit Button */}
                                        <div className="btn">
                                            <Button 
                                                btnText={isSubmitting ? "Sending..." : "Send Message"} 
                                                type="submit" 
                                                disabled={isSubmitting}
                                                className={`py-2 text-base leading-6 text-white/90 rounded-md w-full ${isSubmitting ? 'bg-[#2B7FFE]/70 cursor-not-allowed' : 'bg-[#2B7FFE]'}`}
                                            />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </section>
    );
};

export default Contact;