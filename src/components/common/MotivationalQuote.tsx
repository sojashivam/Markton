import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { getRandomQuote } from '../../data/motivationalQuotes';
import { MotivationalQuote as MotivationalQuoteType } from '../../types';

const MotivationalQuote: React.FC = () => {
  const [quote, setQuote] = useState<MotivationalQuoteType | null>(null);
  
  useEffect(() => {
    setQuote(getRandomQuote());
  }, []);
  
  if (!quote) return null;
  
  return (
    <motion.div 
      className="bg-gradient-to-r from-secondary-50 to-secondary-50/5 dark:from-secondary-900/20 dark:to-secondary-900/5 p-4 rounded-lg relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
    >
      <div className="flex items-start">
        <Quote size={20} className="text-secondary-500 dark:text-secondary-400 mr-2 flex-shrink-0 mt-1" />
        <div>
          <p className="text-[#333333] dark:text-gray-200 text-sm md:text-base italic">
            "{quote.text}"
          </p>
          {quote.author && (
            <p className="text-[#6B7280] dark:text-gray-400 text-sm mt-1 text-right">
              — {quote.author}
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default MotivationalQuote;