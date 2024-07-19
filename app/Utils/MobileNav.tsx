"use client"
import React, { useState } from 'react'
import { TiThMenu } from "react-icons/ti";
import { IoCloseSharp } from "react-icons/io5";
import Link from 'next/link';

const MobileNav = () => {
    const [navStatus, setNavStatus] = useState(true);
    const handleMenu = () => {
        setNavStatus(!navStatus)
    }
  return (
    <div className=' flex flex-col sm:hidden w-full h-[100%]'>
        <button onClick={()=>(handleMenu())} className='m-auto text-2xl text-purple-500'>{navStatus ? <TiThMenu />:<IoCloseSharp />}</button>

    <div className={`h-[30vh] bg-black w-[100%] border relative top-3 ${navStatus? `hidden` : `block`}`}>
        <nav>
            <ul className=' flex h-full flex-col items-center justify-center gap-4 p-4 text-purple-500 text-[0.75rem]'>
                <Link href={"/#amit"}>
                    <li>AMIT BHATTACHARYA</li>
                </Link>
                <Link href={"/#about"}>
                    <li>ABOUT ME</li>
                </Link>
                <Link href={"/#projects"}>
                    <li>PROJECTS</li>
                </Link>
                <Link href={"/#contact"}>
                    <li>CONTACT ME</li>
                </Link>
                <Link href={"/#workexp"}>
                    <li>WORK XP</li>
                </Link>
            </ul>
        </nav>
    </div>
    </div>
  )
}

export default MobileNav