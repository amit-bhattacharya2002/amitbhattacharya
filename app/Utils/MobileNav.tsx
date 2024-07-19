"use client"
import React, { useState } from 'react'
import { TiThMenu } from "react-icons/ti";
import { IoCloseSharp } from "react-icons/io5";
import Link from 'next/link';
import { Lexend_Deca } from 'next/font/google';

const LexendDeca = Lexend_Deca({subsets: ['latin']})
const MobileNav = () => {
    const [navStatus, setNavStatus] = useState(true);
    const handleMenu = () => {
        setNavStatus(!navStatus)
    }


  return (
    <div className=' flex flex-col sm:hidden w-full h-[100%]'>
        <button onClick={()=>(handleMenu())} className='m-auto text-2xl text-purple-500'>{navStatus ? <TiThMenu />:<IoCloseSharp />}</button>

    <div className={`h-auto bg-black w-[100%] border border-purple-500 rounded-2xl relative top-3 ${navStatus? `hidden` : `block`}`}>
        <nav>
            {/* <span className='text-slate-500'>FULL STACK DEV</span> */}
            <ul className=' flex h-full flex-col items-start justify-center gap-8 p-4 text-purple-500 text-[0.75rem]'>
                <Link href={"/#amit"}>
                    <li className={`${LexendDeca.className} text-purple-500 text-lg flex flex-col w-full justify-between`}><span>AMIT BHATTACHARYA </span> </li>
                </Link>
                <div className='flex flex-col text-[1rem] gap-8 w-fit ml-auto items-start'>
                    <Link href={"/#about"}>
                        <li className={`${LexendDeca.className} text-slate-500`}>ABOUT ME</li>
                    </Link>
                    <Link href={"/#workexp"}>
                        <li className={`${LexendDeca.className} text-slate-500`}>WORK XP</li>
                    </Link>
                    <Link href={"/#projects"}>
                        <li className={`${LexendDeca.className} text-slate-500`}>PROJECTS</li>
                    </Link>
                    <Link href={"/#contact"}>
                        <li className={`${LexendDeca.className} text-slate-500`}>CONTACT ME</li>
                    </Link>
                </div>
            </ul>
        </nav>
    </div>
    </div>
  )
}

export default MobileNav