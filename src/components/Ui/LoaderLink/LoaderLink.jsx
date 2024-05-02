"use client";
import React, { useState } from 'react'
import Loader from '../Loader/Loader';
import Link from 'next/link';
import { useRouter } from 'next/navigation';


const LoaderLink = ({ href }) => {
    const [isLoader, setIsLoader] = useState(false);
    const router = useRouter();
    const handleClick = () => {
        setIsLoader(true);
        router.push(href);
    }
  return (
    <div>
      <Link href={href} onClick={handleClick} className='hover:underline text-blue-500' >
      {isLoader? + <>'Смотреть подробнее' <Loader/> </>: 'Смотреть подробнее'}</Link>
    </div>
  )
}

export default LoaderLink
