import classNames from 'classnames';
import { useInView } from 'framer-motion';
import React, { useEffect, useRef } from 'react'
import { useExperienceStore } from '../Context/store';


type Props = {
    children: React.ReactNode;
    id: string;
}

const ExpComp = ({children, id }: Props) => {
    const ref = useRef<HTMLParagraphElement>(null)
    const isInView = useInView(ref, {margin:"-50% 0px -50% 0px"})
    const setInViewExperience = useExperienceStore((state : any) => state.setInViewExperience)
    const inViewExperience = useExperienceStore((state: any) => state.inViewExperience)
    useEffect(() => {
        if(isInView) setInViewExperience(id)
        if(!isInView && inViewExperience === id) setInViewExperience(null)
    }, [isInView, id, setInViewExperience, inViewExperience])
    console.log(isInView)
  return (
    <p ref={ref} className={classNames("py-16 text-5xl transition-colors", isInView ? "text-purple-500" : "text-gray-700")}>{children}</p>
  )
}

export default ExpComp