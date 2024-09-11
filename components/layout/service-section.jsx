import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ImageCard from '@/components/ui/ImageCard';
import { v4 } from 'uuid';


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

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className='flex flex-col items-center pl-2 pr-2'>
      <h2 className=' font-bold text-3xl text-center md:text-left'>Check out Some of the awesome Cuts we  have made for our clients!</h2>
      <div className="container mx-auto px-4 pt-9">
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        removeArrowOnDeviceType={['tablet', 'mobile']}
        itemClass="carousel-item-padding-40-px"
      >
        {slides.map((slide) => (
          <ImageCard imageSource={`/Images/slides/${slide}`} key={v4()} />
        ))}
      </Carousel> 
      </div>  
      </div>
  )
}
