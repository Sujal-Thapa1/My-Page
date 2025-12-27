import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ProjectCard from "../components/ProjectCard";

const projectsData = [
  {
    title: "MSU Shuttle Service",
    description:
      "A smart inter-campus transportation management system for faculty, admins, and drivers.",
    liveLink: "",
    githubLink: "https://github.com/orgs/MSU-Shuttle-Service/repositories",
    image: "/images/msu-shuttle.png",
    status: "in-progress",
  },
  {
    title: "MSU CSE Website",
    description:
      "Official website for the CSE Department, MSU, detailing academics, faculty, and research.",
    liveLink: "",
    githubLink: "https://github.com/msu-scse/scse-website",
    image: "/images/cse-website.jpeg",
    status: "in-progress",
  },
  {
    title: "Gradient Color Maker",
    description:
      "A web-based gradient color generator showcasing modern UI practices and React fundamentals.",
    liveLink: "#",
    githubLink:
      "https://github.com/Sujal-Thapa1/React-Projects/tree/main/Gradient%20Color%20Maker/GradientColorMaker",
    image: "/images/gradient-maker.png",
    status: "finished",
  },
];

const Projects = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
      },
    }),
  };

  return (
    <section id="projects" className="py-40 bg-[#F6F1EB] text-gray-800">
      <div ref={ref} className="container mx-auto px-6">
        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-24"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold mb-6">
            Projects
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            A selection of academic and real-world projects that demonstrate my
            approach to problem-solving, system design, and modern web
            development.
          </p>
        </motion.div>

        {/* PROJECT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
