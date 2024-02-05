
import React from 'react';

const Carousel = () => {
  
  const { slides } = props
  return (
    <div>
      <div>
        {
          slides.map((slide)=> {
            return <img src='slide' alt='slide' />
          })
        }
      </div>
    </div>
  );
};

export default Carousel;