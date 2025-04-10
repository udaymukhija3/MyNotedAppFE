import React from 'react';
import notebookIcon from '../assets/notebook-icon.svg';
// If you don't have the SVG, you can create a div with the letter "N" instead
// and remove the import above

const Footer = () => {
  return (
    <footer className="bg-white py-16 border-t">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="flex flex-col space-y-4">
            <div className="flex items-center">
              {/* If you have the SVG file */}
              <img src={notebookIcon} alt="Notebook Icon" className="h-6 w-6 mr-1" />
              
              {/* If you don't have the SVG file, use this instead:
              <div className="w-6 h-6 bg-blue-800 rounded-sm flex items-center justify-center text-white text-xs font-bold">
                N
              </div> */}
              
              <span className="text-blue-800 font-semibold text-xl">NOTED</span>
            </div>
            <p className="text-sm text-gray-600">
              Enabling Free Educational resources to the world
            </p>
            <a href="#" className="text-blue-800 mt-2 w-6 h-6">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-4">Resources</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-blue-800 hover:text-blue-600">Home</a></li>
              <li><a href="#" className="text-blue-800 hover:text-blue-600">Sign up</a></li>
              <li><a href="#" className="text-blue-800 hover:text-blue-600">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-4">Company</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-blue-800 hover:text-blue-600">About us</a></li>
              <li><a href="#" className="text-blue-800 hover:text-blue-600">Teams</a></li>
              <li><a href="#" className="text-blue-800 hover:text-blue-600">Contact us</a></li>
              <li><a href="#" className="text-blue-800 hover:text-blue-600">Terms</a></li>
              <li><a href="#" className="text-blue-800 hover:text-blue-600">Privacy</a></li>
              <li><a href="#" className="text-blue-800 hover:text-blue-600">Cookies</a></li>
              <li><a href="#" className="text-blue-800 hover:text-blue-600">Take down Notice</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-600 mb-6">
            Noted.watch is a non-profit educational platform designed to assist students preparing for a wide range of international and local examinations. All materials provided on this website are exclusively for personal educational purposes. By using this site, you acknowledge that you have reviewed and accepted our terms of use, cookie policy, and privacy policy.
          </p>
          <p className="text-sm text-gray-600 mb-10">
            Copyright Disclaimer: Pursuant to Section 107 of the Copyright Act of 1976, fair use is permitted for purposes such as criticism, commentary, news reporting, teaching, scholarship, and research. Fair use is a use permitted by copyright statute that might otherwise be infringing. This platform is dedicated to non-profit, educational, and personal use, with no intention to infringe upon copyright.
          </p>
          <p className="text-center text-sm text-gray-600">
            © Copyright 2024 mynoted.com. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;