import { motion } from 'framer-motion';
import { styles } from '../styles';
import { SectionWrapper } from '../HigherOrderComponents';
import { fadeIn, textVariant } from '../utils/motion';
import { SocialLinks, Social } from '../constants';

interface SocialMediaCardProps extends Social {
  index: number;
}

export const SocialMediaCard = ({
  index,
  link,
  image,
}: SocialMediaCardProps) => (
  <motion.div
    variants={fadeIn('', 'spring', index * 0.5, 0.75)}
  >
    <div className="mt-1">
      <a href={link} target="_blank">
        <img src={image} alt={image} className="w-10 h-10 rounded-lg"/>
      </a>
    </div>
  </motion.div>
);

export const SocialMedia = SectionWrapper(() => {
  return (
    <div className="mt-12">
      <div className={`${styles.padding} rounded-2xl`}>
        <motion.div variants={textVariant()}>
          <h2 className={styles.sectionHeadText}>Social Profiles</h2>
        </motion.div>
      </div>
      
      <div className={`${styles.paddingX} pb-14 flex justify-between flex-wrap gap-7`}>
        {SocialLinks.map((socialLink, index) => (
          <SocialMediaCard key={index} index={index} {...socialLink} />
        ))}
      </div>
    </div>
  );
}, 'bg-gradient-to-r from-gray-500 via-gray-900 to-gray-400');