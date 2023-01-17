import { TravelBalanceWrapper } from './TravelBalance.styled';

import React from 'react';

const TravelBalance: React.FC = () => {
  return (
    <TravelBalanceWrapper className="flex justify-center">
      <div className="flex flex-col h-full gap-10 mx-auto pt-16 max-w-[340px] md:max-w-[550px] lg:pt-28 lg:max-w-[860px] xl:max-w-[916px] xl:gap-12">
        <h1 className="font-['Gilroy'] font-[600] text-3xl text-black-1 md:text-4xl lg:text-5xl xl:text-6xl">
          Travel in Balance
        </h1>
        <p className="font-['Gilroy'] font-[400] text-base text-black-1 md:text-lg lg:text-xl">
          Soulscape brings wellness and relaxation to the travel experience. Gain the most of your
          luxurious trips. Whether flying on a plane, taking a cruise, or staying at a hotel,
          Soulscape makes experiences more enjoyable. From exploring places to go, to easily
          accessible bookings, tips to planning your journey, wellness resources, and mindfulness to
          relax, Soulscape has everything you need to be a balanced traveler.
        </p>
      </div>
    </TravelBalanceWrapper>
  );
};

export default TravelBalance;
