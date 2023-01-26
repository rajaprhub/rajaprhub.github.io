import React, { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import whakaariSm from "../../../Assets/img/Portfolio items/bonvoy.png";
import whakaariLg from "../../../Assets/img/Portfolio items/bonvoy.png";
import pounamunuiSm from "../../../Assets/img/Portfolio items/youtube.png";
import pounamunuiLg from "../../../Assets/img/Portfolio items/youtube.png";
import newsAggregator from "../../../Assets/img/Portfolio items/foodApp.png";
import spacexSm from "../../../Assets/img/Portfolio items/purplle.png";
import spacexLg from "../../../Assets/img/Portfolio items/purplle.png";
import bewakoof from "../../../Assets/img/Portfolio items/bewakoof.png"
import maxfashion from "../../../Assets/img/Portfolio items/maxfashion.png"
import Sephora1 from "../../../Assets/img/Portfolio items/Sephora1.png"
import Sephora2  from"../../../Assets/img/Portfolio items/Sephora1.png"

import bewakoofmobile from "../../../Assets/img/Portfolio items/bewakoof.png"
import stylecraze from "../../../Assets/img/Portfolio items/stylecraze.png";
import Blogpage from "../../../Assets/img/Portfolio items/Blogpage.png"


import ProjectItem from "./ProjectItem";

import styles from "./ProjectContainer.module.css";


import html from "../../../Assets/img/logos/html.svg";
import css from "../../../Assets/img/logos/css.svg";
import js from "../../../Assets/img/logos/js.svg";
import react from "../../../Assets/img/logos/react.svg";
import nodejs from "../../../Assets/img/logos/nodejs.svg";
import expressjs from "../../../Assets/img/logos/expressjs.svg";

const ProjectContainer = ({ solo }) => {
    const { isLight } = useContext(ThemeContext);
    const projects = [
        {
            image: [Sephora1, Sephora2],
            alt: "Max_fashion_web_clone",
            heading: "Sephora1",
            p1: "hi",
            l1: "https://github.com/pavankalyangojju/MaxFashion-Clone",
            a1: "Github page for a project.",
            l2: "https://elegant-mcnulty-02e823.netlify.app/",
            a2: "Max_fashion_web_clone",
            tech: [html, css, js],
        },
        {
            image: [Sephora1, Sephora1],
            alt: "Max_fashion_web_clone",
            heading: "Max_Fashion_clone",
            p1: "This is a clone of maxfashion.com, where we have used HTML, CSS, and Javascript to achieve this.",
            l1: "https://github.com/pavankalyangojju/MaxFashion-Clone",
            a1: "Github page for a project.",
            l2: "https://elegant-mcnulty-02e823.netlify.app/",
            a2: "Max_fashion_web_clone",
            tech: [html, css, js],
        },
        

        
    ];
    const soloproject = [
        {
            image: [Blogpage, Blogpage],
            alt: "Blog_web_react",
            heading: "Blog_web_clone_react",
            p1: "Here we have tried to optimize the previous project cloning of Bewakoof by adding backend to it and some more functionality in the frontend.",
            l1: "https://github.com/Magendran001/blogfrontend",
            a1: "Github page for a project.",
            l2: "https://leafy-douhua-366ea1.netlify.app/",
            a2: "Blog_web_clone_react",
            tech: [html, css, js, expressjs, nodejs, react],
        },
        {
            image: [bewakoofmobile, bewakoofmobile],
            alt: "Bewakoof_web_clone_react",
            heading: "Bewakoof_web_clone_react",
            p1: "Here we have tried to optimize the previous project cloning of Bewakoof by adding backend to it and some more functionality in the frontend.",
            l1: "https://github.com/Magendran001/bewakoof_react",
            a1: "Github page for a project.",
            l2: "https://bewakoofmaggi.netlify.app/",
            a2: "Bewakoof_web_clone_react",
            tech: [html, css, js, expressjs, nodejs, react],
        },
        {
            image: [stylecraze, stylecraze],
            alt: "Bewstlecrazekoof",
            heading: "Stylecraze website.",
            p1: "This is a clone of stylecraze.com, where we have used HTML, CSS, and Javascript to achieve this.",
            l1: "https://github.com/Magendran001/stylecraze",
            a1: "Github page for a Stylecraze project.",
            l2: "https://stylecrazeclone.netlify.app/",
            a2: "Stylecraze website.",
            tech: [html, css, js],
            ongoing: true,
        },


    ];




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
