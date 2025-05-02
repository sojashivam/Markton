import React from 'react';
import { Link } from 'lucide-react';
import { motion } from 'framer-motion';
import Layout from '../components/layout/Layout';
import PageHeader from '../components/common/PageHeader';
import Card from '../components/common/Card';
import { resources } from '../data/resources';

const Resources: React.FC = () => {
  return (
    <Layout>
      <PageHeader 
        title="Useful Resources"
        description="Helpful links and resources for RTU students"
        icon={<Link size={32} />}
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource, index) => (
            <motion.div
              key={resource.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">
                  {resource.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  {resource.description}
                </p>
                <span className="inline-block px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full mb-4">
                  {resource.type === 'website' ? 'Website' : 
                   resource.type === 'course' ? 'Course' : 
                   resource.type === 'announcement' ? 'Announcement' : 'Resource'}
                </span>
                <div className="mt-auto">
                  <a 
                    href={resource.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-primary w-full text-center"
                  >
                    Visit Resource
                  </a>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12">
          <h2 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">
            Additional Links
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <h3 className="font-medium text-lg text-gray-900 dark:text-white mb-3">
                RTU Official Resources
              </h3>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="https://www.rtu.ac.in/index/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary-600 dark:text-primary-400 hover:underline flex items-center"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-primary-600 dark:bg-primary-400 inline-block mr-2"></span>
                    RTU Official Website
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.rtu.ac.in/RTU/result-main" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary-600 dark:text-primary-400 hover:underline flex items-center"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-primary-600 dark:bg-primary-400 inline-block mr-2"></span>
                    RTU Results Portal
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.rtu.ac.in/RTU/syllabus" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary-600 dark:text-primary-400 hover:underline flex items-center"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-primary-600 dark:bg-primary-400 inline-block mr-2"></span>
                    Official Syllabus
                  </a>
                </li>
              </ul>
            </Card>
            
            <Card>
              <h3 className="font-medium text-lg text-gray-900 dark:text-white mb-3">
                Free Learning Resources
              </h3>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="https://www.youtube.com/c/NPTEL" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary-600 dark:text-primary-400 hover:underline flex items-center"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-primary-600 dark:bg-primary-400 inline-block mr-2"></span>
                    NPTEL YouTube Channel
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.geeksforgeeks.org/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary-600 dark:text-primary-400 hover:underline flex items-center"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-primary-600 dark:bg-primary-400 inline-block mr-2"></span>
                    GeeksforGeeks
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.javatpoint.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary-600 dark:text-primary-400 hover:underline flex items-center"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-primary-600 dark:bg-primary-400 inline-block mr-2"></span>
                    JavaTPoint
                  </a>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Resources;