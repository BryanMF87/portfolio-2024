"use client"
import React, { createContext, useState} from 'react'

export const ProjectContext = createContext();

export const ProjectProvider = ({ children }) => {

    const [projectCategory, setProjectCategory ] = useState('animation')

  return (
    <ProjectContext.Provider
        value={{
            projectCategory,
            setProjectCategory,
        }}
    >
        {children}
    </ProjectContext.Provider>
  )
}