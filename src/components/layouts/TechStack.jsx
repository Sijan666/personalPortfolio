import { useEffect, useRef, useState } from "react"
import { CgPerformance } from "react-icons/cg"
import { FaCube, FaFigma, FaGitAlt, FaGithub, FaGlobe, FaMobileAlt, FaNodeJs, FaReact, FaWordpress, FaYarn } from "react-icons/fa"
import { GrTechnology } from "react-icons/gr"
import { IoLogoCss3, IoLogoHtml5 } from "react-icons/io"
import { IoCodeSlash, IoLogoVercel } from "react-icons/io5"
import { RiGraduationCapFill, RiNextjsFill, RiTailwindCssFill, RiTerminalBoxLine } from "react-icons/ri"
import { SiElementor, SiEslint, SiExpress, SiFirebase, SiJavascript, SiMongodb, SiMongoose, SiNetlify, SiNpm, SiPhp, SiPostman, SiPrettier, SiRedux, SiTypescript, SiWoocommerce } from "react-icons/si"
import { VscVscode } from "react-icons/vsc"
import Container from "../Container"

// Card 1: AI and Full-Stack
const FULL_STACK = [
    { label: "Frontend", items: [
        ["HTML5", IoLogoHtml5, "#E34F26"], ["CSS3", IoLogoCss3, "#1572B6"], ["JavaScript", SiJavascript, "#F7DF1E"],
        ["TypeScript", SiTypescript, "#3178C6"], ["React.js", FaReact, "#61DAFB"], ["Next.js", RiNextjsFill, "#FFFFFF"],
        ["Redux", SiRedux, "#764ABC"], ["Tailwind CSS", RiTailwindCssFill, "#06B6D4"],
    ] },
    { label: "Backend", items: [["Node.js", FaNodeJs, "#339933"], ["Express.js", SiExpress, "#FFFFFF"]] },
    { label: "Database", items: [["MongoDB", SiMongodb, "#47A248"], ["Mongoose", SiMongoose, "#FF6B6B"], ["Firebase", SiFirebase, "#FFCA28"]] },
    { label: "DevOps", items: [
        ["Git", FaGitAlt, "#F05032"], ["GitHub", FaGithub, "#FFFFFF"], ["Vercel", IoLogoVercel, "#FFFFFF"],
        ["Netlify", SiNetlify, "#00C7B7"], ["Postman", SiPostman, "#FF6C37"],
    ] },
]

// Card 2: WordPress
const WORDPRESS = [
    ["WordPress", FaWordpress, "#4AA3DF"], ["WooCommerce", SiWoocommerce, "#B77FD0"],
    ["Elementor", SiElementor, "#F0477A"], ["PHP", SiPhp, "#8892BF"],
]

// Card 3: tools
const TOOLS = [
    ["Figma", FaFigma, "#F24E1E"], ["VS Code", VscVscode, "#007ACC"], ["Terminal", RiTerminalBoxLine, "#FFFFFF"],
    ["NPM", SiNpm, "#CB3837"], ["Yarn", FaYarn, "#2C8EBB"], ["ESLint", SiEslint, "#4B32C3"], ["Prettier", SiPrettier, "#F7B93E"],
]

// Card 4: principles
const PRINCIPLES = [
    ["Responsive design", FaMobileAlt], ["Cross-browser compatibility", FaGlobe],
    ["Performance optimization", CgPerformance], ["Component-driven architecture", FaCube],
]

const REVEAL = "transition-all duration-700 ease-out motion-reduce:transition-none"

// true once the element has scrolled into view
const useSeen = () => {
    const ref = useRef(null)
    const [seen, setSeen] = useState(false)
    useEffect(() => {
        const io = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setSeen(true)
                io.disconnect()
            }
        }, { threshold: 0.15 })
        io.observe(ref.current)
        return () => io.disconnect()
    }, [])
    return [ref, seen]
}

