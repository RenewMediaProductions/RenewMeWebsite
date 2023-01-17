import Spascape from 'modules/Spascape';
import { NextPage } from 'next';
import React from 'react';
import PageLayout from 'shared/components/Layouts/PageLayout';

const SpascapePage: NextPage = () => {
  return (
    <PageLayout>
      <Spascape />
    </PageLayout>
  );
};

export default SpascapePage;
