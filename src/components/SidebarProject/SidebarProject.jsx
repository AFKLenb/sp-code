import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const SidebarProject = ({ getProject, className = null }) => {
  return (
    <div className={className + ' w-full bg-white rounded-lg p-4 shadow-sm'}>
      <div className="w-full mb-4 aspect-square rounded-lg relative overflow-hidden">
        <Image fill src={'/assets/image/projects/1.jpg'} loading='lazy' alt='Картинка популярного мужика' className='w-full h-full object-cover object-center' />
      </div>
      <h3 className=' text-xl text-stone-900'>Зачем ты зашел на этот сайт?</h3>
      <ul className='w-full inline-flex gap-2 mb-2 '>
        {[1,2,3,4,5,6,7].map((item, index) => {
            return (
                <li key={index} className=" text-sm text-stone-500 ">#JS</li>
            );
        })}
      </ul>
      <Link href={''} className='w-full py-3 rounded-lg bg-blue-500 text-white font-medium block text-center ' >Подробнее</Link>
    </div>
  )
}

export default SidebarProject
