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
    <div className=" overflow-hidden relative ">
      <div
        className={' flex transition ease-out duration-40 '}
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {slides.map((slide) => {
          return (
            <img src={`/images/slides/${slide}`} key={slide} alt="slide" />
          );
        })}
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
