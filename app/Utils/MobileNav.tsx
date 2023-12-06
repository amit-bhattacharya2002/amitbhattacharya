"use client"
import React, { useState } from 'react'
import { TiThMenu } from "react-icons/ti";
import { IoCloseSharp } from "react-icons/io5";

const MobileNav = () => {
    const [navStatus, setNavStatus] = useState(true);
    const handleMenu = () => {
        setNavStatus(!navStatus)
    }
  return (
    <div className='text-white block sm:hidden w-full h-[50%]'><button onClick={()=>(handleMenu())} className='m-auto block text-2xl text-purple-500'>{navStatus ? <TiThMenu />:<IoCloseSharp />}</button>

    <div className={`h-[20vh] w-[100%] border relative top-3 ${navStatus? `hidden` : `block`}`}></div>
    </div>
  )
}

export default MobileNav