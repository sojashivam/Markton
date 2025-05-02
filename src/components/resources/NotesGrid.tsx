import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';
import { notes } from '../../data/resources';
import Card from '../common/Card';

const NotesGrid: React.FC = () => {
  const [selectedSemester, setSelectedSemester] = useState<number | null>(null);
  
  const filteredNotes = selectedSemester 
    ? notes.filter(note => note.semester === selectedSemester)
    : notes;
  
  const semesters = Array.from(new Set(notes.map(note => note.semester)))
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
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredNotes.map((note) => (
          <motion.div
            key={note.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="h-full">
              <div className="flex items-center mb-3">
                <BookOpen size={20} className="text-accent-600 dark:text-accent-400 mr-2" />
                <span className="text-gray-600 dark:text-gray-400 text-sm">
                  Semester {note.semester}
                </span>
              </div>
              <h3 className="font-medium text-gray-900 dark:text-white mb-2">
                {note.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                {note.subject}
              </p>
              {note.author && (
                <p className="text-xs text-gray-500 dark:text-gray-500 mb-4">
                  By: {note.author}
                </p>
              )}
              <div className="mt-auto">
                <a 
                  href={note.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-outline w-full text-center"
                >
                  View Notes
                </a>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
      
      {filteredNotes.length === 0 && (
        <Card className="text-center py-8">
          <p className="text-gray-600 dark:text-gray-400">No notes found for the selected semester.</p>
        </Card>
      )}
    </div>
  );
};

export default NotesGrid;