"use client"
import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import { styled } from 'styled-components'
import ProjectItems from './ProjectItems'
import projects from '../Content/projects'
import Reveal from './AnimateComponents/Reveal'
import { Montserrat, Roboto, Lexend_Deca} from 'next/font/google'

const lexendDeca = Lexend_Deca({subsets: ['latin']})

const Projects = () => {
  return (
    <ProjectStyled id='projects'>
          <h1 className={`${lexendDeca.className} sm:text-[1.5rem] text-center sm:text-start sm:ml-[5rem] m:auto  sm:w-[40%] block sm:mt-[10rem] sm:mb-[1rem] pb-4 border-b-2 border-purple-500`}>PROJECTS</h1>

        <Reveal
          x='-100'
          width='auto'
        >
          <Carousel className='w-auto md:w-[90%] h-[80%] '>
              {projects.map((project, id) => (
                <ProjectItems key={project.id} projects={project}></ProjectItems>
                ))}
          </Carousel>
        </Reveal>

    </ProjectStyled>
  )
}

const ProjectStyled = styled.div`
    height: 100vh;
    padding: 2rem;
    padding-top: 2rem;
    padding-bottom: 0%;
    scroll-snap-align: start;
    transition: all 2s ease;
    scroll-snap-stop: always ;
    background-color: white;
    
    color: black;
    /* scroll-margin-top: 2.5vh; */

    /* overflow-y: scroll; */

    @media screen and (max-width: 480px){
      font-size: 1rem;
      width: 100vw;
    padding: 1rem;
    flex-direction: column;
      padding-top: 5rem;
    /* text-align: center; */
    }

`
export default Projects