import React from 'react';

export default function Education() {
  return (
    <section className="bg-white dark:bg-gray-800 rounded-xl shadow p-6">
      <h2 className="text-2xl font-semibold mb-6 text-blue-600 dark:text-blue-400">Education</h2>
      <div className="space-y-6">
        
        <div>
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
            Bachelor in Information Technology
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            University of the Cordilleras – College of Information Technology and Computer Science
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 italic">School Year 2023–2024 (Ongoing)</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
            Senior High School – HUMSS Strand
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            St. William's Academy, Bulanao Inc.
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 italic">School Year 2022–2023</p>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mt-2">
            <li>Lyrist and member of the St. William's Academy Drum and Lyre Band</li>
            <li>Active member of the St. William's Cathedral Parish Youth Ministry</li>
          </ul>
        </div>

      </div>
    </section>
  );
}
