import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';

import 'react-vertical-timeline-component/style.min.css';

import { styles } from '../styles';
import { experiences, Experience as ExperienceType } from '../constants';
import { SectionWrapper } from '../HigherOrderComponents';
import { textVariant } from '../utils/motion';

const ExperienceCard = ({ company_name, title, date, description, icon, iconBg}: ExperienceType) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: '#1d1836', color: '#ffffff', }}
      contentArrowStyle={{ borderRight: '7px solid #232631' }}
      date={date}
      iconStyle={{ background: iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={icon}
            alt={company_name}
            className="w-[60%] h-[60%] object-scale-down rounded-full"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{title}</h3>
        <p className="text-secondary text-[16px] font-semibold m-0">
          {company_name}
        </p>
      </div>

      <div className="mt-5 list-disc ml-5 space-y-2 text-sm pl-1 m-0">
        {description}
      </div>
    </VerticalTimelineElement>
  );
};

export const Experience = SectionWrapper(() => {
  return (
    <>
      <motion.div variants={textVariant()} id="experience">
        <h2 className={`${styles.sectionHeadText}`}>
          Work Experience.
        </h2>
      </motion.div>

      <div className="mt-16 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              {...experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
}, 'bg-gradient-to-r from-violet-500 from-10% via-sky-500 via-30% to-cyan-500 to-90%');
