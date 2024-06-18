import React from 'react'
import { Lexend_Deca } from 'next/font/google'
import { useTransform, useScroll, motion, MotionStyle } from 'framer-motion'
import { useRef } from 'react'
type Props = {}


const lexendDeca = Lexend_Deca({subsets: ['latin']})

const WorkExp = (props: Props) => {

    const contRef = useRef<HTMLDivElement | null>(null)
    const {scrollYProgress} = useScroll({
      target: contRef,
      offset: ['start end', 'end start']
    })

    const y = useTransform(scrollYProgress, [0, 1], [-500, 500])
    const yy = useTransform(scrollYProgress, [0, 1], [1000, -1000])
    const yyy = useTransform(scrollYProgress, [0, 1], [-2000, 2000])
    const yyyy = useTransform(scrollYProgress, [0, 1], [3000, -3000])
    const y5 = useTransform(scrollYProgress, [0, 1], [-4000, 4000])

    const y2style: MotionStyle = {
      y: yy
    }
    const y3style: MotionStyle = {
        y: yyy
      }
      const y4style: MotionStyle = {
        y: yyyy
      }
    //   const y2style: MotionStyle = {
    //     y: yy
    //   }

  return (
    <div className={`h-[100vh] flex flex-row m-auto gap-2 justify-center w-screen overflow-y-hidden whitespace-nowrap `} ref={contRef}>
        
        <motion.div style={{y}} className='h-full relative'>
        <h1 className='text-[2rem] text-purple-500'>WORK EXPERIENCE</h1>
        <h1 className='text-[2rem] text-purple-500'>WORK EXPERIENCE</h1>
        <h1 className='text-[2rem] text-purple-500'>WORK EXPERIENCE</h1>
        <h1 className='text-[2rem] text-purple-500'>WORK EXPERIENCE</h1>
        <h1 className='text-[2rem] text-purple-500'>WORK EXPERIENCE</h1>
        <h1 className='text-[2rem] text-purple-500'>WORK EXPERIENCE</h1>
        <h1 className='text-[2rem] text-purple-500'>WORK EXPERIENCE</h1>
        <h1 className='text-[2rem] text-purple-500'>WORK EXPERIENCE</h1>
        <h1 className='text-[2rem] text-purple-500'>WORK EXPERIENCE</h1>
        <h1 className='text-[2rem] text-purple-500'>WORK EXPERIENCE</h1>
        <h1 className='text-[2rem] text-white'>WORK EXPERIENCE</h1>
        <h1 className='text-[2rem] text-purple-500'>WORK EXPERIENCE</h1>
        <h1 className='text-[2rem] text-purple-500'>WORK EXPERIENCE</h1>
        <h1 className='text-[2rem] text-purple-500'>WORK EXPERIENCE</h1>
        <h1 className='text-[2rem] text-purple-500'>WORK EXPERIENCE</h1>
        <h1 className='text-[2rem] text-purple-500'>WORK EXPERIENCE</h1>
        <h1 className='text-[2rem] text-purple-500'>WORK EXPERIENCE</h1>
        <h1 className='text-[2rem] text-purple-500'>WORK EXPERIENCE</h1>
        <h1 className='text-[2rem] text-purple-500'>WORK EXPERIENCE</h1>
        <h1 className='text-[2rem] text-purple-500'>WORK EXPERIENCE</h1>
        <h1 className='text-[2rem] text-purple-500'>WORK EXPERIENCE</h1>

</motion.div>
<motion.div style={y2style} className='h-full relative'>

<h1 className='text-[2rem] text-purple-500'>WORK EXPERIENCE</h1>
<h1 className='text-[2rem] text-purple-500'>WORK EXPERIENCE</h1>
<h1 className='text-[2rem] text-purple-500'>WORK EXPERIENCE</h1>
<h1 className='text-[2rem] text-purple-500'>WORK EXPERIENCE</h1>
<h1 className='text-[2rem] text-purple-500'>WORK EXPERIENCE</h1>
<h1 className='text-[2rem] text-purple-500'>WORK EXPERIENCE</h1>
<h1 className='text-[2rem] text-purple-500'>WORK EXPERIENCE</h1>
<h1 className='text-[2rem] text-purple-500'>WORK EXPERIENCE</h1>
<h1 className='text-[2rem] text-purple-500'>WORK EXPERIENCE</h1>
<h1 className='text-[2rem] text-purple-500'>WORK EXPERIENCE</h1>
<h1 className='text-[2rem] text-white'>WORK EXPERIENCE</h1>
<h1 className='text-[2rem] text-purple-500'>WORK EXPERIENCE</h1>
<h1 className='text-[2rem] text-purple-500'>WORK EXPERIENCE</h1>
<h1 className='text-[2rem] text-purple-500'>WORK EXPERIENCE</h1>
<h1 className='text-[2rem] text-purple-500'>WORK EXPERIENCE</h1>
<h1 className='text-[2rem] text-purple-500'>WORK EXPERIENCE</h1>
<h1 className='text-[2rem] text-purple-500'>WORK EXPERIENCE</h1>
<h1 className='text-[2rem] text-purple-500'>WORK EXPERIENCE</h1>
<h1 className='text-[2rem] text-purple-500'>WORK EXPERIENCE</h1>
<h1 className='text-[2rem] text-purple-500'>WORK EXPERIENCE</h1>
<h1 className='text-[2rem] text-purple-500'>WORK EXPERIENCE</h1>


</motion.div>
<motion.div style={y3style} className='h-full relative'>

<h1 className='text-[2rem] text-purple-500'>WORK EXPERIENCE</h1>
<h1 className='text-[2rem] text-purple-500'>WORK EXPERIENCE</h1>
<h1 className='text-[2rem] text-purple-500'>WORK EXPERIENCE</h1>
<h1 className='text-[2rem] text-purple-500'>WORK EXPERIENCE</h1>
<h1 className='text-[2rem] text-purple-500'>WORK EXPERIENCE</h1>
<h1 className='text-[2rem] text-purple-500'>WORK EXPERIENCE</h1>
<h1 className='text-[2rem] text-purple-500'>WORK EXPERIENCE</h1>
<h1 className='text-[2rem] text-purple-500'>WORK EXPERIENCE</h1>
<h1 className='text-[2rem] text-purple-500'>WORK EXPERIENCE</h1>
<h1 className='text-[2rem] text-purple-500'>WORK EXPERIENCE</h1>
<h1 className='text-[2rem] text-white'>WORK EXPERIENCE</h1>
<h1 className='text-[2rem] text-purple-500'>WORK EXPERIENCE</h1>
<h1 className='text-[2rem] text-purple-500'>WORK EXPERIENCE</h1>
<h1 className='text-[2rem] text-purple-500'>WORK EXPERIENCE</h1>
<h1 className='text-[2rem] text-purple-500'>WORK EXPERIENCE</h1>
<h1 className='text-[2rem] text-purple-500'>WORK EXPERIENCE</h1>
<h1 className='text-[2rem] text-purple-500'>WORK EXPERIENCE</h1>
<h1 className='text-[2rem] text-purple-500'>WORK EXPERIENCE</h1>
<h1 className='text-[2rem] text-purple-500'>WORK EXPERIENCE</h1>
<h1 className='text-[2rem] text-purple-500'>WORK EXPERIENCE</h1>
<h1 className='text-[2rem] text-purple-500'>WORK EXPERIENCE</h1>


</motion.div>
<motion.div style={y4style} className='h-full relative'>

<h1 className='text-[2rem] text-purple-500'>WORK EXPERIENCE</h1>
<h1 className='text-[2rem] text-purple-500'>WORK EXPERIENCE</h1>
<h1 className='text-[2rem] text-purple-500'>WORK EXPERIENCE</h1>
<h1 className='text-[2rem] text-purple-500'>WORK EXPERIENCE</h1>
<h1 className='text-[2rem] text-purple-500'>WORK EXPERIENCE</h1>
<h1 className='text-[2rem] text-purple-500'>WORK EXPERIENCE</h1>
<h1 className='text-[2rem] text-purple-500'>WORK EXPERIENCE</h1>
<h1 className='text-[2rem] text-purple-500'>WORK EXPERIENCE</h1>
<h1 className='text-[2rem] text-purple-500'>WORK EXPERIENCE</h1>
<h1 className='text-[2rem] text-purple-500'>WORK EXPERIENCE</h1>
<h1 className='text-[2rem] text-white'>WORK EXPERIENCE</h1>
<h1 className='text-[2rem] text-purple-500'>WORK EXPERIENCE</h1>
<h1 className='text-[2rem] text-purple-500'>WORK EXPERIENCE</h1>
<h1 className='text-[2rem] text-purple-500'>WORK EXPERIENCE</h1>
<h1 className='text-[2rem] text-purple-500'>WORK EXPERIENCE</h1>
<h1 className='text-[2rem] text-purple-500'>WORK EXPERIENCE</h1>
<h1 className='text-[2rem] text-purple-500'>WORK EXPERIENCE</h1>
<h1 className='text-[2rem] text-purple-500'>WORK EXPERIENCE</h1>
<h1 className='text-[2rem] text-purple-500'>WORK EXPERIENCE</h1>
<h1 className='text-[2rem] text-purple-500'>WORK EXPERIENCE</h1>
<h1 className='text-[2rem] text-purple-500'>WORK EXPERIENCE</h1>


</motion.div>
        </div>
  )
}

export default WorkExp