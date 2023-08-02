import ContactLayout from './layout';

import React from 'react';

const GlobalPartners: React.FC = () => {
  return (
    <ContactLayout
      email="pr@myrenewme.com"
      title="Global Partners"
      description={
        <>
          Get in touch with RenewMe team and <br />
          we will get back to you!
        </>
      }
      sendDescription={
        <>
          Interested in becoming a global partner? <br />
          Please feel free to send us an email.
        </>
      }
    />
  );
};

export default GlobalPartners;
