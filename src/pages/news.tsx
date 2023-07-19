import News from 'modules/News';
import { NextPage } from 'next';
import PageLayout from 'shared/components/Layouts/PageLayout';

const NewsPage: NextPage = () => {
  return (
    <PageLayout>
      <News />
    </PageLayout>
  );
};

export default NewsPage;
