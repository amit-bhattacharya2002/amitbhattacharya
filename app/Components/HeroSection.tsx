"use client"
import React, { useEffect } from 'react'
import { styled } from 'styled-components'
import { useScroll, useTransform, motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { Abril_Fatface } from 'next/font/google'
import { Montserrat, Roboto, Lexend_Deca, Kode_Mono, Kanit, Josefin_Sans} from 'next/font/google'
import Link from 'next/link'

// import localFont from 'next/font/local'

// const lemonMilk = localFont({ src: '@/public/fonts/LEMONMILK-Bold.otf' })

const abrilF = Abril_Fatface({subsets: ['latin'], weight:["400"]})
const kanit = Kanit({subsets: ['latin'], weight:["400"]});
const josefinSans = Josefin_Sans({subsets: ['latin'], weight:["400"]});
const kodeMono = Kode_Mono({subsets: ['latin']})
const montserrat = Montserrat({subsets: ['latin']})
const roboto = Roboto({subsets: ['latin'], weight:["100", "300", "400", "500", "700", "900"]})
const lexendDeca = Lexend_Deca({subsets: ['latin']})
const HeroSection = () => {
  const nameStyle= `
  relative bottom-0 sm:text-right sm:text-xl text-center text-[1rem] ${montserrat.className} py-5 
    
  `
  // sm:border-b sm:border-b-violet-500
    const {scrollYProgress} = useScroll()
    const x = useTransform( scrollYProgress, [0,1] , [0, -8000])
//     useEffect(() => {
//       console.log(x)
// }, [x])
  return (

    <HeroStyled id='amit' className=''>
        <div className="name absolute z-50 sm:top-[10rem]  sm:right-[10rem] top-[10rem] ">
            <NameStyled className={`${lexendDeca.className}  bg-gradient-to-r from-violet-500 to-purple-500 bg-clip-text text-transparent`}>AMIT BHATTACHARYA</NameStyled>
            <div className="flex justify-between align-center flex-col sm:flex-row-reverse">
              <h2 className={`${nameStyle}`}>
                
          <TypeAnimation
                sequence={[
          // Same substring at the start will only be typed out once, initially
          'Full Stack Developer',
          2000, // wait 1s before replacing "Mice" with "Hamsters"
          'Web Designer',
          1000,
          'UI/UX Designer',
          1000,
          'Mobile Developer',
          1000
                ]}
                wrapper="span"
                speed={50}
          
                repeat={Infinity}
              />
              </h2>
              {/* https://www.flipsnack.com/78CD7E88B7A/amit_bhattacharya_resume/full-view.html */}
              {/* https://acrobat.adobe.com/id/urn:aaid:sc:VA6C2:c72368fa-c368-4a80-a0d9-cac893e6bb82 */}
              <Link href="https://acrobat.adobe.com/id/urn:aaid:sc:VA6C2:73ae8227-d138-4317-8781-e3ba612725bf" target='_blank' className='sm:text-right sm:m-0 mx-20 sm:text-xl text-center text-l  border p-5 border-slate-500 rounded-xl  text-slate-500 hover:border-purple-500 hover:text-purple-500 transition-all duration-500 ' >Download CV</Link>
              {/* bg-gradient-to-r from-indigo-500 to-purple-500 */}
            </div>

            <div className='sm:hidden mt-[5rem]'>
          <h1 className={`static ${lexendDeca.className} text-center text-slate-500 will-change-transform text-4xl w-full`}>Developer.Designer</h1>
        </div>
        </div>
        <div className='flex'>
        {/* style={{x}} 
            bg-gradient-to-r from-slate-400 to-slate-700 bg-clip-text text-transparent
        */}
          {/* <TitleStyled  className='scrollText text-slate-700'>  */}
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
          {/* <div>Developer.Designer.Developer.Designer.Developer.Designer.Developer.Designer.Developer.Designer.Developer.Designer.Developer.Designer.Developer.Designer.Developer.Designer.Developer.Designer.Developer.Designer.Developer.Designer.Developer.Designer.Developer.Designer.Developer.Designer.Developer.Designer.</div> */}
          {/* </TitleStyled> */}

              
          {/* ${scrollYProgress != null? 'scrollText' : ''}` */}
          <TitleStyled style={{x}} className={`bg-gradient-to-r from-slate-500 to-slate-700 bg-clip-text text-transparent will-change-transform ${lexendDeca.className}	 hover:text-violet-500 hidden sm:block`}>
        Developer.Designer.Developer.Designer.Developer.Designer.Developer.
        </TitleStyled>

        
          {/* style={{x}} */}
          
        </div>
    </HeroStyled>

  )
}

const HeroStyled = styled.div`
    min-height: 100vh;
    padding: 2rem;

    overflow: hidden;
    padding-right: 0;
    width: 100%;
    display: flex;
    position: relative;

    flex-direction: column;
    scroll-snap-align: start;
    transition: all 2s ease;
    scroll-snap-stop: always ;
    scroll-margin-top: 20rem;

    @media screen and (max-width: 480px){
      padding: 0;
      padding-top: 5rem;
      position: static;

    }

    /* overflow-y: scroll; */

    .name{
      @media screen and (max-width: 480px){
        width: 100%;
        text-align: center;
      }
    }

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
    /* transition: all 1s ease; */

    @media screen and (max-width: 480px){
      font-size: 5rem;
      position: absolute;
      margin-top: 5rem;
    }
`

const NameStyled = styled.h1`
    font-size: 3rem;
    
    @media screen and (max-width: 480px){
      font-size: 1.5rem;
      position: relative;
      margin: auto;
    }
`
export default HeroSection
