import { GlobalMissionWrapper } from './GlobalMission.styled';

import React from 'react';

const GlobalMission: React.FC = () => {
  return (
    <GlobalMissionWrapper className="flex justify-center">
      <div className="flex flex-col h-full gap-10 mx-auto pt-16 max-w-[340px] md:max-w-[550px] lg:pt-28 lg:max-w-[860px] xl:max-w-[916px] xl:gap-12">
        <h1 className="font-['Gilroy'] font-[600] text-3xl text-black-1 md:text-4xl lg:text-5xl xl:text-6xl">
          Our Global Mission
        </h1>
        <p className="font-['Gilroy'] font-[400] text-base text-black-1 md:text-lg lg:text-xl ">
          At RenewMe we believe that together we can make the world a more balanced and happy place.
        </p>
        <p className="font-['Gilroy'] font-[400] text-base text-black-1 md:text-lg lg:text-xl">
          This all-inclusive iOS smartphone app encourages you to unleash strength and wisdom. The
          ultimate escape for body-mind-soul, RenewMe is an all-inclusive “Disney” of skillful
          living, fitness, motivation, resources, and mindfulness.
        </p>
        <p className="font-['Gilroy'] font-[400] text-base text-black-1 md:text-lg lg:text-xl">
          Chic in features and design, this oasis of wellness encompasses something for everyone and
          inspires customers and employees of partnered luxury corporate, travel, and hospitality
          brands to achieve a greater sense of wellness and peace whether at home, work, or
          traveling on the go.
        </p>
      </div>
    </GlobalMissionWrapper>
  );
};

export default GlobalMission;
