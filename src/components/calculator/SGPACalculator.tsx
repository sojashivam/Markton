import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { semesters } from '../../data/semesters';
import { gradesList } from '../../data/gradePoints';
import { calculateSGPA, saveCalculation } from '../../utils/calculator';
import { exportSGPAResult } from '../../utils/pdfExport';
import { SubjectGrade } from '../../types';
import Card from '../common/Card';
import { Download } from 'lucide-react';

const SGPACalculator: React.FC = () => {
  const [selectedSemester, setSelectedSemester] = useState<number>(1);
  const [subjectGrades, setSubjectGrades] = useState<SubjectGrade[]>([]);
  const [sgpa, setSgpa] = useState<number | null>(null);
  const [showResult, setShowResult] = useState<boolean>(false);
  const [animateResult, setAnimateResult] = useState<boolean>(false);
  
  useEffect(() => {
    const semesterData = semesters.find(sem => sem.id === selectedSemester);
    
    if (semesterData) {
      const newSubjectGrades = semesterData.subjects.map(subject => ({
        id: subject.id,
        name: subject.name,
        credits: subject.credits,
        grade: ''
      }));
      
      setSubjectGrades(newSubjectGrades);
      setSgpa(null);
      setShowResult(false);
    }
  }, [selectedSemester]);
  
  const handleGradeChange = (subjectId: string, grade: string) => {
    setSubjectGrades(prevGrades => 
      prevGrades.map(subject => 
        subject.id === subjectId ? { ...subject, grade } : subject
      )
    );
  };
  
  const handleCalculate = () => {
    const result = calculateSGPA(subjectGrades);
    setSgpa(result);
    setShowResult(true);
    setAnimateResult(true);
    
    saveCalculation('sgpa', result, subjectGrades, selectedSemester);
    
    setTimeout(() => {
      setAnimateResult(false);
    }, 1500);
  };

  const handleExportPDF = () => {
    if (sgpa !== null) {
      exportSGPAResult(selectedSemester, subjectGrades, sgpa);
    }
  };
  
  return (
    <Card className="mb-8">
      <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">SGPA Calculator</h2>
      
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Select Semester
        </label>
        <select 
          className="select w-full"
          value={selectedSemester}
          onChange={(e) => setSelectedSemester(Number(e.target.value))}
        >
          {semesters.map(semester => (
            <option key={semester.id} value={semester.id}>
              {semester.name}
            </option>
          ))}
        </select>
      </div>
      
      <div className="mb-6">
        <h3 className="text-md font-medium mb-2 text-gray-800 dark:text-gray-200">Subjects</h3>
        
        <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 space-y-4">
          {subjectGrades.map((subject) => (
            <div key={subject.id} className="grid grid-cols-12 gap-4 items-center">
              <div className="col-span-7 sm:col-span-8">
                <p className="text-sm font-medium text-gray-800 dark:text-gray-200">{subject.name}</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">{subject.credits} Credits</p>
              </div>
              <div className="col-span-5 sm:col-span-4">
                <select
                  className="select w-full text-sm"
                  value={subject.grade}
                  onChange={(e) => handleGradeChange(subject.id, e.target.value)}
                >
                  <option value="">Select Grade</option>
                  {gradesList.map(grade => (
                    <option key={grade} value={grade}>
                      {grade}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <button 
        className="btn-primary w-full"
        onClick={handleCalculate}
      >
        Calculate SGPA
      </button>
      
      {showResult && (
        <motion.div 
          className="mt-6 text-center p-4 bg-primary-50 dark:bg-primary-900/30 rounded-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            opacity: 1, 
            scale: animateResult ? [1, 1.05, 1] : 1 
          }}
          transition={{ 
            duration: animateResult ? 0.5 : 0.3,
            ease: "easeOut" 
          }}
        >
          <p className="text-gray-700 dark:text-gray-300 mb-1">Your SGPA</p>
          <p className="text-3xl font-bold text-primary-700 dark:text-primary-400">
            {sgpa !== null ? sgpa.toFixed(2) : '-'}
          </p>
          
          <button
            className="btn-outline mt-4 flex items-center justify-center gap-2 mx-auto"
            onClick={handleExportPDF}
          >
            <Download size={16} />
            Download Result
          </button>
        </motion.div>
      )}
    </Card>
  );
};

export default SGPACalculator;