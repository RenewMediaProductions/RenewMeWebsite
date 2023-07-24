import Contact from 'modules/Contact';
import { NextPage } from 'next';
import PageLayout from 'shared/components/Layouts/PageLayout';

const ContactPage: NextPage = () => {
  return (
    <PageLayout>
      <Contact />
    </PageLayout>
  );
};

export default ContactPage;
