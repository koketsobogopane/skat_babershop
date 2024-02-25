import React from 'react';
import Image from 'next/image';
import bannerImg from '../../public/Images/banner/Banner.png'

export default function Banner() {
  return (
    <div className=" flex justify-center items-center ml-5 mr-5">
      <Image
        className="  rounded-xl"
        priority
        // src="/images/banner/Banner.png"
        src={bannerImg}
        alt="banner"
        width={1200}
        height={600}
      />
    </div>
  );
}
