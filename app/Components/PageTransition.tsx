"use client"

import React from 'react'
import codeninjas from '../../public/CodeNinjasLogotStacked_White.svg'
import Image from 'next/image'
import { Lexend_Deca } from 'next/font/google'
type Props = {
    title : string
    style: string
    content?: React.ReactNode
    divStyle?: string
    id: string
}


const lexendDeca = Lexend_Deca({subsets: ['latin']})
const PageTransition = (props: Props) => {
  return (

      
      <div className={`h-screen sm:flex  hidden  ${props.divStyle}`} id={props.id} >
          <h1 className={`${lexendDeca.className} sm:text-[2rem] text-purple-500 text-center sm:text-center sm:ml-[0rem] m:auto text-nowrap sm:w-[100%] block sm:mt-[1rem] sm:mb-[1rem] pb-4 ${props.style}`}>{props.title}</h1>
              {props.content}
          </div>

  )
}

export default PageTransition