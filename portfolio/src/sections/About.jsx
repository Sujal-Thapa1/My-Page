import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="py-20 bg-gray-200 text-gray-900 dark:bg-gray-800 dark:text-white"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/3 mb-8 md:mb-0 flex justify-center">
            <img
              src="../../public/images/about.jpeg"
              alt="Profile"
              className="rounded-full w-64 h-64 object-cover shadow-lg"
            />
          </div>
          <div className="md:w-2/3 md:pl-12 text-center md:text-left">
            <p className="text-lg mb-6">
              I am a BCA student specializing in Cloud Computing and Information
              Security at MSU, with a strong interest in full-stack development,
              cloud technologies, and AI. I focus on building secure, scalable,
              and practical applications while continuously enhancing my
              technical skills.
            </p>
            <h3 className="text-2xl font-semibold mb-4">Career Objective</h3>
            <p className="text-lg">
              To apply my academic knowledge in real-world environments, gain
              practical experience, and grow into a skilled professional through
              continuous learning and hands-on project work.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
