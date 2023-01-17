import AboutDevelopers from './components/AboutDevelopers';
import GlobalMission from './components/GlobalMission';
import Hero from './components/Hero';
import Network from './components/Network';
import Services from './components/Services';
import WhatPeopleAreSaying from './components/WhatPeopleAreSaying';
import { HomeWrapper } from './index.styled';

import React from 'react';

const Home: React.FC = () => {
  return (
    <HomeWrapper className="flex flex-col overflow-hidden bg-gray-2">
      <Hero />
      <Network />
      <GlobalMission />
      <Services />
      <AboutDevelopers />
      <WhatPeopleAreSaying />
    </HomeWrapper>
  );
};

export default Home;
