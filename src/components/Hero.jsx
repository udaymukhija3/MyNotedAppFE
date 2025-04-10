import React, { useState } from 'react';

const Hero = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <section className="bg-indigo-400 py-16">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold text-white mb-2">
          What do you want to learn today ?
        </h1>
        <p className="text-white mb-8">
          Turn PDFs, topics, or table of contents into interactive Youtube lessons, quiz and flashcards easily
        </p>
        
        <div className="max-w-2xl mx-auto mb-8">
          <div className="flex">
            <input
              type="text"
              className="flex-grow py-3 px-5 rounded-l-md border-0 focus:ring-2 focus:ring-blue-500"
              placeholder="I want to learn dancing"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="bg-blue-500 text-white px-6 py-3 rounded-r-md hover:bg-blue-600 transition">
              Create Course
            </button>
          </div>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4">
          <button className="bg-white text-gray-700 px-6 py-3 rounded-full hover:bg-gray-100 transition flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Upload your PDF textbook
          </button>
          <button className="bg-yellow-100 text-gray-700 px-6 py-3 rounded-full hover:bg-yellow-200 transition flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
            </svg>
            Upload Table of Contents Image file
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;