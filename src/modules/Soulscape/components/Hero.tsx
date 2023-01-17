import { HeroWrapper } from './Hero.styled';

import { SOULSCAPE_IMAGES } from '../constants';

import ImageFuture from 'next/future/image';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import AppleSvg from 'shared/assets/svg/apple.svg';

const Hero: React.FC = () => {
  return (
    <HeroWrapper className="relative">
      <ImageFuture
        className="absolute top-0 object-cover w-full h-full"
        src={SOULSCAPE_IMAGES['h-bg'].url}
        height={SOULSCAPE_IMAGES['h-bg'].height}
        width={SOULSCAPE_IMAGES['h-bg'].width}
        alt={SOULSCAPE_IMAGES['h-bg'].alt}
        priority
      />
      <div className="container flex flex-col items-center h-full px-6 mx-auto pt-36 isolate xl:pt-40">
        <div className="pb-8">
          <p className="hero-text font-['Gilroy'] font-[400] text-center text-base tracking-[2px] pb-4 text-white max-w-xs md:max-w-md lg:max-w-xl xl:max-w-4xl">
            RENEWME TRAVEL
          </p>
          <h1 className="hero-text font-['Gilroy'] font-[600] leading-10 text-center text-3xl pb-4 text-white md:text-4xl lg:text-5xl xl:text-6xl">
            Soulscape
          </h1>
          <p className="hero-text font-['Gilroy'] font-[400] text-center text-base text-white max-w-xs md:text-lg md:max-w-md lg:text-xl lg:max-w-xl xl:text-2xl xl:max-w-3xl">
            An immersive experience for the mindful traveler to stay relaxed, organized, and
            balanced on their wanderlust journeys.
          </p>
        </div>
        <div className="grid grid-cols-[1fr_1fr] gap-4 hero-buttons">
          <Link href={'#'}>
            <a className="font-['Gilroy'] font-[400] text-center text-sm text-white h-10 px-4 bg-orange-1 rounded-lg flex items-center hover:bg-orange-1-hover lg:text-base lg:h-11 xl:text-lg xl:h-14">
              Corporate Partners
            </a>
          </Link>
          <Link href={'#'}>
            <a className="bg-white rounded-lg grid grid-cols-[20%_1fr] grid-rows-[auto_1fr] h-10 px-2.5 gap-x-2 items-center hover:bg-white/90 lg:h-11 xl:text-lg xl:h-14">
              <AppleSvg className="w-5 h-auto col-start-1 row-start-1 row-end-3 justify-self-end lg:w-6 xl:w-7" />
              <sub className="font-['Gilroy'] font-[500] text-[11px] text-black-1 col-start-2 row-span-1 mt-2 mb-0.5 lg:text-[12px] xl:text-[13px] xl:mt-3">
                Download on the
              </sub>
              <span className="font-['Gilroy'] font-[500] text-lg text-black-1 col-start-2 row-span-2 lg:text-xl xl:text-2xl">
                App Store
              </span>
            </a>
          </Link>
        </div>
      </div>
      <div className="relative mt-20 h-[480px] w-full overflow-hidden flex justify-center lg:h-[700px] xl:h-[800px]">
        <div className="absolute flex h-full lg:relative gap-[8px] lg:grid lg:grid-cols-[repeat(3_,1fr)] lg:content-center lg:justify-items-center">
          <div className="hero-image relative w-screen h-full max-w-[240px] lg:max-w-[340px] xl:max-w-[353px]">
            <Image
              src={SOULSCAPE_IMAGES['h-phone-1'].url}
              height={SOULSCAPE_IMAGES['h-phone-1'].height}
              width={SOULSCAPE_IMAGES['h-phone-1'].width}
              alt={SOULSCAPE_IMAGES['h-phone-1'].alt}
              priority
            />
          </div>
          <div className="hero-image relative w-screen h-full max-w-[240px] lg:max-w-[340px] xl:max-w-[353px]">
            <Image
              src={SOULSCAPE_IMAGES['h-phone-2'].url}
              height={SOULSCAPE_IMAGES['h-phone-2'].height}
              width={SOULSCAPE_IMAGES['h-phone-2'].width}
              alt={SOULSCAPE_IMAGES['h-phone-2'].alt}
              priority
            />
          </div>
          <div className="hero-image relative w-screen h-full max-w-[240px] lg:max-w-[340px] xl:max-w-[353px]">
            <Image
              src={SOULSCAPE_IMAGES['h-phone-3'].url}
              height={SOULSCAPE_IMAGES['h-phone-3'].height}
              width={SOULSCAPE_IMAGES['h-phone-3'].width}
              alt={SOULSCAPE_IMAGES['h-phone-3'].alt}
              priority
            />
          </div>
        </div>
      </div>
    </HeroWrapper>
  );
};

export default Hero;
