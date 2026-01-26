import React from 'react'
import HeroSections from '../components/HeroSections'
import About from '../components/About'
import Qualities from '../components/Qualities'
import Menu from '../components/Menu'
import WhoWeAre from '../components/who_we_are'
import OurTeam from '../components/Team'
import Reservation from '../components/Reservation'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
      <HeroSections/>  
      <About/>
      <Qualities/>    
      <Menu/>
      <WhoWeAre/>
      <OurTeam/>
      <Reservation/>
      <Footer/>
    </>
  )
}

export default Home