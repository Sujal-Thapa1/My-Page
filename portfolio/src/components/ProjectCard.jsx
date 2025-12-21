import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div
      className="bg-white rounded-xl border border-neutral-300 shadow-lg overflow-hidden
                    hover:scale-105 hover:border-blue-500
                    transition-all duration-300 ease-in-out cursor-pointer flex flex-col
                    dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-purple-500/30"
    >
      {/* Image Container */}
      <div className="relative w-full h-48 overflow-hidden rounded-t-xl">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Card Content */}
      <div className="p-6 flex-grow">
        <h3 className="text-2xl font-bold text-gray-900 mb-2 dark:text-white">
          {project.title}
        </h3>
        <p className="text-gray-700 text-base mb-4 line-clamp-3 dark:text-gray-400">
          {project.description}
        </p>
      </div>

      {/* Footer with Action Links */}
      <div className="flex justify-between items-center px-6 py-4 border-t border-gray-200 dark:border-neutral-800">
        <a
          href={project.liveLink}
          target={project.status === "finished" ? "_blank" : ""}
          rel="noopener noreferrer"
          className="text-purple-600 hover:text-purple-800 text-sm font-medium
                     hover:underline transition-colors duration-200 dark:text-purple-400 dark:hover:text-purple-300"
        >
          {project.status === "finished" ? "Completed" : "In Progress"}
        </a>
        <a
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 text-sm font-medium
                     hover:underline transition-colors duration-200 dark:text-blue-400 dark:hover:text-blue-300"
        >
          GitHub
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
