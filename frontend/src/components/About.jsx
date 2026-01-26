import React from 'react';
import { Link } from 'react-scroll';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

const About = () => {
  return (
    <section className='about' id='about'>
      <div className='container'>
        <div className='banner'>
          <div className='top'>
            <h1 className='heading'>ABOUT US</h1>
            <p className='mid'>
              Welcome to HANTEE, where culinary passion meets exceptional dining. Our talented chefs craft each dish with the finest locally-sourced ingredients, creating unforgettable flavors that celebrate both tradition and innovation. Join us for an experience that delights all your senses.
            </p>
            <Link to="menu" spy={true} smooth={true} duration={400}>
              Explore Menu <span><HiOutlineArrowNarrowRight/></span>
            </Link>
          </div>
        </div>
        <div className="banner">
          <img src="/about.png" alt='about'/>
        </div>
      </div>
    </section>
  )
}

export default About