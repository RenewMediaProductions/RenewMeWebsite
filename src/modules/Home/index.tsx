import React from 'react';

import AboutDevelopers from './components/AboutDevelopers';
import Explainer from './components/Explainer';
import GlobalMission from './components/GlobalMission';
import Hero from './components/Hero';
import Network from './components/Network';
import Services from './components/Services';
import WhatPeopleAreSaying from './components/WhatPeopleAreSaying';
import { HomeWrapper } from './index.styled';

const Home: React.FC = () => {
  return (
    <HomeWrapper className="flex flex-col overflow-hidden bg-[#FAFAFA]">
      <Hero />
      <Network />
      <GlobalMission />
      <Explainer />
      <Services />
      <AboutDevelopers />
      <WhatPeopleAreSaying />
    </HomeWrapper>
  );
};

export default Home;
