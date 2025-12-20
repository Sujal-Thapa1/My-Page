import React from 'react';

const projects = [
  {
    title: 'Project One',
    description: 'A brief description of the project, its purpose, and the value it brings.',
    tech: ['React', 'Tailwind CSS', 'Node.js'],
    github: '#',
    live: '#',
  },
  {
    title: 'Project Two',
    description: 'A brief description of the project, its purpose, and the value it brings.',
    tech: ['React', 'Express', 'MongoDB'],
    github: '#',
    live: '#',
  },
  {
    title: 'Project Three',
    description: 'A brief description of the project, its purpose, and the value it brings.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: '#',
    live: '#',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-200 text-gray-900 dark:bg-gray-800 dark:text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project => (
            <div key={project.title} className="bg-gray-300 dark:bg-gray-700 p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="mb-4">{project.description}</p>
              <div className="flex flex-wrap mb-4">
                {project.tech.map(tech => (
                  <span key={tech} className="bg-gray-400 dark:bg-gray-600 text-xs font-semibold mr-2 mb-2 px-2.5 py-0.5 rounded-full">{tech}</span>
                ))}
              </div>
              <div className="flex justify-between">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">GitHub</a>
                <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-green-400 hover:underline">Live Demo</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
