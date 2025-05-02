import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Moon, Sun, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  
  const navLinks = [
    { to: '/', text: 'Home' },
    { to: '/marking-scheme', text: 'Marking Scheme' },
    { to: '/exam-tips', text: 'Exam Tips' },
    { to: '/resources', text: 'Resources' },
  ];
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };
  
  return (
    <header className="bg-[#FFF7EB] dark:bg-gray-800 shadow-sm sticky top-0 z-50 transition-colors duration-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2" onClick={closeMenu}>
            <GraduationCap size={28} className="text-primary-500 dark:text-primary-400" />
            <span className="font-bold text-xl text-[#333333] dark:text-white">Markton</span>
          </Link>
          
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-medium ${
                  isActive(link.to)
                    ? 'text-primary-500 dark:text-primary-400'
                    : 'text-[#6B7280] dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400'
                } transition-colors duration-200`}
              >
                {link.text}
              </Link>
            ))}
          </nav>
          
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-[#6B7280] dark:text-gray-300 hover:bg-[#FFF7EB] dark:hover:bg-gray-700 focus:outline-none transition-colors duration-200"
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? (
                <Sun size={20} className="text-secondary-500" />
              ) : (
                <Moon size={20} />
              )}
            </button>
            
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-md text-[#6B7280] dark:text-gray-300 hover:bg-[#FFF7EB] dark:hover:bg-gray-700 focus:outline-none transition-colors duration-200"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="md:hidden bg-[#FFF7EB] dark:bg-gray-800 shadow-md transition-colors duration-200"
        >
          <div className="px-4 pt-2 pb-4 space-y-1 border-t border-gray-200 dark:border-gray-700">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={closeMenu}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive(link.to)
                    ? 'bg-primary-50 dark:bg-primary-900/30 text-primary-500 dark:text-primary-400'
                    : 'text-[#6B7280] dark:text-gray-300 hover:bg-[#FFF7EB] dark:hover:bg-gray-700'
                } transition-colors duration-200`}
              >
                {link.text}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;