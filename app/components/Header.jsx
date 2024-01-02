"use client";

import React, { useEffect, useState } from 'react';
import { FaTimes, FaBars } from 'react-icons/fa';
import { IoIosArrowForward } from 'react-icons/io';
import Image from 'next/image';

const Header = () => {

  const [isNavOpen, setIsNavOpen] = useState(false);


  useEffect(() => {
    const toggleNav = () => {
      window.innerWidth < 768 ? setIsNavOpen(false) : setIsNavOpen(true)
    };
  
    window.addEventListener('resize', toggleNav);
  }, []);

  return (
    <header className='fixed z-50 top-0 left-0 flex justify-between items-center w-full h-16 px-6 bg-ccOffBlack md:h-20'>

      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-2 py-2 w-full">
          <Image 
            src="/bryan2.png"
            alt="Bryan Fink, Developer and designer"
            width={40}
            height={40}
            className="w-10 h-10 object-cover rounded-full border-2 border-pink-600 drop-shadow-lg opacity-50"
          />
          <p className="text-xl tracking-tight text-ccOffWhite font-medium md:text-lg">Bryan Fink</p>
        </div>

        <button 
          className="flex justify-center text-ccOffWhite hover:text-ccHighlight hover:scale-110 md:hidden" 
          onClick={()=> setIsNavOpen(!isNavOpen)} 
          aria-label="Toggle Navigation"
        >
            <span className='flex justify-end text-2xl'>
              {isNavOpen ? <FaTimes /> : <FaBars />}
            </span>
        </button>
      </div>


      {isNavOpen && (
        <nav className="fixed top-14 right-0 bottom-0 left-0 z-50 w-full h-full flex flex-col gap-12 pt-10 p-6 bg-ccOffBlack md:flex-row md:gap-8 md:static md:h-auto md:w-auto md:p-0">
          <a href={"/"}  onClick={() => setIsNavOpen(false)} className="flex justify-between items-center w-full text-2xl text-ccOffWhite font-semibold md:text-sm">
            Home
            <IoIosArrowForward className="md:hidden"/>
          </a>
          <a href={"/#about"}  onClick={() => setIsNavOpen(false)} className="flex justify-between items-center w-full text-2xl text-ccOffWhite font-semibold md:text-sm">
            About
            <IoIosArrowForward className="md:hidden"/>
          </a>
          <a href={"/#work"}  onClick={() => setIsNavOpen(false)} className="flex justify-between items-center w-full text-2xl text-ccOffWhite font-semibold md:text-sm">
            Work
            <IoIosArrowForward className="md:hidden"/>
          </a>
          <a href={"/#testimonials"}  onClick={() => setIsNavOpen(false)} className="flex justify-between items-center w-full text-2xl text-ccOffWhite font-semibold md:text-sm">
            Testimonials
            <IoIosArrowForward className="md:hidden"/>
          </a>
          <a href={"#contact"}  onClick={() => setIsNavOpen(false)} className="flex w-full h-16 justify-center items-center bg-ccHighlight text-white rounded-md text-2xl text-ccOffWhite font-semibold md:text-sm md:px-3 md:h-8">
            Contact
          </a>
        </nav>
      )}
    </header>
  )
}

export default Header