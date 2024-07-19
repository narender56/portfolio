import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../HigherOrderComponents';
import { Services } from './Services';

export const About = SectionWrapper(() => {
  return (
    <>
      <motion.div variants={textVariant()} id="about">
        <h2 className={styles.sectionHeadText}>Lil bout me</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-[17px] max-w-[3xl] leading-[30px] animate-typewriter"
      >
        <TypeAnimation
          sequence={
            [
              'I\'m a Javascript & Flutter Developer with over 10 years of experience in developing web applications and API\'s. I\'m a product-focused developer who priorities user feedback first and foremost. Most of my work experience has been at startup companies as well as large organizations, so I\'m used to wearing many hats. I\'m a flexible developer who is always ready to take on new challenges.',
              1000
            ]
          }
        />
      </motion.p>
      <div className="my-16 flex justify-between h-full items-stretch flex-wrap gap-10">
        <Services />
      </div>
    </>
  );
}, 'bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%');
