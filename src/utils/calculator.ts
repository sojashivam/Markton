import { gradePoints } from '../data/gradePoints';
import { SubjectGrade } from '../types';

// Calculate SGPA from a list of subject grades
export const calculateSGPA = (subjectGrades: SubjectGrade[]): number => {
  if (subjectGrades.length === 0) return 0;

  let totalCredits = 0;
  let totalGradePoints = 0;

  subjectGrades.forEach(subject => {
    if (!subject.grade || !gradePoints[subject.grade as keyof typeof gradePoints]) return;
    
    const gradePoint = gradePoints[subject.grade as keyof typeof gradePoints];
    totalCredits += subject.credits;
    totalGradePoints += subject.credits * gradePoint;
  });

  if (totalCredits === 0) return 0;
  
  // Round to 2 decimal places
  return Math.round((totalGradePoints / totalCredits) * 100) / 100;
};

// Calculate CGPA from a list of semester SGPAs
export const calculateCGPA = (sgpaList: number[]): number => {
  if (sgpaList.length === 0) return 0;
  
  const validSGPAs = sgpaList.filter(sgpa => sgpa !== null && !isNaN(sgpa));
  
  if (validSGPAs.length === 0) return 0;
  
  const sum = validSGPAs.reduce((acc, sgpa) => acc + sgpa, 0);
  
  // Round to 2 decimal places
  return Math.round((sum / validSGPAs.length) * 100) / 100;
};

// Calculate percentage from CGPA
export const calculatePercentage = (cgpa: number): number => {
  // Using the standard formula: Percentage = (CGPA - 0.75) * 10
  return Math.max(0, Math.round(((cgpa - 0.75) * 10) * 100) / 100);
};

// Save calculation to localStorage
export const saveCalculation = (type: 'sgpa' | 'cgpa', result: number, data: any, semester?: number) => {
  try {
    const history = getCalculationHistory();
    
    const newCalculation = {
      id: Date.now().toString(),
      date: new Date().toLocaleString(),
      type,
      result,
      data,
      ...(semester && { semester })
    };
    
    const updatedHistory = [newCalculation, ...history].slice(0, 10); // Keep only last 10 calculations
    
    localStorage.setItem('rtu_calculation_history', JSON.stringify(updatedHistory));
    
    return true;
  } catch (error) {
    console.error('Error saving calculation:', error);
    return false;
  }
};

// Get calculation history from localStorage
export const getCalculationHistory = () => {
  try {
    const historyString = localStorage.getItem('rtu_calculation_history');
    if (!historyString) return [];
    return JSON.parse(historyString);
  } catch (error) {
    console.error('Error retrieving calculation history:', error);
    return [];
  }
};