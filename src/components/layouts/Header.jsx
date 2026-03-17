import Container from "../Container"
import Images from "../Images"
import logo from '../../assets/logo.png'


const Header = () => {
    return (
        <>
        <header>
            <div className="py-10 bg-[#0A0F1C] font-geist">
                <Container>
                    <div className="flex justify-between items-center">
                        <div className="logo w-[10%]">
                            <Images imgSrc={logo}/>
                        </div>
                        <nav className="lg:w-[37%] place-items-end">
                            <ul className="flex gap-x-5 text-white ">
                                <li className="text-[#99A1AF] text-base font-medium leading-6 cursor-pointer">Home</li>
                                <li className="text-[#99A1AF] text-base font-medium leading-6 cursor-pointer">About Me</li>
                                <li className="text-[#99A1AF] text-base font-medium leading-6 cursor-pointer">Tech Stack</li>
                                <li className="text-[#99A1AF] text-base font-medium leading-6 cursor-pointer">Projects</li>
                                <li className="text-[#99A1AF] text-base font-medium leading-6 cursor-pointer">Contact</li>
                            </ul>
                        </nav>
                    </div>
                </Container>
            </div>
        </header>
        </>
    )
}

export default Header