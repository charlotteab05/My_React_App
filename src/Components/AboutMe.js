import React from 'react';

export default function AboutMe() {
  return (
    <section className="bg-white dark:bg-gray-800 rounded-xl shadow p-6">
      <h2 className="text-2xl font-semibold mb-4 text-blue-600 dark:text-blue-400">About Me</h2>
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
        Hi, I'm <span className="font-semibold text-blue-600 dark:text-blue-400">Charlotte Bawalan</span>, born in 
        Dacalan, Tanudan, in the beautiful province of Kalinga in 2004. I’m a proud full-blooded 
        <span className="italic"> yDakaran</span>.
      </p>
      <p className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed">
        I am currently a second-year student at the 
        <span className="font-semibold text-blue-600 dark:text-blue-400"> University of the Cordilleras</span>, 
        pursuing a Bachelor of Science in Information Technology, majoring in 
        <span className="font-medium"> Network and Security</span>.
      </p>
    </section>
  );
}
