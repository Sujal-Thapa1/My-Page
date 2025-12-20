import React from "react";

const educations = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "Medhavi Skills University",
    year: "2024–Present",
    specialization: "Software Engineering",
  },
  {
    degree: "Higher Secondary Education (10+2)",
    institution: "Scottish University Mission Institution",
    year: "2023",
    specialization: "Science Stream",
  },
];

const Education = () => {
  return (
    <section
      id="education"
      className="py-20 bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Education</h2>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            {educations.map((edu, index) => (
              <div
                key={index}
                className="bg-gray-300 dark:bg-gray-700 p-6 rounded-lg shadow-lg mb-6"
              >
                <h3 className="text-2xl font-semibold mb-2">{edu.degree}</h3>
                <p className="text-lg text-gray-400 mb-2">
                  {edu.institution} | {edu.year}
                </p>
                {edu.specialization && (
                  <p className="text-md">
                    Specialization: {edu.specialization}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
