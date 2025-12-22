import React, { useState, useEffect } from "react";

const About = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768); // Tailwind's 'md' breakpoint
    };
    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section id="about" className="py-40 bg-gray-900 text-white rounded-3xl">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-16 text-orange-400">
          About <span className="text-white">Me</span>
        </h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/3 mb-8 md:mb-0 flex justify-center">
            <img
              src="/images/about.jpeg"
              alt="Profile"
              className="rounded-full w-64 h-64 object-cover shadow-lg md:w-96 md:h-80 md:rounded-none" // Rounded on mobile, no rounding on desktop
              style={
                isDesktop
                  ? {
                      clipPath:
                        "polygon(0% 0%, 100% 0%, 100% 90%, 90% 100%, 0% 100%)",
                    }
                  : {}
              } // Apply clip-path conditionally
            />
          </div>
          <div className="md:w-2/3 md:pl-12 text-center md:text-left">
            <p className="text-lg mb-6 text-gray-300">
              I am a BCA student specializing in Cloud Computing and Information
              Security at MSU, with a strong interest in full-stack development,
              cloud technologies, and AI. I focus on building secure, scalable,
              and practical applications while continuously enhancing my
              technical skills.
            </p>
            <h3 className="text-2xl font-semibold mb-4 text-white">
              Career Objective
            </h3>
            <p className="text-lg text-gray-300">
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
