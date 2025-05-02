import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({ children, className = '', onClick }) => {
  return (
    <motion.div
      className={`bg-[#FFF7EB] dark:bg-gray-800 rounded-xl shadow-md p-6 transition-all duration-200 ${onClick ? 'cursor-pointer' : ''} ${className}`}
      whileHover={onClick ? { y: -5 } : {}}
      whileTap={onClick ? { y: 0 } : {}}
      onClick={onClick}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
};

export default Card;