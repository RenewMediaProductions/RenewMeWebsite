import { TravelBalanceWrapper } from './TravelBalance.styled';

import React from 'react';

const TravelBalance: React.FC = () => {
  return (
    <TravelBalanceWrapper className="z-[2] flex justify-center bg-[#FAFAFA]">
      <div className="mx-auto flex h-full max-w-[340px] flex-col gap-10 pt-[80px] md:max-w-[550px] md:pt-[120px] lg:max-w-[860px] lg:pt-[160px] xl:max-w-[916px] xl:gap-12">
        <h1 className="font-['Gilroy'] text-3xl font-[600] text-black-1 md:text-4xl lg:text-5xl xl:text-6xl">
          Travel in Balance
        </h1>
        <p className="font-['Gilroy'] text-base font-[400] text-black-1 md:text-lg lg:text-xl">
          Soulscape brings wellness and relaxation to the travel experience helping you gain the
          most out of your wanderlust adventures. Whether flying on a plane, taking a cruise, or
          staying at a hotel, let Soulscape put you at ease from check-in to check-out. Whether it
          is discovering breathtaking destinations, booking a trip, preparing for travel, or
          exploring mindfulness to relax – we have everything you need to be the balanced traveler
          you are meant to be.
        </p>
      </div>
    </TravelBalanceWrapper>
  );
};

export default TravelBalance;
