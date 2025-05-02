import { jsPDF } from 'jspdf';
import { SubjectGrade } from '../types';

export const exportSGPAResult = (semester: number, subjects: SubjectGrade[], sgpa: number) => {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.width;
  
  // Header
  doc.setFontSize(20);
  doc.text('RTU SGPA Result', pageWidth / 2, 20, { align: 'center' });
  
  // Semester Info
  doc.setFontSize(14);
  doc.text(`Semester: ${semester}`, 20, 40);
  
  // Subject Details
  doc.setFontSize(12);
  let yPos = 60;
  
  doc.text('Subject', 20, yPos);
  doc.text('Credits', 120, yPos);
  doc.text('Grade', 160, yPos);
  
  yPos += 10;
  doc.line(20, yPos, 190, yPos);
  yPos += 10;
  
  subjects.forEach(subject => {
    if (subject.grade) {
      doc.text(subject.name, 20, yPos);
      doc.text(subject.credits.toString(), 120, yPos);
      doc.text(subject.grade, 160, yPos);
      yPos += 10;
    }
  });
  
  // Final SGPA
  yPos += 10;
  doc.setFontSize(16);
  doc.text(`Final SGPA: ${sgpa.toFixed(2)}`, pageWidth / 2, yPos, { align: 'center' });
  
  // Date
  doc.setFontSize(10);
  doc.text(`Generated on: ${new Date().toLocaleDateString()}`, 20, yPos + 20);
  
  // Save the PDF
  doc.save(`RTU_SGPA_Semester${semester}_Result.pdf`);
};

export const exportCGPAResult = (semesterSGPAs: { id: number; sgpa: string }[], cgpa: number, percentage: number) => {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.width;
  
  // Header
  doc.setFontSize(20);
  doc.text('RTU CGPA Result', pageWidth / 2, 20, { align: 'center' });
  
  // SGPA Details
  doc.setFontSize(12);
  let yPos = 40;
  
  doc.text('Semester', 20, yPos);
  doc.text('SGPA', 120, yPos);
  
  yPos += 10;
  doc.line(20, yPos, 190, yPos);
  yPos += 10;
  
  semesterSGPAs.forEach(sem => {
    if (sem.sgpa) {
      doc.text(`Semester ${sem.id}`, 20, yPos);
      doc.text(sem.sgpa, 120, yPos);
      yPos += 10;
    }
  });
  
  // Final Results
  yPos += 10;
  doc.setFontSize(16);
  doc.text(`Final CGPA: ${cgpa.toFixed(2)}`, pageWidth / 2, yPos, { align: 'center' });
  yPos += 10;
  doc.text(`Percentage: ${percentage.toFixed(2)}%`, pageWidth / 2, yPos, { align: 'center' });
  
  // Date
  doc.setFontSize(10);
  doc.text(`Generated on: ${new Date().toLocaleDateString()}`, 20, yPos + 20);
  
  // Save the PDF
  doc.save('RTU_CGPA_Result.pdf');
};