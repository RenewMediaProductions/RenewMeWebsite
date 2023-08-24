import ContactLayout from './layout';

import React from 'react';

const MediaInquiries: React.FC = () => {
  return (
    <ContactLayout
      email="pr@myrenewme.com"
      title="Media Inquiry"
      description={
        <>
          Get in touch with RenewMe team and <br />
          we will get back to you!
        </>
      }
      sendDescription={
        <>
          Do you have a media inquiry? <br />
          Please free free to contact us.
        </>
      }
    />
  );
};

export default MediaInquiries;
