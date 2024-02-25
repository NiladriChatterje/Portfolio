import styles from './Introduction.module.css';
import { motion } from 'framer-motion';
import { ProfileImg } from '..';


const myIntro = {
    firstName: 'Niladri',
    lastName: 'Chatterjee'
}

const Introduction = () => {
    return (
        <motion.div
            initial={{ scale: 0.5 }}
            whileTap={{ scale: 1.20 }}
            whileInView={{ scale: 1 }}
            id={styles.intro}
            className='cards'>
            <ProfileImg />
            <h2>
                Myself | {myIntro.firstName}
            </h2>
            <p
                id={styles.myDescription}>
                I'm <span>Niladri Chatterjee</span>, a fresh-faced trailblazer ready to make waves in the realms of <span>web development</span>,
                <span >blockchain development</span> and <span>Machine Learning</span>.
                Armed with a thirst for innovation and a hunger for knowledge,
                I'm stepping into this tripple journey with boundless enthusiasm. As a web developer,
                I aim to craft immersive online experiences that leave a lasting impact,
                blending aesthetics with functionality to create digital masterpieces.
                Simultaneously, as a blockchain developer,
                I'm excited to explore decentralized solutions that redefine trust and transparency in the digital world incorporating
                Machine Learning to bring productivity and optimizations in a world where transactions being the only way of interaction.
                Though I am a <span>beginner</span>, my passion and dedication know no bounds. Let's embark on this journey together,
                pushing the boundaries of technology and creating a brighter digital future!
            </p>
        </motion.div>
    )
}

export default Introduction