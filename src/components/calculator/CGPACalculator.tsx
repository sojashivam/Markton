import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { semesters } from '../../data/semesters';
import { calculateCGPA, calculatePercentage, saveCalculation } from '../../utils/calculator';
import { exportCGPAResult } from '../../utils/pdfExport';
import Card from '../common/Card';
import { Download } from 'lucide-react';

const CGPACalculator: React.FC = () => {
  const [semesterSGPAs, setSemesterSGPAs] = useState<{ id: number; sgpa: string }[]>(
    semesters.map(semester => ({ id: semester.id, sgpa: '' }))
  );
  const [cgpa, setCgpa] = useState<number | null>(null);
  const [percentage, setPercentage] = useState<number | null>(null);
  const [showResult, setShowResult] = useState<boolean>(false);
  const [animateResult, setAnimateResult] = useState<boolean>(false);
  
  const handleSGPAChange = (semesterId: number, value: string) => {
    const regex = /^([0-9](\.[0-9]{0,2})?|10(\.0{0,2})?)$/;
    
    if (value === '' || regex.test(value)) {
      setSemesterSGPAs(prevSGPAs => 
        prevSGPAs.map(item => 
          item.id === semesterId ? { ...item, sgpa: value } : item
        )
      );
    }
  };
  
  const handleCalculate = () => {
    const validSGPAs = semesterSGPAs
      .filter(item => item.sgpa !== '')
      .map(item => parseFloat(item.sgpa));
    
    if (validSGPAs.length === 0) return;
    
    const cgpaResult = calculateCGPA(validSGPAs);
    const percentageResult = calculatePercentage(cgpaResult);
    
    setCgpa(cgpaResult);
    setPercentage(percentageResult);
    setShowResult(true);
    setAnimateResult(true);
    
    saveCalculation('cgpa', cgpaResult, validSGPAs);
    
    setTimeout(() => {
      setAnimateResult(false);
    }, 1500);
  };

  const handleExportPDF = () => {
    if (cgpa !== null && percentage !== null) {
      exportCGPAResult(semesterSGPAs, cgpa, percentage);
    }
  };
  
  return (
    <Card className="mb-8">
      <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">CGPA Calculator</h2>
      
      <div className="mb-6">
        <h3 className="text-md font-medium mb-2 text-gray-800 dark:text-gray-200">Enter SGPAs</h3>
        
        <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 space-y-3">
          {semesterSGPAs.map((semester) => (
            <div key={semester.id} className="grid grid-cols-12 gap-4 items-center">
              <div className="col-span-7 sm:col-span-8">
                <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
                  {semesters.find(s => s.id === semester.id)?.name || `Semester ${semester.id}`}
                </p>
              </div>
              <div className="col-span-5 sm:col-span-4">
                <input
                  type="text"
                  className="input w-full text-sm"
                  placeholder="SGPA"
                  value={semester.sgpa}
                  onChange={(e) => handleSGPAChange(semester.id, e.target.value)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <button 
        className="btn-primary w-full"
        onClick={handleCalculate}
      >
        Calculate CGPA
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
          <p className="text-gray-700 dark:text-gray-300 mb-1">Your CGPA</p>
          <p className="text-3xl font-bold text-primary-700 dark:text-primary-400">
            {cgpa !== null ? cgpa.toFixed(2) : '-'}
          </p>
          
          {percentage !== null && (
            <div className="mt-3 pt-3 border-t border-primary-100 dark:border-primary-800">
              <p className="text-gray-700 dark:text-gray-300 mb-1">Percentage</p>
              <p className="text-2xl font-semibold text-secondary-700 dark:text-secondary-400">
                {percentage.toFixed(2)}%
              </p>
            </div>
          )}

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

export default CGPACalculator;