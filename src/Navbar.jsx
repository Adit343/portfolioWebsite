import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import './main.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='navbar'>
      <div className="left">
        <h2 className='title'>Portfolio</h2>
      </div>
      <div className={`right ${isMenuOpen ? 'open' : ''}`}>
        <ScrollLink to="mainy" spy={true} smooth={true} offset={-140} duration={600} className='button'>
          Home
        </ScrollLink>
        <ScrollLink to="aboutMey" spy={true} smooth={true} offset={-140} duration={600} className='button'>
          About Me
        </ScrollLink>
        <ScrollLink to="skills" spy={true} smooth={true} offset={-140} duration={600} className='button'>
          Skills
        </ScrollLink>
        <ScrollLink to="project" spy={true} smooth={true} offset={-140} duration={600} className='button'>
          Projects
        </ScrollLink>
        <ScrollLink to="contact" spy={true} smooth={true} offset={-140} duration={600} className='button'>
          Contact Me
        </ScrollLink>
      </div>
      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>
    </div>
  );
};

export default Navbar;
