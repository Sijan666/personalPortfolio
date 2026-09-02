import { Link } from "react-router-dom"
import { ArrowLeft } from "lucide-react"

const Error = () => {
    return (
        <div className="relative min-h-screen bg-[#0a0a0a] flex items-center justify-center px-4 py-20">
            {/* corner */}
            <div className="absolute top-8 left-8 w-8 h-8 border-t border-l border-white/20"></div>
            <div className="absolute top-8 right-8 w-8 h-8 border-t border-r border-white/20"></div>
            <div className="absolute bottom-8 left-8 w-8 h-8 border-b border-l border-white/20"></div>
            <div className="absolute bottom-8 right-8 w-8 h-8 border-b border-r border-white/20"></div>
            <div className="relative w-full max-w-3xl border border-white/10 rounded-2xl bg-white/2 backdrop-blur-sm px-8 py-14 md:px-16 md:py-20">
                {/* Status */}
                <div className="flex items-center gap-2 mb-8">
                    <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                    <span className="text-white/50 text-xs tracking-[0.25em] uppercase font-medium">
                        Error · 404
                    </span>
                </div>
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
                    <h1 className="text-white text-[90px] md:text-[130px] font-semibold leading-none tracking-tight">
                        4<span className="text-orange-500">0</span>4
                    </h1>
                    <div className="md:pb-4 md:max-w-xs">
                        <div className="w-10 h-0.5 bg-orange-500 mb-4"></div>
                        <h2 className="text-white text-xl font-semibold mb-2">
                            Page Not Found
                        </h2>
                        <p className="text-white/40 text-sm leading-relaxed">
                            The page you're looking for doesn't exist, was removed,
                            or the URL might be incorrect.
                        </p>
                    </div>
                </div>
                <div className="w-full h-px bg-white/10 my-10"></div>
                {/* Bottom */}
                <div className="errorBtn flex flex-col sm:flex-row items-center justify-between gap-6">
                    <p className="text-white/30 text-xs tracking-wide">
                        MAJHARUL ISLAM
                    </p>
                    <Link
                        to={"/"}
                        className="group inline-flex items-center gap-2 border border-orange-500 text-orange-500 px-6 py-3 rounded-lg text-sm font-medium tracking-wide hover:bg-orange-500 hover:text-black transition-all duration-300"
                    >
                        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform duration-300" />
                        Back To Homepage
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Error