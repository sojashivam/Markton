import React from 'react';
import { Calculator, Book, Lightbulb } from 'lucide-react';
import { motion } from 'framer-motion';
import SGPACalculator from '../components/calculator/SGPACalculator';
import CGPACalculator from '../components/calculator/CGPACalculator';
import MotivationalQuote from '../components/common/MotivationalQuote';
import Layout from '../components/layout/Layout';
import Card from '../components/common/Card';
import { calculatePercentage } from '../data/gradePoints';

const Home: React.FC = () => {
  return (
    <Layout>
      <motion.div
        className="container mx-auto px-4 sm:px-6 lg:px-8 py-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-8">
          <motion.h1 
            className="text-3xl md:text-4xl font-bold text-center text-[#333333] dark:text-white mb-4"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            Markton - SGPA & CGPA Calculator
          </motion.h1>
          <motion.p 
            className="text-center text-[#6B7280] dark:text-gray-400 max-w-3xl mx-auto"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Your comprehensive solution for calculating grades and managing academic performance.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="mb-6">
              <MotivationalQuote />
            </div>
            
            <SGPACalculator />
            <CGPACalculator />
          </div>
          
          <div className="space-y-6">
            <Card className="relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-primary-100 dark:bg-primary-900/50 rounded-bl-full z-0"></div>
              <div className="relative z-10">
                <h2 className="flex items-center text-xl font-semibold mb-3 text-[#333333] dark:text-white">
                  <Calculator className="mr-2 text-primary-500 dark:text-primary-400" size={20} />
                  Quick Formulas
                </h2>
                <div className="space-y-3">
                  <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-3">
                    <p className="text-sm font-medium text-[#333333] dark:text-gray-200">SGPA Formula:</p>
                    <p className="text-sm text-[#6B7280] dark:text-gray-400 mt-1">
                      Sum(Credit × Grade Point) / Sum(Credit)
                    </p>
                  </div>
                  <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-3">
                    <p className="text-sm font-medium text-[#333333] dark:text-gray-200">CGPA Formula:</p>
                    <p className="text-sm text-[#6B7280] dark:text-gray-400 mt-1">
                      Average of all semester SGPAs
                    </p>
                  </div>
                  <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-3">
                    <p className="text-sm font-medium text-[#333333] dark:text-gray-200">Percentage Formula:</p>
                    <p className="text-sm text-[#6B7280] dark:text-gray-400 mt-1">
                      {`(CGPA - 0.75) × 10`}
                    </p>
                  </div>
                </div>
              </div>
            </Card>
            
            <Card className="relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-secondary-100 dark:bg-secondary-900/50 rounded-bl-full z-0"></div>
              <div className="relative z-10">
                <h2 className="flex items-center text-xl font-semibold mb-3 text-[#333333] dark:text-white">
                  <Book className="mr-2 text-secondary-500 dark:text-secondary-400" size={20} />
                  Resources
                </h2>
                <ul className="space-y-2">
                  <li>
                    <a 
                      href="/syllabus" 
                      className="text-primary-500 dark:text-primary-400 hover:underline flex items-center"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-primary-500 dark:bg-primary-400 inline-block mr-2"></span>
                      Semester-wise Syllabus
                    </a>
                  </li>
                  <li>
                    <a 
                      href="/papers" 
                      className="text-primary-500 dark:text-primary-400 hover:underline flex items-center"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-primary-500 dark:bg-primary-400 inline-block mr-2"></span>
                      Previous Year Papers
                    </a>
                  </li>
                  <li>
                    <a 
                      href="/notes" 
                      className="text-primary-500 dark:text-primary-400 hover:underline flex items-center"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-primary-500 dark:bg-primary-400 inline-block mr-2"></span>
                      Subject Notes
                    </a>
                  </li>
                  <li>
                    <a 
                      href="/exam-tips" 
                      className="text-primary-500 dark:text-primary-400 hover:underline flex items-center"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-primary-500 dark:bg-primary-400 inline-block mr-2"></span>
                      Exam Preparation Tips
                    </a>
                  </li>
                </ul>
              </div>
            </Card>
            
            <Card>
              <h2 className="flex items-center text-xl font-semibold mb-3 text-[#333333] dark:text-white">
                <Lightbulb className="mr-2 text-secondary-500" size={20} />
                Did You Know?
              </h2>
              <p className="text-[#6B7280] dark:text-gray-300 text-sm">
                To score 80% in RTU, you need to achieve a CGPA of 8.75. 
                <br /><br />
                The formula shows: {`${calculatePercentage(8.75).toFixed(2)}% = (8.75 - 0.75) × 10`}
              </p>
            </Card>
          </div>
        </div>
      </motion.div>
    </Layout>
  );
};

export default Home;