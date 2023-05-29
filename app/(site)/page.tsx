"use client";

import { getProjects } from "@/sanity/sanity-utils";
import { useState} from 'react';
import Image from "next/image";
import Link from "next/link";
import Switch from './components/Switch';
import VideoPlayer from './components/VideoPlayer';
import { FaInstagram, FaFacebookF} from 'react-icons/fa';
import { GrLinkedinOption } from 'react-icons/gr';
import { SiAdobepremierepro, SiAdobephotoshop, SiAdobeillustrator, SiBlender, SiAdobeaftereffects } from 'react-icons/si';

export default async function Home() {

  const [activeOption, setActiveOption] = useState('animation');

  const projects = await getProjects();

  return (
    <div className="text-center">
        <section id="home">
          <div className="bg-slate-50	 py-48 font-bold">
            <h1 className="text-5xl">Gary Fink</h1>
            <h2 className="mt-6 mb-5 mx-auto px-6 text-4xl max-w-2xl">Your go-to digital artist for <span className="text-emerald-400">animation</span> and <span className="text-emerald-400 animate-bounce">motion graphics</span></h2>

            <button className="group relative h-12 w-48 overflow-hidden rounded-lg bg-black text-lg shadow">
            <a href="#contact">
              <div className="absolute inset-0 h-0 bg-white transition-all duration-[250ms] ease-out group-hover:h-full">
                <span className="relative text-white group-hover:text-black">Get started here</span>
              </div>
            </a>
            </button>

          </div>
          <div className="relative">
            <div className="wave">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
          </svg>
            </div>
            <div className="relative grid grid-cols-3 items-center justify-center saturate-0 pt-20 px-6 gap-4 mx-auto sm:gap-x-7 md:grid-cols-6 lg:max-w-5xl">
              <Image src="/google.png" alt="Google" width={1000} height={338} className="opacity-40 w-full h-auto" />
              <Image src="/microsoft.png" alt="Microsoft" width={250} height={90} className="opacity-40 w-full h-auto" />
              <Image src="/disney.png" alt="Disney" width={1600} height={680} className="opacity-40 w-full h-auto" />
              <Image src="/facebook.png" alt="Facebook" width={400} height={120} className="opacity-40 w-full h-auto" />
              <Image src="/marvel.png" alt="Marvel" width={250} height={90} className="opacity-40 w-full h-auto" />
              <Image src="/netflix.png" alt="Netflix" width={1200} height={326} className="opacity-40 w-full h-auto" />
            </div>
          </div>
        </section>

        <section id="work" className="pt-16">
          <Switch 
            activeOption={activeOption} 
            setActiveOption={setActiveOption} 
          />

          <VideoPlayer 
            activeOption={activeOption}
            setActiveOption={setActiveOption}
          />

          <div className="max-w-5xl mx-auto mt-4 px-6 md:p-0 grid sm:grid-cols-2 sm:mt-6 lg:grid-cols-3 gap-4">
            {projects
              .filter((project) => project.category === activeOption)
              .map((project) => (
              <Link 
                key={project._id} 
                href="/"
                className="project-list relative flex items-center justify-center">
                    <h3 className="absolute bg-stone-950 bg-opacity-50 h-[90%] w-[94%] border-2 border-white text-white text-xl font-bold flex items-center justify-center ease-in-out duration-300 hover:opacity-0 hover:w-full hover:h-full hover:border-0">{project.name}</h3>
                    {project.image && (
                      <Image
                        src={project.image}
                        alt={project.name}
                        width={250}
                        height={100}
                        className="bg-slate-50		 h-60 w-full object-cover"
                      />
                    )}
              </Link>
            ))}
          </div>
        </section>

        <section id="about" className="bg-slate-50		 py-36 px-6 mt-12 mb-36">
          <div className="max-w-4xl mx-auto flex flex-col gap-8 md:flex-row">
            <Image
              src="/gary.png"
              alt="Gary Fink"
              width={150}
              height={150}
              className="rounded-xl h-auto w-40 mx-auto object-cover ring ring-stone-300 ring-offset-4 md:w-80"
            />
            <div className="flex flex-col gap-4 text-center md:text-left md:justify-center">
              <h2 className="text-4xl font-semibold">Gary Fink</h2>
              <p className="text-lg max-w-xl mx-auto">This text is completely meaningless. Honestly I am probably going to delete this in the morning when Gary decides that he hates the whole layout. The bastard. It’s like, I work so hard to make him look good, but does he notice? No! I bet I even have to show him this text tomorrow before he even sees how ridiculous it is.</p>

              <div className="flex flex-col gap-7 md:flex-row md:items-center">
                <button className="group relative h-12 w-48 mx-auto overflow-hidden rounded-lg bg-black text-lg shadow md:mx-0">
                  <div className="absolute inset-0 h-0 bg-white transition-all duration-[250ms] ease-out group-hover:h-full"></div>
                  <span className="relative text-white group-hover:text-black">Resume</span>
                </button>
                <div className="flex gap-7 justify-center md:justify-left">
                  <FaInstagram className=" p-1 rounded-md text-5xl bg-black text-white ease-linear duration-75 hover:border-0 hover:scale-110 hover:bg-gradient-to-br from-instagram-purple via-instagram-red to-instagram-yellow md:text-4xl"/>
                  <FaFacebookF className="p-1 rounded-md text-5xl bg-black text-white ease-linear duration-75 hover:border-0 hover:scale-110 hover:bg-facebook-blue md:text-4xl" />
                  <GrLinkedinOption className="p-1 rounded-md text-5xl bg-black text-white ease-linear duration-75 hover:border-0 hover:scale-110 hover:bg-linkedin-blue md:text-4xl" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 flex flex-col gap-10 items-center">
          <h2 className="text-4xl font-bold max-w-2xl mx-auto">Transforming <span className="text-emerald-400">ideas</span> into <span className="text-emerald-400 animate-bounce">dynamic visuals</span> using these tools</h2>
          <ul className="flex flex-wrap gap-4 justify-center mx-auto">
                <li className="bg-slate-50		 rounded-md h-32 min-w-[8rem] text-semibold text-lg text-center drop-shadow flex flex-col gap-2 justify-center items-center group">
                  <SiAdobeaftereffects className="text-6xl text-after-effects ease-in-out transition-duration-400 group-hover:scale-110" />
                  After Effects
                </li>
                <li className="bg-slate-50		 rounded-md h-32 min-w-[8rem] text-semibold text-lg text-center drop-shadow flex flex-col gap-2 justify-center items-center group">
                  <SiBlender className="text-6xl text-blender ease-in-out transition-duration-400 group-hover:scale-110" />
                  Blender
                </li>
                <li className="bg-slate-50		 rounded-md h-32 min-w-[8rem] text-semibold text-lg text-center drop-shadow flex flex-col gap-2 justify-center items-center group">
                  <SiAdobepremierepro className="text-6xl text-premiere-pro ease-in-out transition-duration-400 group-hover:scale-110" />
                  Premiere Pro
                </li>
                <li className="bg-slate-50		 rounded-md h-32 min-w-[8rem] text-semibold text-lg text-center drop-shadow flex flex-col gap-2 justify-center items-center group">
                  <SiAdobephotoshop className="text-6xl text-photoshop ease-in-out transition-duration-400 group-hover:scale-110" />
                  Photoshop
                </li>
                <li className="bg-slate-50		 rounded-md h-32 min-w-[8rem] text-semibold text-lg text-center drop-shadow flex flex-col gap-2 justify-center items-center group">
                  <SiAdobeillustrator className="text-6xl text-illustrator ease-in-out transition-duration-400 group-hover:scale-110" />
                  Illustrator
                </li>
          </ul>
        </section>

        <section id="contact" className="bg-black pt-36 pb-24 px-6 mt-36 text-center text-white">
          <h2 className="text-4xl font-bold mb-12">Let's bring your vision to life</h2>
          <p className="text-2xl">Contact me @ <span className="text-emerald-400 font-bold underline transition ease-in-out duration-400 hover:text-emerald-600"><a href="mailto:gafink21@gmail.com" target='_blank' rel='noopener'>gafink21@gmail.com</a></span></p>
        </section>

    </div>
  )
}; 