import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import about from "/public/images/about.jpeg";
import { FaChess, FaLaptop, FaPlane } from "react-icons/fa";

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const leftVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: 0.2 } },
  };

  const rightVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: 0.2 } },
  };

  return (
    <section id="about" className="py-40 bg-[#F6F1EB] text-gray-800">
      <div
        ref={ref}
        className="container mx-auto px-6 flex flex-col items-center"
      >
        {/* SECTION TITLE WITH THICK LINES */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center mb-1 gap-4 w-full max-w-3xl"
        >
          <div className="flex-1 h-1 bg-gray-800"></div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-center">
            ABOUT <span className="text-green-600">ME</span>
          </h2>
          <div className="flex-1 h-1 bg-gray-800"></div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center text-gray-500 mb-16 italic max-w-2xl"
        >
          ALLOW ME TO INTRODUCE MYSELF.
        </motion.p>

        {/* IMAGE LEFT, TEXT RIGHT */}
        <div className="flex flex-col md:flex-row items-start gap-30 max-w-4xl w-full">
          {/* IMAGE */}
          <motion.div
            variants={leftVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="md:w-1/3 flex flex-col items-center md:items-start"
          >
            <span className="text-green-600 italic font-medium mb-2">
              That's me →
            </span>
            <img
              src={about}
              alt="Sujal Thapa"
              className="w-90 h-60 object-cover shadow-xl transform rotate-3"
            />
          </motion.div>

          {/* TEXT */}
          <motion.div
            variants={rightVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="md:w-2/3 text-left"
          >
            <p className="text-lg leading-relaxed text-gray-600 mb-6">
              I am a Computer Science student with a strong interest in Cloud
              Computing and Full-Stack Development. Alongside this, I am
              actively learning Artificial Intelligence, Data Structures &
              Algorithms in Java, and System Design to build a solid foundation
              in scalable software engineering.
            </p>

            <h3 className="text-2xl font-serif font-semibold text-gray-800 mb-4">
              Career Objective
            </h3>

            <p className="text-lg leading-relaxed text-gray-600">
              To apply my academic knowledge in real-world environments, gain
              practical experience, and continuously grow into a skilled
              software professional through hands-on projects and lifelong
              learning.
            </p>
          </motion.div>
        </div>

        {/* THINGS I LOVE & LOOK WHAT I CAN DO */}
        <div className="flex flex-col md:flex-row justify-center gap-16 mt-16 max-w-4xl w-full">
          {/* THINGS I LOVE */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:w-1/2 text-left"
          >
            <h4 className="text-xl font-semibold mb-4">THINGS I LOVE</h4>
            <div className="flex gap-4 text-3xl">
              <FaChess className="text-gray-700 hover:text-blue-500 transition-colors duration-300 cursor-pointer" />
              <FaLaptop className="text-gray-700 hover:text-blue-500 transition-colors duration-300 cursor-pointer" />
              <FaPlane className="hover:text-blue-500 transition-colors duration-300 cursor-pointer" />
            </div>
          </motion.div>

          {/* LOOK WHAT I CAN DO */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="md:w-1/2 text-left"
          >
            <h4 className="text-xl font-semibold mb-4">LOOK WHAT I CAN DO</h4>
            <div className="flex">
              <ul className="space-y-2 text-gray-700 w-1/2">
                <li className="hover:text-blue-500 transition-colors duration-200">
                  + Web Design
                </li>
                <li className="hover:text-blue-500 transition-colors duration-200">
                  + Basic System Design
                </li>
                <li className="hover:text-blue-500 transition-colors duration-200">
                  + Hosting
                </li>
                <li className="hover:text-blue-500 transition-colors duration-200">
                  + Backend Development
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
