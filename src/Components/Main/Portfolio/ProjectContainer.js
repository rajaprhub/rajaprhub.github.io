import React, { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";

import tatamgclone from "../../../Assets/img/Portfolio items/tatamghome.PNG"
import Cricinfoclone from "../../../Assets/img/Portfolio items/Cricinfoimg.PNG"
import Sephoraclone from "../../../Assets/img/Portfolio items/SephoraClone.PNG"
import moviebookapp from "../../../Assets/img/Portfolio items/moviebookapp.PNG"

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
            p1: "Tatamg clone for live  demo",
            l1: "https://github.com/rajaprhub/aspiremgApp",
            a1: "Github page for a project.",
            l2: "https://aspiretatamgcare.netlify.app/",
            a2: "Tatamg clone",
            tech: [html, css, js,react],
        },

      {
            image: [Sephoraclone, Sephoraclone],
            alt: "Sephora Clone clone",
            heading: "Sephora clone",
            p1: "Sephora clone for live demo",
            l1: "https://github.com/rajaprhub/sephorawebs",
            a1: "Github page for a project.",
            l2: "https://sephoraclonewebs.netlify.app/",
            a2: "Tatamg clone",
            tech: [html, css, js],
        },
        
        {
            image: [moviebookapp, moviebookapp],
            alt: "movieBooking clone",
            heading: "MovieBooking App",
            p1: "Movie Book App to see demo",
            l1: "https://github.com/rajaprhub/javascript201/tree/main/MOVIE%20BOOKINGCE3",
            a1: "Github page for a project.",
            l2: "https://cosmic-pavlova-b1534c.netlify.app/",
            a2: "Movie Book App",
            tech: [html, css, js],
        },

        {
            image: [Cricinfoclone, Cricinfoclone],
            alt: "Tata mg Clone clone",
            heading: "Cricinfo clone",
            p1: "Cricinfo clone for live  demo",
            l1: "https://github.com/rajaprhub/cricinfoweb",
            a1: "Github page for a project.",
            l2: "https://comforting-granita-9e8464.netlify.app/",
            a2: "Tatamg clone",
            tech: [html, css, js],
        }

        
        

        
    ];

    const soloproject = [
       

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
