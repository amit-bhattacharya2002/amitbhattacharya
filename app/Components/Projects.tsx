"use client"
import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import { styled } from 'styled-components'
import ProjectItems from './ProjectItems'
import projects from '../Content/projects'
import Reveal from './AnimateComponents/Reveal'

const Projects = () => {
  return (
    <ProjectStyled>
          <h1 className='text-[1.5rem] pl-[10rem] mt-[2rem] mb-[5rem] pb-4 border-b-4'>Projects</h1>

        <Reveal
          x='-100'
          width='auto'
        >
          <Carousel className=' w-[90%] h-[80%] '>
              {projects.map((project, id) => (
                <ProjectItems projects={project}></ProjectItems>
                ))}
          </Carousel>
        </Reveal>

    </ProjectStyled>
  )
}

const ProjectStyled = styled.div`
    height: 100vh;
    padding: 2rem;
    padding-bottom: 0%;
    scroll-snap-align: start;
    transition: all 2s ease;
    scroll-snap-stop: always ;
    background-color: white;
    color: black;
    /* scroll-margin-top: 2.5vh; */

    /* overflow-y: scroll; */


`
export default Projects