import Soulscape from 'modules/Soulscape';
import { NextPage } from 'next';
import React from 'react';
import PageLayout from 'shared/components/Layouts/PageLayout';

const SoulscapePage: NextPage = () => {
  return (
    <PageLayout>
      <Soulscape />
    </PageLayout>
  );
};

export default SoulscapePage;
