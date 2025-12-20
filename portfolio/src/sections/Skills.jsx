import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaSass,
  FaCloud, // Ensure FaCloud is imported
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiExpress,
  SiMysql,
  SiMongodb,
  SiPostman,
  SiVite,
  // Removed unused specific AWS service imports
} from "react-icons/si";

const mainSkillCategories = {
  "Web Development": [
    { name: "HTML5", icon: FaHtml5, color: "text-orange-500", percentage: 90 },
    { name: "CSS3", icon: FaCss3Alt, color: "text-blue-500", percentage: 85 },
    { name: "JavaScript", icon: FaJsSquare, color: "text-yellow-500", percentage: 80 },
    { name: "React.js", icon: FaReact, color: "text-blue-400", percentage: 75 },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-teal-400", percentage: 90 },
    { name: "Sass", icon: FaSass, color: "text-pink-500", percentage: 70 },
    { name: "Node.js", icon: FaNodeJs, color: "text-green-500", percentage: 70 },
    { name: "Express.js", icon: SiExpress, color: "text-gray-400", percentage: 65 },
    { name: "MySQL", icon: SiMysql, color: "text-blue-600", percentage: 75 },
    { name: "MongoDB", icon: SiMongodb, color: "text-green-600", percentage: 60 },
    { name: "Git", icon: FaGitAlt, color: "text-orange-600", percentage: 85 },
    { name: "GitHub", icon: FaGithub, color: "text-purple-500", percentage: 80 },
    { name: "Postman", icon: SiPostman, color: "text-orange-500", percentage: 70 },
    { name: "Vite", icon: SiVite, color: "text-yellow-400", percentage: 75 },
  ],
  "Cloud Computing": [
    { name: "AWS", icon: FaCloud, color: "text-orange-400", percentage: 80 }, 
  ],
};

const Skills = () => {
  const awsServices = ["EC2", "VPC", "S3", "CloudWatch"]; // Define AWS services here

  return (
    <>
      <section id="skills" className="py-20 bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Skills</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8"> {/* Main grid for the two large skill categories */}
            {Object.entries(mainSkillCategories).map(([mainCategory, skills]) => (
              <div key={mainCategory} className="bg-gray-200 dark:bg-gray-800 p-8 rounded-lg shadow-lg"> {/* Large card for each main category */}
                <h3 className="text-3xl font-semibold text-center mb-10">{mainCategory}</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-items-center"> {/* Inner grid for individual skills */}
                  {skills.map((skill, index) => {
                    const radius = 45;
                    const circumference = 2 * Math.PI * radius;
                    const strokeDashoffset =
                      circumference - (skill.percentage / 100) * circumference;

                    return (
                      <div
                        key={index}
                        className="group relative flex flex-col items-center justify-center bg-gray-300 dark:bg-gray-700 rounded-full shadow-lg transform hover:scale-105 transition duration-300 cursor-pointer w-28 h-28"
                      >
                        <svg
                          className="w-full h-full absolute top-0 left-0"
                          viewBox="0 0 100 100"
                        >
                          <circle
                            strokeWidth="5"
                            stroke="#4B5563" // Gray-600 for background
                            fill="transparent"
                            r={radius}
                            cx="50"
                            cy="50"
                          />
                          <circle
                            strokeWidth="5"
                            stroke={
                              skill.color.split("-")[0] +
                              "-" +
                              skill.color.split("-")[1]
                            } // dynamic color
                            fill="transparent"
                            r={radius}
                            cx="50"
                            cy="50"
                            strokeDasharray={circumference}
                            strokeDashoffset={strokeDashoffset}
                            strokeLinecap="round"
                            transform="rotate(-90 50 50)"
                            className={`${skill.color}`}
                          />
                        </svg>
                        <div className="relative z-10 flex flex-col items-center justify-center">
                          <skill.icon
                            className={`text-3xl mb-1 ${skill.color} transition-colors duration-300 group-hover:text-white`}
                          />
                          <p className="text-xs font-semibold text-center">
                            {skill.name}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
                {mainCategory === "Cloud Computing" && (
                  <div className="mt-8 text-center">
                    <h4 className="text-xl font-semibold mb-4">Services Used:</h4>
                    <ul className="list-none space-y-2">
                      {awsServices.map((service, idx) => (
                        <li key={idx} className="bg-gray-300 dark:bg-gray-700 py-2 rounded-md">{service}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
export default Skills;
