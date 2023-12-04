import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import projects from '@/app/Content/projects'
import Image from 'next/image';
import Link from 'next/link';

interface Projects{
    id: number;
    name: string;
    description: string;
    url: string;
    images: string[];
}
const ProjectItems = ({projects}: Projects) => {
  return (
    <div className='flex items-center'>


            <a href={`${projects.url}`} target='_blank' className=''>
                <Image
                src={projects.images[0]}
                width={1500}
                height={1000}
                alt={`${projects.name}`}
                >
                </Image>
                
            </a>


        <div className='text-start flex flex-col gap-6'>
            <h1 className='text-4xl'>{projects.name}</h1>
            <p>{projects.description}</p>
        </div>
    </div>
  )
}

export default ProjectItems