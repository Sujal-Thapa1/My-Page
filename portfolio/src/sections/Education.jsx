import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const educations = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "Medhavi Skills University",
    year: "2024 – Present",
    specialization: "Software Engineering",
  },
  {
    degree: "Diploma in Computer Applications",
    institution: "AISECT University",
    year: "2023 – 2024",
    specialization: "Computer Applications",
  },
  {
    degree: "Higher Secondary Education (10+2)",
    institution: "Scottish University Mission Institution",
    year: "2021 – 2023",
    specialization: "Science Stream",
  },
];

const Education = () => {
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
    <section id="education" className="py-40 bg-[#F6F1EB] text-gray-800">
      <div ref={ref} className="container mx-auto px-6 max-w-4xl">
        {/* SECTION TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-center mb-24"
        >
          Education
        </motion.h2>

        {/* TIMELINE */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-5 md:left-1/2 md:-translate-x-1/2 w-px bg-gray-700 h-full"></div>

          {educations.map((edu, index) => (
            <motion.div
              key={index}
              variants={index % 2 === 0 ? leftVariants : rightVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className={`relative flex mb-20 ${
                index % 2 === 0 ? "md:justify-start" : "md:justify-end"
              }`}
            >
              {/* CONTENT */}
              <div
                className={`bg-white shadow-sm rounded-xl p-8 w-full md:w-[45%]
                  ${
                    index % 2 === 0
                      ? "md:mr-auto md:text-right md:pr-10"
                      : "md:ml-auto md:text-left md:pl-10"
                  }
                  pl-16 md:pl-8`}
              >
                <h3 className="text-xl md:text-2xl font-semibold mb-2">
                  {edu.degree}
                </h3>

                <p className="text-sm uppercase tracking-widest text-gray-500 mb-2">
                  {edu.year}
                </p>

                <p className="text-gray-600">{edu.institution}</p>

                {edu.specialization && (
                  <p className="text-sm text-gray-500 mt-2">
                    Specialization: {edu.specialization}
                  </p>
                )}
              </div>

              {/* DOT */}
              <div
                className="absolute left-5 md:left-1/2 md:-translate-x-1/2
                           w-4 h-4 rounded-full bg-gray-800"
              ></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
