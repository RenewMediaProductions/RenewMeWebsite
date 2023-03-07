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
  return (
    <EscapeTranquilityWrapper
      className={classNames(
        `relative flex min-h-[900px] flex-col items-center justify-center overflow-hidden bg-[#EFE7E0]`,
        `lg:h-[900px]`
      )}
    >
      <Image
        className={classNames(`absolute top-0 h-full w-full object-cover object-right-bottom`)}
        src={SPASCAPE_IMAGES['es-bg'].url}
        height={SPASCAPE_IMAGES['es-bg'].height}
        width={SPASCAPE_IMAGES['es-bg'].width}
        alt={SPASCAPE_IMAGES['es-bg'].alt}
        priority
      />
      <h1 className="isolate pb-4 text-center font-['Gilroy'] text-[32px] font-[600] md:text-5xl lg:text-6xl">
        Escape to Tranquility
      </h1>
      <p className="isolate max-w-[325px] pb-8 text-center font-['Gilroy'] font-[500] tracking-[0.2px] text-gray-3 md:max-w-[450px] md:text-lg lg:max-w-[600px] lg:text-xl">
        Spascape is exclusively designed for spa goers to have an immersive experience that
        invigorates the soul while rejuvenating the mind and body at the most luxurious spa
        destinations around the world.
      </p>
      <Link legacyBehavior href={'#'}>
        <a className="isolate font-['Gilroy'] text-sm font-[700] text-blue-3 underline md:text-base lg:text-lg">
          Book Your Trip
        </a>
      </Link>
      <div className="relative h-[280px] md:absolute md:top-[50%] md:left-[50%] md:h-[400px] md:translate-x-[-50%] md:translate-y-[-50%]">
        <div
          className={classNames(
            `absolute top-[calc(50%_-_50px)] left-[calc(50%_+_90px)] h-[29px] translate-x-[-50%] translate-y-[-50%]`,
            `md:top-[calc(50%_-_189px)] md:left-[calc(50%_-_230px)] md:h-[32px]`,
            `lg:top-[calc(50%_-_200px)] lg:left-[calc(50%_-_350px)] lg:h-[35px]`
          )}
        >
          <ExpediaSvg className="h-full w-auto" />
        </div>
        <div
          className={classNames(
            `absolute top-[calc(50%_-_50px)] left-[calc(50%_-_90px)] h-[29px] translate-x-[-50%] translate-y-[-50%]`,
            `md:top-[calc(50%_-_270px)] md:left-[50%] md:h-[32px]`,
            `lg:top-[calc(50%_-_330px)] lg:h-[45px]`
          )}
        >
          <TravelLeisureSvg className="h-full w-auto" />
        </div>
        <div
          className={classNames(
            `absolute top-[calc(50%_+_20px)] left-[50%] h-[32px] translate-x-[-50%] translate-y-[-50%]`,
            `md:top-[calc(50%_-_200px)] md:left-[calc(50%_+_230px)] md:h-[45px]`,
            `lg:top-[calc(50%_-_220px)] lg:left-[calc(50%_+_350px)] lg:h-[64px]`
          )}
        >
          <TravelocitySvg className="h-full w-auto" />
        </div>
        <div
          className={classNames(
            `absolute top-[calc(50%_+_100px)] left-[calc(50%_-_90px)] h-[24px] translate-x-[-50%] translate-y-[-50%]`,
            `md:top-[calc(50%_+_200px)] md:left-[calc(50%_-_150px)] md:h-[28px]`,
            `lg:top-[calc(50%_+_250px)] lg:left-[calc(50%_-_250px)] lg:h-[38px]`
          )}
        >
          <TripadvisorSvg className="h-full w-auto" />
        </div>
        <div
          className={classNames(
            `absolute top-[calc(50%_+_100px)] left-[calc(50%_+_90px)] h-[24px] translate-x-[-50%] translate-y-[-50%]`,
            `md:top-[calc(50%_+_200px)] md:left-[calc(50%_+_150px)] md:h-[28px]`,
            `lg:top-[calc(50%_+_250px)] lg:left-[calc(50%_+_250px)] lg:h-[42px]`
          )}
        >
          <HotelPlannerSvg className="h-full w-auto" />
        </div>
      </div>
    </EscapeTranquilityWrapper>
  );
};

export default EscapeTranquility;
