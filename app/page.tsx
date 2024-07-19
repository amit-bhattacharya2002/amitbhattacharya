"use client"
import Image from 'next/image'
import HeroSection from './Components/HeroSection'
import About from './Components/About'
import { styled } from 'styled-components'
import Projects from './Components/Projects'
import Contact from './Components/Contact'

import PageTransition from './Components/PageTransition'
import AboutmeDetails from './Components/AboutmeDetails'
import WorkExp from './Components/WorkExp'

export default function Home() {
  return (
    <StyledMain>
        <HeroSection/>
        <PageTransition id='about' title='ABOUT ME . ABOUT ME . ABOUT ME . ABOUT ME . ABOUT ME . ABOUT ME . ABOUT ME . ABOUT ME . ABOUT ME . ABOUT ME . ABOUT ME . ABOUT ME . ABOUT ME . ABOUT ME . ABOUT ME . ABOUT ME . ABOUT ME . ABOUT ME . ABOUT ME . ABOUT ME . ABOUT ME . ABOUT ME . ABOUT ME . ABOUT ME . ABOUT ME . ABOUT ME . ABOUT ME . ABOUT ME . ABOUT ME . ABOUT ME . ABOUT ME . ABOUT ME . ABOUT ME . ABOUT ME . ABOUT ME . ABOUT ME . ABOUT ME . ABOUT ME . ABOUT ME' style=' whitespace-nowrap sm:animate-scrollT' divStyle='flex-col justify-center items-center gap-10 '/>
        <AboutmeDetails/>
        <WorkExp/>
        <About/>
        <Projects/>
        <Contact/>
        {/* <Carousel/> */}
    </StyledMain>
  )
}

const StyledMain = styled.main`
  height: 100%;
  /* scroll-snap-type: y proximity; */

`
