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
            <div className="relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/3 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-xl sm:p-8">
                {children}
            </div>
        </div>
    )
}

const CardHead = ({ Icon, title, desc }) => (
    <div className="relative flex items-center gap-4">
        <div className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-[#fe9a00]/20 bg-[#fe9a00]/10">
            <Icon size={22} className="text-[#fe9a00]" />
        </div>
        <div>
            <h3 className="text-xl font-semibold text-[#ededed]">{title}</h3>
            <p className="mt-0.5 text-sm font-light text-gray-400">{desc}</p>
        </div>
    </div>
)

// grey icon
const Chip = ({ name, Icon, color }) => (
    <span style={{ "--brand": color }} className="group/chip inline-flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/4 px-3.5 py-2 text-[13px] font-medium text-gray-300 transition-colors duration-300 hover:border-[#fe9a00]/30 hover:bg-white/8 hover:text-white motion-reduce:transition-none">
        <Icon size={18} className="text-gray-500 transition-colors duration-300 group-hover/chip:text-(--brand)" />
        {name}
    </span>
)

const ChipList = ({ items }) => (
    <ul className="flex flex-wrap gap-2.5">
        {items.map(([name, Icon, color]) => (
            <li key={name}><Chip name={name} Icon={Icon} color={color} /></li>
        ))}
    </ul>
)

const TechStack = () => (
    <section id="techStack" className="relative w-full overflow-hidden bg-[#0a0f1c] py-24 font-geist lg:py-32">
        <div aria-hidden="true" className="pointer-events-none absolute -right-[10%] top-[20%] size-[350px] rounded-full bg-[#fe9a00]/10 blur-[150px]" />

        <Container>
            <div className="relative z-10">
                <div className="mb-12 max-w-2xl lg:mb-16">
                    <h2 className="text-4xl font-bold tracking-tight text-[#ededed] lg:text-6xl">Tech stack</h2>
                    <p className="mt-5 text-[15px] font-light leading-relaxed text-gray-400 lg:text-base">
                        Two disciplines, one toolkit: AI-powered full-stack products and WordPress.
                    </p>
                </div>
                <div className="grid gap-6 lg:grid-cols-12">
                    {/* AI and Full-Stack */}
                    <Card className="lg:col-span-7">
                        <div aria-hidden="true" className="pointer-events-none absolute -left-20 -top-20 size-64 rounded-full bg-[#fe9a00]/10 blur-3xl" />
                        <CardHead Icon={IoCodeSlash} title="AI & Full-Stack" desc="Products from interface to infrastructure." />
                        <div className="relative mt-6 divide-y divide-white/10">
                            {FULL_STACK.map(({ label, items }) => (
                                <div key={label} className="grid gap-3 py-5 sm:grid-cols-[6.5rem_1fr] sm:items-baseline">
                                    <h4 className="text-sm font-medium text-gray-400">{label}</h4>
                                    <ChipList items={items} />
                                </div>
                            ))}
                        </div>
                    </Card>

                    {/* WordPress */}
                    <Card className="lg:col-span-5" delay={120}>
                        <FaWordpress aria-hidden="true" size={340} className="pointer-events-none absolute -bottom-16 -right-16 text-white/4" />
                        <CardHead Icon={FaWordpress} title="WordPress" desc="Building and customising WordPress sites and stores." />
                        <div className="relative mt-8">
                            <ChipList items={WORDPRESS} />
                        </div>
                    </Card>

                    {/* tools */}
                    <Card className="lg:col-span-12">
                        <style>{"@keyframes tech-marquee{to{transform:translateX(-50%)}}"}</style>
                        <CardHead Icon={GrTechnology} title="Tools" desc="Design, coding and productivity." />
                        <div className="relative mt-6 overflow-hidden mask-[linear-gradient(90deg,transparent,black_8%,black_92%,transparent)] motion-reduce:mask-none">
                            <div className="flex w-max animate-[tech-marquee_32s_linear_infinite] hover:[animation-play-state:paused] motion-reduce:w-auto motion-reduce:animate-none">
                                <ul className="flex shrink-0 gap-3 pr-3 motion-reduce:flex-wrap">
                                    {TOOLS.map(([name, Icon, color]) => <li key={name}><Chip name={name} Icon={Icon} color={color} /></li>)}
                                </ul>
                                <ul aria-hidden="true" className="flex shrink-0 gap-3 pr-3 motion-reduce:hidden">
                                    {TOOLS.map(([name, Icon, color]) => <li key={name}><Chip name={name} Icon={Icon} color={color} /></li>)}
                                </ul>
                            </div>
                        </div>
                    </Card>
                    
                    {/* principles */}
                    <Card className="lg:col-span-12">
                        <CardHead Icon={RiGraduationCapFill} title="Principles" desc="How I build, whatever the stack." />
                        <ul className="relative mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                            {PRINCIPLES.map(([name, Icon]) => (
                                <li key={name} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/4 p-4 text-sm font-medium text-gray-200">
                                    <Icon size={20} className="shrink-0 text-[#fe9a00]" />
                                    {name}
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