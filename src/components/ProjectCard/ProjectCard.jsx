"use client";
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import Loader from '../Ui/Loader/Loader';
import LoaderLink from '../Ui/LoaderLink/LoaderLink';
const ProjectCard = ({ getData }) => {
    const [isLoader, setIsLoader] = useState(false);
    const handClick = () => {
        setIsLoader(true);
        window.location.href = href;
    }
  return (
    <div className=' w-full grid grid-cols-3 gap-5'>
        {[1,2,3,4,5,6,7,8,9].map((item, index) =>{
            return (
                <article key={index} className="w-full h-full rounded-md p-5 bg-white">
                    <div className="relative w-full h-[230px] rounded-md overflow-hidden mb-7">
                        <div className="absolute top-1 left-1/2 -translate-x-1/2 py-1 px-2 rounded-full z-[99] bg-black">
                            <span className='text-xs font-medium text-gray-300 cursor-default'>HTMl&CSS</span>
                        </div>
                        <Image loading='lazy' src={'/assets/image/projects/1.jpg'} fill className='w-full h-full object-cover object-center' alt='Изображение проекта' />
                    </div>
                    <h3 className="text-lg font-medium mb-1">Ишаки атакуют Краснослободск</h3>
                <LoaderLink href={'/projects/' + 'web-project'}/>
                </article>
            );
        })}
    </div>
  )
}

export default ProjectCard
