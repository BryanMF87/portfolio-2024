import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white py-10 text-center text-white text-lg">
        © 2023 built by 
        <span className="text-emerald-400 underline transition ease-in-out duration-400 hover:text-emerald-600">
            <a 
                href="https://bryanfink.dev" 
                target='_blank' 
                rel='noopener'
            >
                Bryan Fink
            </a>
        </span>
    </footer>
  )
}

export default Footer