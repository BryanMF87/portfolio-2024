"use client";

import React, { useEffect, useState } from 'react';
import { FaTimes, FaBars, FaHome, FaBriefcase, FaInfoCircle, FaEnvelope } from 'react-icons/fa';

const Header = ({pages}) => {

  const getIcon = (title) => {
      let icon;
  
      switch (title) {
        case 'Home':
          return icon = <FaHome />
        case 'Work':
          return icon = <FaBriefcase />
        case 'About':
          return icon = <FaInfoCircle />
        case 'Contact':
          return icon = <FaEnvelope />
        default:
          return null
      }
    };

  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen)
  }

  useEffect(()=> {
    console.log(isNavOpen)
  }, [isNavOpen]);

  return (
    <header className={`fixed flex justify-end top-0 w-full z-20 ${isNavOpen ? 'bg-white' : 'bg-slate-50		'} md:bg-slate-50		 md:px-6`}>
      <button
        className="flex py-4 px-6 hover:scale-110 md:hidden"
        onClick={toggleNav}
        aria-label="Toggle Navigation"
      >
        <span className='w-full text-2xl'>
          {isNavOpen ? <FaTimes /> : <FaBars />}
        </span>
      </button>
      <nav className={`absolute top-10 left-0 drop-shadow-md fixed w-full flex flex-col bg-white ${isNavOpen ? 'h-min p-3' : 'h-0 p-0'} overflow-hidden transition md:static md:h-10 md:top-0 md:flex-row md:gap-5 md:justify-end md:bg-slate-50 md:drop-shadow-none`}>
          {pages.sort((a, b) => {
            const order = ["Home", "Work", "About", "Contact"];
            return order.indexOf(a.title) - order.indexOf(b.title);
          }).map((page) => (
          <a 
            key={page.id} 
            href={`#${page.slug}`} 
            className="flex gap-3 items-center bg-white rounded-md w-full py-3 px-4 font-semibold text-lg hover:bg-slate-100 md:bg-transparent md:w-fit md:p-0 md:gap-1 md:hover:scale-110 md:text-sm md:text-gray-400 md:hover:text-black"
            onClick={() => setIsNavOpen(false)}
          >
            <span className="md:hidden">{getIcon(page.title)}</span>
            {page.title}
          </a>
          ))}
      </nav>
    </header>
  )
}

export default Header