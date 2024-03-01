import React from 'react';
import logoImage from '../../public/Images/logo/logo1.png';
import Image from 'next/image';

function Footer() {
  return (
    <footer className=" flex items-center justify-center">
      <div className=" text-black flex items-center justify-center gap-96 pt-4 pb-4 w-96 pr-96 pl-96 border-solid border-0 border-t  ">
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
