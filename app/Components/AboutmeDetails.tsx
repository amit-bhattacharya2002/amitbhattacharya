import React from 'react'
import { Lexend_Deca } from 'next/font/google'
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

import { FaLinkedin } from "react-icons/fa6";
import Link from 'next/link'

const lexendDeca = Lexend_Deca({subsets: ['latin']})
type Props = {}

const AboutmeDetails = (props: Props) => {
  return (
    <div className="flex flex-col sm:grid h-screen p-1 sm:p-[5rem] w-screen grid-cols-1 sm:grid-cols-3  sm:grid-rows-5 gap-4">
        <div className={`col-span-1 sm:col-span-2 row-span-2  border border-r-[5px] border-b-[5px]  border-slate-700 font-mono text-sm sm:text-4xl hover:border-b-purple-500 hover:border-r-purple-500 transition-colors duration-300 pt-4 pl-4 text-center sm:text-start`}>Amit Bhattacharya
        <ul className={`text-[0.5rem] sm:text-sm mt-3 list-disc ml-3 text-start`}>
            <li>Experienced professional in educational coding instruction and web development.</li>
            <li>Proven success in driving team productivity and revenue growth.</li>
            <li>Accomplished Full Stack Web Developer with expertise in Next JS, Node JS, and graphic design tools.</li>
            <li>Proficient Game Developer with skills in Unity 3D and Roblox Studio.</li>
        </ul>
        </div>

        <div className= {`row-span-2 col-start-3 border border-r-[5px] border-b-[5px] hover:border-b-purple-500 hover:border-r-purple-500 transition-colors duration-300 border-slate-700 ${lexendDeca.className}`}>
        
        {/* className='mt-4' */}
        
        <h1 className="text-purple-500 pl-4 pt-4 sm:text-lg text-sm text-center sm:text-start">EDUCATION</h1>

        <div className='font-mono p-4 flex flex-col sm:text-sm text-[0.5rem]'>
                <span>Douglas College - New Westminster, BC</span>
                <span className='mt-4'>Computing Studies and Information Systems - CSIS Diploma, 12/2022</span>
            </div>

        </div>
        <div className={`row-span-3 row-start-3 border border-r-[5px] border-b-[5px] hover:border-b-purple-500 hover:border-r-purple-500 transition-colors duration-300 border-slate-700 ${lexendDeca.className}`}>
        <h1 className="text-purple-500 pl-4 pt-4 sm:text-lg text-sm text-center sm:text-start">SKILLS</h1>
        <ul className='text-[0.45rem] sm:text-sm p-4 pt-0 font-mono' >
            <li className='mt-2 sm:mt-4'>Front End: Next JS, React JS, TypeScript, JavaScript, Tailwind CSS, Framer Motion.</li>
            <li className='mt-2 sm:mt-4'>Backend: Express JS, Next JS, Node JS, Java, C#, Next Auth, Clerk.</li>
            <li className='mt-2 sm:mt-4'>Database: MongoDB, PostgreSQL, SQLite, Prisma ORM, PlanetScale Database, Railway.app.</li>
            <li className='mt-2 sm:mt-4'>Game Development: Unity Engine, Roblox Studio, Microsoft MakeCode, Scratch.</li>
        </ul>
        </div>
        <div className={`row-span-2 row-start-3 border border-r-[5px] border-b-[5px] hover:border-b-purple-500 hover:border-r-purple-500 transition-colors duration-300 border-slate-700 ${lexendDeca.className}`}>

            
            
            
        <h1 className='text-purple-500 pl-4 pt-4 sm:text-lg text-sm text-center sm:text-start'>
            ACCOMPLISHMENTS
            </h1>
            
            <ul className='text-[0.45rem] sm:text-sm p-4 pt-0 font-mono'>
                <li className='mt-4'>Finalist - Tri Cities Chamber of Commerce Business of the Year 2023 (Code Ninjas, Port Coquitlam)</li>
                <li className='mt-4'>Honor Roll recipient (Douglas College)</li>
            </ul>
            
        
        </div>
        <div className={`sm:block hidden row-span-3 row-start-3 border border-r-[5px] border-b-[5px] hover:border-b-purple-500 hover:border-r-purple-500 transition-colors duration-300 border-slate-700 ${lexendDeca.className}`}>
        <h1 className='text-purple-500 pl-4 pt-4 sm:text-lg text-[0.5rem]'>CENTER DIRECTOR at CODE NINJAS</h1>
        <ul className='text-[0.45rem] sm:text-sm p-4 pt-0 font-mono'>
            <li className='mt-4'>Managed lead response and engagement, enrolled 50+ new customers since January 2024.</li>
            <li className='mt-4'>Oversaw daily operations, managed a team of instructors, maintained high educational standards.</li>
            <li className='mt-4'>Primary contact for parents and management, enhancing communication and customer satisfaction.</li>
        </ul>
        </div>


        <div className={`col-start-2 row-start-5 border border-r-[5px] border-b-[5px] hover:border-b-purple-500 hover:border-r-purple-500 transition-colors duration-300 border-slate-700 ${lexendDeca.className}`}>
            
            <div>
                <h1 className='text-sm sm:text-lg text-purple-500 pl-4 pt-4 text-center sm:text-start'>CONTACT</h1>
                <div className="flex flex-row w-full justify-center sm:justify-start gap-5 p-4">
                    <Link href={"https://github.com/amit-bhattacharya2002"} target='_blank' >
                        <FaGithub className={"hover:text-purple-500 transition-colors duration-200"}/> 

                    </Link>

                    <Link href={"mailto:amit.bhattacharya2002@gmail.com"} target='_blank' >
                    <MdOutlineEmail className={"hover:text-purple-500 transition-colors duration-200"}/>
                    </Link>
                    <Link href={"https://linkedin.com/in/amit-bhattacharya-551aa6202"} target='_blank' >

                        <FaLinkedin className={"hover:text-purple-500 transition-colors duration-200"}/>

                    </Link>
                </div>

            </div>
        </div>
    </div>
    
  )
}

export default AboutmeDetails