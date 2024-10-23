import DescriptiveCard from '@/components/ui/DescriptiveCard';
import ImageCard from '@/components/ui/ImageCard';
import React, {useState} from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { v4 } from 'uuid';
import image from '../public/Images/logo/Gorge-Logo.jpg'
import ProductCard from '@/components/ui/ProductCard';
import { ButtonPrimary } from '@/components/ui/ButtonPrimary';
import { FaShoppingCart } from 'react-icons/fa';
import Rating from 'react-rating';
import { GiHairStrands } from "react-icons/gi";
import { FaRegStar, FaStar } from 'react-icons/fa6';
import CutCard from '@/components/ui/CutCard';
import DateTimePicker from 'react-datetime-picker';
import 'react-datetime-picker/dist/DateTimePicker.css';
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';


const test = () => {
  const [value, onChange] = useState(new Date());

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
    'slide10.jpg',
  ];

  
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

  const dummyDescription = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id ratione quo optio nesciunt unde quasi repellendus libero inventore, facilis nobis saepe deleniti sapiente laborum delectus architecto illum, itaque tenetur. Nostrum?"
  return (
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
        <br />
        <DescriptiveCard image={image} description={dummyDescription} contentTitle={"Content Title"} />
        <br />
        <br />
        <ButtonPrimary title={"Add To Cart"} icon={<FaShoppingCart/>} />
        <br />
        <br />
        <ProductCard />
        <br />
        <br />
        <Rating emptySymbol={<FaRegStar size={25} />} fullSymbol={<FaStar size={25}/>} />
        <br />
        <br />
        <br />
        <br />
        <div className="w-[50%]">
          <CutCard />
        </div>
        <br />
        <br />
        <br />
        <br />
        <div className="grid xl:grid-cols-5 md:grid-cols-4 grid-cols-1 gap-4">
        <CutCard />
        <CutCard />
        <CutCard />
        <CutCard />
        <CutCard />
        <CutCard />
        <CutCard />
        <CutCard />
        <CutCard />
        </div>
        <br />
        <br />
        {/* <DateTimePicker onChange={onChange} value={value} /> */}
        <br />
        <br />

    </div>
  );
};

export default test;
