import React from 'react'
import Image from 'next/image'
import codeninjas from '../../public/CodeNinjasLogotStacked_White.svg'
import codeninjas1 from '../../../public/CodeNinjasLogotStacked.svg'
import codeninjas2 from '../../../public/CodeNinjasLogoHorizontal_White.svg'
import dges from '../../public/dges.svg'

import { Lexend_Deca } from 'next/font/google'

const lexendDeca = Lexend_Deca({subsets: ['latin']})

type Props = {}

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

const WorkCarousel = (props: Props) => {
  return (
    <div className='sm:hidden '>
        <div className="gallery">
            <div className="centd">
                <div className={' h-full w-full flex flex-col items-center p-[10%] gap-1'}>
                <Image className='' src={codeninjas} width={200} height={200} alt='codeninjas logo'/>
                    <ul className=''>
                    {respList[4].map((resp, index) => (
                        <li key={index} className='text-start typewriter py-3'> {resp}</li>
                    ))}

                    </ul>
                </div>

                <h1 className={`${lexendDeca.className} text-start px-[10%] text-purple-500`}>
                            <div id='centerD'>Center Director <br /> <span className='text-2xl '>Code Ninjas - Port Coquitlam, BC</span><br/> <span className='text-sm'> 01/2024 to current</span> </div>
                            </h1>
            </div>

            <div className="leadt">
            <div className={' h-full w-full flex flex-col items-center p-[10%] gap-1'}>
                <Image className='' src={codeninjas} width={200} height={200} alt='codeninjas logo'/>
                    <ul className=''>
                    {respList[4].map((resp, index) => (
                        <li key={index} className='text-start typewriter py-3'> {resp}</li>
                    ))}

                    </ul>
                </div>

                <h1 className={`${lexendDeca.className} text-start px-[10%] text-purple-500`}>
                            <div id='centerD'>Lead Teacher - JavaScript <br /> <span className='text-2xl '>Code Ninjas - Port Coquitlam, BC</span><br/> <span className='text-sm'> 02/2023 to 12/2023</span> </div>
                            </h1>
            </div>
            <div className="teachp">
            <div className={' h-full w-full flex flex-col items-center p-[10%] gap-1'}>
                <Image className='' src={codeninjas} width={200} height={200} alt='codeninjas logo'/>
                    <ul className=''>
                    {respList[4].map((resp, index) => (
                        <li key={index} className='text-start typewriter py-3'> {resp}</li>
                    ))}

                    </ul>
                </div>

                <h1 className={`${lexendDeca.className} text-start px-[10%] text-purple-500`}>
                            <div id='centerD'>Teacher (Part-Time)  <br /> <span className='text-2xl '>Code Ninjas - Port Coquitlam, BC</span><br/> <span className='text-sm'> 01/2022 to 02/2023</span> </div>
                            </h1>
            </div>
            <div className="webd">
            <div className={' h-full w-full flex flex-col items-center p-[10%] gap-1'}>
                <Image className='' src={dges} width={600} height={600} alt='dges logo'/>
                    <ul className=''>
                    {respList[4].map((resp, index) => (
                        <li key={index} className='text-start typewriter py-3'> {resp}</li>
                    ))}

                    </ul>
                </div>

                <h1 className={`${lexendDeca.className} text-start px-[10%] text-purple-500`}>
                            <div id='webD'>Web Designer <br /> <span className='text-2xl '>Destination Global Educational Services - Burnaby, BC</span> <br/><span className='text-sm'> 03/2019 to 01/2020</span></div>
                            </h1>
            
            </div>
        </div>
    </div>
  )
}

export default WorkCarousel