
"use client";
import { useState, useEffect } from "react";
import {projectData} from '../data';

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
      <div className="bg-ccGray2 py-28 px-6 -mx-6 sm:px-20 sm:-mx-20">
        
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
        <div className="flex flex-col gap-10 md:grid md:grid-cols-2 lg:grid-cols-4">
          {displayProjects.map((project, index) => (
            <div
              key={index}
              className="w-11/12 mx-auto rounded-xl md:w-full"
            >
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80"
                alt="Sarah Paulson of Paulson's Bakery"
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
  );
}

export default ProjectGallery;
