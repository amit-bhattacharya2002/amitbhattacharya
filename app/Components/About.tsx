"use client"
import React from 'react'
import { styled } from 'styled-components'
import Reveal from './AnimateComponents/Reveal'
import BentoBox from './BentoBox'
import AboutAd from './AboutAd'

const About = () => {
    return (
        <AboutStyled id='about'>
        <Reveal  x="-800" width='100%'>


<>
            
            <h1 className='about border-b border-purple-500 text-center sm:text-start w-full'>About Me</h1>
            <Reveal  x="-500" width='100%'>
                <>
                <p className='mt-[1rem]'>Creative Web Designer incorporates rich media assets and extensive interactivity to engage and capture audiences. Develops novel architectures and navigation plans to differentiate final products from existing competition. Specializes in sites guaranteed to stand out among crowded industries and product categories.
                Solid work ethic and strong self-discipline, built and nurtured by value-based education in a public school and early exposure to the competitive market of the IT sector.</p>
                </>
            </Reveal>
        </>
        </Reveal>

        <Reveal
        
        

        x='800'

        width='100%'>
            <>
        <AboutAd></AboutAd>

    </>
    </Reveal>
        


        
    </AboutStyled>
  )
}

const AboutStyled = styled.div`
    min-height: 100vh;
    padding-top: 10rem;
    padding-left: 15rem;
    padding-right: 15rem;
    width: 100%;
    /* overflow-y: scroll; */
    display: flex;
    scroll-snap-align: start;
    transition: all 2s ease;
    scroll-snap-stop: always ;
    
    /* scroll-margin-top: 2.5vh; */

    .about{
        font-size: 1.5rem;

        width: 40%;
        padding-bottom: 1rem;

        @media screen and (max-width: 480px){
            font-size: 1rem;
            display: block;
            margin: 0;
            width: 100%;
        }
    }

    @media screen and (max-width: 480px){
      font-size: 0.5rem;
      width: 100vw;
    padding: 1rem;
    padding-top: 5rem;
    flex-direction: column;
    /* text-align: center; */
    }
`

export default About