
import Image from 'next/image';
import TechStackSlider from './components/TechStack';
import ProjectGallery from './components/ProjectGallery';
import Testimonials from './components/Testimonials';

const Home = () => {

  return (
    <div className="bg-ccOffBlack disable-scroll">
        <section id="home" className="relative z-10 flex justify-center items-center h-max px-6 xs:px-10">

          <aside className="flex justify-center items-center h-full w-0 md:w-20 lg:w-40">
            <p className="shrink-0 transform rotate-90 text-ccGray font-bold tracking-tight hidden md:block md:text-3xl lg:text-5xl">Hello World</p>
          </aside>

          <div className="flex flex-col mt-24 md:flex-row md:pt-0">
            <div className="relative z-[-1] flex justify-center">
              <Image
                src="/bryan2.png"
                alt="Bryan Fink"
                width="100"
                height="200"
                className="w-8/12 h-auto object-cover shrink-0 mx-auto md:w-52"
              />
                {/* pink box */}
                <div className="absolute bottom-0 z-[-2] bg-ccHighlight w-8/12 h-28 rounded-xl"></div>
                <p className="absolute z-[-2]">&lt;/&gt;</p>

            </div>

            {/* text block */}
            <div className="-mt-10 text-center md:h-72 md:text-left md:flex md:flex-col md:justify-center">
              <h1 className="font-bold text-7xl text-ccOffWhite tracking-tight md:text-6xl lg:text-7xl">Frontend Developer</h1>
              <div className="flex flex-col gap-6 mt-10 md:flex-row">
                <a href="#work" className="p-5 text-white text-xl font-medium rounded-md border border-solid border-ccOffWhite sm:text-lg sm:px-10 md:w-fit md:text-lg md:py-3 md:px-5">
                  View my work
                </a>
                <a href="#contact" className="p-5 bg-ccHighlight text-white text-xl font-medium rounded-md sm:text-lg sm:px-10 md:w-fit md:text-lg md:py-3 md:px-5">
                  Start a project
                </a>
              </div>
            </div>
          </div>

          <aside className="flex justify-center items-center h-full w-0 md:w-20 lg:w-40"></aside>
        </section>

        <div className="mt-20 mb-10">
          <TechStackSlider />
        </div>

        <ProjectGallery/>

        <section className="py-40 px-6">
          <h2 className="text-center text-3xl leading-10 text-ccOffWhite text-3xl">A visual designer's portfolio showcasing carefully crafted website designs and more systematic design system as a detailed visually appealing case study with nuance interaction.</h2>
          <div className="flex flex-col gap-20 py-20 text-center max-w-xs mx-auto md:grid md:grid-cols-3 md:gap-10 md:text-left md:max-w-full">
            <div>
              <h3 className="text-2xl text-ccOffWhite mb-4">Header One</h3>
              <p className="text-ccGray text-lg">Something here and I don’t know what but it will be here and you can’t stop me. Hahaha! Because I will!</p>
            </div>
            <div>
              <h3 className="text-2xl text-ccOffWhite mb-4">Header One</h3>
              <p className="text-ccGray text-lg">Something here and I don’t know what but it will be here and you can’t stop me. Hahaha! Because I will!</p>
            </div>
            <div>
              <h3 className="text-2xl text-ccOffWhite mb-4">Header One</h3>
              <p className="text-ccGray text-lg">Something here and I don’t know what but it will be here and you can’t stop me. Hahaha! Because I will!</p>
            </div>
          </div>
        </section>


        <Testimonials />

        {/* contact section in footer for site-wide accessibility  */}
    </div>
  )
}; 

export default Home;