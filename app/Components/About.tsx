"use client"
import React from 'react'
import { styled } from 'styled-components'
import Reveal from './AnimateComponents/Reveal'
import BentoBox from './BentoBox'
import AboutAd from './AboutAd'

const About = () => {
    return (
        <AboutStyled id='about'>
        <Reveal children={
            
            <>
            
            <h1 className='about border-b border-purple-500'>About Me</h1>
            <Reveal children={
                <>
                <p className='mt-[1rem]'>Creative Web Designer incorporates rich media assets and extensive interactivity to engage and capture audiences. Develops novel architectures and navigation plans to differentiate final products from existing competition. Specializes in sites guaranteed to stand out among crowded industries and product categories.
                Solid work ethic and strong self-discipline, built and nurtured by value-based education in a public school and early exposure to the competitive market of the IT sector.</p>
                </>
            } x="-500" width='100%'></Reveal>
        </>
        
        
        } x="-800" width='100%'></Reveal>

        <Reveal
        
        children={
            <>
                <AboutAd></AboutAd>

            </>
            // <div className='grid grid-cols-2 gap-4 grid-rows-4'>
            //     <BentoBox
            //         gridPosCol='1'
            //         gridPosRow='2'
            //         height='5rem'
            //         width='100%'
            //     />

            //     <BentoBox
            //         gridPosCol='2'
            //         gridPosRow='1'
            //         height='5rem'
            //         width='`100%'

            //     />
            // </div>
            
        }

        x='800'

        width='100%'
        


        />
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
    }

    @media screen and (max-width: 480px){
      font-size: 0.5rem;
      width: 100vw;
    padding: 1rem;
    flex-direction: column;

    /* text-align: center; */
    }
`

export default About