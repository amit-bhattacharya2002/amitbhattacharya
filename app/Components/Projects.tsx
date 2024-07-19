"use client"
import React from 'react'
import { useRef } from 'react'
import { Carousel } from 'react-responsive-carousel'
import { styled } from 'styled-components'
import ProjectItems from './ProjectItems'
import projects from '../Content/projects'

import { Montserrat, Roboto, Lexend_Deca} from 'next/font/google'
import { useScroll, useTransform, motion } from 'framer-motion'

const lexendDeca = Lexend_Deca({subsets: ['latin']})

const Projects = () => {
  const targetRef = useRef<HTMLDivElement | null>(null)
  const {scrollYProgress} = useScroll({
    target: targetRef,
  })
  const x = useTransform(scrollYProgress, [0, 1], ['35%', '-70%'])
  return (
    <ProjectStyled id='projects'ref={targetRef}>
        {/* border-b-2 border-purple-500 */}

          <h1 className={`${lexendDeca.className} sm:text-[2rem] text-purple-500 text-center sm:text-center sm:ml-[0rem] m:auto  sm:w-[100%] block sm:mt-[10rem] sm:mb-[1rem] pb-4 `}>PROJECTS</h1>

        <div className='sm:hidden flex flex-col'>
          {projects.map((project: any, id: number) => (<ProjectItems projects={project} key={project.id}/>))}
        </div>

        <div className='sticky top-[5%] h-screen overflow-hidden hidden sm:flex items-center' >
          
          <motion.div style={{x}} className="flex gap-[100px] will-change-transform" >

         {projects.map((project: any, id: number) => (<ProjectItems projects={project} key={project.id}/>))}

          </motion.div>

        </div>

    </ProjectStyled>
  )
}

const ProjectStyled = styled.div`
    height: 300vh;
    padding: 2rem;
    padding-top: 2rem;
    padding-bottom: 0%;
    position: relative;
    transition: all 2s ease;

//    top: 0;
    /* background-color: white; */
    color: white;
    /* scroll-margin-top: 2.5vh; */

    /* overflow-x: scroll; */

    @media screen and (max-width: 480px){
      font-size: 1rem;
      width: 100vw;
    padding: 0.5rem;
    
    flex-direction: column;
      padding-top: 5rem;
    
    /* text-align: center; */
    }

`
export default Projects