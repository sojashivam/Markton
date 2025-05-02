import React from 'react';
import { Award } from 'lucide-react';
import { motion } from 'framer-motion';
import Layout from '../components/layout/Layout';
import PageHeader from '../components/common/PageHeader';
import Card from '../components/common/Card';
import { gradingSystemDescription } from '../data/gradePoints';

const MarkingScheme: React.FC = () => {
  return (
    <Layout>
      <PageHeader 
        title="RTU Marking Scheme"
        description="Understanding the grading system and how SGPA/CGPA is calculated"
        icon={<Award size={32} />}
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="mb-8">
              <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                RTU Grading System
              </h2>
              
              <div className="space-y-4">
                <p className="text-gray-700 dark:text-gray-300">
                  Rajasthan Technical University (RTU) follows a 10-point grading system
                  for evaluating students' academic performance. Here's a breakdown of the grades
                  and their corresponding marks:
                </p>
                
                <div className="overflow-x-auto">
                  <table className="min-w-full border border-gray-200 dark:border-gray-700 rounded-lg">
                    <thead>
                      <tr className="bg-gray-50 dark:bg-gray-800">
                        <th className="px-4 py-2 text-left text-sm font-medium text-gray-700 dark:text-gray-300">Grade</th>
                        <th className="px-4 py-2 text-left text-sm font-medium text-gray-700 dark:text-gray-300">Marks Range</th>
                        <th className="px-4 py-2 text-left text-sm font-medium text-gray-700 dark:text-gray-300">Grade Points</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                      <tr className="bg-white dark:bg-gray-900">
                        <td className="px-4 py-2 text-sm text-gray-800 dark:text-gray-200">A++</td>
                        <td className="px-4 py-2 text-sm text-gray-600 dark:text-gray-400">91-100%</td>
                        <td className="px-4 py-2 text-sm text-gray-600 dark:text-gray-400">10.0</td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-800">
                        <td className="px-4 py-2 text-sm text-gray-800 dark:text-gray-200">A+</td>
                        <td className="px-4 py-2 text-sm text-gray-600 dark:text-gray-400">81-90%</td>
                        <td className="px-4 py-2 text-sm text-gray-600 dark:text-gray-400">9.0</td>
                      </tr>
                      <tr className="bg-white dark:bg-gray-900">
                        <td className="px-4 py-2 text-sm text-gray-800 dark:text-gray-200">A</td>
                        <td className="px-4 py-2 text-sm text-gray-600 dark:text-gray-400">71-80%</td>
                        <td className="px-4 py-2 text-sm text-gray-600 dark:text-gray-400">8.0</td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-800">
                        <td className="px-4 py-2 text-sm text-gray-800 dark:text-gray-200">B+</td>
                        <td className="px-4 py-2 text-sm text-gray-600 dark:text-gray-400">61-70%</td>
                        <td className="px-4 py-2 text-sm text-gray-600 dark:text-gray-400">7.0</td>
                      </tr>
                      <tr className="bg-white dark:bg-gray-900">
                        <td className="px-4 py-2 text-sm text-gray-800 dark:text-gray-200">B</td>
                        <td className="px-4 py-2 text-sm text-gray-600 dark:text-gray-400">51-60%</td>
                        <td className="px-4 py-2 text-sm text-gray-600 dark:text-gray-400">6.0</td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-800">
                        <td className="px-4 py-2 text-sm text-gray-800 dark:text-gray-200">C+</td>
                        <td className="px-4 py-2 text-sm text-gray-600 dark:text-gray-400">45-50%</td>
                        <td className="px-4 py-2 text-sm text-gray-600 dark:text-gray-400">5.0</td>
                      </tr>
                      <tr className="bg-white dark:bg-gray-900">
                        <td className="px-4 py-2 text-sm text-gray-800 dark:text-gray-200">C</td>
                        <td className="px-4 py-2 text-sm text-gray-600 dark:text-gray-400">40-44%</td>
                        <td className="px-4 py-2 text-sm text-gray-600 dark:text-gray-400">4.0</td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-800">
                        <td className="px-4 py-2 text-sm text-gray-800 dark:text-gray-200">D</td>
                        <td className="px-4 py-2 text-sm text-gray-600 dark:text-gray-400">35-39%</td>
                        <td className="px-4 py-2 text-sm text-gray-600 dark:text-gray-400">3.0</td>
                      </tr>
                      <tr className="bg-white dark:bg-gray-900">
                        <td className="px-4 py-2 text-sm text-gray-800 dark:text-gray-200">E</td>
                        <td className="px-4 py-2 text-sm text-gray-600 dark:text-gray-400">30-34%</td>
                        <td className="px-4 py-2 text-sm text-gray-600 dark:text-gray-400">2.0</td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-800">
                        <td className="px-4 py-2 text-sm text-gray-800 dark:text-gray-200">F</td>
                        <td className="px-4 py-2 text-sm text-gray-600 dark:text-gray-400">Below 30%</td>
                        <td className="px-4 py-2 text-sm text-gray-600 dark:text-gray-400">0.0</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </Card>
            
            <Card>
              <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                Important Notes About RTU Grading
              </h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">Passing Criteria</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    To pass a subject, a student must score a minimum of 35% marks in the subject.
                    However, to clear a semester, the student must secure a minimum SGPA of 4.0.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">Backlog</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    If a student fails to secure the minimum marks in any subject or fails to appear in any exam,
                    it will be considered as a backlog. The student will have to reappear for that subject in
                    the subsequent examinations.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">SGPA Calculation</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    SGPA (Semester Grade Point Average) is calculated by:
                  </p>
                  <div className="bg-gray-50 dark:bg-gray-900 p-3 rounded-lg mt-2">
                    <p className="text-gray-800 dark:text-gray-200 font-medium">
                      SGPA = Σ(Credit × Grade Point) / Σ(Credit)
                    </p>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mt-2">
                    Where the summation is over all the courses taken in that semester.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">CGPA Calculation</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    CGPA (Cumulative Grade Point Average) is calculated by:
                  </p>
                  <div className="bg-gray-50 dark:bg-gray-900 p-3 rounded-lg mt-2">
                    <p className="text-gray-800 dark:text-gray-200 font-medium">
                      CGPA = Average of all semester SGPAs
                    </p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">Percentage Calculation</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    To convert CGPA to percentage, RTU follows:
                  </p>
                  <div className="bg-gray-50 dark:bg-gray-900 p-3 rounded-lg mt-2">
                    <p className="text-gray-800 dark:text-gray-200 font-medium">
                      Percentage = (CGPA - 0.75) × 10
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
          
          <div className="space-y-6">
            <Card>
              <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
                Division Criteria
              </h3>
              <div className="space-y-3">
                <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-3">
                  <p className="text-sm font-medium text-gray-800 dark:text-gray-200">First Division with Honors:</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    CGPA ≥ 8.5 (Percentage ≥ 77.5%)
                  </p>
                </div>
                <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-3">
                  <p className="text-sm font-medium text-gray-800 dark:text-gray-200">First Division:</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    CGPA ≥ 6.5 and &lt; 8.5 (Percentage ≥ 57.5% and &lt; 77.5%)
                  </p>
                </div>
                <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-3">
                  <p className="text-sm font-medium text-gray-800 dark:text-gray-200">Second Division:</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    CGPA ≥ 5.5 and &lt; 6.5 (Percentage ≥ 47.5% and &lt; 57.5%)
                  </p>
                </div>
                <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-3">
                  <p className="text-sm font-medium text-gray-800 dark:text-gray-200">Pass:</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    CGPA ≥ 4.0 and &lt; 5.5 (Percentage ≥ 32.5% and &lt; 47.5%)
                  </p>
                </div>
              </div>
            </Card>
            
            <Card>
              <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
                Credit Distribution
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                Credits are assigned based on the importance and hours allocated to each subject:
              </p>
              <div className="space-y-3">
                <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-3">
                  <p className="text-sm font-medium text-gray-800 dark:text-gray-200">Theory Subjects:</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    Typically 3-4 credits
                  </p>
                </div>
                <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-3">
                  <p className="text-sm font-medium text-gray-800 dark:text-gray-200">Lab/Practical:</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    Typically 1-2 credits
                  </p>
                </div>
                <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-3">
                  <p className="text-sm font-medium text-gray-800 dark:text-gray-200">Projects:</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    4-8 credits depending on the semester
                  </p>
                </div>
              </div>
            </Card>
            
            <Card>
              <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
                Useful Tips
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                <li className="flex">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary-600 dark:bg-primary-400 inline-block mr-2 mt-1.5"></span>
                  Focus on high-credit subjects as they have more weightage in SGPA calculation
                </li>
                <li className="flex">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary-600 dark:bg-primary-400 inline-block mr-2 mt-1.5"></span>
                  Aim for at least B grade (6 points) in all subjects to maintain a good CGPA
                </li>
                <li className="flex">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary-600 dark:bg-primary-400 inline-block mr-2 mt-1.5"></span>
                  Clear backlogs as soon as possible as they affect your final CGPA
                </li>
                <li className="flex">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary-600 dark:bg-primary-400 inline-block mr-2 mt-1.5"></span>
                  For placements, most companies require a minimum CGPA of 6.5 (or 60%)
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MarkingScheme;