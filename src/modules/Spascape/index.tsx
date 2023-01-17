import EscapeTranquility from './components/EscapeTranquility';
import Hero from './components/Hero';
import Network from './components/Network';
import WhatPeopleAreSaying from './components/WhatPeopleAreSaying';
import { SpascapeWrapper } from './index.styled';

import React from 'react';

const Spascape: React.FC = () => {
  return (
    <SpascapeWrapper className="flex flex-col bg-gray-2">
      <Hero />
      <Network />
      <EscapeTranquility />
      <WhatPeopleAreSaying />
    </SpascapeWrapper>
  );
};

export default Spascape;
