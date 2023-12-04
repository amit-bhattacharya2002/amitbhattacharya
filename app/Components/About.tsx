"use client"
import React from 'react'
import { styled } from 'styled-components'
import Reveal from './AnimateComponents/Reveal'
import BentoBox from './BentoBox'

const About = () => {
    return (
        <AboutStyled>
        <Reveal children={
            
            <>
            
            <h1 className='about'>About Me</h1>
            <Reveal children={
                <>
                <p className='mt-[1rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptate recusandae aliquam illo! Nihil dolorem saepe, suscipit sint quia enim consectetur ipsum odio consequatur facere consequuntur voluptates voluptas et quisquam incidunt optio praesentium rerum harum illum? Consequatur nisi ducimus quam voluptas numquam fuga vero tempora, illum in earum fugiat sint.</p>
                </>
            } x="-500" width='100%'></Reveal>
        </>
        
        
        } x="-800" width='100%'></Reveal>

        <Reveal
        
        children={
            <></>
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
        border-bottom: 2px solid white;
        width: 40%;
        padding-bottom: 1rem;
    }
`

export default About