import { tech1, tech2, tech3, tech4, tech5 } from "./teckStack";
import p1 from '../../assets/p1.png'
import orebi from '../../assets/orebi.png'
import port from '../../assets/port.png'
import eduact from '../../assets/eduact.png'
import creative from '../../assets/creative.png'

export const allProjects = [
    {
        id : 1 ,
        projectImg: orebi,
        projectName:"Orebi",
        projectType:'Personal Project',
        projectDetails:'A modern web application to manage online retail operations, including product cataloging, customer orders, and interactive UI for a smooth shopping experience.',
        techStack:tech1,
        liveLink:'https://ui-addedin-orebi.vercel.app/',
        githubLink:'https://github.com/Sijan666/OrebiFinalProject',
    },
    {
        id : 2 ,
        projectImg: port,
        projectName:"Portfolio",
        projectType:'Personal Project',
        projectDetails:'A sleek personal portfolio created to visually represent professional identity and creative work. It includes well-structured sections for about me, service offerings, project galleries, and a seamless way for clients to reach out.',
        techStack:tech2,
        liveLink:'https://sijan666.github.io/pluginsAddedInPera/',
        githubLink:'https://github.com/Sijan666/pluginsAddedInPera',
    },
    {
        id : 3 ,
        projectImg: eduact,
        projectName:"EduAct",
        projectType:'Team Project',
        projectDetails:'An interactive e-learning platform designed to provide online courses, study resources, and a seamless learning experience.',
        techStack:tech3,
        liveLink:'https://edu-act-figma.vercel.app/',
        githubLink:'https://github.com/Sijan666/eduActFigma',
    },
    {
        id : 4 ,
        projectImg: creative,
        projectName:"Creative IT ( Web & Software )",
        projectType:'Team Project',
        projectDetails:'A modern car brand website featuring product showcases, model comparisons, booking test drives, and dealership locator.',
        techStack:tech4,
        liveLink:'https://creative-web-six.vercel.app/',
        githubLink:'https://github.com/Sijan666/creativeWeb',
    },
    {
        id : 5 ,
        projectImg: p1,
        projectName:"Confer",
        projectType:'Personal Project',
        projectDetails:'A system to manage conferences with paper submission, peer review, schedules, and attendee registration.',
        techStack:tech5,
        liveLink:'https://main-portfolio-two-khaki.vercel.app/',
        githubLink:'https://github.com/Sijan666/mainPortfolio',
    },
]