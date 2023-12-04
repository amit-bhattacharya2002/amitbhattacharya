import React from 'react'
import { useEffect, useRef } from 'react'
import {motion, useInView, useAnimation} from 'framer-motion'

interface Props{
    children: React.ReactNode,
    x : string,
    width: string

}


const Reveal = ({children , x, width} : Props) => {

    const ref = useRef(null)
    const isInView = useInView(ref)
    const mainControls = useAnimation()
    useEffect(() =>{
        if(isInView){
            console.log(isInView)
            mainControls.start("visible")
        }

    }, [isInView])
  return (
    <div  ref={ref} style={{position: "relative", width:`${width}`}}>
        <motion.div
        variants={{
            hidden: {opacity : 0, x , y: 0},
            visible: {opacity: 1, x: 0, y: 0}
        }}
        initial="hidden"
        animate={mainControls}
        transition={{duration: 0.5, delay: 0.25}}
        >{children}</motion.div>
    </div>
  )
}

export default Reveal