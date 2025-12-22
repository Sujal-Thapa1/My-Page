import React from "react";
import {
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
  FaXTwitter,
} from "react-icons/fa6"; // Import social icons

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-6 flex flex-col items-center">
        {/* Main content row (Name, Contact Details, Social Links) */}
        <div className="flex flex-col md:flex-row justify-between w-full max-w-6xl mb-8 md:mb-12">
          {/* Sujal Thapa Text */}
          <div className="text-center md:text-left mb-8 md:mb-0">
            <h2 className="text-5xl md:text-7xl font-extrabold font-serif leading-none  ">
              <span className=" text-orange-600">Sujal</span>
              <br />
              Thapa
            </h2>
          </div>

          {/* Grouped Contact Details & Social Links */}
          <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-12 text-center md:text-left">
            {/* Contact Details */}
            <div>
              <h3 className="text-lg font-semibold mb-2">Contact Details</h3>
              <p className="text-sm">Email: sujalmangar304@gmail.com</p>
              <p className="text-sm">Phone: +91 9339271036</p>
              <p className="text-sm">Location: Kalimpong, West Bengal</p>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-lg font-semibold mb-2">Social Links</h3>
              <div className="flex justify-center md:justify-start space-x-4">
                <a
                  href="https://www.linkedin.com/in/sujal-thapa-47880530b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition duration-300"
                >
                  <FaLinkedinIn className="text-xl text-blue-400 hover:text-blue-300" />
                </a>
                <a
                  href="https://github.com/Sujal-Thapa1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition duration-300"
                >
                  <FaGithub className="text-xl text-gray-400 hover:text-white" />
                </a>
                <a
                  href="https://www.instagram.com/be_uni.que__/profilecard/?igsh=bmVjN2p3eG9yN210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition duration-300"
                >
                  <FaInstagram className="text-xl text-pink-400 hover:text-pink-300" />
                </a>
                <a
                  href="https://x.com/SujalThapa304"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition duration-300"
                >
                  <FaXTwitter className="text-xl text-pink-400 hover:text-pink-300" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright (centered at the bottom) */}
        <div className="w-full text-center mt-8">
          <p>&copy; 2025 Sujal Thapa. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
