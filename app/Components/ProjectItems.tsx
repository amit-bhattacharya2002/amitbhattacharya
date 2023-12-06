import React, { useState } from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import projects from '@/app/Content/projects'
import Image from 'next/image';
import { FaLaptop } from "react-icons/fa";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { Montserrat, Roboto, Lexend_Deca} from 'next/font/google'

const lexendDeca = Lexend_Deca({subsets: ['latin']})

import Link from 'next/link';

interface Projects{
    id: number;
    name: string;
    description: string;
    url: string;
    images: string[];
}
const ProjectItems = ({projects}: Projects | any) => {
  const [mobView, setMobileClicked] = useState(false)

  const handleMobClick = () => {
    setMobileClicked(!mobView)
  }
  return (
    <div className={`${lexendDeca.className} flex items-center flex-col md:flex-row`}>


            <div className='w-[50%]'>
              <Link href={`${projects.url}`} target='_blank' className=''>
                  <Image
                  src={mobView ? projects.images[1] : projects.images[0]}
                  width={mobView ? 800 : 1500}
                  height={mobView ? 700 : 1000}
                  alt={`${projects.name}`}
                  >
                  </Image>
              
              </Link>

              <button onClick={e => (handleMobClick())}>{mobView? <div className='flex gap-2 items-center'><FaLaptop/> <h1>Laptop View</h1></div> : <div className='flex gap-2 items-center'><MdOutlinePhoneAndroid/> Mobile View</div>} </button>
            </div>

        <div className='text-start flex flex-col gap-6 w-[50%]'>
            <h1 className='text-xl md:text-4xl'>{projects.name}</h1>
            <p>{projects.description}</p>
        </div>
    </div>
  )
}

export default ProjectItems