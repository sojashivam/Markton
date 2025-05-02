import React from 'react';
import { Lightbulb } from 'lucide-react';
import Layout from '../components/layout/Layout';
import PageHeader from '../components/common/PageHeader';
import ExamTipsList from '../components/resources/ExamTipsList';

const ExamTips: React.FC = () => {
  return (
    <Layout>
      <PageHeader 
        title="Exam Preparation Tips"
        description="Strategies and guidance to help you prepare for RTU exams"
        icon={<Lightbulb size={32} />}
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <ExamTipsList />
      </div>
    </Layout>
  );
};

export default ExamTips;