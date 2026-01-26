import React from 'react'
import NavBar from './NavBar'

const HeroSections = () => {
  return (
    <section className='heroSection' id='heroSection'>
      <NavBar/>
      <div className='container'>
        <div className='banner'>
          <div className='largeBox'>
            <h1 className='title'>Come</h1>
          </div>
          <div className="combined_boxes">
            <div className="imageBox">
              <img src="/hero1.png" alt="hero1" />
            </div>
            <div className="textAndLogo">
              <div className="textWithSvg">
                <h1 className='title'>Eat</h1>
                <img src='/threelines.svg' alt='threelines'/>
              </div>
              <img src='/logo.svg' alt='logo' className='logo'/>
            </div>
          </div>
          <h1 className='title dishes_title'>Dishes</h1>
        </div>
        <div className='banner'>
          <div className='imageBox'>
            <img src='/hero2.png' alt='hero2'/>
          </div>
          <h1 className='title dishes_title'>With Us</h1>
        </div>
      </div>
    </section>
  )
}

export default HeroSections
