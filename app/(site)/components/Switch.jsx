"use client";
import React, { useContext, useEffect } from 'react';
import { ProjectContext } from '../projectContext';

const Switch = () => {

  const { projectCategory, setProjectCategory } = useContext(ProjectContext)

  const handleCategoryChange = (category) => {
    setProjectCategory(category)
  };

  useEffect(()=> {
    console.log(`Category is ${projectCategory}`);
  }, [projectCategory]);

  return (
    <div className="flex justify-center items-center mx-auto">
      <button
        className={`rounded-lg rounded-r-none py-2 w-36 sm:w-40 ${
          projectCategory === 'animation'
            ? 'bg-black text-white'
            : 'text-black hover:bg-black hover:text-white'
        }`}
        onClick={() => handleCategoryChange('animation')}
      >
        Animation
      </button>
      <button
        className={`rounded-lg rounded-l-none py-2 w-36 sm:w-40 ${
          projectCategory === 'motion graphics'
            ? 'bg-black text-white'
            : 'text-black hover:bg-black hover:text-white'
        }`}
        onClick={() => handleCategoryChange('motion graphics')}
      >
        Motion Graphics
      </button>
    </div>
  );
};

export default Switch;