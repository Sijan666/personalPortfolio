import Container from "../Container"
import Images from "../Images"
import logo from '../../assets/logo.png'
import { useState } from "react"
import { FaBarsStaggered } from "react-icons/fa6"


const Header = () => {

    const [show,setShow] = useState(false)

    const handleShow = ()=>{
        setShow(!show)
    }


    return (
        <>
        <header>
            <div className="py-10 bg-[#0A0F1C] font-geist">
                <Container>
                    <div className="flex justify-between items-center">
                        {/* logo */}
                        <div className="logo lg:w-[10%] w-[25%]">
                            <Images imgSrc={logo}/>
                        </div>
                        {/* large device navbar */}
                        <nav className="lg:w-[37%] place-items-end hidden md:block">
                            <ul className="flex gap-x-5 text-white ">
                                <li className="text-[#99A1AF] text-base font-medium leading-6 cursor-pointer">Home</li>
                                <li className="text-[#99A1AF] text-base font-medium leading-6 cursor-pointer">About Me</li>
                                <li className="text-[#99A1AF] text-base font-medium leading-6 cursor-pointer">Tech Stack</li>
                                <li className="text-[#99A1AF] text-base font-medium leading-6 cursor-pointer">Projects</li>
                                <li className="text-[#99A1AF] text-base font-medium leading-6 cursor-pointer">Contact</li>
                            </ul>
                        </nav>
                        {/* mobile display navbar */}
                        <div className="mobileNav md:hidden">
                            <FaBarsStaggered onClick={handleShow} size={20} className="text-white relative"/>
                            {show && (
                            <nav className="lg:w-[37%] absolute top-20 left-1/2 -translate-x-1/2 w-[90%] bg-white/10 backdrop-blur-2xl rounded-md p-5">
                                <ul className="flex flex-col lg:flex-row gap-x-5 text-white items-center gap-y-5 justify-center overflow-hidden">
                                    <li className="text-[#99A1AF] text-base font-medium leading-6 cursor-pointer">Home</li>
                                    <li className="text-[#99A1AF] text-base font-medium leading-6 cursor-pointer">About Me</li>
                                    <li className="text-[#99A1AF] text-base font-medium leading-6 cursor-pointer">Tech Stack</li>
                                    <li className="text-[#99A1AF] text-base font-medium leading-6 cursor-pointer">Projects</li>
                                    <li className="text-[#99A1AF] text-base font-medium leading-6 cursor-pointer">Contact</li>
                                </ul>
                            </nav>
                            )}
                        </div>
                    </div>
                </Container>
            </div>
        </header>
        </>
    )
}

export default Header