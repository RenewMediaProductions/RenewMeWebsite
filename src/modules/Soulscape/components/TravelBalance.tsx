import React from 'react';

import { TravelBalanceWrapper } from './TravelBalance.styled';

const TravelBalance: React.FC = () => {
  return (
    <TravelBalanceWrapper className="z-[2] flex justify-center bg-[#FAFAFA]">
      <div className="mx-auto flex h-full max-w-[340px] flex-col gap-10 pt-[80px] md:max-w-[550px] md:pt-[120px] lg:max-w-[860px] lg:pt-[160px] xl:max-w-[916px] xl:gap-12">
        <h1 className="font-['Gilroy'] text-3xl font-[600] text-black-1 md:text-4xl lg:text-5xl xl:text-6xl">
          Mindfulness for the Traveler
        </h1>
        <div className="font-['Gilroy'] w-full text-justify text-base font-[400] text-black-1 md:text-lg lg:text-xl">
          <p>
            Soulscape enhances wellness and relaxation during your travel experience, ensuring you
            get the most out of your wanderlust adventures. Whether you're on a plane, cruise, or
            staying at a hotel, let Soulscape guide you seamlessly from check-in to check-out.
          </p>
          <br />
          <p>
            Whether it's discovering breathtaking destinations, booking a trip, preparing for
            travel, or exploring mindfulness to relax – we provide everything you need to be the
            balanced traveler you are meant to be.
          </p>
        </div>
      </div>
    </TravelBalanceWrapper>
  );
};

export default TravelBalance;
