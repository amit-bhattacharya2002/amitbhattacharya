"use client"
import React from 'react'
import { styled } from 'styled-components'

const Contact = () => {
  return (
    <ContactStyled>Contact</ContactStyled>
  )
}

const ContactStyled = styled.div`
    min-height: 100vh;
    padding: 2rem;
    scroll-snap-align: start;
    transition: all 2s ease;
    scroll-snap-stop: always ;
    /* scroll-margin-top: 2.5vh; */


    /* overflow-y: scroll; */

`
export default Contact