// glass card
const Card = ({ className = "", delay = 0, children }) => {
    const [ref, seen] = useSeen()
    return (
        <div ref={ref} style={{ transitionDelay: `${delay}ms` }} className={`${REVEAL} ${seen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"} ${className}`}>
            <div className="relative h-full overflow-hidden rounded-2xl sm:rounded-3xl border border-white/10 bg-white/3 p-4 sm:p-6 lg:p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-xl">
                {children}
            </div>
        </div>
    )
}

// eslint-disable-next-line no-unused-vars
const CardHead = ({ Icon, title, desc }) => (
    <div className="relative flex items-center gap-3 sm:gap-4 min-w-0">
        <div className="flex size-9 sm:size-12 shrink-0 items-center justify-center rounded-xl border border-[#fe9a00]/20 bg-[#fe9a00]/10">
            <Icon className="text-[#fe9a00] text-[16px] sm:text-[22px]" />
        </div>
        <div className="min-w-0">
            <h3 className="text-[17px] sm:text-xl font-semibold text-[#ededed] leading-tight truncate">{title}</h3>
            <p className="mt-0.5 text-[11px] sm:text-sm font-light text-gray-400 leading-snug">{desc}</p>
        </div>
    </div>
)

// grey icon
// eslint-disable-next-line no-unused-vars
const Chip = ({ name, Icon, color }) => (
    <span style={{ "--brand": color }} className="group/chip inline-flex items-center gap-1.5 sm:gap-2.5 rounded-lg sm:rounded-xl border border-white/10 bg-white/4 px-2.5 sm:px-3.5 py-1.5 sm:py-2 text-[11px] sm:text-[13px] font-medium text-gray-300 transition-colors duration-300 hover:border-[#fe9a00]/30 hover:bg-white/8 hover:text-white motion-reduce:transition-none">
        <Icon className="text-gray-500 text-[14px] sm:text-[18px] shrink-0 transition-colors duration-300 group-hover/chip:text-(--brand)" />
        <span className="truncate">{name}</span>
    </span>
)

const ChipList = ({ items }) => (
    <ul className="flex flex-wrap gap-1.5 sm:gap-2.5 w-full min-w-0">
        {items.map(([name, Icon, color]) => (
            <li key={name} className="max-w-full"><Chip name={name} Icon={Icon} color={color} /></li>
        ))}
    </ul>
)

