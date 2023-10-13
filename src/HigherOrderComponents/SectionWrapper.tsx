import React from 'react';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { staggerContainer } from '../utils/motion';

export const SectionWrapper = (Component: () => React.JSX.Element, className: string) => {
 return () => {
    return (
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{once: true, amount: 0.25}}
        className={`relative z-0 ${styles.padding} ${className}`}
      >
        <Component />
      </motion.section>
    );
  };
};

