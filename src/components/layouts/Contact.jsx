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
        <section id='contact' className="relative bg-[#0a0f1c] overflow-hidden w-full max-w-full selection:bg-[#fe9a00] selection:text-[#0a0f1c]">
            {/* Background Glows */}
            <div className="absolute top-[20%] left-[-10%] w-[400px] h-[400px] bg-[#fe9a00]/10 blur-[150px] pointer-events-none rounded-full"></div>
            <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-900/10 blur-[150px] pointer-events-none rounded-full"></div>
            <div className="py-16 sm:py-24 lg:py-32 font-geist relative z-10 w-full">
                <Container>
                    <div className="flex flex-col items-center lg:items-start mb-12 sm:mb-16 lg:mb-20 w-full min-w-0">
                        <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4 w-full min-w-0">
                            <span className="hidden lg:block h-px w-12 bg-[#fe9a00]" />
                            <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight shrink-0'>
                                Contact <span className="text-transparent bg-clip-text bg-linear-to-r from-[#fe9a00] to-yellow-500">Me</span>
                            </h2>
                            <span className="h-px flex-1 bg-linear-to-r from-[#fe9a00]/50 to-transparent min-w-2.5" />
                        </div>
                        <p className='text-sm sm:text-base lg:text-lg text-gray-400 max-w-2xl text-center lg:text-left leading-relaxed font-light'>
                            I'm always happy to discuss opportunities, answer questions, or explore new ideas. Send a message or connect online.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch w-full">
                        {/* left */}
                        <div className="leftInfo lg:col-span-5 flex flex-col gap-6 lg:gap-8">
                            {/* Contact Details */}
                            <div className="group relative overflow-hidden rounded-4xl border border-white/5 bg-[#0a0f1c]/40 p-8 backdrop-blur-2xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.05),0_8px_32px_rgba(0,0,0,0.3)] transition-all duration-500 hover:border-white/10 hover:bg-[#0a0f1c]/60">
                                <div className="absolute -inset-px bg-linear-to-br from-[#fe9a00]/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                                <div className="relative z-10">
                                    <div className="flex gap-x-4 items-center mb-8">
                                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-[#fe9a00]/20 bg-[#fe9a00]/10 shadow-[0_0_20px_rgba(254,154,0,0.1)] transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                                            <MdOutlineContactPage size={26} className='text-[#fe9a00]'/>
                                        </div>
                                        <div className="text flex-1">
                                            <h4 className='text-xl text-white font-bold tracking-wide'>Get in Touch</h4>
                                            <p className='text-gray-400 text-sm font-light mt-1'>Reach me directly via email or phone.</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-6">
                                        {/* Email */}
                                        <div className="flex items-start gap-x-4 group/item">
                                            <div className="mt-1 p-2.5 rounded-xl bg-white/5 border border-white/10 transition-colors duration-300 group-hover/item:border-[#fe9a00]/30 group-hover/item:bg-[#fe9a00]/10">
                                                <LuMail size={20} className='text-gray-400 transition-colors duration-300 group-hover/item:text-[#fe9a00]'/>
                                            </div>
                                            <div className="text pt-1">
                                                <h4 className='text-sm font-medium text-gray-300 mb-1'>Email</h4>
                                                <a href="mailto:majharulislamsijan.dev@gmail.com" className='text-[13px] sm:text-sm text-[#fe9a00] font-medium hover:underline hover:underline-offset-4 transition-all duration-300'>
                                                    majharulislamsijan.dev@gmail.com
                                                </a>
                                            </div>
                                        </div>
                                        {/* Phone */}
                                        <div className="flex items-start gap-x-4 group/item">
                                            <div className="mt-1 p-2.5 rounded-xl bg-white/5 border border-white/10 transition-colors duration-300 group-hover/item:border-[#fe9a00]/30 group-hover/item:bg-[#fe9a00]/10">
                                                <LuPhone size={20} className='text-gray-400 transition-colors duration-300 group-hover/item:text-[#fe9a00]'/>
                                            </div>
                                            <div className="text pt-1">
                                                <h4 className='text-sm font-medium text-gray-300 mb-1'>Phone</h4>
                                                <a href="tel:+8801828871277" className='text-[13px] sm:text-sm text-gray-400 hover:text-white transition-colors duration-300'>
                                                    +8801828871277
                                                </a>
                                            </div>
                                        </div>
                                        {/* Location */}
                                        <div className="flex items-start gap-x-4 group/item">
                                            <div className="mt-1 p-2.5 rounded-xl bg-white/5 border border-white/10 transition-colors duration-300 group-hover/item:border-[#fe9a00]/30 group-hover/item:bg-[#fe9a00]/10">
                                                <LuMapPin size={20} className='text-gray-400 transition-colors duration-300 group-hover/item:text-[#fe9a00]'/>
                                            </div>
                                            <div className="text pt-1">
                                                <h4 className='text-sm font-medium text-gray-300 mb-1'>Location</h4>
                                                <h5 className='text-[13px] sm:text-sm text-gray-400'>Dhaka, Bangladesh</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Social Links */}
                            <div className="group relative overflow-hidden rounded-4xl border border-white/5 bg-[#0a0f1c]/40 p-8 backdrop-blur-2xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.05),0_8px_32px_rgba(0,0,0,0.3)] transition-all duration-500 hover:border-white/10 hover:bg-[#0a0f1c]/60">
                                <h4 className='text-xl text-white font-bold tracking-wide mb-2'>Connect with Me</h4>
                                <p className='text-gray-400 text-sm font-light mb-8'>Stay connected on social media for collaborations or updates.</p>
                                
                                <div className="socialIcons flex flex-wrap gap-4 items-center">
                                    <a href="https://github.com/Sijan666" target="_blank" rel="noreferrer" aria-label="GitHub" className="p-3.5 rounded-xl bg-[#0a0f1c]/50 border border-white/10 hover:bg-[#fe9a00]/10 hover:border-[#fe9a00]/40 text-gray-400 hover:text-[#fe9a00] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_4px_20px_rgba(254,154,0,0.2)]">
                                        <FaGithub size={22} />
                                    </a>
                                    <a href="https://www.linkedin.com/in/majharulislamdev/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="p-3.5 rounded-xl bg-[#0a0f1c]/50 border border-white/10 hover:bg-[#fe9a00]/10 hover:border-[#fe9a00]/40 text-gray-400 hover:text-[#fe9a00] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_4px_20px_rgba(254,154,0,0.2)]">
                                        <FaLinkedin size={22} />
                                    </a>
                                    <a href="https://www.facebook.com/majharul.islam.666/" target="_blank" rel="noreferrer" aria-label="Facebook" className="p-3.5 rounded-xl bg-[#0a0f1c]/50 border border-white/10 hover:bg-[#fe9a00]/10 hover:border-[#fe9a00]/40 text-gray-400 hover:text-[#fe9a00] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_4px_20px_rgba(254,154,0,0.2)]">
                                        <FaFacebook size={22} />
                                    </a>
                                    <a href="https://instagram.com/majharul_sijan" target="_blank" rel="noreferrer" aria-label="Instagram" className="p-3.5 rounded-xl bg-[#0a0f1c]/50 border border-white/10 hover:bg-[#fe9a00]/10 hover:border-[#fe9a00]/40 text-gray-400 hover:text-[#fe9a00] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_4px_20px_rgba(254,154,0,0.2)]">
                                        <GrInstagram size={22} />
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* right */}
                        <div className="rightForm lg:col-span-7 w-full h-full">
                            <div className="group relative overflow-hidden rounded-4xl border border-white/5 bg-[#0a0f1c]/40 p-8 lg:p-10 backdrop-blur-2xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.05),0_8px_32px_rgba(0,0,0,0.3)] transition-all duration-500 hover:border-white/10 hover:bg-[#0a0f1c]/60 h-full">
                                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col h-full gap-6' noValidate>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {/* Name */}
                                        <div className="name flex flex-col">
                                            <label className='text-sm text-gray-300 mb-2 font-medium ml-1'>Name</label>
                                            <input 
                                                type="text" 
                                                {...register("user_name")} 
                                                placeholder="Write your name here" 
                                                className={`w-full bg-[#0a0f1c]/50 border ${errors.user_name ? 'border-red-500/50 focus:border-red-500' : 'border-white/10 focus:border-[#fe9a00]/50'} rounded-xl px-5 py-3.5 text-sm text-white placeholder:text-white/20 outline-none transition-all duration-300 focus:bg-[#fe9a00]/5 focus:shadow-[0_0_15px_rgba(254,154,0,0.1)]`}
                                            />
                                            {errors.user_name && <span className="text-red-400 text-xs mt-1.5 ml-1">{errors.user_name.message}</span>}
                                        </div>
                                        {/* Email */}
                                        <div className="email flex flex-col">
                                            <label className='text-sm text-gray-300 mb-2 font-medium ml-1'>Email</label>
                                            <input 
                                                type="email" 
                                                {...register("user_email")} 
                                                placeholder="Write your email here" 
                                                className={`w-full bg-[#0a0f1c]/50 border ${errors.user_email ? 'border-red-500/50 focus:border-red-500' : 'border-white/10 focus:border-[#fe9a00]/50'} rounded-xl px-5 py-3.5 text-sm text-white placeholder:text-white/20 outline-none transition-all duration-300 focus:bg-[#fe9a00]/5 focus:shadow-[0_0_15px_rgba(254,154,0,0.1)]`}
                                            />
                                            {errors.user_email && <span className="text-red-400 text-xs mt-1.5 ml-1">{errors.user_email.message}</span>}
                                        </div>
                                    </div>
                                    {/* Subject */}
                                    <div className="subject flex flex-col">
                                        <label className='text-sm text-gray-300 mb-2 font-medium ml-1'>Subject</label>
                                        <input 
                                            type="text" 
                                            {...register("subject")} 
                                            placeholder="How can I help you?" 
                                            className={`w-full bg-[#0a0f1c]/50 border ${errors.subject ? 'border-red-500/50 focus:border-red-500' : 'border-white/10 focus:border-[#fe9a00]/50'} rounded-xl px-5 py-3.5 text-sm text-white placeholder:text-white/20 outline-none transition-all duration-300 focus:bg-[#fe9a00]/5 focus:shadow-[0_0_15px_rgba(254,154,0,0.1)]`}
                                        />
                                        {errors.subject && <span className="text-red-400 text-xs mt-1.5 ml-1">{errors.subject.message}</span>}
                                    </div>
                                    {/* Message */}
                                    <div className="message flex flex-col flex-1">
                                        <label className='text-sm text-gray-300 mb-2 font-medium ml-1'>Message</label>
                                        <textarea 
                                            rows={5} 
                                            {...register("message")} 
                                            placeholder="Write your message here..." 
                                            className={`w-full flex-1 bg-[#0a0f1c]/50 border ${errors.message ? 'border-red-500/50 focus:border-red-500' : 'border-white/10 focus:border-[#fe9a00]/50'} rounded-xl px-5 py-4 text-sm text-white placeholder:text-white/20 outline-none transition-all duration-300 focus:bg-[#fe9a00]/5 focus:shadow-[0_0_15px_rgba(254,154,0,0.1)] resize-none min-h-[140px]`}
                                        ></textarea>
                                        {errors.message && <span className="text-red-400 text-xs mt-1.5 ml-1">{errors.message.message}</span>}
                                    </div>
                                    {/* Submit Button */}
                                    <div className="btn mt-2">
                                        <Button 
                                            btnText={isSubmitting ? "Sending Message..." : "Send Message"} 
                                            type="submit" 
                                            disabled={isSubmitting} 
                                            className={`group relative flex w-full h-[52px] items-center justify-center gap-2 overflow-hidden rounded-xl border font-bold tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#fe9a00]/70
                                                ${isSubmitting 
                                                    ? 'bg-white/5 text-white/50 border-white/10 cursor-not-allowed' 
                                                    : 'bg-[#fe9a00]/10 border-[#fe9a00]/40 text-[#fe9a00] hover:bg-[#fe9a00] hover:text-white hover:border-[#fe9a00] hover:shadow-[0_0_20px_rgba(254,154,0,0.4)] active:scale-[0.98]'
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