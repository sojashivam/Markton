// RTU Grading System
export const gradePoints = {
  'A++': 10,
  'A+': 9,
  'A': 8.5,
  'B+': 8,
  'B': 7.5,
  'C+': 7,
  'C': 6.5,
  'D+': 6,
  'D': 5.5,
  'E+': 5,
  'E': 4,
  'F': 0
};

export const gradesList = Object.keys(gradePoints);

// RTU Percentage Formula
export const calculatePercentage = (cgpa: number): number => {
  return (cgpa - 0.75) * 10;
};

// Description of RTU Grading System
export const gradingSystemDescription = `
RTU uses a grading system with the following grade points:
- A++ (Outstanding): 10 points
- A+ (Excellent): 9 points
- A (Very Good): 8.5 points
- B+ (Good): 8 points
- B (Above Average): 7.5 points
- C+ (Average): 7 points
- C (Satisfactory): 6.5 points
- D+ (Pass): 6 points
- D (Marginal): 5.5 points
- E+ (Exposed): 5 points
- E (Poor): 4 points
- F (Fail): 0 points

SGPA Formula: Sum(Credit × Grade Point) / Sum(Credit)
CGPA Formula: Average of all semester SGPAs
Percentage Formula: (CGPA - 0.75) × 10
`;