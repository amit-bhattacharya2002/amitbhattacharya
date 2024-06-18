import classNames from 'classnames';
import React from 'react'
import { useExperienceStore } from '../Context/store';
import { inView } from 'framer-motion';
import Image from 'next/image';
import TextCarousel from '../TextCarousel';

import codeninjas from '../../../public/CodeNinjasLogotStacked_White.svg'
import codeninjas1 from '../../../public/CodeNinjasLogotStacked.svg'
import codeninjas2 from '../../../public/CodeNinjasLogoHorizontal_White.svg'
import dges from '../../../public/dges.svg'

type Props = {
    style: string,
    children : React.ReactNode;
} & CardProps
type CardProps = {
    id: string;
}


const respList = {
    1: [
        'Led advanced JavaScript and Microsoft MakeCode Arcade workshops with industry-standard curriculum.',
        'Fostered an inclusive, engaging learning environment for students aged 7-14.',
        'Monitored student progress and collaborated on refining educational content.',
        'Specialized in teaching 3D game development with Unity 3D and Roblox Studio.'
    ],
    2: [
        "Promoted to Lead Teacher, leading a team to achieve high education standards.",
        "Mentored educators and implemented growth strategies to enhance performance.",
        "Chaired meetings to align teaching methods and coordinate initiatives.",
        "Conducted workshops to improve instructors' skills and center success."
    ],
    3:[
        "Efficiently manage lead response and engagement to increase potential customer interest.",
        "Successfully pitched and promoted educational programs, enrolling over 46 new customers since January 2024.",
        "Oversee day-to-day operations, manage instructors, and maintain high educational quality.",
        "Serve as the primary contact for parents and management, enhancing communication and customer satisfaction."
    ],
    4:[
        "Designed and deployed websites and portals to enhance DGES's online presence.",
        "Drove brand identity and cross-platform collaborations, increasing web traffic.",
        "Identified and resolved website issues, ensuring optimal performance and strong user support.",
        "Managed web development planning, aligning technology with business objectives."
    ]
}
export const ExpCardComp = ({children, style, id}: Props) => {
    
    const inViewExperience = useExperienceStore((state: any) => state.inViewExperience)
  return (
    <div className={classNames('absolute inset-0 h-full w-full rounded-2xl transition-opacity   duration-200 opacity-0', style, inViewExperience === id ? "opacity-100" : "opacity-0")}>{children}</div>
  )
}
// transition-opacity

export const TeacherPartTimeCard = ({id} : CardProps) => {
    return(
        // bg-purple-500
        <ExpCardComp id={id} style='flex flex-col items-center py-[20%] gap-5'>
            <Image src={codeninjas} width={200} height={200} alt='codeninjas logo'/>
            
            <ul className=''>
            {respList[1].map((resp, index) => (
                <li key={index} className='text-start typewriter py-3'> {resp}</li>
            ))}

            </ul>

        </ExpCardComp>
    )
}

export const LeadTeacherCard = ({id} : CardProps) => {
    return(
        <ExpCardComp id={id}  style='flex flex-col items-center py-[20%] gap-5'>
            <Image src={codeninjas} width={200} height={200} alt='codeninjas logo'/>
            
            <ul className=''>
            {respList[2].map((resp, index) => (
                <li key={index} className='text-start typewriter py-3'> {resp}</li>
            ))}

            </ul>

        </ExpCardComp>
    )
}
export const CenterDirectorCard = ({id} : CardProps) => {
    return(
        <ExpCardComp id={id}  style='flex flex-col items-center py-[20%] gap-5'>
            <Image src={codeninjas} width={200} height={200} alt='codeninjas logo'/>
            
            <ul className=''>
            {respList[3].map((resp, index) => (
                <li key={index} className='text-start typewriter py-3'> {resp}</li>
            ))}

            </ul>
        </ExpCardComp>
    )
}

export const WebDesignerCard = ({id} : CardProps) => {
    return(
        <ExpCardComp id={id}  style='flex flex-col items-center py-[20%] gap-5'>
            <Image src={dges} width={600} height={600} className='mx-auto' alt='dges logo'/>
            
            <ul className=''>
            {respList[4].map((resp, index) => (
                <li key={index} className='text-start typewriter py-3'> {resp}</li>
            ))}

            </ul>
        </ExpCardComp>
    )
}