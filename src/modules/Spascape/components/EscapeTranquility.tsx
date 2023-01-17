import { EscapeTranquilityWrapper } from './EscapeTranquility.styled';

import { SPASCAPE_IMAGES } from '../constants';

import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import ExpediaSvg from 'shared/assets/svg/Spascape/expedia.svg';
import HotelPlannerSvg from 'shared/assets/svg/Spascape/hotel-planner.svg';
import TravelLeisureSvg from 'shared/assets/svg/Spascape/travel-leisure.svg';
import TravelocitySvg from 'shared/assets/svg/Spascape/travelocity.svg';
import TripadvisorSvg from 'shared/assets/svg/Spascape/tripadvisor.svg';

const EscapeTranquility: React.FC = () => {
  const mainWrapper = classNames(
    `relative flex flex-col items-center justify-center min-h-[812px] overflow-hidden`,
    `lg:h-[900px]`
  );
  const expediaClass = classNames(
    `absolute top-[calc(50%_-_50px)] left-[calc(50%_+_90px)] translate-x-[-50%] translate-y-[-50%] h-[29px]`,
    `md:top-[calc(50%_-_189px)] md:left-[calc(50%_-_280px)] md:h-[32px]`,
    `lg:top-[calc(50%_-_200px)] lg:left-[calc(50%_-_390px)] lg:h-[35px]`
  );
  const travelLeisureClass = classNames(
    `absolute top-[calc(50%_-_50px)] left-[calc(50%_-_90px)] translate-x-[-50%] translate-y-[-50%] h-[29px]`,
    `md:top-[calc(50%_-_270px)] md:left-[50%] md:h-[32px]`,
    `lg:top-[calc(50%_-_330px)] lg:h-[45px]`
  );
  const travelocityClass = classNames(
    `absolute top-[calc(50%_+_20px)] left-[50%] translate-x-[-50%] translate-y-[-50%] h-[32px]`,
    `md:top-[calc(50%_-_200px)] md:left-[calc(50%_+_280px)] md:h-[45px]`,
    `lg:top-[calc(50%_-_220px)] lg:left-[calc(50%_+_390px)] lg:h-[64px]`
  );
  const tripadvisorClass = classNames(
    `absolute top-[calc(50%_+_100px)] left-[calc(50%_-_90px)] translate-x-[-50%] translate-y-[-50%] h-[24px]`,
    `md:top-[calc(50%_+_250px)] md:left-[calc(50%_-_150px)] md:h-[28px]`,
    `lg:top-[calc(50%_+_300px)] lg:left-[calc(50%_-_250px)] lg:h-[38px]`
  );
  const hotelPlannerClass = classNames(
    `absolute top-[calc(50%_+_100px)] left-[calc(50%_+_90px)] translate-x-[-50%] translate-y-[-50%] h-[24px]`,
    `md:top-[calc(50%_+_250px)] md:left-[calc(50%_+_150px)] md:h-[28px]`,
    `lg:top-[calc(50%_+_300px)] lg:left-[calc(50%_+_250px)] lg:h-[42px]`
  );

  return (
    <EscapeTranquilityWrapper className={mainWrapper}>
      <div className="absolute w-full h-full min-w-[600px] min-h-[600px] max-w-[1000px] max-h-[1000px] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
        <Image
          src={SPASCAPE_IMAGES['es-bg'].url}
          alt={SPASCAPE_IMAGES['es-bg'].alt}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          priority
        />
      </div>
      <h1 className="font-['Gilroy'] font-[600] pb-4 text-center isolate text-[32px] md:text-5xl lg:text-6xl">
        Escape to Tranquility
      </h1>
      <p className="font-['Gilroy'] font-[500] text-center text-gray-3 tracking-[0.2px] pb-8 isolate max-w-[325px] md:text-lg md:max-w-[450px] lg:text-xl lg:max-w-[600px]">
        Spascape is exclusively designed for spa goers to have an immersive experience that
        invigorates the soul while rejuvenating the mind and body at the most luxurious spa
        destinations around the world.
      </p>
      <Link href={'#'}>
        <a className="font-['Gilroy'] font-[700] text-sm text-blue-3 isolate underline md:text-base lg:text-lg">
          Book Your Trip
        </a>
      </Link>
      <div className="relative h-[280px] md:absolute md:h-[400px] md:top-[50%] md:left-[50%] md:translate-x-[-50%] md:translate-y-[-50%]">
        <div className={expediaClass}>
          <ExpediaSvg className="w-auto h-full" />
        </div>
        <div className={travelLeisureClass}>
          <TravelLeisureSvg className="w-auto h-full" />
        </div>
        <div className={travelocityClass}>
          <TravelocitySvg className="w-auto h-full" />
        </div>
        <div className={tripadvisorClass}>
          <TripadvisorSvg className="w-auto h-full" />
        </div>
        <div className={hotelPlannerClass}>
          <HotelPlannerSvg className="w-auto h-full" />
        </div>
      </div>
    </EscapeTranquilityWrapper>
  );
};

export default EscapeTranquility;
