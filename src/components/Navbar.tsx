import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { styles } from '../styles';
import { SocialLinks, navLinks } from '../constants';
import ResumeButton from './ResumeButton';
import { useIsMobile } from '../hooks';
import { SocialMediaCard } from './SocialMedia';

export const Navbar = () => {
  const isMobile = useIsMobile();

  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleProfileClick = (e: any) => {
    e.stopPropagation();
  }

  return (
    <>
      <div className="absolute top-0 left-0 w-full overflow-hidden">
        <svg className={`relative block ${isMobile ? 'h-[160px]' : 'h-[230px]'}`} style={{ width: 'calc(100% + 1.3px)'}} data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#fff"></path>
        </svg>
      </div>
      <nav className={`w-full flex items-center py-5 fixed top-0 z-20 ${styles.paddingX} ${scrolled ? 'bg-gradient-to-r from-blue-500 to-violet-500' : 'text-[#2b2b35]'}`}>
        <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
          <div className="flex items-center gap-2 font-semibold italic">
            <Link
              to='/'
              className={`flex items-center gap-2 font-bold hover:scale-125 hover:font-extrabold`}
              onClick={() => {
                window.scrollTo(0, 0);
              }}
            >
              Naren
            </Link>
            <span className="sm:block hidden mx-1">|</span>
            <p className="text-sm font-bold cursor-pointer flex hover:scale-125 hover:font-extrabold">
              <a href="https://github.com/narender56" onClick={handleProfileClick} target="_blank">narender56</a>
            </p>
          </div>

          <ul className="list-none hidden sm:flex flex-row gap-10">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`text-[18px] font-medium cursor-pointer hover:scale-125 text-white hover:font-extrabold`}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
          <ul className="flex gap-6 hidden sm:flex items-center">
            {SocialLinks.map((card, index) => (
              <li><SocialMediaCard key={card.link} link={card.link} image={card.image} index={index} /></li>
            ))}
          </ul>
          <div className="mt-2 lg:block hidden">
            <ResumeButton />
          </div>

          <div className="sm:hidden flex flex-1 justify-end items-center">
            <img
              src={(scrolled ? toggle ? 'close.svg' : 'menu.svg' : toggle ? 'close_black.svg'  : 'menu_black.svg')}
              alt="menu"
              className="w-[28px] h-[28px] object-contain"
              onClick={() => setToggle(!toggle)}
            />

            <div className={`p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl ${!toggle ? 'hidden' : 'flex'}`}>
              <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
                {navLinks.map((nav) => (
                  <li
                    key={nav.id}
                    className="font-poppins font-medium cursor-pointer text-[16px]"
                    onClick={() => setToggle(!toggle)}
                  >
                    <a className="hover:scale-125 hover:font-extrabold text-white" href={`#${nav.id}`}>{nav.title}</a>
                  </li>
                ))}
                <li>
                  <div className="mt-2">
                    <ResumeButton />
                  </div>
                </li>
                {SocialLinks.map((card, index) => (
                  <li><SocialMediaCard key={card.link} link={card.link} image={card.image} index={index} /></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
