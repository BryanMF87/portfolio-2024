
"use client";
import { useState, useEffect } from "react";
import {projectData} from '../data';
import Link from 'next/link';
import { FaEye } from "react-icons/fa";

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
      <section id="work" className="bg-ccGray3">
        <div className="relative py-28 px-6 md:px-20 lg:px-40 lg:max-w-8xl lg:mx-auto">
          <p className="absolute top-1/2 -left-8 shrink-0 transform rotate-90 text-ccGray2 font-bold tracking-tight hidden md:block md:text-4xl lg:text-5xl lg:-left-12">Portfolio</p>
          {/* project category selector */}
          <div className="text-center md:flex md:text-left md:justify-between md:mb-10">
            <h2 className="font-medium text-3xl text-ccOffWhite">Featured Projects</h2>
            <div className="flex justify-center gap-6 mt-5 mb-10 md:m-0">
              <button onClick={() => setSubject('development')} className={`font-medium text-xl ${subject === 'development' ? 'text-ccHighlight' : 'text-ccGray'} hover:text-ccOffWhite focus:text-ccHighlight`}>
                Development
              </button>
              <button onClick={() => setSubject('design')} className="font-medium text-xl text-ccGray hover:text-ccOffWhite focus:text-ccHighlight">
                Design
              </button>
            </div>
          </div>

          {/* projects displayed */}
          <div className="grid grid-cols-2 gap-10 md:grid-cols-4 sm:gap-6">
            {displayProjects.map((project, index) => (
              <Link
                key={index}
                href={`/projects/${project.id}`}
                className="w-full mx-auto rounded-xl group hover:shadow-xl"
              >
                <img
                  src={project.imageURL}
                  alt={project.alt}
                  className="w-full h-48 object-cover rounded-t-xl"
                />
                <div className="flex flex-col w-full p-4 text-ccOffBlack bg-ccOffWhite rounded-b-xl">
                  <span className="text-ccGray text-sm font-medium leading-4 group-hover:text-ccHighlight">{project.description}</span>
                  <h3 className="text-lg font-bold sm:text-base md:leading-[1.25rem] md:mt-1">{project.title}</h3>
                </div>  
              </Link>
            ))}
          </div>
        </div>
      </section>
  );
}

export default ProjectGallery;
