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
          Soulscape brings wellness and relaxation to the travel experience. Gain the most of your
          luxurious trips. Whether flying on a plane, taking a cruise, or staying at a hotel,
          Soulscape puts you at ease. From exploring places to go, easily accessible bookings, tips
          to planning your journey, wellness resources, and mindfulness to relax, Soulscape has
          everything you need to be a balanced traveler.
        </p>
      </div>
    </TravelBalanceWrapper>
  );
};

export default TravelBalance;
