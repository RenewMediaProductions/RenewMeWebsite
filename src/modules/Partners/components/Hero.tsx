import { HeroWrapper } from './Hero.styled';

import classNames from 'classnames';
import { PARTNERS_IMAGES } from 'modules/Partners/constants';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Hero: React.FC = () => {
  return (
    <HeroWrapper className="relative w-screen">
      <div className="bg-1"></div>
      <div className="bg-2"></div>
      <div className="container isolate mx-auto flex h-full flex-col items-center px-6 pt-36 xl:pt-40">
        <div className="pb-8">
          <p className="hero-text max-w-xs pb-4 text-center font-['Gilroy'] text-base font-[400] tracking-[2px] text-black-1 md:max-w-md lg:max-w-xl xl:max-w-4xl">
            RENEWME PARTNERSHIPS
          </p>
          <h1 className="hero-text pb-4 text-center font-['Gilroy'] text-3xl font-[600] leading-10 text-black-1 md:text-4xl lg:text-5xl xl:text-6xl">
            Brands with Purpose
          </h1>
          <p className="hero-text max-w-xs text-center font-['Gilroy'] text-base font-[500] text-black-1 md:max-w-md md:text-lg lg:max-w-xl lg:text-xl xl:max-w-[729px]">
            RenewMe select partners are dedicated to our global mission of helping individuals live
            a healthier and happier lives. Together we pride ourselves on special, curated
            partnerships with popular brands who share our purpose of mental health awareness and a
            mission of life balance.
          </p>
        </div>
        <div className="hero-buttons grid">
          <Link legacyBehavior href={'#'}>
            <a
              className={classNames(
                `flex h-10 items-center rounded-lg bg-orange-1 px-4 text-center font-['Gilroy'] text-sm font-[600] text-white hover:bg-orange-1-hover`
              )}
            >
              Discover Partnerships
            </a>
          </Link>
        </div>
      </div>
      <div className="mt-20 grid justify-items-center overflow-x-auto px-[15px] md:mt-[120px]">
        <div className="grid grid-flow-col gap-x-[15px]">
          <div className="hero-image relative h-full w-[260px] max-w-[210px]">
            <Image
              src={PARTNERS_IMAGES['h-card-1'].url}
              height={PARTNERS_IMAGES['h-card-1'].height}
              width={PARTNERS_IMAGES['h-card-1'].width}
              alt={PARTNERS_IMAGES['h-card-1'].alt}
              priority
            />
          </div>
          <div className="hero-image relative h-full w-[260px] max-w-[210px]">
            <Image
              src={PARTNERS_IMAGES['h-card-2'].url}
              height={PARTNERS_IMAGES['h-card-2'].height}
              alt={PARTNERS_IMAGES['h-card-2'].alt}
              width={PARTNERS_IMAGES['h-card-2'].width}
              priority
            />
          </div>
          <div className="hero-image relative h-full w-[260px] max-w-[210px]">
            <Image
              src={PARTNERS_IMAGES['h-card-3'].url}
              height={PARTNERS_IMAGES['h-card-3'].height}
              alt={PARTNERS_IMAGES['h-card-3'].alt}
              width={PARTNERS_IMAGES['h-card-3'].width}
              priority
            />
          </div>
          <div className="hero-image relative h-full w-[260px] max-w-[210px]">
            <Image
              src={PARTNERS_IMAGES['h-card-4'].url}
              height={PARTNERS_IMAGES['h-card-4'].height}
              alt={PARTNERS_IMAGES['h-card-4'].alt}
              width={PARTNERS_IMAGES['h-card-4'].width}
              priority
            />
          </div>
          <div className="hero-image relative h-full w-[260px] max-w-[210px]">
            <Image
              src={PARTNERS_IMAGES['h-card-5'].url}
              height={PARTNERS_IMAGES['h-card-5'].height}
              alt={PARTNERS_IMAGES['h-card-5'].alt}
              width={PARTNERS_IMAGES['h-card-5'].width}
              priority
            />
          </div>
        </div>
      </div>
    </HeroWrapper>
  );
};

export default Hero;
