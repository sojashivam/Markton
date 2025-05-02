import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { LightbulbIcon } from 'lucide-react';
import { examTips } from '../../data/examTips';
import Card from '../common/Card';

const ExamTipsList: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  const filteredTips = selectedCategory 
    ? examTips.filter(tip => tip.category === selectedCategory)
    : examTips;
  
  const categories = [
    { id: 'general', label: 'General Tips' },
    { id: 'preparation', label: 'Preparation' },
    { id: 'exam-day', label: 'Exam Day' },
    { id: 'subject-specific', label: 'Subject Tips' },
  ];
  
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2">
        <button
          className={`btn ${selectedCategory === null ? 'btn-primary' : 'btn-outline'}`}
          onClick={() => setSelectedCategory(null)}
        >
          All Tips
        </button>
        {categories.map(category => (
          <button
            key={category.id}
            className={`btn ${selectedCategory === category.id ? 'btn-primary' : 'btn-outline'}`}
            onClick={() => setSelectedCategory(category.id)}
          >
            {category.label}
          </button>
        ))}
      </div>
      
      <div className="space-y-4">
        {filteredTips.map((tip) => (
          <motion.div
            key={tip.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            <Card>
              <div className="flex items-center mb-4">
                <LightbulbIcon size={24} className="text-yellow-500 mr-3" />
                <h3 className="font-semibold text-lg text-gray-900 dark:text-white">
                  {tip.title}
                </h3>
              </div>
              <div className="pl-9">
                <div 
                  className="text-gray-700 dark:text-gray-300 whitespace-pre-line" 
                  dangerouslySetInnerHTML={{ __html: tip.content }}
                />
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
      
      {filteredTips.length === 0 && (
        <Card className="text-center py-8">
          <p className="text-gray-600 dark:text-gray-400">No tips found for the selected category.</p>
        </Card>
      )}
    </div>
  );
};

export default ExamTipsList;