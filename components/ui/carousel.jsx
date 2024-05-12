import React, { useState } from 'react';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';

const Carousel = (props) => {
  const [current, setCurrent] = useState(0);
  const { slides } = props;

  const previousSlide = () => {
    if (current === 0) setCurrent(slides.length - 1);
    else setCurrent(current - 1);
  };

  const nextSlide = () => {
    if (current === slides.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };

  return (
    <div className="relative mx-auto max-w-md overflow-hidden rounded-2xl">
      <div className="flex overflow-hidden transition-transform duration-300">
        {slides.map((slide, index) => (
          <div
            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
            key={index}
            className={`w-full${index === current ? '' : ' hidden'}`}
          >
            <img
              src={`/images/slides/slide1.jpg`}
              alt="slide"
              className="w-full md:h-px sm:h-96  object-cover"
            />
           </div>
         ))}
       </div>
       <div className="flex justify-between absolute top-0 h-full w-full items-center">
         <button type="button" onClick={previousSlide}>
           <FaArrowCircleLeft size={50} />
         </button>
         <button type="button" onClick={nextSlide}>
           <FaArrowCircleRight size={50} />
         </button>
       </div>
     </div>
  );
};

export default Carousel;
