import React from 'react';
import Tilt from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { SectionWrapper } from '../HigherOrderComponents';
import { Project, projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

interface ProjectCardProps extends Project{
  index: number;
}

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  url,
}: ProjectCardProps) => {
  return (
    <motion.div variants={fadeIn('up', 'spring', index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 10,
          scale: 1,
          speed: 500,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full h-full relative"
      >
        <a
              href={url}
              target="_blank"
            >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>

        <div className="my-5">
          <h3 className="font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-[14px]">{description}</p>
        </div>

        <div className="flex flex-wrap gap-2 absolute bottom-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
        </a>
      </Tilt>
    </motion.div>
  );
};

export const Projects = SectionWrapper(() => {
  return (
    <div id="projects">
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className="mt-3 text-[17px] max-w-3xl leading-[30px]"
        >
          Have a glance at my current/previous works 😎
        </motion.p>
      </div>

      <div className="mt-20 flex items-stretch flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </div>
  );
}, 'bg-gradient-to-r from-rose-600 from-10% via-sky-500 via-30% to-indigo-600 to-90%');
