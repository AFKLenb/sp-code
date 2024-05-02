import Link from 'next/link'
import React from 'react'

const Cards = ( { getData, cols = 4 } ) => {
  return (
    <div className={`w-full py-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6`}>
      <article className="w-full h-full relative pt-[88px]">
        <div className=" absolute top-0 left-1/2 -translate-x-1/2 w-[calc(100%_-_24px)] h-[166px] rounded-lg bg-black"></div>
        <div className="w-full bg-white shadow-sm shadow-blue-50  rounded-lg pt-24 pr-5 pb-5 pl-5 flex flex-col gap-2">
            <span className='text-stone-400 text-sm'>Сочные Ишаки</span>
            <Link className=' inline-flex' href={'/'}>
                <h3 className='text-xl text-stone-950 font-semibold'>Олег Лисицин</h3>
            </Link>
        </div>
      </article>
    </div>
  )
}

export default Cards
