
"use client";
import { useState, useEffect } from "react";
import {projectData} from '../data';
import Link from 'next/link'

import { FaEye } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";



const  ProjectGallery = () => {
  const [subject, setSubject] = useState('development');
  const [displayProjects, setDisplayProjects] = useState([])

  useEffect(() => {
    const filteredProjects = projectData.filter(
      (project) => project.category === subject
    );
    setDisplayProjects(filteredProjects);
  }, [subject]);

  return (
      <section id="work" className="relative bg-ccGray2 py-28 px-6 md:px-20 lg:px-40">
         <p className="absolute top-1/2 -left-7 shrink-0 transform rotate-90 text-ccGray font-bold tracking-tight hidden md:block md:text-4xl lg:text-5xl lg:-left-12">Portfolio</p>
        {/* project category selector */}
        <div className="text-center md:flex md:text-left md:justify-between md:mb-10">
          <h2 className="font-medium text-3xl text-ccOffWhite">Latest Projects</h2>
          <div className="flex justify-evenly gap-6 mt-5 mb-10 sm:justify-center md:m-0">
            <button onClick={() => setSubject('development')} className={`font-medium text-xl ${subject === 'development' ? 'text-ccHighlight' : 'text-ccGray'} hover:text-ccOffWhite focus:text-ccHighlight`}>
              Development
            </button>
            <button onClick={() => setSubject('design')} className="font-medium text-xl text-ccGray hover:text-ccOffWhite focus:text-ccHighlight">
              Design
            </button>
          </div>
        </div>

        {/* projects displayed */}
        <div className="flex flex-col gap-10 sm:flex-row sm:gap-6">
          {displayProjects.map((project, index) => (
            <div
              key={index}
              className="relative w-11/12 h-96 mx-auto rounded-xl overflow-hidden group sm:w-6/12 sm:h-56 md:w-3/12"
            >
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80"
                alt="Sarah Paulson of Paulson's Bakery"
                className="w-full h-full object-cover group-hover:h-[60%] sm:group-hover:h-20"
              />
              <div className="w-full h-full p-2 text-ccOffBlack bg-ccOffWhite">
                <span className="text-ccHighlight text-sm font-medium">JS Mini Game</span>
                <h3 className="text-lg font-bold leading-5">Scum Bar Brawl</h3>
                <div className="flex flex-col gap-2 pt-3">
                <Link href="#" className="flex gap-2 items-center text-sm font-semibold">
                  <FaEye className="text-lg"/>
                  See Details
                </Link>
                <Link href="#" className="flex gap-2 items-center text-sm font-medium">
                  <FaGithub className="text-lg"/>
                  View Code
                </Link>
                </div>
              </div>  
            </div>
          ))}
        </div>
      </section>
  );
}

export default ProjectGallery;
