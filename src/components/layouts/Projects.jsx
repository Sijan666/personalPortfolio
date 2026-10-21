import { useEffect, useRef } from "react"
import Container from "../Container"
import { allProjects } from "../data/projectSApi"

const TOP = 112
const STEP = 20
const pad = (n) => String(n).padStart(2, "0")

// techStack
const toNames = (stack) => {
    if (!stack) return []
    const list = Array.isArray(stack) ? stack : String(stack).split(",")
    return list
        .map((t) => (typeof t === "string" ? t : t?.name ?? t?.label ?? t?.title ?? ""))
        .map((s) => String(s).trim())
        .filter(Boolean)
}

const Projects = () => {
    const cards = useRef([])
    const veils = useRef([])

    useEffect(() => {
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
        const wide = window.matchMedia("(min-width: 1024px)")
        let raf = 0

        const update = () => {
            raf = 0
            const vh = window.innerHeight
            cards.current.forEach((el, i) => {
                const next = cards.current[i + 1]
                if (!el || !next) return
                const rest = TOP + (i + 1) * STEP
                const p = wide.matches ? Math.min(Math.max((vh - next.getBoundingClientRect().top) / (vh - rest), 0), 1) : 0
                el.style.transform = p ? `scale(${1 - p * 0.05})` : ""
                veils.current[i].style.opacity = p * 0.6
            })
        }
        const onScroll = () => {
            if (!raf) raf = requestAnimationFrame(update)
        }

        update()
        window.addEventListener("scroll", onScroll, { passive: true })
        window.addEventListener("resize", onScroll)
        return () => {
            cancelAnimationFrame(raf)
            window.removeEventListener("scroll", onScroll)
            window.removeEventListener("resize", onScroll)
        }
    }, [])

    return (
        <section id="projects" className="relative w-full overflow-x-clip bg-[#0a0f1c] py-24 font-geist lg:py-32 selection:bg-[#fe9a00] selection:text-[#0a0f1c]">
            {/* Background Glow */}
            <div aria-hidden="true" className="pointer-events-none absolute -left-[10%] top-[40%] size-[400px] rounded-full bg-[#fe9a00]/10 blur-[150px]" />
            <Container>
                <div className="relative z-10">
                    {/* Synchronized Premium Header */}
                    <div className="flex flex-col items-center lg:items-start mb-16 lg:mb-20 w-full">
                        <div className="flex items-center gap-4 mb-4 w-full">
                            <span className="hidden lg:block h-px w-12 bg-[#fe9a00]" />
                            <h2 className='text-4xl lg:text-5xl font-bold text-white tracking-tight whitespace-nowrap'>
                                Featured <span className="text-transparent bg-clip-text bg-linear-to-r from-[#fe9a00] to-yellow-500">Projects</span>
                            </h2>
                            <span className="h-px flex-1 bg-linear-to-r from-[#fe9a00]/50 to-transparent" />
                        </div>
                        <p className='text-base lg:text-lg text-gray-400 max-w-2xl text-center lg:text-left leading-relaxed font-light'>
                            Explore some of the personal and team-based projects I have built, showcasing my skills and expertise in frontend and full-stack development.
                        </p>
                    </div>
                    {/* stacking cards */}
                    <div>
                        {allProjects.map((p, i) => {
                            const { projectImg, projectName, projectType, projectDetails, liveLink, githubLink } = p
                            const stack = toNames(p.techStack)
                            
                            return (
                                <div
                                    key={p.id}
                                    ref={(el) => (cards.current[i] = el)}
                                    style={{ top: TOP + i * STEP }}
                                    className="relative mb-8 origin-top last:mb-0 lg:sticky lg:mb-[18vh] lg:last:mb-0"
                                >
                                    <article
                                        aria-labelledby={`project-${p.id}`}
                                        className="relative grid overflow-hidden rounded-3xl border border-white/10 bg-[#0f1524] shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_24px_60px_-20px_rgba(0,0,0,0.8)] lg:grid-cols-[1.1fr_1fr]"
                                    >
                                        {/* image */}
                                        <div className="p-3 lg:p-4">
                                            <div className="relative aspect-video overflow-hidden rounded-2xl border border-white/10 bg-white/5 lg:aspect-auto lg:h-full lg:min-h-[340px]">
                                                {projectImg ? (
                                                    <img src={projectImg} alt={`${projectName} preview`} loading="lazy" className="absolute inset-0 size-full object-cover object-top" />
                                                ) : (
                                                    <span aria-hidden="true" className="absolute inset-0 flex items-center justify-center text-7xl font-bold text-white/10">{projectName?.[0]}</span>
                                                )}
                                            </div>
                                        </div>
                                        {/* details */}
                                        <div className="flex flex-col p-6 sm:p-8 lg:p-10">
                                            <div className="flex items-center justify-between gap-3">
                                                <span className="text-sm tabular-nums text-[#fe9a00]">
                                                    {pad(i + 1)} <span className="text-gray-400">/ {pad(allProjects.length)}</span>
                                                </span>
                                                {projectType && (
                                                    <span className="rounded-full border border-[#fe9a00]/30 bg-[#fe9a00]/10 px-3 py-1 text-xs font-medium text-[#fe9a00]">{projectType}</span>
                                                )}
                                            </div>
                                            <h3 id={`project-${p.id}`} className="mt-5 text-3xl font-bold tracking-tight text-[#ededed] lg:text-4xl">{projectName}</h3>
                                            {projectDetails && <p className="mt-4 line-clamp-4 text-[15px] font-light leading-relaxed text-gray-400">{projectDetails}</p>}
                                            {stack.length > 0 && (
                                                <ul className="mt-6 flex flex-wrap gap-2">
                                                    {stack.map((name) => (
                                                        <li key={name} className="rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-gray-300">{name}</li>
                                                    ))}
                                                </ul>
                                            )}
                                            {(liveLink || githubLink) && (
                                                <div className="mt-auto flex flex-wrap gap-3 pt-8">
                                                    {liveLink && (
                                                        <a href={liveLink} target="_blank" rel="noreferrer" className="rounded-full bg-[#fe9a00] px-6 py-2.5 text-sm font-semibold text-[#0a0f1c] transition-all duration-300 hover:brightness-110 hover:shadow-[0_0_24px_rgba(254,154,0,0.5)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#fe9a00]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f1524] motion-reduce:transition-none">
                                                            Live demo
                                                        </a>
                                                    )}
                                                    {githubLink && (
                                                        <a href={githubLink} target="_blank" rel="noreferrer" className="rounded-full border border-white/15 px-6 py-2.5 text-sm font-medium text-gray-200 transition-colors duration-300 hover:border-[#fe9a00]/40 hover:text-[#fe9a00] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#fe9a00]/70 motion-reduce:transition-none">
                                                            Source code
                                                        </a>
                                                    )}
                                                </div>
                                            )}
                                        </div>
                                        {/* dims the card while the next one covers it */}
                                        <div aria-hidden="true" ref={(el) => (veils.current[i] = el)} className="pointer-events-none absolute inset-0 bg-[#0a0f1c] opacity-0" />
                                    </article>
                                </div>
                            )
                        })}
                    </div>
                    <div className="mt-16 flex justify-center">
                        <a
                            href="https://github.com/Sijan666"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-block rounded-full border border-[#fe9a00]/30 bg-[#fe9a00]/10 px-8 py-3 text-sm font-medium text-[#fe9a00] transition-all duration-300 hover:bg-[#fe9a00] hover:text-white hover:shadow-[0_0_24px_rgba(254,154,0,0.45)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#fe9a00]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0f1c] motion-reduce:transition-none"
                        >
                            More projects on GitHub
                        </a>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Projects