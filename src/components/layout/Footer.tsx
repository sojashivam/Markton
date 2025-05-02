import React from 'react';
import { Heart, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#FFF7EB] dark:bg-gray-800 py-8 border-t border-gray-200 dark:border-gray-700 transition-colors duration-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="flex flex-col space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <GraduationCap size={24} className="text-primary-500 dark:text-primary-400" />
              <span className="font-bold text-xl text-[#333333] dark:text-white">Markton</span>
            </Link>
            <p className="text-sm text-[#6B7280] dark:text-gray-400">
              Your comprehensive solution for academic grade calculations
              and exam preparation resources.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-[#333333] dark:text-white uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-[#6B7280] dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/marking-scheme" className="text-sm text-[#6B7280] dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-200">
                  Marking Scheme
                </Link>
              </li>
              <li>
                <Link to="/exam-tips" className="text-sm text-[#6B7280] dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-200">
                  Exam Tips
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold text-[#333333] dark:text-white uppercase tracking-wider mb-4">
              Resources
            </h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://www.rtu.ac.in/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-[#6B7280] dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-200"
                >
                  RTU Official Website
                </a>
              </li>
              <li>
                <a 
                  href="https://nptel.ac.in/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-[#6B7280] dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-200"
                >
                  NPTEL Courses
                </a>
              </li>
              <li>
                <Link to="/resources" className="text-sm text-[#6B7280] dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-200">
                  More Resources
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-col items-center justify-center">
            <p className="text-sm text-[#6B7280] dark:text-gray-400 flex items-center">
              Made with <Heart size={16} className="text-accent-500 mx-1" /> for Students
            </p>
            <p className="text-sm text-[#6B7280] dark:text-gray-500 mt-2">
              © {currentYear} Markton. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;