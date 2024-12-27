import React, { useState } from 'react'
import Navbar from './components/Navbar'
import LandingPage from './components/Landingpage'
import Marquee from './components/Marquee'
import About from './components/About'
import Eyes from './components/Eyes'
import Featured from './components/Featured'
import CardHolder from './components/Cardholder'
import Footer from './components/Footer'
import LocomotiveScroll from 'locomotive-scroll';

const App = () => {
const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className='bg-zinc-900'>
        <Navbar/>
        <LandingPage/>
        <Marquee/>
        <About/>
        <Eyes/>
        <Featured/>
        <CardHolder/>
        <Footer/>
    </div>
  )
}

export default App