import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import styles from './Footer.module.css'

function Footer(){
    return(
        <div className={styles.footer}>
            <ul>
                <li><a href='https://www.instagram.com/alexandreo13/'><FaInstagram size={30}/></a></li>
                <li><a href='https://www.linkedin.com/in/alexandre-freire-194694303'><FaLinkedin size={30}/></a></li>
                <li><a href='https://github.com/AlexandreSFreire'><FaGithub size={30}/></a></li>
            </ul>
            <p>alexandresfreire1@gmail.com</p>
            <p>Alexandre Souza Freire © 2024</p>
        </div>
    )
}

export default Footer