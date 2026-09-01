import Container from '../Container';
import { LuMail, LuMapPin, LuPhone } from 'react-icons/lu';
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
        <section id='contact' className="relative bg-[#0a0f1c] overflow-hidden w-full max-w-full">
            <div className="absolute bottom-50 right-[-10%] w-[400px] h-[400px] md:bg-[#fe9a00] blur-[150px] opacity-10 pointer-events-none"></div>
            <div className="lg:py-25 py-15 font-geist relative z-10 w-full">
                <Container>
                    {/* heading text */}
                    <div className="heading text-center lg:text-left mb-4">
                        <h3 className='text-[30px] lg:text-[40px] font-bold text-[#ededed] inline-block relative'>
                            Contact Me
                            <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-linear-to-r from-[#fe9a00] to-transparent"></span>
                        </h3>
                    </div>
                    {/* subtitle */}
                    <div className="mb-12 text-center lg:text-left">
                        <p className='text-[15px] text-[#ededed]/60 lg:w-[559px] leading-relaxed font-light mx-auto lg:mx-0'>
                            I'm always happy to discuss opportunities, answer questions, or explore new ideas. Send a message or connect online.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start w-full">
                        {/* left info box */}
                        <div className="leftInfo lg:col-span-5 flex flex-col gap-6">
                            {/* contact details */}
                            <div className="flex flex-col p-6 lg:p-8 bg-white/2 border border-white/5 backdrop-blur-xl rounded-3xl hover:bg-white/3 hover:border-white/8 transition-all duration-300 shadow-[0_8px_30px_rgba(0,0,0,0.2)]">
                                <div className="flex gap-x-4 items-center mb-6">
                                    <div className="p-3 h-12 w-12 shrink-0 flex items-center justify-center bg-[#fe9a00]/10 border border-[#fe9a00]/20 rounded-xl">
                                        <MdOutlineContactPage size={22} className='text-[#fe9a00]'/>
                                    </div>
                                    <div className="text flex-1">
                                        <h4 className='text-[20px] text-[#ededed] font-semibold'>Contact Information</h4>
                                        <p className='text-[#ededed]/50 text-sm font-light'>Reach me directly via email or phone.</p>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-5">
                                    {/* email */}
                                    <div className="flex items-start gap-x-4">
                                        <div className="mt-1 p-2 rounded-lg bg-white/3 border border-white/5">
                                            <LuMail size={18} className='text-[#fe9a00]'/>
                                        </div>
                                        <div className="text">
                                            <h4 className='text-sm font-medium text-[#ededed]/80 mb-0.5'>Email</h4>
                                            <a href="mailto:majharulislamsijan.dev@gmail.com" className='text-[13px] lg:text-sm text-[#fe9a00] hover:underline hover:underline-offset-4 transition-all duration-300'>majharulislamsijan.dev@gmail.com</a>
                                        </div>
                                    </div>
                                    {/* phone */}
                                    <div className="flex items-start gap-x-4">
                                        <div className="mt-1 p-2 rounded-lg bg-white/3 border border-white/5">
                                            <LuPhone size={18} className='text-[#fe9a00]'/>
                                        </div>
                                        <div className="text">
                                            <h4 className='text-sm font-medium text-[#ededed]/80 mb-0.5'>Phone</h4>
                                            <a href="tel:+8801828871277" className='text-[13px] lg:text-sm text-white/60 hover:text-white transition-colors duration-300'>+8801828871277</a>
                                        </div>
                                    </div>
                                    {/* location */}
                                    <div className="flex items-start gap-x-4">
                                        <div className="mt-1 p-2 rounded-lg bg-white/3 border border-white/5">
                                            <LuMapPin size={18} className='text-[#fe9a00]'/>
                                        </div>
                                        <div className="text">
                                            <h4 className='text-sm font-medium text-[#ededed]/80 mb-0.5'>Location</h4>
                                            <h5 className='text-[13px] lg:text-sm text-white/60'>Dhaka, Bangladesh</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* social links box */}
                            <div className="flex flex-col p-6 lg:p-8 bg-white/2 border border-white/5 backdrop-blur-xl rounded-3xl hover:bg-white/3 hover:border-white/8 transition-all duration-300 shadow-[0_8px_30px_rgba(0,0,0,0.2)]">
                                <h4 className='text-[18px] text-[#ededed] font-semibold mb-2'>Connect with Me</h4>
                                <p className='text-[#ededed]/50 text-sm font-light mb-6'>Stay connected on social media for collaborations or updates.</p>
                                
                                <div className="socialIcons flex gap-x-5 items-center text-[#ededed]/60">
                                    <a href="https://github.com/Sijan666" target="_blank" rel="noreferrer" className="p-3 rounded-xl bg-white/3 border border-white/5 hover:bg-[#fe9a00]/10 hover:border-[#fe9a00]/30 hover:text-[#fe9a00] hover:-translate-y-1 transition-all duration-300">
                                        <FaGithub size={20} className="cursor-pointer"/>
                                    </a>
                                    <a href="https://www.linkedin.com/in/majharulislamdev/" target="_blank" rel="noreferrer" className="p-3 rounded-xl bg-white/3 border border-white/5 hover:bg-[#fe9a00]/10 hover:border-[#fe9a00]/30 hover:text-[#fe9a00] hover:-translate-y-1 transition-all duration-300">
                                        <FaLinkedin size={20} className="cursor-pointer"/>
                                    </a>
                                    <a href="https://www.facebook.com/majharul.islam.666/" target="_blank" rel="noreferrer" className="p-3 rounded-xl bg-white/3 border border-white/5 hover:bg-[#fe9a00]/10 hover:border-[#fe9a00]/30 hover:text-[#fe9a00] hover:-translate-y-1 transition-all duration-300">
                                        <FaFacebook size={20} className="cursor-pointer"/>
                                    </a>
                                    <a href="https://instagram.com/majharul_sijan" target="_blank" rel="noreferrer" className="p-3 rounded-xl bg-white/3 border border-white/5 hover:bg-[#fe9a00]/10 hover:border-[#fe9a00]/30 hover:text-[#fe9a00] hover:-translate-y-1 transition-all duration-300">
                                        <GrInstagram size={20} className="cursor-pointer"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* right form box */}
                        <div className="rightForm lg:col-span-7 w-full h-full">
                            <div className="bg-white/2 border border-white/5 backdrop-blur-xl rounded-3xl p-6 lg:p-8 hover:bg-white/3 hover:border-white/8 transition-all duration-300 shadow-[0_8px_30px_rgba(0,0,0,0.2)] h-full">
                                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col h-full gap-5' noValidate>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                        {/* Name */}
                                        <div className="name flex flex-col">
                                            <label className='text-sm text-[#ededed]/80 mb-2 font-medium ml-1'>Name</label>
                                            <input 
                                                type="text" 
                                                {...register("user_name")} 
                                                placeholder="Write your name here" 
                                                className={`w-full bg-white/3 border ${errors.user_name ? 'border-red-500/50 focus:border-red-500' : 'border-white/10 focus:border-[#fe9a00]/50'} rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/20 outline-none transition-all duration-300 focus:bg-white/5`}
                                            />
                                            {errors.user_name && <span className="text-red-400 text-xs mt-1.5 ml-1">{errors.user_name.message}</span>}
                                        </div>
                                        {/* Email */}
                                        <div className="email flex flex-col">
                                            <label className='text-sm text-[#ededed]/80 mb-2 font-medium ml-1'>Email</label>
                                            <input 
                                                type="email" 
                                                {...register("user_email")} 
                                                placeholder="Write your email here" 
                                                className={`w-full bg-white/3 border ${errors.user_email ? 'border-red-500/50 focus:border-red-500' : 'border-white/10 focus:border-[#fe9a00]/50'} rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/20 outline-none transition-all duration-300 focus:bg-white/5`}
                                            />
                                            {errors.user_email && <span className="text-red-400 text-xs mt-1.5 ml-1">{errors.user_email.message}</span>}
                                        </div>
                                    </div>
                                    {/* Subject */}
                                    <div className="subject flex flex-col">
                                        <label className='text-sm text-[#ededed]/80 mb-2 font-medium ml-1'>Subject</label>
                                        <input 
                                            type="text" 
                                            {...register("subject")} 
                                            placeholder="How can I help you?" 
                                            className={`w-full bg-white/3 border ${errors.subject ? 'border-red-500/50 focus:border-red-500' : 'border-white/10 focus:border-[#fe9a00]/50'} rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/20 outline-none transition-all duration-300 focus:bg-white/5`}
                                        />
                                        {errors.subject && <span className="text-red-400 text-xs mt-1.5 ml-1">{errors.subject.message}</span>}
                                    </div>
                                    {/* Message */}
                                    <div className="message flex flex-col flex-1">
                                        <label className='text-sm text-[#ededed]/80 mb-2 font-medium ml-1'>Message</label>
                                        <textarea 
                                            rows={5} 
                                            {...register("message")} 
                                            placeholder="Write your message here..." 
                                            className={`w-full flex-1 bg-white/3 border ${errors.message ? 'border-red-500/50 focus:border-red-500' : 'border-white/10 focus:border-[#fe9a00]/50'} rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/20 outline-none transition-all duration-300 focus:bg-white/5 resize-none min-h-[120px]`}
                                        ></textarea>
                                        {errors.message && <span className="text-red-400 text-xs mt-1.5 ml-1">{errors.message.message}</span>}
                                    </div>
                                    {/* Submit Button */}
                                    <div className="btn mt-2">
                                        <Button 
                                            btnText={isSubmitting ? "Sending Message..." : "Send Message"} 
                                            type="submit" 
                                            disabled={isSubmitting} 
                                            className={`w-full py-3.5 px-6 text-sm font-medium tracking-wide rounded-xl transition-all duration-300 flex items-center justify-center
                                                ${isSubmitting 
                                                    ? 'bg-white/5 text-white/50 border border-white/10 cursor-not-allowed' 
                                                    : 'text-[#fe9a00] bg-[#fe9a00]/10 border border-[#fe9a00]/30 hover:bg-[#fe9a00] hover:text-white hover:shadow-[0_0_15px_rgba(254,154,0,0.5)]'
                                                }
                                            `}
                                        />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </section>
    );
};

export default Contact;