"use client"
import Image from 'next/image'
import HeroSection from './Components/HeroSection'
import About from './Components/About'
import { styled } from 'styled-components'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
export default function Home() {
  return (
    <StyledMain>
        <HeroSection/>
        <About/>
        <Projects/>
        <Contact/>
    </StyledMain>
  )
}

const StyledMain = styled.main`
  height: 100%;
  /* scroll-snap-type: y proximity; */

`
