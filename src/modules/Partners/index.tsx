import Hero from './components/Hero';
import Wellness from './components/Wellness';
import WhatPeopleAreSaying from './components/WhatPeopleAreSaying';
import { PartnersWrapper } from './index.styled';

import React from 'react';

const Partners: React.FC = () => {
  return (
    <PartnersWrapper className="flex flex-col bg-gray-2">
      <Hero />
      <Wellness />
      <WhatPeopleAreSaying />
    </PartnersWrapper>
  );
};

export default Partners;
