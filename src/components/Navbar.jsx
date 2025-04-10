import React from 'react';
import notebookIcon from '../assets/notebook-icon.svg';
// If you don't have the SVG, you can create a div with the letter "N" instead
// and remove the import above

const Navbar = () => {
  return (
    <header className="bg-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <div className="flex items-center">
            {/* If you have the SVG file */}
            <img src={notebookIcon} alt="Notebook Icon" className="h-6 w-6 mr-1" />
            
            {/* If you don't have the SVG file, use this instead:
            <div className="w-6 h-6 bg-blue-800 rounded-sm flex items-center justify-center text-white text-xs font-bold">
              N
            </div> */}
            
            <span className="text-blue-800 font-semibold text-xl">NOTED</span>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="bg-gray-100 rounded-lg px-4 py-2 text-sm">
            <div className="text-red-500 font-medium">
              You are 5 times more likely to finish learning
            </div>
            <div className="flex justify-center">
              <span className="text-red-500">by signing up</span>
            </div>
            <div className="text-gray-500 text-xs text-center">
              (No Credit Card Required)
            </div>
          </div>
          <button className="bg-blue-400 text-white px-6 py-2 rounded-md hover:bg-blue-500 transition">
            Log in
          </button>
          <button className="bg-blue-400 text-white px-6 py-2 rounded-md hover:bg-blue-500 transition">
            Sign up
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;