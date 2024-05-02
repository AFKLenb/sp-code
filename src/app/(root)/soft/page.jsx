import Cards from '@/components/Cards/Cards'
import Heading from '@/components/Ui/Heading/Heading'
import React from 'react'

export default function soft() {
  return (
    <>
        <section className='w-full '>
            <div className="container mx-auto">
                <Heading text='Софт для мужиков' className={'mb-5'} />
                <Cards getData={''} />
                <button className="w-full py-5 border border-blue-500 text-blue-500 font-medium rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300">Показать больше</button>
            </div>
        </section>
    </>
  )
}
