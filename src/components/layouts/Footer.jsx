import Container from "../Container"
import Images from "../Images"
import logo from '../../assets/logo.png'


const Footer = () => {
  return (
    <>
      <footer>
        <div className="py-5 bg-[#0A0F1C] font-geist">
          <Container>
            <div className="flex flex-col lg:flex-row justify-between items-center gap-5">
              {/* logo */}
              <div className="logo lg:w-[10%] w-[40%]">
                <Images imgSrc={logo}/>
              </div>
              {/* text */}
              <p className="text-sm text-[#99A1AF]">© 2026 Majharul Islam. All rights reserved.</p>
            </div>
          </Container>
        </div>
      </footer>
    </>
  )
}

export default Footer
