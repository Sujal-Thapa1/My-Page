import React from "react";

const educations = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "Medhavi Skills University",
    year: "2024–Present",
    specialization: "Software Engineering",
  },
  {
    degree: "Diploma in Computer Applications",
    institution: "AISECT University",
    year: "2023-2024",
    specialization: "Computer Applications",
  },
  {
    degree: "Higher Secondary Education (10+2)",
    institution: "Scottish University Mission Institution",
    year: "2021-2023",
    specialization: "Science Stream",
  },
];

const Education = () => {
  return (
    <section
      id="education"
      className="py-32 bg-gray-900 text-white rounded-3xl"
    >
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-16 text-white">
          Education
        </h2>
        <div className="relative">
          {/* Vertical line - responsive positioning */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-0.5 bg-gray-300 h-full"></div>

          {educations.map((edu, index) => (
            <div
              key={index}
              className={`flex w-full my-8 ${
                index % 2 === 0 ? "justify-start" : "justify-end" // Mobile: content on right, md+: alternating
              }`}
            >
              {/* Content Block */}
              <div
                className={`w-full md:w-1/2 p-4 ${
                  index % 2 === 0
                    ? "md:order-1 md:text-right md:pr-8"
                    : "md:order-3 md:text-left md:pl-4"
                } text-left pl-16`} // Mobile: pl-16 for dot, Desktop: p-4 (overwritten by md:pr-8 or md:pl-4)
              >
                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-2 text-white">
                  {edu.degree}
                </h3>
                <p className="text-sm sm:text-base uppercase tracking-wider mt-1 mb-2 text-gray-300">
                  {edu.year}
                </p>
                <p className="text-base sm:text-lg text-gray-300">
                  {edu.institution}
                </p>
                {edu.specialization && (
                  <p className="text-sm sm:text-base text-gray-300 mt-2">
                    Specialization: {edu.specialization}
                  </p>
                )}
              </div>

              {/* Central Dot - responsive positioning */}
              <div
                className="z-10 flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-blue-500 border-4 border-white shadow-lg order-2
                            absolute left-4 md:relative md:left-auto md:-translate-x-1/2"
              >
                <span className="text-xs sm:text-sm font-bold text-white">
                  {index + 1}
                </span>
              </div>

              {/* Spacer Div (only visible on md+ for alternating layout) */}
              <div
                className={`hidden md:block w-1/2 p-4 ${
                  index % 2 === 0 ? "md:order-3" : "md:order-1"
                }`}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
