import { AboutDevelopersWrapper } from './AboutDevelopers.styled';

import { HOME_IMAGES } from '../constants';

import classNames from 'classnames';
import ImageFuture from 'next/future/image';
import React from 'react';
import AppleSvg from 'shared/assets/svg/apple.svg';
import RenewMeSvg from 'shared/assets/svg/renew-me.svg';

interface Props {
  className?: string;
}

const AboutDevelopers: React.FC<Props> = ({ className }) => {
  return (
    <AboutDevelopersWrapper
      className={classNames(
        `flex h-full min-h-[1200px] w-full  flex-col gap-10 bg-[#FAFAFA] pt-[80px]`,
        `md:px-10`,
        ``,
        className
      )}
      id="about-developers"
    >
      <div className="flex flex-col gap-6 px-6 md:col-start-5 md:col-end-11 md:row-start-1 md:row-end-2 lg:max-w-[540px] xl:max-w-[600px]">
        <h1 className="font-['Gilroy'] text-3xl font-[600] text-black-1 md:text-4xl lg:text-5xl xl:text-6xl">
          M
          <AppleSvg
            className={classNames(
              `mb-[6px] inline-block h-auto w-full max-w-[21px] [&>path]:fill-[#3A3A3B]`,
              `lg:mb-[9px] lg:max-w-[29px]`,
              `xl:mb-[10px] xl:max-w-[37px]`
            )}
          />
          de with Love.
        </h1>
        <div className="font-['Gilroy'] text-base font-[500] text-black-1 md:text-lg lg:text-xl">
          <p className={classNames(`font-['Gilroy'] text-lg font-[700]`)}>
            Where Psychology Meets Technology
          </p>
          <p className={classNames(`font-['Gilroy'] text-lg font-[400]`)}>
            RenewMe combines psychology with the power of advanced technology engineered by former
            Apple engineers to empower employees and customers of global brands with a mission of
            helping them lead a more happy and balanced life.
          </p>
        </div>
        <div className="font-['Gilroy'] text-base font-[500] text-black-1 md:text-lg lg:text-xl">
          <p className={classNames(`font-['Gilroy'] text-lg font-[700]`)}>
            Inspired by Mental Health Awareness
          </p>
          <p className={classNames(`font-['Gilroy'] text-lg font-[400]`)}>
            RenewMe brand is the brainchild of leading psychotherapist and national media
            personality Dr. Lisa Palmer, founder of The Renew Center of Florida Ranked #1 in the
            U.S. for the Treatment of PTSD, and the first female psychotherapist and minority woman
            in business to develop a self-help smartphone app of its kind.
          </p>
        </div>
        <div className="font-['Gilroy'] text-base font-[500] text-black-1 md:text-lg lg:text-xl">
          <p className={classNames(`font-['Gilroy'] text-lg font-[700]`)}>
            Powered by Former Apple Engineers
          </p>
          <p className={classNames(`font-['Gilroy'] text-lg font-[400]`)}>
            Our development team includes former Senior iOS Engineers at Apple Inc. (from 2011 to
            2015) where they were responsible for building and maintaining iOS, iPad, AppleTV and
            AppleWatch apps for the iTunes Store, App Store, Apple Trailers, Apple Remote, iTunes U,
            Podcasts and Apple Music.
          </p>
        </div>
      </div>
      <div className="relative h-full w-full">
        <RenewMeSvg className={classNames(`absolute top-0  h-full w-full`)} />
        <ImageFuture
          className={classNames(`absolute top-0 h-full w-full object-cover`)}
          src={HOME_IMAGES.women.url}
          height={HOME_IMAGES.women.height}
          width={HOME_IMAGES.women.width}
          alt={HOME_IMAGES.women.alt}
          priority
        />
      </div>
    </AboutDevelopersWrapper>
  );
};

export default AboutDevelopers;
