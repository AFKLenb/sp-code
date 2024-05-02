
import BannerS from '@/components/Singles/Banner/BannerS'
import Content from '@/components/Singles/Content/Content'
import Title from '@/components/Singles/Title/Title'
import React from 'react'

export default function singleProject({ params }) {
  return (
    <>
      <BannerS getBanner={'/assets/image/projects/1.jpg'} />
      <Title>{params.slug}</Title>
      <Content getContent={'Привет, Мир! Я Олег! Привет, Мир! Я Олег! Привет, Мир! Я Олег! Привет, Мир! Я Олег!'} />
    </>
  )
}