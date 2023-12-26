import React from 'react';
import { GrLinkedinOption } from 'react-icons/gr';
import { FaInstagram, FaGithub } from 'react-icons/fa';
import FAQ from '../components/FAQ';

const Footer = () => {
  return (
      <section id="contact"  className="px-6 bg-ccOffBlack text-ccOffWhite sm:px-20 lg:px-40">
          
          <div className="py-20 lg:flex lg:gap-14">
            <FAQ />
            <div className="mt-20 text-ccOffWhite text-center md:text-left md:mt-20 lg:mt-0 lg:order-1 lg:w-1/2">
              <h2 className="font-bold text-7xl leading-tight">Ready? Set, <span className="text-ccHighlight">Go!</span></h2>
                <p className="mt-4 mb-8">Hi, I’m Bryan. From branding to beautiful websites, I will turn your ideas into real life products that connect with your clients.</p>
                <div className="flex flex-col gap-6 md:flex-row">
                  <a 
                    href="mailto:bmfink87@gmail.com" 
                    target='_blank' 
                    rel='noopener' 
                    className="bg-ccHighlight text-white text-center font-medium py-5 px-10 bg-ccHighlight1 text-2xl rounded-lg"
                  >
                    <span>Contact Me</span>
                  </a>
                </div>
            </div>
          </div>

          <footer className="text-center text-lg text-ccOffWhite border-t border-solid border-ccGray py-10 px-6 -mx-6 sm:px-20 sm:-mx-20 lg:px-40 lg:-mx-40 ">
            <div className="flex flex-col gap-6 max-w-5xl mx-auto md:flex-row md:justify-between md:items-center">
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