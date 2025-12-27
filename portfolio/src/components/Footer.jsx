import React from "react";
import {
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
  FaXTwitter,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="relative w-full bg-[#007a9b] text-white pt-32 pb-8 mt-24">
      {/* Wave Container */}
      <div className="wave-container">
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Main content - Kept EXACTLY as your original */}
        <div className="flex flex-col md:flex-row justify-between w-full max-w-6xl mb-12 mx-auto">
          {/* Name - Left Aligned */}
          <div className="text-center md:text-left mb-10 md:mb-0">
            <h2 className="text-5xl md:text-6xl font-serif font-bold leading-none">
              <span className="text-white">Sujal</span>
              <br />
              Thapa
            </h2>
          </div>

          {/* Contact + Social - Right Aligned */}
          <div className="flex flex-col md:flex-row gap-12 text-center md:text-left">
            {/* Contact */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-4 text-white ">
                Contact
              </h3>
              <p className="text-sm text-white">sujalmangar304@gmail.com</p>
              <p className="text-sm text-white">+91 9339271036</p>
              <p className="text-sm text-white">Kalimpong, West Bengal</p>
            </div>

            {/* Social */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-4 text-white ">
                Social
              </h3>
              <div className="flex justify-center md:justify-start space-x-5">
                <a
                  href="https://www.linkedin.com/in/sujal-thapa-47880530b/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn className="text-lg text-white hover:opacity-70 transition" />
                </a>
                <a
                  href="https://github.com/Sujal-Thapa1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="text-lg text-white hover:opacity-70 transition" />
                </a>
                <a
                  href="https://www.instagram.com/be_uni.que__/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="text-lg text-white hover:opacity-70 transition" />
                </a>
                <a
                  href="https://x.com/SujalThapa304"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaXTwitter className="text-lg text-white hover:opacity-70 transition" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider - Matches your original placement */}
        <div className="w-full max-w-6xl border-t border-white/20 pt-6 text-center mx-auto">
          <p className="text-sm text-white opacity-70">
            © 2025 Sujal Thapa. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
