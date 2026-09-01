import Container from "../Container"
import Images from "../Images"
import logo from '../../assets/logo.png'

const Footer = () => {
    return (
        <>
        {/* footer section */}
        <footer className="relative bg-[#0a0f1c] overflow-hidden w-full max-w-full border-t border-white/5">
            <div className="py-8 font-geist relative z-10 w-full">
                <Container>
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                        {/* logo */}
                        <div className="logo w-[30%] md:w-[15%] lg:w-[8%]">
                            <Images imgSrc={logo} className="opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-300 cursor-pointer" />
                        </div>
                        {/* text */}
                        <div className="text-center md:text-right">
                            <p className="text-[13px] md:text-sm text-[#ededed]/50 font-light tracking-wide">
                                © 2026 <span className="text-[#fe9a00] font-medium">Majharul Islam</span>. All rights reserved.
                            </p>
                        </div>
                    </div>
                </Container>
            </div>
        </footer>
        </>
    )
}

export default Footer