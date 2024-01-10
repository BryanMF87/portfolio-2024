"use client";
import React, { useState, useEffect } from 'react';
import {projectData} from '../../data';


const Project = ({ params }) => {
  const [selectedProject, setSelectedProject] = useState();

    useEffect(()=> {
      const fetchData = () => {
        const data = projectData.find((project)=> project.id === params.id);
        setSelectedProject(data);
      }

      fetchData();
     
    }, [params]);

  return (
    <div className="text-ccOffWhite">
      {selectedProject && (
        <h1>{selectedProject.title}</h1>
     )}
    </div>
  )
}

export default Project