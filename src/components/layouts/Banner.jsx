import { useEffect, useState } from "react"
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa"
import Container from "../Container"
import SmoothLink from "../SmoothLink"

const PROBLEMS = [
    { problem: "Manual & slow workflows", fix: "Custom AI Agents that automate repetitive tasks" },
    { problem: "Unused business data", fix: "RAG pipelines & AI assistants for instant insights" },
    { problem: "Stuck at the idea stage", fix: "Scalable full-stack products, built and shipped" },
]

const SOCIALS = [
    { label: "GitHub", href: "https://github.com/Sijan666", Icon: FaGithub },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/majharulislamdev/", Icon: FaLinkedin },
    { label: "Facebook", href: "https://www.facebook.com/majharul.islam.666/", Icon: FaFacebook },
    { label: "Instagram", href: "https://instagram.com/majharul_sijan", Icon: FaInstagram },
]

const REVEAL = "transition-all duration-1000 ease-out motion-reduce:transition-none"

const Banner = () => {
    const [ready, setReady] = useState(false)

    useEffect(() => {
        const id = requestAnimationFrame(() => setReady(true))
        return () => cancelAnimationFrame(id)
    }, [])

    const show = ready ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
    const delay = (ms) => ({ transitionDelay: `${ms}ms` })

    return (
        <section id="banner" className="relative flex min-h-svh items-center overflow-hidden bg-[#0a0f1c] pb-16 pt-28 sm:pb-20 sm:pt-32 font-geist selection:bg-[#fe9a00] selection:text-[#0a0f1c]">
            {/* Ambient Background Glow */}
            <div aria-hidden="true" className="pointer-events-none absolute inset-0">
                <div className="absolute -left-[10%] -top-[10%] h-1/2 w-1/2 rounded-full bg-[#fe9a00]/10 blur-[120px]" />
            </div>

            <Container>
                <div className="relative z-10 grid w-full items-center gap-12 lg:grid-cols-2 lg:gap-16">
                    {/* Left */}
                    <div className="flex flex-col items-start text-left">
                        <div style={delay(100)} className={`${REVEAL} ${show} mb-5 sm:mb-6 flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 sm:px-4 backdrop-blur-md`}>
                            <span className="relative flex size-2 sm:size-2.5">
                                <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#fe9a00] opacity-75 motion-reduce:animate-none" />
                                <span className="relative inline-flex size-2 sm:size-2.5 rounded-full bg-[#fe9a00]" />
                            </span>
                            <span className="text-xs sm:text-sm font-medium text-gray-300">Available for new opportunities</span>
                        </div>
                        <div style={delay(250)} className={`${REVEAL} ${show}`}>
                            <h1 className="whitespace-nowrap text-4xl font-bold tracking-tighter text-white sm:text-6xl lg:text-6xl xl:text-7xl">
                                Majharul Islam
                            </h1>
                            <p className="mt-3 sm:mt-4 text-xl font-semibold text-[#fe9a00] [text-shadow:0_0_32px_rgba(254,154,0,0.35)] sm:text-3xl lg:text-4xl">
                                Full-Stack AI Architect
                            </p>
                        </div>
                        <p style={delay(400)} className={`${REVEAL} ${show} mt-5 sm:mt-6 max-w-lg text-base sm:text-lg leading-relaxed text-gray-400`}>
                            I design and build <span className="font-medium text-gray-200">AI-powered, full-stack products</span>, turning complex problems into scalable, automated and intelligent solutions.
                        </p>
                        {/* Combined Actions */}
                        <div style={delay(550)} className={`${REVEAL} ${show} mt-8 sm:mt-10 inline-flex items-center gap-3 sm:gap-4 rounded-full border border-white/8 bg-[#0a0f1c]/60 p-1.5 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.5)] ring-1 ring-white/2 transition-all duration-500 hover:border-white/15`}>
                            <SmoothLink href="#projects">
                                <span className="group flex h-10 sm:h-11 items-center justify-center gap-2 rounded-full border border-[#fe9a00] bg-transparent px-5 sm:px-7 text-xs sm:text-sm font-medium text-[#fe9a00] transition-all duration-300 hover:bg-[#fe9a00] hover:text-white hover:shadow-[0_0_20px_rgba(254,154,0,0.3)] active:scale-95">
                                    View Projects
                                    <svg className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </span>
                            </SmoothLink>
                            {/* Minimal Line Separator */}
                            <span className="h-5 w-px shrink-0 bg-white/20" />
                            {/* Social Icons with Interactive Tooltips */}
                            <div className="flex shrink-0 items-center gap-1 pr-2 sm:pr-3">
                                {SOCIALS.map(({ label, href, Icon }) => (
                                    <a 
                                        key={label} 
                                        href={href} 
                                        target="_blank" 
                                        rel="noreferrer" 
                                        aria-label={label}
                                        className="group relative flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full text-gray-400 transition-all duration-300 hover:bg-white/10 hover:text-[#fe9a00] focus-visible:outline-none"
                                    >
                                        {/* Floating Premium Tooltip */}
                                        <span className="pointer-events-none absolute -top-10 origin-bottom scale-75 rounded-md border border-white/10 bg-[#131b2e] px-2.5 py-1 text-xs font-semibold text-gray-200 opacity-0 shadow-lg transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-100 group-hover:opacity-100">
                                            {label}
                                        </span>
                                        <Icon className="pointer-events-none text-[1.1rem] sm:text-[1.2rem] transition-transform duration-300 group-hover:scale-110" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right: Problems I Solve */}
                    <div className="mt-4 flex flex-col gap-4 sm:gap-5 lg:mt-0">
                        <div style={delay(550)} className={`${REVEAL} ${show} flex items-center gap-4`}>
                            <span className="h-px flex-1 bg-linear-to-r from-transparent to-white/10" />
                            <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-gray-500">Problems I Solve</p>
                            <span className="h-px w-8 sm:w-12 bg-white/10" />
                        </div>
                        {PROBLEMS.map(({ problem, fix }, i) => (
                            <div key={problem} style={delay(650 + i * 150)} className={`${REVEAL} ${show}`}>
                                <div className="group relative overflow-hidden rounded-2xl border border-white/5 bg-white/2 p-4 sm:p-5 sm:pr-8 transition-all duration-500 hover:border-white/10 hover:bg-white/4">
                                    {/* Animated Left Accent Line */}
                                    <div className="absolute left-0 top-0 h-full w-[3px] origin-top scale-y-0 bg-[#fe9a00] transition-transform duration-500 ease-out group-hover:scale-y-100" />
                                    {/* Subtle Background Glow */}
                                    <div className="absolute -inset-px bg-linear-to-r from-[#fe9a00]/10 via-transparent to-transparent opacity-0 blur-lg transition-opacity duration-500 group-hover:opacity-100" />
                                    <div className="relative z-10 flex items-start gap-4 sm:gap-5">
                                        {/* Stylized Number Indicator */}
                                        <div className="flex h-8 w-8 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-[#0a0f1c] font-mono text-xs sm:text-sm font-bold text-gray-500 transition-all duration-500 group-hover:border-[#fe9a00]/40 group-hover:bg-[#fe9a00]/10 group-hover:text-[#fe9a00]">
                                            0{i + 1}
                                        </div>
                                        {/* Text Content */}
                                        <div className="pt-0.5 sm:pt-1">
                                            <h3 className="text-xs sm:text-sm font-medium text-gray-400 transition-colors duration-300 group-hover:text-gray-300">
                                                {problem}
                                            </h3>
                                            <p className="mt-1 sm:mt-1.5 text-base sm:text-lg font-semibold leading-snug text-gray-200 transition-colors duration-300 group-hover:text-white">
                                                {fix}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Banner