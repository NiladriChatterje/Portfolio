import styles from './Academics.module.css';
import { motion } from 'framer-motion';
import { HITK, CU, CISCE } from '../../assets/academics_images';

const academics = [{
    Img: HITK,
    course: 'Master of Computer Applications',
    abbr: '(MCA)',
    year: 'pursuing',
    college: 'Heritage Institute of Technology, Kolkata',
    university: 'Maulana Abul Kalam Azad University of Technology, Kolkata (MAKAUT)',
},
{
    Img: CU,
    course: 'Bachelor of Science (Honours)',
    abbr: '(BSc(H))',
    year: '2019-2022',
    college: 'Seth Anandaram Jaipuria College, Kolkata',
    university: 'University of Calcutta, Kolkata',
},
{
    Img: CISCE,
    course: 'Indian School Certificate',
    abbr: '(ISC)',
    year: '2017-2019',
    college: 'Calcutta Public School, Kolkata',
    university: 'Council for Indian School Certificate Examinations (CISCE)',
},
{
    Img: CISCE,
    course: 'Indian Certificate of Secondary Education',
    abbr: '(ICSE)',
    year: '2015-2017',
    college: 'Devaki Memorial School, Kolkata',
    university: 'Council for Indian School Certificate Examinations (CISCE)',
}]

const Academics = () => {
    return (
        <section id={styles.academicContainer}>
            <motion.h2 initial={{ scale: 0.3 }}
                whileInView={{ scale: 1 }}
                id={styles.heading}>Academic achievements</motion.h2>

            <article id={styles.academic_cards}>
                {academics?.map(item => (
                    <figure
                        key={item?.abbr} id={styles.cards} className='cards'>
                        <img src={item?.Img} alt={item?.course} style={{ objectFit: 'contain', borderRadius: '50%' }}
                            height={90} />
                        <figcaption className={styles.captions}>
                            <h3>{item.course}</h3>
                            <h6>{item?.abbr}</h6>
                            <span
                                style={{
                                    borderRadius: 10,
                                    padding: '1px 5px',
                                    backgroundColor: '#242424',
                                    color: '#EEEEEE'
                                }}>
                                {item?.year}</span>
                            <h5>{item?.college}</h5>
                            <h5>{item?.university}</h5>
                        </figcaption>
                    </figure>))}

            </article>
        </section >
    )
}

export default Academics