
import "react-toastify/dist/ReactToastify.css";

import React, { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";

import NavSocial from "../../Navigation/NavSocial/NavSocial.js";

import styles from "./ContactForm.module.css";


const ContactForm = () => {
    const { isLight } = useContext(ThemeContext);
    const theme = !isLight ? styles.dark : "";
    return (
        <footer className={`${styles.footer} ${theme}`}>
            <ul className={styles.iconContainer}>
                <NavSocial socialClass={""} socialIcons={"footerSocialIcons"} />
            </ul>

            <div className={styles.copyright}>
                <small>+91 998988 2720</small>
                <br />
                <small>rajapr269@gmail.com</small>
            </div>
        </footer>
    )
};

export default ContactForm;
