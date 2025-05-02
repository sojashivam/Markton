import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';
import { syllabusPDFs } from '../../data/resources';
import Card from '../common/Card';

const SyllabusList: React.FC = () => {
  const [selectedSemester, setSelectedSemester] = useState<number | null>(null);
  
  const filteredSyllabus = selectedSemester 
    ? syllabusPDFs.filter(pdf => pdf.semester === selectedSemester)
    : syllabusPDFs;
  
  const semesters = Array.from(new Set(syllabusPDFs.map(pdf => pdf.semester)))
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
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredSyllabus.map((syllabus) => (
          <motion.div
            key={syllabus.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="flex items-center">
              <FileText size={40} className="text-primary-600 dark:text-primary-400 mr-4 flex-shrink-0" />
              <div>
                <h3 className="font-medium text-gray-900 dark:text-white">
                  {syllabus.title}
                </h3>
                <div className="mt-2 flex">
                  <a 
                    href={syllabus.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-primary py-1 px-3 text-sm"
                  >
                    View PDF
                  </a>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
      
      {filteredSyllabus.length === 0 && (
        <Card className="text-center py-8">
          <p className="text-gray-600 dark:text-gray-400">No syllabus found for the selected semester.</p>
        </Card>
      )}
    </div>
  );
};

export default SyllabusList;