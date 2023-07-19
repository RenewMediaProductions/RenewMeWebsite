import Privacy from 'modules/Privacy';
import { NextPage } from 'next';
import PageLayout from 'shared/components/Layouts/PageLayout';

const PrivacyPage: NextPage = () => {
  return (
    <PageLayout>
      <Privacy />
    </PageLayout>
  );
};

export default PrivacyPage;
