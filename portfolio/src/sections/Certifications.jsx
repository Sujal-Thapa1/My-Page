import React from 'react';

const certifications = [
  {
    name: 'Full-Stack Web Development',
    platform: 'Coursera',
    year: '2023',
    image: 'https://placehold.co/400x200?text=Certificate+Image+1', // Placeholder image URL
  },
  {
    name: 'React - The Complete Guide',
    platform: 'Udemy',
    year: '2022',
    image: 'https://placehold.co/400x200?text=Certificate+Image+2', // Placeholder image URL
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-gray-300 dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              {cert.image && (
                <img src={cert.image} alt={cert.name} className="w-full h-48 object-cover rounded-md mb-4" />
              )}
              <h3 className="text-2xl font-semibold mb-2">{cert.name}</h3>
              <p className="text-lg text-gray-400">{cert.platform} | {cert.year}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
