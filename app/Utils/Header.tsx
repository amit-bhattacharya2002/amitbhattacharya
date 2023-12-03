"use client"

import React from 'react'
import { styled } from 'styled-components'

const Header = () => {
  return (
    <HeaderStyled>Header</HeaderStyled>

  )
}

const HeaderStyled = styled.header`
    width: 100vw;
    height: 2%.5;
    padding: 1rem;
    scroll-snap-align: start;

    top: 0;
    border: solid 2px white;
`

export default Header