import React from 'react';
import logoImage from '../../public/Images/logo/logo1.png';
import Image from 'next/image';

function Footer() {
  return (
    <footer className=" md:flex items-center justify-center bg-gray-100 pl-1 pr-1">
      <div className=" text-black flex flex-col md:flex-row items-center justify-center gap-10 md:gap-96 pt-4 pb-4 md:w-96 md:pr-96 md:pl-96 border-solid border-0 border-t  ">
        <p >
          ©2024 Bogopane Studio. All rights reserved | Designed by
          {' BeastKkDevs '}
        </p>
        <nav>
          <ul className=" flex flex-row gap-4">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
