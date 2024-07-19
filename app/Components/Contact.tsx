"use client"
import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components'
import ContactMe from '@/app/Components/ContactMe'
import { Montserrat, Roboto, Lexend_Deca } from 'next/font/google'
import Link from 'next/link'
import { FaPhoneAlt } from "react-icons/fa"
import { MdOutlineEmail } from "react-icons/md"
import { FaGithub } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa6"

const lexendDeca = Lexend_Deca({ subsets: ['latin'] })

const Contact = () => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  return (
    <ContactStyled id='contact'>
      <div className='sm:w-[50%] w-full flex flex-col gap-4 mt-[5rem] p-4 pt-4'>
        <h1 className={`text-2xl text-center md:text-start md:text-5xl ${lexendDeca.className}`}>AMIT BHATTACHARYA</h1>
        <div className='flex flex-col sm:m-0 m-auto justify-between'>
          <h2 className='flex gap-[2rem] px-4 items-center'><MdOutlineEmail /><span className="infoLeft">amit.bhattacharya2002@gmail.com</span></h2>
          <h2 className='flex gap-[2rem] px-4 items-center'><FaPhoneAlt /><span className="infoLeft">+1 604 710 4814</span></h2>
          <h2 className='flex gap-[2rem] px-4 items-center'><FaGithub /><Link href={"https://github.com/amit-bhattacharya2002"} target='_blank' className='text-white hover:text-purple-500'><span className="infoLeft">amit-bhattacharya2002</span></Link></h2>
          <h2 className='flex gap-[2rem] px-4 items-center'><FaLinkedin /><Link href={"https://linkedin.com/in/amit-bhattacharya-551aa6202"} target='_blank' className='text-white hover:text-purple-500'><span className="infoLeft">Amit Bhattacharya</span></Link></h2>
        </div>
      </div>
      <ContactMe />
    </ContactStyled>
  )
}

const ContactStyled = styled.div`
  min-height: 100vh;
  padding: 2rem;
  scroll-snap-align: start;
  transition: all 2s ease;
  scroll-snap-stop: always;
  display: flex;
  align-items: center;

  .infoLeft {
    text-align: right;
  }

  @media screen and (max-width: 480px) {
    font-size: 0.5rem;
    width: 100vw;
    padding: 1rem;
    flex-direction: column;
    padding-top: 5rem;
  }
`

export default Contact
