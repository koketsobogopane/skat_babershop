import React from 'react';
import Image from 'next/image';

export default function Banner() {
  return (
    <div className=" flex justify-center items-center ml-5 mr-5">
      <Image
        className="  rounded-xl"
        priority
        src="/images/banner/Banner.png"
        alt="banner"
        width={1200}
        height={600}
      />
    </div>
  );
}
