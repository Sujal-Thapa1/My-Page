import React from 'react';

const AchievementCard = ({ achievement }) => {
  return (
    <div
      className="group relative bg-gray-300 dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 h-80 cursor-pointer
                 md:block md:p-0" // md:block for desktop hover effect
    >
      {/* Mobile-specific layout (default) */}
      <div className="flex flex-col h-full md:hidden"> {/* Use flex-col for mobile stacking */}
        <div className="flex flex-row items-start p-2 sm:p-4"> {/* Top row: Image and Title/Duration */}
          {/* Image */}
          <img
            src={achievement.image}
            alt={achievement.title}
            className="w-32 h-32 object-cover rounded-md flex-shrink-0 mr-4"
          />
          {/* Title and Duration */}
          <div className="flex-1 text-left">
            <h3 className="text-xl font-semibold mb-1">{achievement.title}</h3>
            <p className="text-md text-gray-400">{achievement.duration}</p>
          </div>
        </div>
        {/* Description (below image-title-duration block) */}
        <div className="p-2 sm:p-4 pt-0 text-left">
          <h4 className="text-lg font-semibold mt-2">Description</h4>
          <p className="text-sm">{achievement.description}</p>
        </div>
      </div>

      {/* Desktop-specific layout (md: and up, with hover effect) */}
      <img
        src={achievement.image}
        alt={achievement.title}
        className="hidden md:block w-full h-full object-cover transition-opacity duration-300 md:group-hover:opacity-20"
      />
      <div
        className="hidden md:absolute md:inset-0 md:bg-black md:bg-opacity-50 md:dark:bg-opacity-70 md:flex md:flex-col md:justify-end md:p-4 md:transform md:translate-y-full md:group-hover:translate-y-0 md:transition-transform md:duration-500 md:ease-in-out"
      >
        <h3 className="text-xl font-semibold mb-2">{achievement.title}</h3>
        <p className="text-md text-gray-400 mb-2">{achievement.duration}</p>
        <p className="text-sm">{achievement.description}</p>
      </div>
    </div>
  );
};

export default AchievementCard;
