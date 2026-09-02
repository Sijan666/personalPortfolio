import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'

const FloatingWhatsApp = () => {
    return (
        <>
        {/* floating whatsapp wrapper */}
        <div className="fixed bottom-5 left-5 md:bottom-8 md:left-8 z-999">
            <a
                href="https://wa.me/8801828871277"
                target="_blank"
                rel="noreferrer"
                className="group relative flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#0a0f1c]/90 backdrop-blur-xl border border-white/5 shadow-[0_8px_30px_rgba(0,0,0,0.4)] hover:shadow-[0_0_15px_rgba(37,211,102,0.3)] hover:border-[#25D366]/30 transition-all duration-500 cursor-pointer"
                aria-label="Chat on WhatsApp"
            >
                {/* icon with whatsapp original color on hover */}
                <FaWhatsapp size={26} className="text-white/60 group-hover:text-[#25D366] group-hover:scale-110 transition-all duration-300" />
            </a>
        </div>
        </>
    )
}

export default FloatingWhatsApp