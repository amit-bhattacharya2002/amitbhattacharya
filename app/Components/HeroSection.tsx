"use client"
import React from 'react'
import { styled } from 'styled-components'
import { useScroll, useTransform, motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { Abril_Fatface } from 'next/font/google'
import { Montserrat, Roboto, Lexend_Deca} from 'next/font/google'

// import localFont from 'next/font/local'

// const lemonMilk = localFont({ src: '@/public/fonts/LEMONMILK-Bold.otf' })

const abrilF = Abril_Fatface({subsets: ['latin'], weight:["400"]})
const montserrat = Montserrat({subsets: ['latin']})
const roboto = Roboto({subsets: ['latin'], weight:["100", "300", "400", "500", "700", "900"]})
const lexendDeca = Lexend_Deca({subsets: ['latin']})
const HeroSection = () => {
  const nameStyle= `
  relative bottom-0 text-right text-xl ${montserrat.className}
    
  `
  
    const {scrollYProgress} = useScroll()
    const x = useTransform( scrollYProgress, [0,1] , [0, -8000])
  return (
    <HeroStyled id='amit' className=''>
        <div className="name absolute z-50 top-[10rem] right-5 ">
            <NameStyled className={`${lexendDeca.className}  bg-gradient-to-r from-violet-500 to-purple-500 bg-clip-text text-transparent`}>AMIT BHATTACHARYA</NameStyled>
            <h2 className={`${nameStyle}`}>Full Stack Web Developer</h2>
        </div>
        <TitleStyled style={{x}} className='bg-gradient-to-r from-slate-400 to-slate-700 bg-clip-text text-transparent'>
{/* 
        <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Amit',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Web Developer',
        1000,
        'UI/UX Designer',
        1000,
        'Mobile Developer',
        1000
      ]}
      wrapper="span"
      speed={50}

      repeat={Infinity}
    /> */}
        Developer.Designer
        </TitleStyled>
    </HeroStyled>

  )
}

const HeroStyled = styled.div`
    min-height: 100vh;
    padding: 2rem;
    overflow: hidden;
    position: relative;
    padding-right: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    scroll-snap-align: start;
    transition: all 2s ease;
    scroll-snap-stop: always ;
    scroll-margin-top: 20rem;

    @media screen and (max-width: 300px){
      
    }

    /* overflow-y: scroll; */

`

const TitleStyled = styled(motion.h1)`

    position: absolute;
    font-size: 15rem;
    z-index: 1;
    white-space: nowrap;
    margin: 0;
    top: 20rem;
    padding: 0;
    /* -webkit-filter: blur(1px); */
    transition: all 1s ease;

    @media screen and (max-width: 480px){
      font-size: 2rem;
      position: relative;
    }
`

const NameStyled = styled.h1`
    font-size: 5rem;
    @media screen and (max-width: 480px){
      font-size: 2rem;
      position: relative;
    }
`
export default HeroSection