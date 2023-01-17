import Terms from 'modules/Terms';
import { NextPage } from 'next';
import React from 'react';
import PageLayout from 'shared/components/Layouts/PageLayout';

const TermsPage: NextPage = () => {
  return (
    <PageLayout>
      <Terms />
    </PageLayout>
  );
};

export default TermsPage;
