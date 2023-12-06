"use client"

import React from 'react'
import { styled } from 'styled-components'
import Navbar from '../Components/Navbar'
import Link from 'next/link'
import { Montserrat, Roboto, Lexend_Deca} from 'next/font/google'
import MobileNav from './MobileNav'

const lexendDeca = Lexend_Deca({subsets: ['latin']})

const Header = () => {
  return (
   
      <HeaderStyled>
          <div className='w-full hidden sm:flex justify-between '>
            <Link href={"/#amit"}><div className={`logo bg-gradient-to-r from-violet-500 to-purple-500 bg-clip-text text-transparent text-xs md:text-xl`}><h1 className={`${lexendDeca.className}`}>AMIT BHATTACHARYA</h1></div></Link>
            <div className="nav ">
              <ul className={`flex justify-between gap-10 bg-gradient-to-r text-xs md:text-xl ${lexendDeca.className} from-violet-500 to-purple-500 bg-clip-text text-transparent`}>
                <Link href={"/#about"}><li>About</li></Link>
                <Link href={"/#projects"}><li>Projects</li></Link>
                <Link href={"/#contact"}><li>Contact</li></Link>
              </ul>
                    </div>
          </div>
        <MobileNav/>
      </HeaderStyled>


  )
}

const HeaderStyled = styled.header`
    height: 5vh;
    width: 80vw;
    padding: 2em;
    align-items: center;
    margin: 1rem auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    scroll-snap-align: start;
    position: sticky;
    top: 1rem;
    z-index: 1000;
    border: 2px solid #a855f7;
    /* color: #a855f7; */
    scroll-margin-top: 1rem;

    @media screen and (max-width: 480px){
      font-size: 0.5rem;
      width: 100vw;
      /* display: none; */
      border: none;
    }
    /* background-color: black; */
    /* -webkit-backdrop-filter: opacity(0.25); */
    /* border-radius: 2rem; */
`

export default Header