import { useEffect, useState } from 'react';
import styles from './Navbar.module.css';
import { motion } from 'framer-motion';
import Hamburger from '../../assets/Hamburger.png';
import CloseIcon from '../../assets/Close.svg'
const list: string[] = ['Home', 'Skills', 'Testinomials', 'achievements', 'Projects'];
const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: -400 },
}

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        window.addEventListener('resize', () => {
            setWindowWidth(window.innerWidth);
        })
    }, []);

    return (
        <nav
            id={styles.nav}>


            <img src={Hamburger} id={styles.hamburger}
                width={30} height={30}
                onClick={() => setIsOpen(true)} />
            <motion.ul
                animate={isOpen || windowWidth > 1200 ? "open" : "closed"}
                variants={variants}
                id={styles.ul}>
                <img src={CloseIcon} id={styles.closeIcon}
                    width={30} height={30}
                    onClick={() => setIsOpen(false)} />

                {list?.map((item, i) => <a href={`#${item}`} key={i}>{item}</a>)}
            </motion.ul>
        </nav>
    )
}

export default Navbar