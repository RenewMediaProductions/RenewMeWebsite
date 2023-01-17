import { HeroWrapper } from './Hero.styled';

import { PARTNERS_IMAGES } from 'modules/Partners/constants';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Hero: React.FC = () => {
  return (
    <HeroWrapper className="relative w-screen">
      <div className="container flex flex-col items-center h-full px-6 mx-auto pt-36 isolate xl:pt-40">
        <div className="pb-8">
          <p className="hero-text font-['Gilroy'] font-[400] text-center text-base tracking-[2px] pb-4 text-black-1 max-w-xs md:max-w-md lg:max-w-xl xl:max-w-4xl">
            RENEWME PARTNERSHIPS
          </p>
          <h1 className="hero-text font-['Gilroy'] font-[600] leading-10 text-center text-3xl pb-4 text-black-1 md:text-4xl lg:text-5xl xl:text-6xl">
            Brands with Purpose
          </h1>
          <p className="hero-text font-['Gilroy'] font-[500] text-center text-base text-black-1 max-w-xs md:text-lg md:max-w-md lg:text-xl lg:max-w-xl xl:max-w-3xl">
            RenewMe select partners are an integral part of our dedication to helping individuals
            live a healthier, happier, and balanced life. We pride ourselves on special, curated
            partnerships with brands with purpose who are dedicated to a mission of wellness and
            life balance for their employees and customers.
          </p>
        </div>
        <div className="grid hero-buttons">
          <Link href={'#'}>
            <a className="font-['Gilroy'] font-[400] text-center text-sm text-white h-10 px-4 bg-orange-1 rounded-lg flex items-center hover:bg-orange-1-hover lg:text-base lg:h-11 xl:text-lg xl:h-14">
              Discover Partnerships
            </a>
          </Link>
        </div>
      </div>
      <div className="grid mt-20 overflow-x-auto justify-items-center px-[15px]">
        <div className="grid grid-flow-col gap-x-[15px]">
          <div className="hero-image relative h-full max-w-[210px] w-[260px]">
            <Image
              src={PARTNERS_IMAGES['h-card-1'].url}
              height={PARTNERS_IMAGES['h-card-1'].height}
              width={PARTNERS_IMAGES['h-card-1'].width}
              alt={PARTNERS_IMAGES['h-card-1'].alt}
              priority
            />
          </div>
          <div className="hero-image relative h-full max-w-[210px] w-[260px]">
            <Image
              src={PARTNERS_IMAGES['h-card-2'].url}
              height={PARTNERS_IMAGES['h-card-2'].height}
              alt={PARTNERS_IMAGES['h-card-2'].alt}
              width={PARTNERS_IMAGES['h-card-2'].width}
              priority
            />
          </div>
          <div className="hero-image relative h-full max-w-[210px] w-[260px]">
            <Image
              src={PARTNERS_IMAGES['h-card-3'].url}
              height={PARTNERS_IMAGES['h-card-3'].height}
              alt={PARTNERS_IMAGES['h-card-3'].alt}
              width={PARTNERS_IMAGES['h-card-3'].width}
              priority
            />
          </div>
          <div className="hero-image relative h-full max-w-[210px] w-[260px]">
            <Image
              src={PARTNERS_IMAGES['h-card-4'].url}
              height={PARTNERS_IMAGES['h-card-4'].height}
              alt={PARTNERS_IMAGES['h-card-4'].alt}
              width={PARTNERS_IMAGES['h-card-4'].width}
              priority
            />
          </div>
          <div className="hero-image relative h-full max-w-[210px] w-[260px]">
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
