"use client";

import React, { useState, useEffect } from 'react';
import { FaTimes, FaBars } from 'react-icons/fa';
import { IoIosArrowForward } from 'react-icons/io';
import Image from 'next/image';

const Header = () => {

  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen)
  }

  useEffect(() => {
    if (isNavOpen) {
      document.body.classList.add('disable-scroll');
    } else {
      document.body.classList.remove('disable-scroll');
    }

    // Clean up the effect
    return () => {
      document.body.classList.remove('disable-scroll');
    };
  }, [isNavOpen]);

  return (
    <header className={`relative z-[55] w-full md:px-6 md:absolute `}>
      <div className="flex items-center justify-between">
        <button className="flex justify-center w-20 hover:scale-110 md:hidden" onClick={toggleNav} aria-label="Toggle Navigation">
            <span className='flex justify-end text-2xl'>
              {isNavOpen ? <FaTimes /> : <FaBars />}
            </span>
        </button>
        <div className="flex justify-center items-center gap-2 py-2 w-full border-x border-dashed border-gray-300 md:justify-start md:border-none">
          <Image 
            src="/selfie.png"
            alt="Bryan Fink, Developer and designer"
            width={40}
            height={40}
            className="w-10 h-10 object-cover rounded-full border-2 border-pink-600 drop-shadow-lg"
          />
          <p className="text-xl text-ccDarkText font-semibold md:text-lg">Bryan Fink</p>
        </div>
        <div className="w-20 md:hidden"></div>
      </div>

      {isNavOpen && (
        <nav className="absolute drop-shadow-md w-full h-screen flex flex-col gap-10 p-14 border-t-2 border-dashed border-gray-300 bg-white overflow-hidden md:static md:h-10 md:top-0 md:flex-row md:gap-5 md:justify-end">
          <a href={"/"}  onClick={() => setIsNavOpen(false)} className="flex justify-between items-center w-full text-2xl font-semibold hover:text-pink-600 md:w-fit md:p-0 md:gap-1 md:hover:scale-110 md:text-sm md:text-gray-400 md:hover:text-pink-600">
            Home
            <IoIosArrowForward className="md:hidden"/>
          </a>
          <a href={"/#work"}  onClick={() => setIsNavOpen(false)} className="flex justify-between items-center w-full text-2xl font-semibold hover:text-pink-600 md:bg-transparent md:w-fit md:p-0 md:gap-1 md:hover:scale-110 md:text-sm md:text-gray-400 md:hover:text-pink-600">
            Work
            <IoIosArrowForward className="md:hidden"/>
          </a>
          <a href={"/#testimonials"}  onClick={() => setIsNavOpen(false)} className="flex justify-between items-center w-full text-2xl font-semibold hover:text-pink-600 md:bg-transparent md:w-fit md:p-0 md:gap-1 md:hover:scale-110 md:text-sm md:text-gray-400 md:hover:text-pink-600">
            Testimonials
            <IoIosArrowForward className="md:hidden"/>
          </a>
          <a href={"#contact"}  onClick={() => setIsNavOpen(false)} className="flex w-full justify-center bg-black text-white rounded-lg pt-3 pb-4 text-2xl font-semibold hover:bg-pink-600 md:bg-transparent md:w-fit md:p-0 md:gap-1 md:hover:scale-110 md:text-sm md:text-gray-400 md:hover:text-pink-600">
            Contact
          </a>
        </nav>
      )}
    </header>
  )
}

export default Header