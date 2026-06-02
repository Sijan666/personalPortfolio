import Container from "../Container"
import Images from "../Images"
import logo from '../../assets/logo.png'
import { useEffect, useState } from "react"
import { FaBarsStaggered, FaXmark } from "react-icons/fa6"
import SmoothLink from "../SmoothLink"

const navLinks = [
    { name: "Home", href: "#header" },
    { name: "About Me", href: "#about" },
    { name: "Tech Stack", href: "#techStack" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
];

const Header = () => {
    const [show, setShow] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const handleShow = () => setShow(!show)
    const closeMenu = () => setShow(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <header id="header" className="relative">
            <div className={`font-geist fixed w-full top-0 left-0 z-50 transition-all duration-500 ease-in-out ${
                isScrolled 
                ? "bg-[#0A0F1C]/70 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.1)] border-b border-white/5 py-4"
                : "bg-transparent py-6"
            }`}>
                <Container>
                    <div className="flex justify-between items-center">
                        {/* logo */}
                        <div className="logo lg:w-[10%] w-[25%] md:w-[15%] relative z-50">
                            <SmoothLink href="#header" onClick={closeMenu}>
                                <Images imgSrc={logo} />
                            </SmoothLink>
                        </div>
                        {/* nav */}
                        <nav className="hidden lg:block">
                            <ul className="flex gap-x-10 items-center">
                                {navLinks.map((link, index) => (
                                    <li key={index} className="group relative">
                                        <SmoothLink href={link.href}>
                                            <span className="text-[#99A1AF] text-sm font-medium tracking-wide uppercase group-hover:text-white transition-colors duration-300">
                                                {link.name}
                                            </span>
                                            {/* 4. Premium Animated Gradient Underline */}
                                            <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-linear-to-r from-blue-500 to-purple-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left rounded-full"></span>
                                        </SmoothLink>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                        {/* small device toggle */}
                        <div className="lg:hidden relative z-50 flex items-center">
                            <button 
                                onClick={handleShow}
                                className="p-2 text-white focus:outline-none"
                                aria-label="Toggle Menu">
                                {show ? <FaXmark size={24} /> : <FaBarsStaggered size={22} />}
                            </button>
                        </div>
                    </div>
                </Container>
                {/* small device nav */}
                <div className={`lg:hidden absolute top-full left-0 w-full px-4 transition-all duration-500 ease-out origin-top ${
                    show ? "opacity-100 scale-y-100 visible translate-y-2" : "opacity-0 scale-y-95 invisible -translate-y-4"}`}>
                    <div className="bg-[#111827]/90 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl p-6 ring-1 ring-white/5">
                        <ul className="flex flex-col gap-y-6">
                            {navLinks.map((link, index) => (
                                <li key={index} className="text-center border-b border-white/5 pb-2 last:border-none last:pb-0">
                                    <SmoothLink href={link.href} onClick={closeMenu}>
                                        <span className="text-[#99A1AF] text-lg font-medium hover:text-white hover:tracking-widest transition-all duration-300 block">
                                            {link.name}
                                        </span>
                                    </SmoothLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header