import React from 'react';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { ComputersCanvas } from './canvas';

export const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center -mt-8">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-60 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText}`}>
            <span className=''>Hey</span>, I'm Naren
          </h1>
          <p className={`${styles.heroSubText} text-white`}>
            JavaScript Full Stack Developer
            <br className="sm:block hidden" /> and a UI/UX<sup className="text-xs align-super">(20%)</sup> Designer
          </p>
        </div>
      </div>
      <ComputersCanvas />
      <div className="absolute xs:bottom-2 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className="w-3 h-3 rounded-full mb-1 bg-white"
            />
          </div>
        </a>
      </div>
    </section>
  );
};