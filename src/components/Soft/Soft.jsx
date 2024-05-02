import Link from 'next/link'
import React from 'react'
import Category from '../Category/Category'
import Cards from '../Cards/Cards'
import Heading from '../Ui/Heading/Heading'
import Projects from '../Projects/Projects'

const Soft = ({ getPost, getCategory }) => {
  return (
    <section className='w-full py-10'>
      <div className="container mx-auto">
        <div className="w-full flex justify-between items-center">
            <Heading text='ТОП ПЕДИКОВ РУНЕТА' />
            <Link href={'/soft'} className='text-blue-500+'>Показать все</Link>
        </div>
        <Category getCategory={getCategory} />
        <Cards getData={getPost} cols={3} />
      </div>
      <Projects getData={''} />
    </section>
  )
}

export default Soft
