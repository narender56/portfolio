import Tilt from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../HigherOrderComponents';

const ServiceCard = ({ index, title, tech, icon }) => {
  return (
    <>
      <Tilt className="xs:w-[250px] w-full">
        <motion.div
          variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
          className="w-full green-pink-gradient p-[1px] rounded-lg shadow-card"
        >
          <div
            options={{ max: 45, scale: 1, speed: 450 }}
            className="bg-tertiary rounded-lg flex justify-evenly items-center flex-col"
          >
            <img src={icon} alt={title} className="w-full max-h-[180px] rounded-t-lg" />
            <h3 className="py-5 px-2 text-white text-[20px] font-bold text-center">
              {title}
              <div className="flex flex-wrap justify-center items-center">
                {
                  tech.map(t => <span className="mx-2 my-1 text-[10px]" key={t}>{t}</span>)
                }
              </div>
            </h3>
          </div>
        </motion.div>
      </Tilt>
    </>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-[3xl] leading-[30px]"
      >
        I'm a Full Stack Javascript Developer with over 8 years of experience in developing web applications and API's. I'm a product-focused developer who priorities user feedback first and foremost. Most of my work experience has been at startup companies as well as large organizations, so I'm used to wearing many hats. I'm a flexible developer who is always ready to take on new challenges.
      </motion.p>
      <div className="my-16 flex justify-between flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard
            key={service.title}
            index={index}
            {...service}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, 'about');