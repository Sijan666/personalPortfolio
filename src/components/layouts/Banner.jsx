import { FaDiscord, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa"
import Button from "../Button"
import Container from "../Container"
import { GrInstagram } from "react-icons/gr"
import { Typewriter } from "react-simple-typewriter"

const Banner = () => {
    return (
        <>
        <section id="banner" className="relative bg-[#0a0f1c] overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-[600px] bg-[radial-gradient(ellipse_at_top,rgba(254,154,0,0.12),transparent_70%)] pointer-events-none"></div>
            {/* container */}
            <div className="relative z-10 py-15 lg:py-25 font-geist">
                <Container>
                    <div className="text-center py-20 flex flex-col items-center">
                        {/* heading */}
                        <h2 className="text-[15px] md:text-[30px] lg:text-[50px] font-bold text-[#ededed] mb-2">Hey! I'm</h2>
                        <h1 className="text-[25px] md:text-[40px] lg:text-[72px] font-bold text-[#fe9a00] drop-shadow-[0_0_20px_rgba(254,154,0,0.3)]">
                            <Typewriter
                                words={['Front-End Developer', 'Majharul Islam']}
                                loop={true}
                                cursor
                                cursorStyle='|'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                        </h1>
                        {/* bio */}
                        <p className="lg:py-10 py-6 text-[#ededed]/80 text-sm lg:text-base font-light leading-relaxed lg:w-[420px] mx-auto">
                            A passionate Front-End Developer from Bangladesh . Always curious to learn, explore and collaborate.
                        </p>
                        {/* action bar */}
                        <div className="flex flex-col lg:flex-row items-center justify-center gap-y-6 gap-x-8 mt-2 p-4 lg:px-8 lg:py-4 bg-white/2 border border-white/5 backdrop-blur-xl rounded-3xl lg:rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
                            {/* btn */}
                            <a href="https://github.com/sijan666" target="_blank" rel="noreferrer">
                                <Button 
                                    btnText={"View Projects"} 
                                    className={"px-7 py-2.5 text-sm font-medium tracking-wide text-[#fe9a00] bg-[#fe9a00]/10 border border-[#fe9a00]/30 rounded-full hover:bg-[#fe9a00] hover:text-white hover:shadow-[0_0_15px_rgba(254,154,0,0.5)] transition-all inline-block"} 
                                />
                            </a>
                            {/* divider */}
                            <div className="h-px w-16 lg:h-8 lg:w-px bg-white/10"></div>
                            {/* social links */}
                            <div className="socialIcons flex gap-x-6 lg:gap-x-8 items-center justify-center text-[#ededed]/60">
                                <a href="https://github.com/Sijan666" target="_blank" className="hover:text-[#fe9a00] hover:-translate-y-1 transition-all duration-300">
                                    <FaGithub size={22} className="cursor-pointer"/>
                                </a>
                                <a href="https://www.linkedin.com/in/majharulislamdev/" target="_blank" className="hover:text-[#fe9a00] hover:-translate-y-1 transition-all duration-300">
                                    <FaLinkedin size={22} className="cursor-pointer"/>
                                </a>
                                <a href="https://www.facebook.com/majharul.islam.666/" target="_blank" className="hover:text-[#fe9a00] hover:-translate-y-1 transition-all duration-300">
                                    <FaFacebook size={22} className="cursor-pointer"/>
                                </a>
                                <a href="https://instagram.com/majharul_sijan" target="_blank" className="hover:text-[#fe9a00] hover:-translate-y-1 transition-all duration-300">
                                    <GrInstagram size={22} className="cursor-pointer"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </section>
        </>
    )
}

export default Banner