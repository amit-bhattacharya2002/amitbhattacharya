"use client"
import React from 'react'
import { styled } from 'styled-components'

import BentoBox from './BentoBox'
import AboutAd from './AboutAd'
import { Montserrat, Roboto, Lexend_Deca} from 'next/font/google'
import ExpComp from './AnimateComponents/ExpComp'
import { Abril_Fatface } from 'next/font/google'


import {CenterDirectorCard, LeadTeacherCard, TeacherPartTimeCard, WebDesignerCard} from './AnimateComponents/ExpCardComp'
import WorkCarousel from './WorkCarousel'

const roboto = Roboto({subsets: ['latin'], weight:["100", "300", "400", "500", "700", "900"]})
const lexendDeca = Lexend_Deca({subsets: ['latin']})

const abrilF = Abril_Fatface({subsets: ['latin'], weight:["400"]})




const About = () => {
    return (
            <div className="">
                <WorkCarousel/>
                <AboutStyled id='workexp'>
                {/* <div className="cont w-full relative h-full overflow-y-auto"> */}
                <div className='w-full sticky flex top-0 h-screen items-center' >
                        {/* <div className='w-full sticky top-0 bg-slate-300 m-10'>
                
                        </div>
                        <div className="w-full h-full">
                            <div className='w-auto h-full bg-slate-500 m-10'>
                            vsfdvs
                            </div>
                            <div className='w-auto h-full bg-slate-500 m-10'>
                            vdsvsdsdv
                            </div>
                            <div className='w-auto h-full bg-slate-500 m-10'>
                            vdsvwfq
                            </div>
                        </div> */}
                        <div className="w-full relative m-20 aspect-square">
                            <TeacherPartTimeCard id='partT'/>
                            <LeadTeacherCard id='leadT'/>
                            <CenterDirectorCard id='centerD'/>
                            <WebDesignerCard id='webD'/>
                        </div>
                    </div>
                    <div className='w-full  py-[40vh] ' >
                        {/* <div className='w-full sticky top-0 bg-slate-300 m-10'>
                
                        </div>
                        <div className="w-full h-full">
                            <div className='w-auto h-full bg-slate-500 m-10'>
                            vsfdvs
                            </div>
                            <div className='w-auto h-full bg-slate-500 m-10'>
                            vdsvsdsdv
                            </div>
                            <div className='w-auto h-full bg-slate-500 m-10'>
                            vdsvwfq
                            </div>
                        </div> */}
                        <ul className='flex flex-col justify-between'>
                            <li className={`${lexendDeca.className}`}>
                            <ExpComp id='centerD'>Center Director <br /> <span className='text-2xl '>Code Ninjas - Port Coquitlam, BC</span><br/> <span className='text-sm'> 01/2024 to current</span> </ExpComp>
                            </li>
                            <li className={`${lexendDeca.className}`}>
                            <ExpComp id='leadT'>Lead Teacher - JavaScript <br /> <span className='text-2xl '>Code Ninjas - Port Coquitlam, BC</span><br/> <span className='text-sm'> 02/2023 to 12/2023</span> </ExpComp>
                            </li>
                            <li className={`${lexendDeca.className}`}>
                                <ExpComp id='partT'>Teacher (Part-Time) <br /> <span className='text-2xl '>Code Ninjas - Port Coquitlam, BC</span><br/> <span className='text-sm'> 01/2022 to 02/2023</span> </ExpComp>
                            </li>
                            <li className={`${lexendDeca.className}`}>
                            <ExpComp id='webD'>Web Designer <br /> <span className='text-2xl '>Destination Global Educational Services - Burnaby, BC</span> <br/><span className='text-sm'> 03/2019 to 01/2020</span></ExpComp>
                            </li>
                            <li>
                            </li>
                        </ul>
                    </div>
                
                
                {/* </div> */}
                
                
                        {/* <Reveal  x="-800" width='100%'>
                
                
                <>
                
                <h1 className={`about border-b ${lexendDeca.className} border-purple-500 text-center sm:text-start w-full`}>ABOUT ME</h1>
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
                         */}
                
                
                        
                </AboutStyled>
            </div>
  )
}

const AboutStyled = styled.div`
    /* height: auto; */
    /* margin: 10px; */
    /* padding-top: 10rem;
    padding-left: 15rem;
    padding-right: 15rem; */
    /* overflow-y: auto; */

    /* position: relative; */
    max-width: 100%;
    /* position: relative; */
    align-items: start;
    display: flex;
    gap: 3rem;
    /* scroll-snap-align: start; */
    transition: all 2s ease;
    /* scroll-snap-stop: always ; */
    
    /* background-position: 0.5 0.5, 0 0, 0 0; */

    //--s: 50px; /* control the size */
  
  /* --_g: #0000 90deg,#0d0d10 0;
  background: 
    conic-gradient(from 90deg at 2px 2px,var(--_g))
     0 0/var(--s) var(--s),
    conic-gradient(from 90deg at 1px 1px,var(--_g))
     0 0/calc(var(--s)/5) calc(var(--s)/5); */
    /* scroll-margin-top: 2.5vh; */

    .about{
        font-size: 1.5rem;

        width: 40%;
        padding-bottom: 1rem;

        @media screen and (max-width: 480px){
            font-size: 1rem;
            display: none;
            margin: 0;
            width: 100%;
        }
    }

    @media screen and (max-width: 480px){
      /* font-size: 0.5rem;
      width: 100vw;
    padding: 1rem;
    padding-top: 5rem;
    flex-direction: column; */
    display: none;
    /* text-align: center; */
    }
`

export default About