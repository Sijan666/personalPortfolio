import { FaDiscord, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa"
import Button from "../Button"
import Container from "../Container"
import { GrInstagram } from "react-icons/gr"
import { Typewriter } from "react-simple-typewriter"



const Banner = () => {
    return (
        <>
        <section id="banner">
            <div className="py-15 lg:py-25 bg-[#0A0F1C] font-geist">
                <Container>
                    <div className="text-center py-20">
                        {/* heading */}
                        <h2 className="text-[15px] md:text-[30px] lg:text-[50px] font-bold text-[#EDEDED]">Hey! I'm</h2>
                        <h1 className="text-[25px] md:text-[40px] lg:text-[72px] font-bold text-[#FE9A00]">
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
                        <p className="lg:py-10 py-6 text-[#EDEDED] text-sm lg:text-base leading-6 lg:w-[420px] mx-auto">A passionate Front-End Developer from Bangladesh . Always curious to learn, explore and collaborate.</p>
                        <div className="flex flex-col lg:flex-row justify-center gap-y-8 gap-x-8">
                            {/* btn */}
                            <a href="https://github.com/Sijan666" target="_blank"><Button btnText={'View Projects'} className={'px-5 py-2 bg-[#2B7FFE] text-white text-sm rounded-md'}/></a>
                            <div className="h-9 w-1 bg-white/10 hidden lg:block"></div>
                            {/* social links */}
                            <div className="socialIcons flex lg:gap-x-5 gap-x-8 items-center justify-center text-white/50">
                                <a href="https://github.com/Sijan666" target="_blank">
                                    <FaGithub size={20} className="cursor-pointer"/>
                                </a>
                                <a href="https://www.linkedin.com/in/majharulislamdev/" target="_blank">
                                    <FaLinkedin size={20} className="cursor-pointer"/>
                                </a>
                                <a href="https://www.facebook.com/majharul.islam.666/" target="_blank">
                                    <FaFacebook size={20} className="cursor-pointer"/>
                                </a>
                                <a href="https://instagram.com/majharul_sijan" target="_blank">
                                    <GrInstagram size={20} className="cursor-pointer"/>
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
