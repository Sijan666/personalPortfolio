import { useEffect, useLayoutEffect, useRef, useState } from "react"
import { FaBarsStaggered, FaXmark } from "react-icons/fa6"
import Images from "../Images"
import SmoothLink from "../SmoothLink"
import logo from "../../assets/logo.png"

const LINKS = [
    { name: "Home", href: "#header" },
    { name: "About", href: "#about" },
    { name: "Tech stack", href: "#techStack" },
    { name: "Projects", href: "#projects" },
]
const CTA = { name: "Let’s talk", href: "#contact" }
const IDS = [...LINKS, CTA].map((l) => l.href.slice(1)).filter((id) => id !== "header")
const EASE = "ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none"
const RING = "has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-[#8B9CFF]/70"
const BTN = "flex items-center justify-center rounded-full bg-white font-semibold text-[#0A0F1C] transition-all duration-300 hover:bg-[#8B9CFF] hover:shadow-[0_0_32px_-4px_rgba(139,156,255,0.75)] hover:text-white"

const Header = () => {
    const [open, setOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const [active, setActive] = useState("#header")
    const [hover, setHover] = useState(null)
    const [pill, setPill] = useState({ x: 0, w: 0 })
    const wrapRef = useRef(null)
    const barRef = useRef(null)
    const itemRefs = useRef({})
    const target = hover ?? active

    // scroll: header style + progress line
    useEffect(() => {
        const onScroll = () => {
            const max = document.documentElement.scrollHeight - window.innerHeight
            barRef.current.style.transform = `scaleX(${max > 0 ? Math.min(window.scrollY / max, 1) : 0})`
            setScrolled(window.scrollY > 40)
        }
        onScroll()
        window.addEventListener("scroll", onScroll, { passive: true })
        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    // active section
    useEffect(() => {
        const io = new IntersectionObserver(
            (entries) => entries.forEach(({ target: { id }, isIntersecting }) =>
                setActive((p) => (isIntersecting ? `#${id}` : p === `#${id}` ? "#header" : p))),
            { rootMargin: "-45% 0px -50% 0px" }
        )
        IDS.forEach((id) => document.getElementById(id) && io.observe(document.getElementById(id)))
        return () => io.disconnect()
    }, [])

    // sliding pill position
    useLayoutEffect(() => {
        const measure = () => {
            const el = itemRefs.current[target]
            setPill((p) => (el ? { x: el.offsetLeft, w: el.offsetWidth } : { ...p, w: 0 }))
        }
        measure()
        window.addEventListener("resize", measure)
        document.fonts?.ready.then(measure)
        return () => window.removeEventListener("resize", measure)
    }, [target])

    // mobile menu: Escape / outside click closes
    useEffect(() => {
        if (!open) return
        const close = (e) =>
            (e.key === "Escape" || (e.type === "pointerdown" && !wrapRef.current.contains(e.target))) && setOpen(false)
        document.addEventListener("keydown", close)
        document.addEventListener("pointerdown", close)
        return () => {
            document.removeEventListener("keydown", close)
            document.removeEventListener("pointerdown", close)
        }
    }, [open])

    return (
        <header id="header" className="relative">
            <div className={`font-geist pointer-events-none fixed inset-x-0 top-0 z-50 px-4 transition-[padding] duration-500 ${scrolled ? "pt-3" : "pt-5"}`}>
                <div ref={wrapRef} className={`pointer-events-auto relative mx-auto transition-[max-width] duration-500 ${EASE} ${scrolled ? "max-w-4xl" : "max-w-5xl"}`}>
                    {/* capsule */}
                    <div className={`relative flex items-center justify-between rounded-full border py-2 pl-5 pr-2 backdrop-blur-xl transition-all duration-500 ${scrolled
                        ? "border-white/15 bg-[#0A0F1C]/75 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_12px_40px_-12px_rgba(0,0,0,0.7)]"
                        : "border-white/10 bg-white/3 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"}`}>
                        <div className="w-28 shrink-0 lg:w-32">
                            <SmoothLink href="#header" onClick={() => setOpen(false)}>
                                <Images imgSrc={logo} alt="Majharul Islam Sijan" />
                            </SmoothLink>
                        </div>
                        {/* desktop nav */}
                        <nav aria-label="Main" className="hidden lg:block">
                            <ul className="relative flex items-center" onMouseLeave={() => setHover(null)}>
                                <li aria-hidden="true" style={{ width: pill.w, transform: `translateX(${pill.x}px)` }}
                                    className={`pointer-events-none absolute left-0 top-0 h-full rounded-full bg-white/10 ring-1 ring-inset ring-white/10 transition-[transform,width] duration-500 ${EASE}`} />
                                {LINKS.map(({ name, href }) => (
                                    <li key={href} ref={(el) => (itemRefs.current[href] = el)}
                                        onMouseEnter={() => setHover(href)} onFocus={() => setHover(href)} onBlur={() => setHover(null)}
                                        className={`relative z-10 rounded-full ${RING}`}>
                                        <SmoothLink href={href}>
                                            <span className={`block px-4 py-2 text-sm font-medium transition-colors duration-300 ${target === href ? "text-white" : "text-[#99A1AF]"}`}>
                                                {name}
                                            </span>
                                        </SmoothLink>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                        <div className={`hidden rounded-full lg:block ${RING}`}>
                            <SmoothLink href={CTA.href}><span className={`${BTN} px-5 py-2 text-sm`}>{CTA.name}</span></SmoothLink>
                        </div>
                        {/* mobile toggle */}
                        <button type="button" onClick={() => setOpen((o) => !o)} aria-expanded={open} aria-controls="mobile-menu"
                            aria-label={open ? "Close menu" : "Open menu"}
                            className="flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B9CFF]/70 lg:hidden">
                            {open ? <FaXmark size={18} /> : <FaBarsStaggered size={16} />}
                        </button>
                        {/* scroll progress */}
                        <div aria-hidden="true" className="pointer-events-none absolute inset-x-8 -bottom-px h-0.5 overflow-hidden rounded-full">
                            <div ref={barRef} className="h-full origin-left bg-[#8B9CFF]" style={{ transform: "scaleX(0)" }} />
                        </div>
                    </div>
                    {/* mobile menu */}
                    <nav id="mobile-menu" aria-label="Mobile"
                        className={`absolute inset-x-0 top-full mt-2 origin-top transition-all duration-500 ${EASE} lg:hidden ${open ? "visible scale-100 opacity-100" : "invisible -translate-y-3 scale-95 opacity-0"}`}>
                        <ul className="rounded-3xl border border-white/10 bg-[#0A0F1C]/90 p-3 shadow-[0_24px_60px_-16px_rgba(0,0,0,0.8)] backdrop-blur-2xl">
                            {LINKS.map(({ name, href }) => (
                                <li key={href}>
                                    <SmoothLink href={href} onClick={() => setOpen(false)}>
                                        <span className={`block rounded-2xl px-4 py-3 text-lg font-medium hover:bg-white/5 ${active === href ? "text-white" : "text-[#99A1AF]"}`}>{name}</span>
                                    </SmoothLink>
                                </li>
                            ))}
                            <li className="mt-2 border-t border-white/10 pt-3">
                                <SmoothLink href={CTA.href} onClick={() => setOpen(false)}><span className={`${BTN} w-full py-3 text-base`}>{CTA.name}</span></SmoothLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header