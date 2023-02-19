import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./NavSocial.module.css";

const NavSocial = ({ socialClass, socialIcons }) => {
    return (
        <>
            <li className={`${styles[socialClass]}`}>
                <a
                    href="https://github.com/rajaprhub"
                    className="socialIcons"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="My Github Portfolio."
                >
                    <FontAwesomeIcon
                        icon={["fab", "github"]}
                        className={`${styles[socialIcons]}`}
                    />
                </a>
            </li>
            <li className={`${styles[socialClass]}`}>
                <a
                    href="https://www.linkedin.com/in/raja-ravi-995366233/"
                    className="socialIcons"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="My Linkedin Profile."
                >
                    <FontAwesomeIcon
                        icon={["fab", "linkedin"]}
                        className={`${styles[socialIcons]}`}
                    />
                </a>
            </li>
            <li className={`${styles[socialClass]}`}>
                <a
                    href="mailto:rajapr269@gmail.com"
                    className="socialIcons"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="My Linkedin email."
                >
                    <FontAwesomeIcon icon="envelope" className={`${styles[socialIcons]}`} />
                </a>
            </li>
            <li className={`${styles[socialClass]}`}>
                <a
                    href="tel:+919989882720"
                    className="socialIcons"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="My Linkedin contact"
                >
                    <FontAwesomeIcon icon="phone" className={`${styles[socialIcons]}`} />
                </a>
            </li>
            <li className={`${styles[socialClass]}`}>
                <a
                    href="https://drive.google.com/file/d/13WfLj6cZWduWdyXp5BEaFOyq7KC-JDFV/view?usp=share_link"
                    className="socialIcons"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="My Linkedin resume"
                >
                    <FontAwesomeIcon icon="file" className={`${styles[socialIcons]}`} />
                </a>
            </li>
        </>
    );
};

export default NavSocial;
