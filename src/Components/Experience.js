import React from 'react';

export default function Experience() {
  return (
    <section className="bg-white dark:bg-gray-800 rounded-xl shadow p-6">
      <h2 className="text-2xl font-semibold mb-4 text-blue-600 dark:text-blue-400">Experience</h2>
      <div className="space-y-6">

        <div>
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">Cisco Networking Academy – CCNA</h3>
          <p className="text-gray-600 dark:text-gray-400 italic">Completed 2 CCNA courses (Year – Year)</p>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mt-2">
            <li>Gained strong understanding of networking fundamentals</li>
            <li>Configured routers, switches, and basic IP addressing</li>
            <li>Hands-on labs and simulations using Packet Tracer</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">Self-Led Projects – Programming Skills</h3>
          <p className="text-gray-600 dark:text-gray-400 italic">Ongoing</p>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mt-2">
            <li>Developed proficiency in HTML, CSS, JavaScript, and React</li>
            <li>Built personal projects and portfolio website</li>
            <li>Applied Git & GitHub for version control</li>
          </ul>
        </div>

      </div>
    </section>
  );
}
