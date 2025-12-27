import React from "react";
import {
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
  FaXTwitter,
} from "react-icons/fa6";
import profile from "/public/images/profile.png";
import resume from "/public/sujal-cv.pdf";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-[#F6F1EB] text-gray-800 pt-28 md:pt-64 overflow-x-hidden"
    >
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center">
        {/* LEFT TEXT */}
        <div className="max-w-xl order-2 md:order-1 mt-12 md:mt-0 text-center md:text-left">
          <p className="uppercase tracking-[0.3em] text-sm text-green-600 mb-4">
            Computer Science Student
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold leading-tight mb-6">
            Sujal <br className="hidden md:block" /> Thapa
          </h1>

          <p className="text-lg md:text-xl text-gray-600 mb-6">
            Cloud & Full-Stack Technology Learner
          </p>

          <p className="text-gray-600 leading-relaxed mb-10">
            Focused on Cloud Computing, Full-Stack Development, AI, Java DSA,
            and scalable system design.
          </p>

          <div className="flex justify-center md:justify-start gap-4 mb-10">
            <a
              href="#projects"
              className="px-6 py-3 bg-gray-900 text-white rounded-full hover:opacity-90 transition"
            >
              View Projects
            </a>
            <a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-gray-800 rounded-full hover:bg-gray-800 hover:text-white transition"
            >
              Resume
            </a>
          </div>

          <div className="flex justify-center md:justify-start gap-5 text-lg text-gray-600">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#0A66C2] transition-colors duration-300"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#171515] transition-colors duration-300"
            >
              <FaGithub />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#E4405F] transition-colors duration-300"
            >
              <FaInstagram />
            </a>
            <a
              href="https://x.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#1DA1F2] transition-colors duration-300"
            >
              <FaXTwitter />
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center order-1 md:order-2 mt-6 md:mt-0">
          {/* CIRCLES — SAME POSITIONS, RESPONSIVE SIZES */}
          <div
            className="absolute bg-[#5B8DEF] rounded-full 
            w-40 h-40 md:w-56 md:h-56 
            -top-6 -left-6"
          ></div>

          <div
            className="absolute bg-[#F2A65A] rounded-full 
            w-48 h-48 md:w-64 md:h-64 
            top-20 right-0"
          ></div>

          <div
            className="absolute bg-[#8B5CF6] rounded-full 
            w-28 h-28 md:w-40 md:h-40 
            bottom-0 left-16"
          ></div>

          {/* IMAGE — RESPONSIVE SCALE ONLY */}
          <img
            src={profile}
            alt="Sujal Thapa"
            className="
              relative z-10 
              w-[230px] sm:w-[260px] md:w-[380px]
              object-contain
            "
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
