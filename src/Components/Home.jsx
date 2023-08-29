import React from 'react'
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import About from './About';
import Skills from './Skills';
import Contact from './Contact';
import Footer from './Footer';
import Portfolios from './Portfolios';


export default function Home() {
  return (

    <div>
      <Navbar/>
      <HeroSection />
      <About/>
      <Skills />
      <Portfolios />
      <Contact />
      <Footer />
    </div>
  )
}
