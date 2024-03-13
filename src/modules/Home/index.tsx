import React from 'react';

import Image from 'next/image';

import AboutDevelopers from './components/AboutDevelopers';
import GlobalMission from './components/GlobalMission';
import Hero from './components/Hero';
import Network from './components/Network';
import Services from './components/Services';
import WhatPeopleAreSaying from './components/WhatPeopleAreSaying';
import { HOME_ICONS, HOME_IMAGES } from './constants';
import { HomeWrapper } from './index.styled';

const Explainer: React.FC = () => {
  return (
    <section className="flex w-full justify-center">
      <div className="mx-auto flex h-full max-w-[340px] flex-col items-center gap-4 pt-[80px] md:max-w-[550px] md:pt-[120px] lg:max-w-[860px] lg:pt-[160px] xl:max-w-[900px] xl:gap-16">
        <div className="flex flex-col items-center justify-center gap-4">
          <Image
            className="h-8 w-8"
            src={HOME_ICONS['play-icon'].url}
            alt="RenewMe Explainer"
            width={900}
            height={600}
          />
          <h1 className="text-black-1 font-['Gilroy'] text-3xl font-[600] md:text-4xl lg:text-5xl xl:text-6xl">
            Renew<span className="text-black-1/80">Me</span> Explainer
          </h1>
        </div>
        <Image
          className="cursor-pointer transition-all duration-150 ease-in-out hover:brightness-90"
          src={HOME_IMAGES['s0-renewme-explainer'].url}
          alt="RenewMe Explainer Thumbnail"
          width={2000}
          height={1125}
          priority
        />
      </div>
    </section>
  );
};

const Home: React.FC = () => {
  return (
    <HomeWrapper className="flex flex-col overflow-hidden bg-[#FAFAFA]">
      <Hero />
      <Network />
      <Explainer />
      <GlobalMission />
      <Services />
      <AboutDevelopers />
      <WhatPeopleAreSaying />
    </HomeWrapper>
  );
};

export default Home;
