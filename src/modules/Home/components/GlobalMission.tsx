import { GlobalMissionWrapper } from './GlobalMission.styled';

import React from 'react';
import RibbonMhaSvg from 'shared/assets/svg/Home/ribbon-mha.svg';

const GlobalMission: React.FC = () => {
  return (
    <GlobalMissionWrapper className="z-[2] flex justify-center">
      <div className="mx-auto flex h-full max-w-[340px] flex-col gap-10 pt-[80px] md:max-w-[550px] md:pt-[120px] lg:max-w-[860px] lg:pt-[160px] xl:max-w-[900px] xl:gap-12">
        <h1 className="font-['Gilroy'] text-3xl font-[600] text-black-1 md:text-4xl lg:text-5xl xl:text-6xl">
          Our Global Mission
        </h1>
        <p className="font-['Gilroy'] text-base font-[400] text-black-1 md:text-lg lg:text-xl ">
          RenewMe is a purpose-driven brand with a mission of mental health awareness, harmonizing
          the best in psychology and technology with something for everyone — from the employee to
          the traveler — to lead a more balanced life.
        </p>
        <p className="font-['Gilroy'] text-base font-[400] text-black-1 md:text-lg lg:text-xl">
          Made by tech-savvy millennials with future generations in mind, RenewMe transports you
          into a mesmerizing world of renewal building upon your strengths from within. This
          solution-oriented iOS “superapp” is more than mindfulness, it is focused on enhancing
          self-growth. Combining chic and trendy features with a world class user-friendly
          interface, it is unlike anything you have ever seen.
        </p>
        <p className="font-['Gilroy'] text-base font-[400] text-black-1 md:text-lg lg:text-xl">
          Powered by former senior Apple engineers, every aspect of this innovative concept is
          carefully constructed and inspired by the breadth of real-life experiences of one of
          America’s leading psychotherapists who now joins the ranks of few women in the exclusive
          space of iOS technology.
        </p>
        <span className="relative mt-5 h-[32px]">
          <RibbonMhaSvg className="h-[48px] w-[100%] max-w-[380px]" />
        </span>
      </div>
    </GlobalMissionWrapper>
  );
};

export default GlobalMission;
