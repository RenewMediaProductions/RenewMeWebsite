import Hero from './components/Hero';
import Network from './components/Network';
import Services from './components/Services';
import TravelBalance from './components/TravelBalance';
import WhatPeopleAreSaying from './components/WhatPeopleAreSaying';
import { SoulscapeWrapper } from './index.styled';

import React from 'react';

const Soulscape: React.FC = () => {
  return (
    <SoulscapeWrapper className="flex flex-col bg-gray-2">
      <Hero />
      <Network />
      <TravelBalance />
      <Services />
      <WhatPeopleAreSaying />
    </SoulscapeWrapper>
  );
};

export default Soulscape;
