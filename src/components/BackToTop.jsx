// eslint-disable react-hooks/set-state-in-effect
import React, { useState, useEffect, useRef } from "react";

const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);
    const circleRef = useRef(null);
    
    const radius = 22;
    const circumference = 2 * Math.PI * radius;

    const handleScroll = () => {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const docHeight = document.documentElement.scrollHeight;
        const winHeight = document.documentElement.clientHeight;
        const scrollHeight = docHeight - winHeight;

        if (scrollHeight > 0) {
            const progress = scrollTop / scrollHeight;
            const offset = circumference - (progress * circumference);
            if (circleRef.current) {
                circleRef.current.style.strokeDashoffset = offset;
            }
        }
        setIsVisible(scrollTop > 300);
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll(); 
        
        return () => window.removeEventListener("scroll", handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        /* main wrapper */
        <div 
            className={`fixed bottom-5 right-5 md:bottom-8 md:right-8 z-999 transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] ${
                isVisible ? "translate-y-0 opacity-100 visible" : "translate-y-12 opacity-0 invisible"
            }`}
        >
            <button
                onClick={scrollToTop}
                className="group relative flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#0a0f1c]/90 backdrop-blur-xl border border-white/5 shadow-[0_8px_30px_rgba(0,0,0,0.4)] hover:shadow-[0_0_15px_rgba(254,154,0,0.3)] transition-all duration-500 cursor-pointer"
                aria-label="Back to top"
            >
                {/* background svg */}
                <svg className="absolute inset-0 w-full h-full -rotate-90 transform" viewBox="0 0 50 50">
                    <circle
                        cx="25"
                        cy="25"
                        r={radius}
                        className="text-white/5"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        fill="none"
                    />
                    {/* progress svg */}
                    <circle
                        ref={circleRef}
                        cx="25"
                        cy="25"
                        r={radius}
                        className="text-[#fe9a00]"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        fill="none"
                        strokeLinecap="round"
                        style={{
                            strokeDasharray: circumference,
                            strokeDashoffset: circumference,
                            transition: "stroke-dashoffset 0.1s ease-out"
                        }}
                    />
                </svg>
                {/* arrow */}
                <div className="relative flex items-center justify-center w-9 h-9 md:w-11 md:h-11 bg-transparent text-[#fe9a00] rounded-full group-hover:bg-[#fe9a00] group-hover:text-white transition-colors duration-300">
                    <svg 
                        className="w-4 h-4 md:w-5 md:h-5 duration-300" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 15l7-7 7 7" />
                    </svg>
                </div>
            </button>
        </div>
    );
};

export default BackToTop;