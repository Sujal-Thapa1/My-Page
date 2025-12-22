import React from "react";
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import profile from "/public/images/profile.png";
import resume from "/public/sujal-cv.pdf";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-24 bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white"
    >
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 md:pr-10 mb-10 md:mb-0 pb-10 text-center md:text-left order-last md:order-none">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">Sujal Thapa</h1>
          <h2 className="text-2xl md:text-4xl font-light mb-6">
            Cloud & Full-Stack Technology Learner
          </h2>
          <p className="text-lg md:text-xl mb-8">
            Building practical knowledge in cloud computing and full-stack
            technologies through real-world learning.
          </p>
          <div className="flex justify-center md:justify-start space-x-4">
            <a
              href="#projects"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 sm:py-3 sm:px-6 rounded-full transition duration-300"
            >
              View Projects
            </a>
            <a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-700 hover:bg-gray-800 text-white dark:bg-gray-800 dark:hover:bg-gray-700 font-bold py-2 px-4 sm:py-3 sm:px-6 rounded-full transition duration-300"
            >
              View Resume
            </a>
          </div>
          <div className="flex justify-center md:justify-start space-x-4 mt-6">
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="transition duration-300"
            >
              <FaLinkedinIn className="text-2xl text-blue-600 hover:text-blue-400" />
            </a>
            <a
              href="https://github.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="transition duration-300"
            >
              <FaGithub className="text-2xl text-gray-300 hover:text-white" />
            </a>
            <a
              href="https://instagram.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="transition duration-300"
            >
              <FaInstagram className="text-2xl text-pink-500 hover:text-pink-300" />
            </a>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center relative min-h-[350px] order-first md:order-none">
          {" "}
          {/* Adjusted min-h to ensure space for circles */}
          {/* Background circles */}
          <div className="absolute rounded-full bg-blue-400 opacity-70 w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24 -top-1 left-1 sm:-top-2 sm:left-2 md:-top-4 md:left-4 transform animate-pulse-slow"></div>
          <div className="absolute rounded-full bg-purple-500 opacity-60 w-40 h-40 sm:w-48 sm:h-48 md:w-72 md:h-72 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute rounded-full bg-pink-500 opacity-80 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 bottom-1 right-1 sm:bottom-2 sm:right-2 md:bottom-4 md:right-4 transform animate-pulse-slow animation-delay-2000"></div>
          <div className="relative z-10 flex flex-col items-center">
            <img
              src={profile}
              alt="Profile"
              className="w-48 h-60 sm:w-64 sm:h-80 md:w-[400px] md:h-[480px] rounded-full shadow-2xl object-contain"
            />
            {/* Bottom effect on image */}
            <div className="absolute bottom-0 w-full h-1/4 sm:h-1/3 bg-gradient-to-t from-gray-900 via-gray-900 to-transparent rounded-b-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
