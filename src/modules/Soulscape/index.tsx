import React from 'react';

import Explainer from './components/Explainer';
import Hero from './components/Hero';
import Network from './components/Network';
import Services from './components/Services';
import TravelBalance from './components/TravelBalance';
import WhatPeopleAreSaying from './components/WhatPeopleAreSaying';
import { SoulscapeWrapper } from './index.styled';

const Soulscape: React.FC = () => {
  return (
    <SoulscapeWrapper className="flex flex-col overflow-hidden bg-[#FAFAFA]">
      <Hero />
      <Network />
      <TravelBalance />
      <Explainer />
      <Services />
      <WhatPeopleAreSaying />
    </SoulscapeWrapper>
  );
};

export default Soulscape;
