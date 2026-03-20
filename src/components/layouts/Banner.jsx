import { FaDiscord, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa"
import Button from "../Button"
import Container from "../Container"
import { GrInstagram } from "react-icons/gr"



const Banner = () => {
    return (
        <>
        <section id="banner">
            <div className="py-15 lg:py-25 bg-[#0A0F1C] font-geist">
                <Container>
                    <div className="text-center">
                        {/* heading */}
                        <h1 className="text-[30px] lg:text-[72px] font-bold text-[#EDEDED]">A Fabulous</h1>
                        <h2 className="text-[30px] lg:text-[72px] font-bold text-[#FE9A00]">Frontend Developer</h2>
                        <p className="py-10 text-[#EDEDED] text-sm lg:text-base leading-6 lg:w-[685px] mx-auto">Hi, I’m Majharul Islam Sijan . A passionate Front-End Developer from Bangladesh . Always curious to learn, explore and collaborate.</p>
                        <div className="flex flex-col lg:flex-row justify-center gap-y-8 gap-x-8">
                            {/* btn */}
                            <a href="https://github.com/Sijan666" target="_blank"><Button btnText={'View Projects'} className={'px-5 py-2 bg-[#2B7FFE] text-white text-sm rounded-md'}/></a>
                            <div className="h-9 w-1 bg-white/10 hidden lg:block"></div>
                            {/* social links */}
                            <div className="socialIcons flex lg:gap-x-5 gap-x-8 items-center justify-center text-white/50">
                                <FaGithub size={20} className="cursor-pointer"/>
                                <FaLinkedin size={20} className="cursor-pointer"/>
                                <FaFacebook size={20} className="cursor-pointer"/>
                                <GrInstagram size={20} className="cursor-pointer"/>
                                <FaDiscord size={20} className="cursor-pointer"/>
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