const TechStack = () => (
    <section id="techStack" className="relative w-full overflow-hidden bg-[#0a0f1c] py-16 sm:py-24 lg:py-32 selection:bg-[#fe9a00] selection:text-[#0a0f1c]">
        <div aria-hidden="true" className="pointer-events-none absolute -right-[10%] top-[20%] size-[250px] sm:size-[350px] rounded-full bg-[#fe9a00]/10 blur-[120px] sm:blur-[150px]" />

        <Container>
            <div className="relative z-10 w-full min-w-0">
                {/* Synchronized Premium Header */}
                <div className="flex flex-col items-center lg:items-start mb-12 sm:mb-16 lg:mb-20 w-full min-w-0">
                    <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4 w-full min-w-0">
                        <span className="hidden lg:block h-px w-12 bg-[#fe9a00]" />
                        <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight shrink-0'>
                            Tech <span className="text-transparent bg-clip-text bg-linear-to-r from-[#fe9a00] to-yellow-500">Stack</span>
                        </h2>
                        <span className="h-px flex-1 bg-linear-to-r from-[#fe9a00]/50 to-transparent min-w-2.5" />
                    </div>
                    <p className='text-sm sm:text-base lg:text-lg text-gray-400 max-w-2xl text-center lg:text-left leading-relaxed font-light'>
                        Two disciplines, one toolkit: AI-powered full-stack products and WordPress.
                    </p>
                </div>
                <div className="grid gap-4 sm:gap-6 lg:grid-cols-12 w-full min-w-0">
                    {/* AI and Full-Stack */}
                    <Card className="lg:col-span-7 min-w-0">
                        <div aria-hidden="true" className="pointer-events-none absolute -left-10 -top-10 sm:-left-20 sm:-top-20 size-40 sm:size-64 rounded-full bg-[#fe9a00]/10 blur-3xl" />
                        <CardHead Icon={IoCodeSlash} title="AI & Full-Stack" desc="Products from interface to infrastructure." />
                        <div className="relative mt-4 sm:mt-6 divide-y divide-white/10 min-w-0">
                            {FULL_STACK.map(({ label, items }) => (
                                <div key={label} className="grid gap-2 sm:gap-3 py-3.5 sm:py-5 sm:grid-cols-[6.5rem_1fr] sm:items-baseline min-w-0">
                                    <h4 className="text-[12px] sm:text-sm font-medium text-gray-400 shrink-0">{label}</h4>
                                    <div className="min-w-0 w-full">
                                        <ChipList items={items} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Card>
                    {/* WordPress */}
                    <Card className="lg:col-span-5 min-w-0" delay={120}>
                        <FaWordpress aria-hidden="true" className="pointer-events-none absolute -bottom-8 -right-8 sm:-bottom-16 sm:-right-16 text-white/4 h-48 w-48 sm:h-[340px] sm:w-[340px]" />
                        <CardHead Icon={FaWordpress} title="WordPress" desc="Building and customising WordPress sites and stores." />
                        <div className="relative mt-5 sm:mt-8 min-w-0">
                            <ChipList items={WORDPRESS} />
                        </div>
                    </Card>
                    {/* tools */}
                    <Card className="lg:col-span-12 min-w-0">
                        <style>{"@keyframes tech-marquee{to{transform:translateX(-50%)}}"}</style>
                        <CardHead Icon={GrTechnology} title="Tools" desc="Design, coding and productivity." />
                        <div className="relative mt-4 sm:mt-6 overflow-hidden mask-[linear-gradient(90deg,transparent,black_5%,black_95%,transparent)] sm:mask-[linear-gradient(90deg,transparent,black_8%,black_92%,transparent)] motion-reduce:mask-none min-w-0">
                            <div className="flex w-max animate-[tech-marquee_20s_linear_infinite] sm:animate-[tech-marquee_32s_linear_infinite] hover:[animation-play-state:paused] motion-reduce:w-auto motion-reduce:animate-none">
                                <ul className="flex shrink-0 gap-1.5 sm:gap-3 pr-1.5 sm:pr-3 motion-reduce:flex-wrap">
                                    {TOOLS.map(([name, Icon, color]) => <li key={name}><Chip name={name} Icon={Icon} color={color} /></li>)}
                                </ul>
                                <ul aria-hidden="true" className="flex shrink-0 gap-1.5 sm:gap-3 pr-1.5 sm:pr-3 motion-reduce:hidden">
                                    {TOOLS.map(([name, Icon, color]) => <li key={name}><Chip name={name} Icon={Icon} color={color} /></li>)}
                                </ul>
                            </div>
                        </div>
                    </Card>
                    {/* principles */}
                    <Card className="lg:col-span-12 min-w-0">
                        <CardHead Icon={RiGraduationCapFill} title="Principles" desc="How I build, whatever the stack." />
                        <ul className="relative mt-4 sm:mt-6 grid gap-2 sm:gap-3 sm:grid-cols-2 lg:grid-cols-4 min-w-0">
                            {/* eslint-disable-next-line no-unused-vars */}
                            {PRINCIPLES.map(([name, Icon]) => (
                                <li key={name} className="flex items-center gap-2.5 sm:gap-3 rounded-xl sm:rounded-2xl border border-white/10 bg-white/4 p-3 sm:p-4 text-[11px] sm:text-sm font-medium text-gray-200 min-w-0">
                                    <Icon className="shrink-0 text-[#fe9a00] text-[16px] sm:text-[20px]" />
                                    <span className="truncate">{name}</span>
                                </li>
                            ))}
                        </ul>
                    </Card>
                </div>
            </div>
        </Container>
    </section>
)

export default TechStack