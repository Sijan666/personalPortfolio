import { tech1, tech2, tech3, tech4, tech5 } from "./teckStack";
import orebi from '../../assets/orebi.png'
import port from '../../assets/port.png'
import eduact from '../../assets/eduact.png'
import creative from '../../assets/creative.png'
import roiser from '../../assets/roiser.png'

export const allProjects = [
    {
        id : 1 ,
        projectImg: orebi,
        projectName:"Orebi e-Commerce",
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
        projectDetails:"A dedicated web platform for an Creative IT's Web & Software department, featuring a streamlined student enrollment process and curriculum details.",
        techStack:tech4,
        liveLink:'https://creative-web-six.vercel.app/',
        githubLink:'https://github.com/Sijan666/creativeWeb',
    },
    {
        id : 5 ,
        projectImg: roiser,
        projectName:"Roiser e-Commerce",
        projectType:'Team Project',
        projectDetails:'A modern e-commerce platform designed for a fashion brand, featuring intuitive product browsing, category filtering, and a seamless online shopping experience.',
        techStack:tech5,
        liveLink:'https://roiser-team.vercel.app/',
        githubLink:'https://github.com/Sijan666/roiserTeam',
    },
]