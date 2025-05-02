import React from 'react';
import { BookOpen } from 'lucide-react';
import Layout from '../components/layout/Layout';
import PageHeader from '../components/common/PageHeader';
import NotesGrid from '../components/resources/NotesGrid';

const Notes: React.FC = () => {
  return (
    <Layout>
      <PageHeader 
        title="Study Notes"
        description="Access comprehensive notes for all subjects"
        icon={<BookOpen size={32} />}
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <NotesGrid />
      </div>
    </Layout>
  );
};

export default Notes;