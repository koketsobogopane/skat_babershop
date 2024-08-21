import React from 'react'
import Carousel from '../ui/ImageCard'

export default function ServiceSection() {
  const slides = [
    'slide1.jpg',
    'slide2.jpg',
    'slide3.jpg',
    'slide4.jpg',
    'slide5.jpg',
    'slide6.jpg',
    'slide7.jpg',
    'slide8.jpg',
    'slide9.jpg',
    'slide10.jpg'
  ]
  return (
    <div className='flex flex-col items-center pl-2 pr-2'>
      <h2 className=' font-bold text-3xl text-center md:text-left'>Check out Some of the awesome Cuts we  have made for our clients!</h2>
       <div className=' w-full m-auto p-11 h-5'>
       <Carousel slides={slides}/>
       </div>   
      </div>
  )
}
