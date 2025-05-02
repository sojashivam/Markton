import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';
import { pastPapers } from '../../data/resources';
import Card from '../common/Card';

const PapersGrid: React.FC = () => {
  const [selectedSemester, setSelectedSemester] = useState<number | null>(null);
  
  const filteredPapers = selectedSemester 
    ? pastPapers.filter(paper => paper.semester === selectedSemester)
    : pastPapers;
  
  const semesters = Array.from(new Set(pastPapers.map(paper => paper.semester)))
    .sort((a, b) => a - b);
  
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2">
        <button
          className={`btn ${selectedSemester === null ? 'btn-primary' : 'btn-outline'}`}
          onClick={() => setSelectedSemester(null)}
        >
          All Semesters
        </button>
        {semesters.map(semester => (
          <button
            key={semester}
            className={`btn ${selectedSemester === semester ? 'btn-primary' : 'btn-outline'}`}
            onClick={() => setSelectedSemester(semester)}
          >
            {semester}st Semester
          </button>
        ))}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredPapers.map((paper) => (
          <motion.div
            key={paper.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="h-full">
              <div className="flex items-center mb-3">
                <FileText size={20} className="text-secondary-600 dark:text-secondary-400 mr-2" />
                <span className="text-gray-600 dark:text-gray-400 text-sm">
                  {paper.year} Paper
                </span>
              </div>
              <h3 className="font-medium text-gray-900 dark:text-white mb-3">
                {paper.subject}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Semester {paper.semester}
              </p>
              <div className="mt-auto">
                <a 
                  href={paper.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-outline w-full text-center"
                >
                  Download
                </a>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
      
      {filteredPapers.length === 0 && (
        <Card className="text-center py-8">
          <p className="text-gray-600 dark:text-gray-400">No papers found for the selected semester.</p>
        </Card>
      )}
    </div>
  );
};

export default PapersGrid;