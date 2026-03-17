import { FaDiscord, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa"
import Button from "../Button"
import Container from "../Container"
import { GrInstagram } from "react-icons/gr"



const Banner = () => {
    return (
        <>
        <section id="banner">
            <div className="py-25 bg-[#0A0F1C] font-geist">
                <Container>
                    <div className="text-center">
                        <h1 className="text-[72px] font-bold text-[#EDEDED]">A Fabulous</h1>
                        <h2 className="text-[72px] font-bold text-[#FE9A00]">Frontend Developer</h2>
                        <p className="py-10 text-[#EDEDED] text-base leading-6 lg:w-[685px] mx-auto">Hi, My name is Md. Nuruzzaman, and I am a Frontend developer based in Dhaka, Bangladesh . I specialize in building modern, responsive web applications.</p>
                        <div className="flex justify-center gap-x-8">
                            <Button btnText={'View Projects'} className={'px-5 py-2 bg-[#2B7FFE] text-white text-sm rounded-md'}/>
                            <div className="h-9 w-1 bg-white/10"></div>
                            <div className="socialIcons flex gap-x-5 items-center text-white/50">
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
