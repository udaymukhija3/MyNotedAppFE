import React, { useState } from 'react';

const Features = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  // Mock data for courses
  const courses = [
    { id: 1, title: 'The Future of Solar Energy', chapters: 10, concepts: 20 },
    { id: 2, title: 'The Future of Solar Energy', chapters: 10, concepts: 20 },
    { id: 3, title: 'swarm robotics', chapters: 1, concepts: 20 },
    { id: 4, title: 'Biochemical Engineering', chapters: 13, concepts: 79 },
    { id: 5, title: 'Biochemical Engineering', chapters: 13, concepts: 79 },
    { id: 6, title: 'Smart Blind Stick', chapters: 1, concepts: 5 },
    { id: 7, title: 'Plant Disease Detection', chapters: 1, concepts: 12 },
    { id: 8, title: 'Pomodoro Technique', chapters: 1, concepts: 1 },
    { id: 9, title: 'Marketing Agro', chapters: 1, concepts: 16 },
    { id: 10, title: 'Principles of Strategic Management Accounting', chapters: 3, concepts: 36 },
    { id: 11, title: 'Principles of Strategic Management Accounting', chapters: 3, concepts: 36 },
    { id: 12, title: 'Origami For Kids', chapters: 1, concepts: 44 },
    // Add more courses as needed
  ];

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-semibold text-blue-900">All Courses</h2>
          <div className="relative">
            <input
              type="text"
              className="py-2 px-4 border border-gray-300 rounded-full text-sm w-64"
              placeholder="Search for all Courses"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <svg className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div key={course.id} className="bg-gray-50 rounded-xl p-5 hover:shadow-md transition border border-gray-100">
              <div className="flex justify-between items-start">
                <h3 className="text-blue-900 font-semibold text-lg mb-2">{course.title}</h3>
                <button className="text-green-500 hover:text-green-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </button>
              </div>
              <p className="text-sm text-gray-600">
                Chapters ({course.chapters}), Concepts ({course.concepts})
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;