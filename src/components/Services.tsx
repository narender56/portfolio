import React from 'react';
import Tilt from 'react-tilt';
import { EffectCards } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from 'framer-motion';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';


import { Service, services } from '../constants';
import { fadeIn } from '../utils/motion';
import { useIsMobile } from '../hooks';

interface ServiceCardProps extends Service {
  index: number;
}

const ServiceCard = ({ index, title, tech, icon }: ServiceCardProps) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
      className="w-full h-full green-pink-gradient p-[1px] rounded-lg shadow-card"
    >
      <div className="h-full bg-tertiary rounded-lg flex items-stretch flex-col">
        <img src={icon} alt={title} className="w-full rounded-t-lg" />
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
)

export const Services = () => {
  const isMobile = useIsMobile();

  if (!isMobile) {
    return services.map((service, index) => (
      <ServiceCard
        key={service.title}
        index={index}
        {...service}
      />
    ))
  }
  return (
    <>
      <Swiper
        effect="cards"
        grabCursor={true}
        modules={[EffectCards]}
        className="w-full overflow-hidden"
        autoplay
        loop
      >
        {
          services.map((service, index) => (
            <SwiperSlide key={service.title}>
              <ServiceCard
                index={index}
                {...service}
              />
            </SwiperSlide>
          ))
        }
      </Swiper>
    </>
  );
}
