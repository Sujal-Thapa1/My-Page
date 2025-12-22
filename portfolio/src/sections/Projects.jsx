import React from "react";
import ProjectCard from "../components/ProjectCard"; // Import the ProjectCard component

// Dummy Project Data (will need image updates in ProjectCard)
const projectsData = [
  {
    title: "MSu Shuttle Service",
    description:
      "A smart inter-campus transportation management system for faculty, admins, and drivers.",
    liveLink: "",
    githubLink: "https://github.com/orgs/MSU-Shuttle-Service/repositories",
    image: "/images/msu-shuttle.jpeg",
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
      "A simple gradient color maker showcasing my projects, skills, and experience with modern web tech.",
    liveLink: "#",
    githubLink:
      "https://github.Ccom/Sujal-Thapa1/React-Projects/tree/main/Gradient%20Color%20Maker/GradientColorMaker",
    image: "/images/gradient-maker.png",,
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-12 text-white">
          Projects
        </h2>
        <p className="text-lg text-gray-300 text-center max-w-2xl mx-auto mb-16">
          Explore a selection of real-world projects, demonstrating diverse
          technologies and problem-solving approaches.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
