import React, { useState } from 'react';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';

const ImageCard = ({imageSource}) => {

  return (
          <div
            className="p-4"
          >
            <img
              src={`${imageSource}`}
              alt="slide"
              className="w-full h-96  object-cover rounded-xl"
            />
           </div>
  );
};

export default ImageCard;
