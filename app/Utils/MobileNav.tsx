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
    <div className='text-white block sm:hidden w-full h-[50%]'><button onClick={()=>(handleMenu())} className='m-auto block text-2xl text-purple-500'>{navStatus ? <TiThMenu />:<IoCloseSharp />}</button>

    <div className={`h-[30vh] bg-black w-[100%] border relative top-3 ${navStatus? `hidden` : `block`}`}>
        <nav>
            <ul className=' flex h-full flex-col items-center justify-center gap-4 p-4 text-purple-500 text-[0.75rem]'>
                <Link href={"/#amit"}>
                    <li>AMIT BHATTACHARYA</li>
                </Link>
                <Link href={"/#about"}>
                    <li>About Me</li>
                </Link>
                <Link href={"/#projects"}>
                    <li>Projects</li>
                </Link>
                <Link href={"/#contact"}>
                    <li>Contact Me</li>
                </Link>
            </ul>
        </nav>
    </div>
    </div>
  )
}

export default MobileNav