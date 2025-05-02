import React from 'react';
import { FileQuestion } from 'lucide-react';
import Layout from '../components/layout/Layout';
import PageHeader from '../components/common/PageHeader';
import PapersGrid from '../components/resources/PapersGrid';

const PreviousPapers: React.FC = () => {
  return (
    <Layout>
      <PageHeader 
        title="Previous Year Papers"
        description="Access and download past exam papers for all subjects"
        icon={<FileQuestion size={32} />}
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <PapersGrid />
      </div>
    </Layout>
  );
};

export default PreviousPapers;