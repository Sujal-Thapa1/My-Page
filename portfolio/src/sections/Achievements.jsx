import React from "react";
import AchievementCard from "../components/AchievementCard"; // Import the new component

const achievements = [
  {
    title: "Captain of College Basketball Team",
    duration: "2019–2022",
    description:
      "Led the team to two regional championships and fostered a culture of teamwork and dedication.",
    image: "https://placehold.co/400x300?text=Basketball",
  },
  {
    title: "Winner, National Hackathon 2023",
    duration: "2023",
    description:
      "Developed a prize-winning mobile application for local community engagement in under 24 hours.",
    image: "https://placehold.co/400x300?text=Hackathon",
  },
  {
    title: "President, Coding Club",
    duration: "2021–2022",
    description:
      "Organized workshops and events for over 100 members, promoting coding skills and collaboration.",
    image: "https://placehold.co/400x300?text=Coding+Club",
  },
  {
    title: "Dean's List for Academic Excellence",
    duration: "2020, 2021",
    description:
      "Maintained a GPA above 3.8, demonstrating strong academic performance.",
    image: "https://placehold.co/400x300?text=Academics",
  },
];

const Achievements = () => {
  return (
    <section
      id="achievements"
      className="py-20 bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          Achievements & Extracurriculars
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <AchievementCard key={index} achievement={achievement} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
