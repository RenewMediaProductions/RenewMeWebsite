import Partners from 'modules/Partners';
import { NextPage } from 'next';
import React from 'react';
import PageLayout from 'shared/components/Layouts/PageLayout';

const PartnersPage: NextPage = () => {
  return (
    <PageLayout>
      <Partners />
    </PageLayout>
  );
};

export default PartnersPage;
