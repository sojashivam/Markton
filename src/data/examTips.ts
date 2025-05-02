import { ExamTip } from '../types';

export const examTips: ExamTip[] = [
  {
    id: '1',
    title: 'How to Pass RTU Exams Easily',
    content: `
      1. Focus on previous year papers and understand recurring patterns
      2. Master the important topics that appear frequently
      3. Practice writing answers in the RTU preferred format (point-wise)
      4. Ensure neat presentation with proper headings and subheadings
      5. Solve at least 5 years of previous question papers
    `,
    category: 'general'
  },
  {
    id: '2',
    title: 'How to Score 8+ SGPA',
    content: `
      1. Create a consistent study schedule and stick to it
      2. Form study groups for difficult subjects
      3. Focus on understanding concepts rather than rote memorization
      4. Create concise notes for quick revision
      5. Take regular breaks to avoid burnout
      6. Solve numerical problems repeatedly for practice
      7. Understand the marking scheme and focus on high-weightage topics
    `,
    category: 'preparation'
  },
  {
    id: '3',
    title: 'Last Month Study Plan',
    content: `
      1. Complete syllabus revision by the first 15 days
      2. Dedicate the next 7 days to solving previous year papers
      3. Use the next 5 days to focus on weak areas
      4. Last 3 days: Quick revision of important formulas and concepts
      5. Create one-page summaries for last-minute revision
    `,
    category: 'preparation'
  },
  {
    id: '4',
    title: 'Last Week Study Plan',
    content: `
      1. Day 1-2: Revise important formulas, theorems, and definitions
      2. Day 3-4: Solve important numerical problems
      3. Day 5: Review previous year question papers
      4. Day 6: Focus on difficult topics and weak areas
      5. Day 7: Light revision and mental preparation
    `,
    category: 'preparation'
  },
  {
    id: '5',
    title: 'Exam Day Tips',
    content: `
      1. Read the entire question paper first (use the first 10 minutes)
      2. Plan your time allocation based on marks distribution
      3. Start with questions you're confident about
      4. Use diagrams and flowcharts where appropriate
      5. Write in points rather than paragraphs (RTU prefers this)
      6. Leave space between answers for additions if time permits
      7. Ensure neat presentation and highlight important points
    `,
    category: 'exam-day'
  },
  {
    id: '6',
    title: 'Important Topics for Engineering Mathematics',
    content: `
      1. Differential Calculus: Limits, continuity, differentiability
      2. Integral Calculus: Definite and indefinite integrals
      3. Differential Equations: First order and linear higher order
      4. Laplace Transforms: Properties and applications
      5. Fourier Series: Expansions and applications
    `,
    category: 'subject-specific'
  },
  {
    id: '7',
    title: 'How to Approach Programming Subjects',
    content: `
      1. Focus on understanding algorithms rather than memorizing code
      2. Practice writing pseudocode before actual code
      3. Understand time and space complexity analysis
      4. Master common data structures and their implementations
      5. Practice tracing code execution manually
    `,
    category: 'subject-specific'
  }
];