
import Image from 'next/image';
import TechStackSlider from './components/TechStack';
import ProjectGallery from './components/ProjectGallery';
import Testimonials from './components/Testimonials';

const Home = () => {

  return (
    <main className="bg-ccOffBlack px-6 disable-scroll sm:px-20">
        <section id="home" className="py-20 md:py-28">
          <div className="flex flex-col gap-6 mb-20 md:flex-row md:w-[41rem] md:mx-auto md:mb-10 lg:my-14">
            <Image 
              src="/selfie.png"
              alt="Bryan Fink, frontend web developer and designer"
              width="100"
              height="200"
              className="w-7/12 h-72 object-cover shrink-0 mx-auto md:w-52"
            />
            <div className="text-center md:h-72 md:text-left md:flex md:flex-col md:justify-center md:mb-0">
              <h1 className="font-bold text-5xl text-ccOffWhite md:text-6xl">Bryan Fink</h1>
              <p className="font-medium text-2xl text-ccGray mt-3 mb-20 md:mt-2 md:mb-10">Custom built websites and user-friendly designs for growing start-ups</p>
              <a href="#contact" className="p-5 bg-ccHighlight text-white text-xl font-medium rounded-md sm:text-lg sm:px-10 md:w-fit md:text-lg md:py-3 md:px-5">
                Start a project
              </a>
            </div>
          </div>
           <TechStackSlider />
        </section>

        <ProjectGallery/>

        <section className="py-40">
          <h2 className="text-center text-2xl leading-10 text-ccOffWhite text-3xl">A visual designer's portfolio showcasing carefully crafted website designs and more systematic design system as a detailed visually appealing case study with nuance interaction.</h2>
          <div className="flex flex-col gap-20 py-20 text-center max-w-xs mx-auto md:grid md:grid-cols-3 md:gap-10 md:text-left md:max-w-full">
            <div>
              <h3 className="text-2xl text-ccOffWhite mb-4">Header One</h3>
              <p className="text-ccGray">Something here and I don’t know what but it will be here and you can’t stop me. Hahaha! Because I will!</p>
            </div>
            <div>
              <h3 className="text-2xl text-ccOffWhite mb-4">Header One</h3>
              <p className="text-ccGray">Something here and I don’t know what but it will be here and you can’t stop me. Hahaha! Because I will!</p>
            </div>
            <div>
              <h3 className="text-2xl text-ccOffWhite mb-4">Header One</h3>
              <p className="text-ccGray">Something here and I don’t know what but it will be here and you can’t stop me. Hahaha! Because I will!</p>
            </div>
          </div>
        </section>


        <Testimonials />

        {/* contact section in footer for site-wide accessibility  */}
    </main>
  )
}; 

export default Home;