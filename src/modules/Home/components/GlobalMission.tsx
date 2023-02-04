import { GlobalMissionWrapper } from './GlobalMission.styled';

import React from 'react';

const GlobalMission: React.FC = () => {
  return (
    <GlobalMissionWrapper className="flex justify-center">
      <div className="mx-auto flex h-full max-w-[340px] flex-col gap-10 pt-16 md:max-w-[550px] lg:max-w-[860px] lg:pt-28 xl:max-w-[916px] xl:gap-12">
        <h1 className="font-['Gilroy'] text-3xl font-[600] text-black-1 md:text-4xl lg:text-5xl xl:text-6xl">
          Our Global Mission
        </h1>
        <p className="font-['Gilroy'] text-base font-[400] text-black-1 md:text-lg lg:text-xl ">
          At RenewMe we believe that together we can make the world more balanced.
        </p>
        <p className="font-['Gilroy'] text-base font-[400] text-black-1 md:text-lg lg:text-xl">
          This all-inclusive iOS smartphone superapp powered by former senior{' '}
          <strong>Apple engineers</strong> along with{' '}
          <strong>
            founder and national media personality, Dr. Lisa Palmer of{' '}
            <a href="https://www.therenewcenter.com" rel="noreferrer" target="_blank">
              The Renew Center
            </a>{' '}
            of Florida, ranked #1 for Treatment of PTSD in US 2017
          </strong>
          , promotes mental health awareness and encourages you to unleash strength and wisdom from
          within.
        </p>
        <p className="font-['Gilroy'] text-base font-[400] text-black-1 md:text-lg lg:text-xl">
          The ultimate escape for body-mind-soul, this oasis of wellness helps you regain and
          maintain balance on-the-go. Combining the power of psychology with technology we inspire
          customers and employees of select organizations corporate, travel, and hospitality brands
          to achieve a greater sense of peace, productivity, and happiness.
        </p>
      </div>
    </GlobalMissionWrapper>
  );
};

export default GlobalMission;
