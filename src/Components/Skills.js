import React from 'react';

export default function Skills() {
  const skills = [
    { name: "Creativity", level: 80 },
    { name: "Programming", level: 40 },
    { name: "Leadership", level: 70 },
    { name: "Problem Solving", level: 75 },
  ];

  return (
    <section className="bg-white dark:bg-gray-800 rounded-xl shadow p-6">
      <h2 className="text-2xl font-semibold mb-6 text-blue-600 dark:text-blue-400">Skills</h2>
      <div className="space-y-6">
        {skills.map((skill, index) => (
          <div key={index}>
            <div className="flex justify-between mb-1">
              <span className="text-gray-800 dark:text-gray-100 font-medium">{skill.name}</span>
              <span className="text-gray-500 dark:text-gray-400 text-sm">{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4">
              <div
                className="bg-blue-500 dark:bg-blue-400 h-4 rounded-full transition-all duration-500 ease-in-out"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
