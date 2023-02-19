import React, { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";

import tatamgclone from "../../../Assets/img/Portfolio items/tatamghome.PNG"
import Cricinfoclone from "../../../Assets/img/Portfolio items/Cricinfoimg.PNG"
import Sephoraclone from "../../../Assets/img/Portfolio items/SephoraClone.PNG"

import ProjectItem from "./ProjectItem";

import styles from "./ProjectContainer.module.css";
import html from "../../../Assets/img/logos/html.svg";
import css from "../../../Assets/img/logos/css.svg";
import js from "../../../Assets/img/logos/js.svg";
import react from "../../../Assets/img/logos/react.svg";
import nodejs from "../../../Assets/img/logos/nodejs.svg";
import expressjs from "../../../Assets/img/logos/expressjs.svg";
import { SiChakraui } from "react-icons/si";

const ProjectContainer = ({ solo }) => {
    const { isLight } = useContext(ThemeContext);
    const projects = [
        {
            image: [tatamgclone, tatamgclone],
            alt: "Tata mg Clone clone",
            heading: "Tatamg clone",
            p1: "Tatamg clone to see demo",
            l1: "https://github.com/rajaprhub/aspiremgApp",
            a1: "Github page for a project.",
            l2: "https://aspiretatamgcare.netlify.app/",
            a2: "Tatamg clone",
            tech: [html, css, js,react],
        },

        {
            image: [Cricinfoclone, Cricinfoclone],
            alt: "Tata mg Clone clone",
            heading: "Cricinfo clone",
            p1: "Cricinfo clone to see demo",
            l1: "https://github.com/rajaprhub/cricinfoweb",
            a1: "Github page for a project.",
            l2: "https://comforting-granita-9e8464.netlify.app/",
            a2: "Tatamg clone",
            tech: [html, css, js],
        },

        
        {
            image: [Sephoraclone, Sephoraclone],
            alt: "Sephora Clone clone",
            heading: "Sephora clone",
            p1: "Sephora clone to see demo",
            l1: "https://github.com/rajaprhub/sephorawebs",
            a1: "Github page for a project.",
            l2: "https://sephoraclonewebs.netlify.app/",
            a2: "Tatamg clone",
            tech: [html, css, js],
        }
        
        
        

        
    ];

    // const soloproject = [
    //     {
    //         image: [Blogpage, Blogpage],
    //         alt: "Blog_web_react",
    //         heading: "Blog_web_clone_react",
    //         p1: "Here we have tried to optimize the previous project cloning of Bewakoof by adding backend to it and some more functionality in the frontend.",
    //         l1: "https://github.com/Magendran001/blogfrontend",
    //         a1: "Github page for a project.",
    //         l2: "https://leafy-douhua-366ea1.netlify.app/",
    //         a2: "Blog_web_clone_react",
    //         tech: [html, css, js, expressjs, nodejs, react],
    //     },
    //     {
    //         image: [bewakoofmobile, bewakoofmobile],
    //         alt: "Bewakoof_web_clone_react",
    //         heading: "Bewakoof_web_clone_react",
    //         p1: "Here we have tried to optimize the previous project cloning of Bewakoof by adding backend to it and some more functionality in the frontend.",
    //         l1: "https://github.com/Magendran001/bewakoof_react",
    //         a1: "Github page for a project.",
    //         l2: "https://bewakoofmaggi.netlify.app/",
    //         a2: "Bewakoof_web_clone_react",
    //         tech: [html, css, js, expressjs, nodejs, react],
    //     }


    // ];




    return (
        <div>
            {/* <div> {solo ? <h1>Solo project mobile responsive</h1> : <h1>Group project</h1>}</div> */}
            <div
                className={`${styles.projectContainer} ${!isLight && styles.dark}`}
            >

            

           { projects.map((data, index) => {
                    return <ProjectItem data={data} index={index} key={index} />;
                })}

                {/* {!solo ? projects.map((data, index) => {
                    return <ProjectItem data={data} index={index} key={index} />;
                }) : soloproject.map((data, index) => {
                    return <ProjectItem data={data} index={index} key={index} />;
                })} */}
            </div>
        </div>
    );
};

export default ProjectContainer;
