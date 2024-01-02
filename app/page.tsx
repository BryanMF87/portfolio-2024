
import Image from 'next/image';
import TechStackSlider from './components/TechStack';
import ProjectGallery from './components/ProjectGallery';
import Testimonials from './components/Testimonials';

import { AiOutlineCode } from "react-icons/ai";
import { MdOutlineDesignServices } from "react-icons/md";
import { MdOutlineComputer } from "react-icons/md";




const Home = () => {

  return (
    <div className="bg-ccOffBlack disable-scroll">
        <section id="home" className="relative z-10 flex justify-center items-center h-max px-6 md:px-0">

          <p className="absolute top-2/3 -left-12 shrink-0 transform rotate-90 text-ccGray font-bold tracking-tight hidden md:block md:text-4xl lg:text-5xl lg:-left-[5.25rem]">Hello World</p>

          <div className="flex flex-col mt-24 md:pt-0 md:mt-32">

            <div className="relative z-20 flex justify-center">
              <div className="absolute z-[-2] w-80 h-32 -mt-6 md:-mt-10">
                <span className="absolute top-4 left-20 text-stroke-gray text-3xl lg:text-4xl lg:top-6 lg:left-16">Let</span>
                <span className="absolute bottom-2 text-stroke-gray text-4xl lg:text-5xl lg:-bottom-4 lg:-left-10">else&#123; &#125;</span>
                <span className="absolute right-10 text-stroke-gray text-4xl lg:text-5xl">&lt;/&gt;</span>
                <span className="absolute bottom-4 right-0 text-stroke-gray text-3xl lg:text-4xl lg:bottom-0 lg:-right-6">Const</span>
              </div>
              
              <Image
                src="/bryan2.png"
                alt="Bryan Fink"
                width="100"
                height="200"
                className="w-56 h-auto object-cover shrink-0 md:w-52 lg:w-64"
              />
              {/* pink box */}
              <div className="absolute bottom-0 z-[-1] bg-ccHighlight w-56 h-28 rounded-xl md:w-64"></div>
            </div>

            {/* text block */}
            <div className="relative z-30 -mt-10 text-center w-full md:-mt-14">
              <h1 className="font-bold text-7xl text-ccOffWhite tracking-tight drop-shadow-lg md:text-6xl lg:text-7xl">Frontend Developer</h1>
              <div className="flex flex-col gap-6 mt-10 px-6 sm:flex-row justify-center md:mt-6">
                <a href="#work" className="p-5 text-white text-xl font-medium rounded-md border border-solid border-ccOffWhite sm:text-lg sm:px-10 md:w-fit md:text-lg md:py-3 md:px-5">
                  View my work
                </a>
                <a href="#contact" className="p-5 bg-ccHighlight text-white text-xl font-medium rounded-md sm:text-lg sm:px-10 md:w-fit md:text-lg md:py-3 md:px-5">
                  Start a project
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-20 mb-10">
          <TechStackSlider />
        </section>

        <section id="about" className="relative py-40 px-6 sm:px-12 md:px-20 lg:px-40">
          <p className="absolute top-60 -left-9 shrink-0 transform rotate-90 text-ccGray font-bold tracking-tight hidden md:block md:top-1/2 md:text-4xl lg:text-5xl lg:-left-[3.75rem]">About Me</p>
          <h2 className="text-center text-[1.5rem] leading-10 text-ccOffWhite md:text-[1.55rem] md:leading-normal">Hi there I'm Bryan, a world-traveling frontend developer, specializing in front-end web development for start ups and businesses looking to grow and modernize. Let me help you turn your ideas into reality by connecting your message to your clients in a meaningful, visual way.</h2>
          <div className="flex flex-col gap-20 py-20 text-center max-w-xs mx-auto md:grid md:grid-cols-3 md:gap-10 md:text-left md:max-w-full">
            <div>
              <h3 className="text-2xl text-ccOffWhite mb-4 lg:flex lg:gap-2 lg:items-center">
                <MdOutlineDesignServices className="text-ccHighlight mx-auto text-5xl md:text-2xl md:mx-0"/>
                Graphic Design
              </h3>
              <p className="text-ccGray text-lg">Do you need a professional logo? Business cards? I can instill your company's unique personality into stunning visuals that leave a lasting impression </p>
            </div>
            <div>
              <h3 className="text-2xl text-ccOffWhite mb-4 lg:flex lg:gap-2 lg:items-center">
                <MdOutlineComputer className="text-ccHighlight mx-auto text-5xl md:text-2xl md:mx-0"/>
                Web Design
              </h3>
              <p className="text-ccGray text-lg">Whether you're in need of a user-friendly interface, an engaging website design, or compelling digital ads, my design services are tailored to meet your every requirement.</p>
            </div>
            <div>
              <h3 className="text-2xl text-ccOffWhite mb-4 lg:flex lg:gap-2 lg:items-center">
                <AiOutlineCode className="text-ccHighlight mx-auto text-5xl md:text-2xl md:mx-0"/>
                FE Development
              </h3>
              <p className="text-ccGray text-lg">I will transform designs into dynamic, responsive, interactive web experiences that  captivates and retains your users' attention.</p>
            </div>
          </div>
        </section>

        <ProjectGallery/>

        <Testimonials />

        {/* contact section in footer for site-wide accessibility  */}
    </div>
  )
}; 

export default Home;