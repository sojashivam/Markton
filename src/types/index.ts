export interface SubjectGrade {
  id: string;
  name: string;
  credits: number;
  grade: string;
}

export interface SemesterData {
  id: number;
  name: string;
  subjects: Subject[];
}

export interface Subject {
  id: string;
  name: string;
  credits: number;
}

export interface CalculationHistory {
  id: string;
  date: string;
  type: 'sgpa' | 'cgpa';
  result: number;
  semester?: number;
  data: any;
}

export interface MotivationalQuote {
  id: number;
  text: string;
  author?: string;
}

export interface SyllabusPDF {
  id: string;
  semester: number;
  title: string;
  url: string;
}

export interface PastPaper {
  id: string;
  semester: number;
  subject: string;
  year: string;
  url: string;
}

export interface Note {
  id: string;
  semester: number;
  subject: string;
  title: string;
  url: string;
  author?: string;
}

export interface ExamTip {
  id: string;
  title: string;
  content: string;
  category: 'general' | 'preparation' | 'exam-day' | 'subject-specific';
}

export interface Resource {
  id: string;
  title: string;
  description: string;
  url: string;
  type: 'video' | 'website' | 'course' | 'announcement';
}