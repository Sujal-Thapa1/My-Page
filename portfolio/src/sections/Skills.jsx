import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaCloud,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiExpress,
  SiMysql,
  SiMongodb,
  SiPostman,
} from "react-icons/si";

const skills = [
  { name: "HTML5", icon: FaHtml5, color: "text-orange-500" },
  { name: "CSS3", icon: FaCss3Alt, color: "text-blue-500" },
  { name: "JavaScript", icon: FaJsSquare, color: "text-yellow-400" },
  { name: "React", icon: FaReact, color: "text-cyan-400" },
  { name: "Tailwind", icon: SiTailwindcss, color: "text-sky-400" },
  { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
  { name: "Express", icon: SiExpress, color: "text-gray-600" },
  { name: "MySQL", icon: SiMysql, color: "text-blue-600" },
  { name: "MongoDB", icon: SiMongodb, color: "text-green-600" },
  { name: "GitHub", icon: FaGithub, color: "text-gray-800" },
  { name: "Postman", icon: SiPostman, color: "text-orange-600" },
  { name: "AWS", icon: FaCloud, color: "text-yellow-500" },
];

const Skills = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
      },
    }),
  };

  return (
    <section id="skills" className="py-40 bg-[#F6F1EB] text-gray-800">
      <div ref={ref} className="container mx-auto px-6">
        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-center mb-24"
        >
          Skills & <span className="text-orange-500">Technologies</span>
        </motion.h2>

        {/* HEXAGON GRID */}
        <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={itemVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="relative w-36 h-40 sm:w-40 sm:h-44 group perspective"
            >
              {/* Hexagon with 3D effect */}
              <div
                className="absolute inset-0 bg-gray-900 text-white flex flex-col items-center justify-center
                           clip-hexagon shadow-lg transition-transform duration-300
                           group-hover:scale-105 group-hover:rotate-3 group-hover:shadow-2xl"
              >
                <skill.icon className={`text-4xl mb-2 ${skill.color}`} />
                <span className="text-sm tracking-wide uppercase">
                  {skill.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* HEXAGON CLIP PATH */}
      <style>
        {`
          .clip-hexagon {
            clip-path: polygon(
              25% 6%,
              75% 6%,
              100% 50%,
              75% 94%,
              25% 94%,
              0% 50%
            );
          }
          /* Optional perspective for slight 3D hover */
          .perspective {
            perspective: 800px;
          }
        `}
      </style>
    </section>
  );
};

export default Skills;
