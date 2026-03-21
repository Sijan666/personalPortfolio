import Container from "../Container"
import Images from "../Images"
import logo from '../../assets/logo.png'
import { useEffect, useState } from "react"
import { FaBarsStaggered } from "react-icons/fa6"
import SmoothLink from "../SmoothLink"


const Header = () => {

    const [show,setShow] = useState(false)

    const handleShow = ()=>{
        setShow(!show)
    }
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }

        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    return (
        
        <>
        <header id="header">
            <div className={`py-5 font-geist fixed w-full top-0 left-0 z-50 transition-all duration-300 ${
                isScrolled 
                ? "bg-[#0A0F1C]/70 backdrop-blur-md shadow-lg py-3"
                : "bg-[#0A0F1C] py-5"
            }`}>
                <Container>
                    <div className="flex justify-between items-center">
                        {/* logo */}
                        <div className="logo lg:w-[10%] w-[25%] md:w-[15%]">
                            <SmoothLink href="#header">
                                <Images imgSrc={logo}/>
                            </SmoothLink>
                        </div>
                        {/* large device navbar */}
                        <nav className="lg:w-[37%] place-items-end hidden lg:block">
                            <ul className="flex gap-x-8 text-white ">
                                <li className="text-[#99A1AF] text-base font-medium leading-6 cursor-pointer">
                                    <SmoothLink href="#header">Home</SmoothLink>
                                </li>
                                <li className="text-[#99A1AF] text-base font-medium leading-6 cursor-pointer">
                                    <SmoothLink href="#about">About Me</SmoothLink>
                                </li>
                                <li className="text-[#99A1AF] text-base font-medium leading-6 cursor-pointer">
                                    <SmoothLink href="#techStack">Tech Stack</SmoothLink>
                                </li>
                                <li className="text-[#99A1AF] text-base font-medium leading-6 cursor-pointer">
                                    <SmoothLink href="#projects">Projects</SmoothLink>
                                </li>
                                <li className="text-[#99A1AF] text-base font-medium leading-6 cursor-pointer">
                                    <SmoothLink href="#contact">Contact</SmoothLink>
                                </li>
                            </ul>
                        </nav>
                        {/* mobile display navbar */}
                        <div className="mobileNav lg:hidden">
                            <FaBarsStaggered onClick={handleShow} size={20} className="text-white relative z-50 cursor-pointer hover:text-gray-300 transition-colors"/>
                            <nav 
                                className={`absolute left-1/2 -translate-x-1/2 w-[90%] bg-white/10 backdrop-blur-2xl border border-white/10 rounded-2xl p-5 shadow-2xl transition-all duration-300 ease-out origin-top ${
                                    show 
                                    ? "top-20 opacity-100 scale-100 visible" 
                                    : "top-16 opacity-0 scale-95 invisible"
                                }`}
                            >
                                <ul className="flex flex-col lg:flex-row gap-x-5 text-white items-center gap-y-5 justify-center overflow-hidden">
                                    <li className="text-[#99A1AF] text-base font-medium leading-6 cursor-pointer hover:text-white transition-colors duration-200">
                                        <SmoothLink href="#header">Home</SmoothLink>
                                    </li>
                                    <li className="text-[#99A1AF] text-base font-medium leading-6 cursor-pointer hover:text-white transition-colors duration-200">
                                        <SmoothLink href="#about">About Me</SmoothLink>
                                    </li>
                                    <li className="text-[#99A1AF] text-base font-medium leading-6 cursor-pointer hover:text-white transition-colors duration-200">
                                        <SmoothLink href="#techStack">Tech Stack</SmoothLink>
                                    </li>
                                    <li className="text-[#99A1AF] text-base font-medium leading-6 cursor-pointer hover:text-white transition-colors duration-200">
                                        <SmoothLink href="#projects">Projects</SmoothLink>
                                    </li>
                                    <li className="text-[#99A1AF] text-base font-medium leading-6 cursor-pointer hover:text-white transition-colors duration-200">
                                        <SmoothLink href="#contact">Contact</SmoothLink>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </Container>
            </div>
        </header>
        </>
    )
}

export default Header