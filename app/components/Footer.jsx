import React from 'react';
import { GrLinkedinOption } from 'react-icons/gr';
import { FaInstagram, FaGithub } from 'react-icons/fa';
import FAQ from '../components/FAQ';

const Footer = () => {
  return (
      <section id="contact"  className="relative px-6 bg-ccOffBlack text-ccOffWhite sm:px-20 lg:px-40">
        
          <p className="absolute top-80 -left-4 shrink-0 transform rotate-90 text-ccGray font-bold tracking-tight hidden md:block md:top-[15rem] md:text-4xl lg:text-5xl lg:-left-[2.25rem]">Contact</p>
          <div className="py-20 md:flex md:gap-10 xl:gap-14">
            <FAQ />
            <div className="mt-20 text-ccOffWhite text-center md:text-left md:mt-0 md:order-1 md:w-1/2">
              <h2 className="font-bold text-6xl leading-tight lg:text-7xl">Ready? Set, <span className="text-ccHighlight">Go!</span></h2>
                <p className="mt-4 mb-8">Thanks for visiting my website. I am currently open to freelance projects and full-time work. Please use the button below to reach me. I will respond back ASAP!</p>
                <div className="flex flex-col gap-6 md:flex-row">
                  <a 
                    href="mailto:bmfink87@gmail.com" 
                    target='_blank' 
                    rel='noopener' 
                    className="bg-ccHighlight text-white text-center font-medium py-3 px-6 bg-ccHighlight1 text-xl rounded-lg"
                  >
                    <span>Contact Me</span>
                  </a>
                </div>
            </div>
          </div>

          <footer className="text-center text-lg text-ccOffWhite border-t border-solid border-ccGray py-5 px-6 -mx-6 sm:px-20 sm:-mx-20 lg:px-40 lg:-mx-40 ">
            <div className="flex flex-col gap-2 max-w-5xl mx-auto md:flex-row md:justify-between md:items-center">
              <p className="text-white">©2023, built with love by <span className="text-pink-600">Bryan Fink</span></p>
              <div className="flex gap-10 mx-auto text-3xl py-4 px-6 rounded-lg md:mx-[0] md:py-2 md:px-4 md:gap-6 md:text-xl">
                <a href="https://www.instagram.com/thebryanfink/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                <a href="https://www.linkedin.com/in/bfink777" target="_blank" rel="noopener noreferrer"><GrLinkedinOption /></a>
                <a href="https://github.com/BryanMF87" target="_blank" rel="noopener noreferrer"><FaGithub /></a>       
              </div>
            </div>
          </footer>

        </section>
  )
}

export default Footer