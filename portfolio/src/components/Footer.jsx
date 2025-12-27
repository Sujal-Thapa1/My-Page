import React from "react";
import {
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
  FaXTwitter,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#1C1C1C] text-gray-200 py-16">
      <div className="container mx-auto px-6 flex flex-col items-center">
        {/* Main content */}
        <div className="flex flex-col md:flex-row justify-between w-full max-w-6xl mb-12">
          {/* Name */}
          <div className="text-center md:text-left mb-10 md:mb-0">
            <h2 className="text-5xl md:text-6xl font-serif font-bold leading-none">
              <span className="text-green-600">Sujal</span>
              <br />
              Thapa
            </h2>
          </div>

          {/* Contact + Social */}
          <div className="flex flex-col md:flex-row gap-12 text-center md:text-left">
            {/* Contact */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-4 text-gray-400">
                Contact
              </h3>
              <p className="text-sm text-gray-300">sujalmangar304@gmail.com</p>
              <p className="text-sm text-gray-300">+91 9339271036</p>
              <p className="text-sm text-gray-300">Kalimpong, West Bengal</p>
            </div>

            {/* Social */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-4 text-gray-400">
                Social
              </h3>
              <div className="flex justify-center md:justify-start space-x-5">
                <a
                  href="https://www.linkedin.com/in/sujal-thapa-47880530b/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn className="text-lg text-gray-400 hover:text-white transition" />
                </a>
                <a
                  href="https://github.com/Sujal-Thapa1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="text-lg text-gray-400 hover:text-white transition" />
                </a>
                <a
                  href="https://www.instagram.com/be_uni.que__/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="text-lg text-gray-400 hover:text-white transition" />
                </a>
                <a
                  href="https://x.com/SujalThapa304"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaXTwitter className="text-lg text-gray-400 hover:text-white transition" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full max-w-6xl border-t border-gray-700 pt-6 text-center">
          <p className="text-sm text-gray-400">
            © 2025 Sujal Thapa. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
