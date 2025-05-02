import { Resource, SyllabusPDF, PastPaper, Note } from '../types';

export const resources: Resource[] = [
  {
    id: '1',
    title: 'RTU Official Website',
    description: 'Official website for all RTU announcements and updates',
    url: 'https://www.rtu.ac.in/',
    type: 'website'
  },
  {
    id: '2',
    title: 'NPTEL Courses',
    description: 'Free engineering courses from top professors in India',
    url: 'https://nptel.ac.in/',
    type: 'course'
  },
  {
    id: '3',
    title: 'Gate Overflow',
    description: 'Excellent resource for technical concepts and practice questions',
    url: 'https://gateoverflow.in/',
    type: 'website'
  },
  {
    id: '4',
    title: 'GeeksforGeeks',
    description: 'Platform for learning DSA and other CS concepts',
    url: 'https://www.geeksforgeeks.org/',
    type: 'website'
  },
  {
    id: '5',
    title: 'MIT OpenCourseWare',
    description: 'Free engineering course materials from MIT',
    url: 'https://ocw.mit.edu/',
    type: 'course'
  }
];

export const syllabusPDFs: SyllabusPDF[] = [
  {
    id: '1',
    semester: 1,
    title: 'First Semester Syllabus (2023-24)',
    url: '#'
  },
  {
    id: '2',
    semester: 2,
    title: 'Second Semester Syllabus (2023-24)',
    url: '#'
  },
  {
    id: '3',
    semester: 3,
    title: 'Third Semester Syllabus (2023-24)',
    url: '#'
  },
  {
    id: '4',
    semester: 4,
    title: 'Fourth Semester Syllabus (2023-24)',
    url: '#'
  },
  {
    id: '5',
    semester: 5,
    title: 'Fifth Semester Syllabus (2023-24)',
    url: '#'
  },
  {
    id: '6',
    semester: 6,
    title: 'Sixth Semester Syllabus (2023-24)',
    url: '#'
  },
  {
    id: '7',
    semester: 7,
    title: 'Seventh Semester Syllabus (2023-24)',
    url: '#'
  },
  {
    id: '8',
    semester: 8,
    title: 'Eighth Semester Syllabus (2023-24)',
    url: '#'
  }
];

export const pastPapers: PastPaper[] = [
  {
    id: '1',
    semester: 1,
    subject: 'Engineering Mathematics-I',
    year: '2023',
    url: '#'
  },
  {
    id: '2',
    semester: 1,
    subject: 'Engineering Physics',
    year: '2023',
    url: '#'
  },
  {
    id: '3',
    semester: 2,
    subject: 'Engineering Mathematics-II',
    year: '2023',
    url: '#'
  },
  {
    id: '4',
    semester: 2,
    subject: 'Engineering Chemistry',
    year: '2023',
    url: '#'
  },
  {
    id: '5',
    semester: 3,
    subject: 'Data Structures',
    year: '2023',
    url: '#'
  },
  {
    id: '6',
    semester: 4,
    subject: 'Design & Analysis of Algorithms',
    year: '2023',
    url: '#'
  }
];

export const notes: Note[] = [
  {
    id: '1',
    semester: 1,
    subject: 'Engineering Mathematics-I',
    title: 'Complete Notes - Calculus',
    url: '#',
    author: 'Prof. Sharma'
  },
  {
    id: '2',
    semester: 1,
    subject: 'Engineering Physics',
    title: 'Quantum Mechanics Notes',
    url: '#',
    author: 'Prof. Verma'
  },
  {
    id: '3',
    semester: 2,
    subject: 'Engineering Mathematics-II',
    title: 'Differential Equations - Complete Notes',
    url: '#',
    author: 'Prof. Gupta'
  },
  {
    id: '4',
    semester: 3,
    subject: 'Data Structures',
    title: 'Trees & Graphs - Comprehensive Guide',
    url: '#',
    author: 'Prof. Sharma'
  },
  {
    id: '5',
    semester: 4,
    subject: 'Operating Systems',
    title: 'Process Scheduling & Memory Management',
    url: '#',
    author: 'Prof. Singh'
  }
];