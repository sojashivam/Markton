import React from 'react';
import { motion } from 'framer-motion';

interface PageHeaderProps {
  title: string;
  description?: string;
  icon?: React.ReactNode;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, description, icon }) => {
  return (
    <motion.div 
      className="bg-gradient-to-r from-primary-50/10 via-primary-50/5 to-transparent dark:from-primary-900/20 dark:via-primary-900/10 dark:to-transparent py-8 md:py-12"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          {icon && (
            <motion.div 
              className="mr-4 text-primary-500 dark:text-primary-400"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.3 }}
            >
              {icon}
            </motion.div>
          )}
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-[#333333] dark:text-white">
              {title}
            </h1>
            {description && (
              <p className="mt-2 text-[#6B7280] dark:text-gray-400">
                {description}
              </p>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PageHeader;