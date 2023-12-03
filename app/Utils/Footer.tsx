"use client"
import React from 'react'
import { styled } from 'styled-components'

const Footer = () => {
  return (
    <FooterStyled>Footer</FooterStyled>
  )
}



const FooterStyled = styled.footer`
    width: 100vw;
    height: 10vh;
    padding: 1rem;
    scroll-snap-align: end;

`

export default Footer