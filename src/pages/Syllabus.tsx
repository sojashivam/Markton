import React from 'react';
import { BookMarked } from 'lucide-react';
import Layout from '../components/layout/Layout';
import PageHeader from '../components/common/PageHeader';
import SyllabusList from '../components/resources/SyllabusList';

const Syllabus: React.FC = () => {
  return (
    <Layout>
      <PageHeader 
        title="RTU Syllabus"
        description="Access semester-wise syllabus for all courses"
        icon={<BookMarked size={32} />}
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <SyllabusList />
      </div>
    </Layout>
  );
};

export default Syllabus;