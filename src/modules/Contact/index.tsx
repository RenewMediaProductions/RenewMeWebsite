import ContactLayout from './components/layout';

import React from 'react';

const Contact: React.FC = () => {
  return (
    <ContactLayout
      email="support@myrenewme.com"
      title="Contact Us"
      description={
        <>
          Do you have any concern or questions? <br />
          Please click on help & support or contact us
        </>
      }
      sendDescription={
        <>
          Do you have any concern or questions? <br />
          Please click on help & support or contact us
        </>
      }
    />
  );
};

export default Contact;
