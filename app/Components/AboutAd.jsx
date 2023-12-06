"use client"
import React, {useState, useTransition} from 'react'
import Image from 'next/image'
import TabButton from './tabButton'

const TAB_DATA = [
    {
        title:"Skills",
        id:"skills",
        content:(
            <ul className='list-disc pl-2'>
                <li>Next JS 14</li>
                <li>Express</li>
                <li>Prisma</li>
                <li>React JS</li>
                <li>MongoDB</li>
                <li>Java</li>
                <li>Framer Motion</li>

            </ul>
        )
    },
    {
        title:"Experience",
        id:"experience",
        content:(
            <ul className='list-disc pl-2'>
                <li>Coding Teacher - Code Ninjas (2022)</li>
                <li>Web Designer - Destination Global Educational Services (2019 - 2021)</li>

            </ul>
        )
    },
    {
        title:"Education",
        id:"education",
        content:(
            <ul className='list-disc pl-2'>
                <li>Diploma in Computing Studies and Information Systems (CSIS) <br></br>Douglas College, New Westminster, BC <br></br>Graduated - 2023</li>
            </ul>
        )
    }
]

const AboutAd = () => {
    const [tab, setTab] = useState('skills')
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id)
        })
    }
  return (
    <section id='aboutSection'><div className='md:grid gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
        
    
            <div className="flex flex-col">
                <div className='text-start m-auto'>
                    <TabButton selectTab={() => handleTabChange("skills")} active={tab ==="skills"}> Skills </TabButton>
                    
                    <TabButton selectTab={() => handleTabChange("experience")} active={tab ==="experience"} > Experience </TabButton>
                    <TabButton selectTab={() => handleTabChange("education")} active={tab ==="education"} > Education </TabButton>
                    
                    
                </div>

            

             <div className="mt-8">
                {TAB_DATA.find((t) => t.id === tab).content}
            </div>
        </div>
    </div></section>
  )
}

export default AboutAd