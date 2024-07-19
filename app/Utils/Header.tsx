"use client"

import React, { useContext } from 'react'
import { styled } from 'styled-components'
import Navbar from '../Components/Navbar'
import Link from 'next/link'
import MobileNav from './MobileNav'
import { Montserrat, Roboto, Lexend_Deca} from 'next/font/google'
import ActiveSectionContextProvider, { ActiveSectionContext, useActiveSectionContext } from '../Providers/ActiveSectionContext'

const lexendDeca = Lexend_Deca({subsets: ['latin']})

const Header = () => {
  const {activeSection, setActiveSection} = useActiveSectionContext();
  return (
   
      <HeaderStyled className='sm:bg-black bg-transparent'>
          <div className='w-full hidden sm:flex justify-between '>
            <Link href={"/#amit"}><div className={`logo bg-gradient-to-r from-violet-500 to-purple-500 bg-clip-text text-transparent text-xs md:text-xl`}><h1 className={`${lexendDeca.className}`}>AMIT BHATTACHARYA</h1></div></Link>
            <div className="nav ">
              <ul className={`flex justify-between gap-10 bg-gradient-to-r text-xs md:text-xl ${lexendDeca.className} from-violet-500 to-purple-500 bg-clip-text text-transparent`}>
                <Link href={"/#about"}><li>ABOUT</li> {activeSection === "About" && (<span className='bg-gray-100 rounded-full absolute inset-0 -z-10' 
                ></span>)} </Link>
                <Link href={"/#workexp"}><li>WORK-XP</li> {activeSection === "About" && (<span className='bg-gray-100 rounded-full absolute inset-0 -z-10' 
                ></span>)} </Link>
                <Link href={"/#projects"}><li>PROJECTS</li></Link>
                <Link href={"/#contact"}><li>CONTACT</li></Link>
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
    /* background-color: black; */

/* background: rgba(212, 212, 212, 0.354);
border-radius: 16px;
box-shadow: 0 4px 30px rgba(185, 185, 185, 0.1);
backdrop-filter: blur(10.1px);
-webkit-backdrop-filter: blur(10.1px); */
/* border: 1px solid rgba(27, 27, 27, 0.45); */

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