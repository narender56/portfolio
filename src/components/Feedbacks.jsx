import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../HigherOrderComponents";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const FeedbackCard = ({
  index,
  link,
  image,
}) => (
  <motion.div
    variants={fadeIn('', 'spring', index * 0.5, 0.75)}
  >
    <div className="mt-1">
      <a href={link} target="_blank">
        <img src={image} alt={image} className="w-48 h-48 rounded-lg"/>
      </a>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className="mt-12">
      <div className={`${styles.padding} rounded-2xl min-h-[300px]`}>
        <motion.div variants={textVariant()}>
          <h2 className={styles.sectionHeadText}>Social Profiles</h2>
        </motion.div>
      </div>
      
      <div className={`${styles.paddingX} -mt-20 pb-14 flex justify-between flex-wrap gap-7`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.key} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
