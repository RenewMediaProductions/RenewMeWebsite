import classNames from 'classnames';
import React from 'react';

import Image from 'next/image';

import AppleSvg from 'shared/assets/svg/apple.svg';
import HeartSvg from 'shared/assets/svg/heart.svg';

import { cn } from 'src/lib/utils';

import { HOME_IMAGES } from '../constants';
import { AboutDevelopersWrapper } from './AboutDevelopers.styled';

interface Props {
  className?: string;
}

const AboutDevelopers: React.FC<Props> = ({ className }) => {
  return (
    <AboutDevelopersWrapper
      className={classNames(
        `flex flex-col h-[1800px] items-center justify-center w-full bg-[#FAFAFA] pt-[40px] md:pt-[40px]`,
        `min-[575px]:h-[1500px]`,
        `md:px-10`,
        `xl:h-[1024px] xl:flex-row-reverse`,
        className
      )}
      id="about-developers"
    >
      <div className={cn('flex flex-col gap-6 px-6 h-fit xl:basis-full', 'xl:gap-10')}>
        <h1 className="text-center font-['Gilroy'] text-3xl font-[600] text-black-1 md:text-4xl lg:text-5xl xl:text-6xl">
          M
          <AppleSvg
            className={classNames(
              `mb-[6px] inline-block h-auto w-full max-w-[19px] [&>path]:fill-[#3A3A3B]`,
              `lg:mb-[9px] lg:max-w-[29px]`,
              `xl:mb-[10px] xl:max-w-[37px]`
            )}
          />
          de with L
          <HeartSvg
            className={classNames(
              `inline-block h-auto w-full max-w-[19px] [&>path]:fill-[#3A3A3B]`,
              `lg:max-w-[29px]`,
              `xl:max-w-[37px]`
            )}
          />
          ve.
        </h1>
        <div className="flex w-full flex-col items-center">
          <p
            className={classNames(
              `mb-2 w-48 text-center font-['Gilroy'] text-xl font-[700] text-[#3A3A3B] md:w-full md:text-2xl`
            )}
          >
            Psychology Meets Technology
          </p>
          <p
            className={classNames(`text-justify font-['Gilroy'] text-lg font-[400] text-[#7B7C7D]`)}
          >
            RenewMe blends psychology with cutting-edge technology, crafted by former Apple
            engineers, to empower employees and customers of global brands. Our mission is to assist
            individuals in leading happier and more balanced lives.
          </p>
        </div>
        <div>
          <div className="flex w-full justify-center">
            <p
              className={classNames(
                `mb-2 w-44 text-center font-['Gilroy'] text-xl font-[700] text-[#3A3A3B] md:w-full md:text-2xl`
              )}
            >
              Mission of Mental Health Awareness
            </p>
          </div>
          <p
            className={classNames(`text-justify font-['Gilroy'] text-lg font-[400] text-[#7B7C7D]`)}
          >
            RenewMe is the brainchild of Dr. Lisa Palmer, a renowned psychotherapist and national
            media personality. As the founder of The Renew Center of Florida, ranked #1 in the U.S.
            for PTSD treatment, Dr. Palmer holds the distinction of being the first female
            psychotherapist and minority woman in business to create a self-help smartphone app of
            its kind.
          </p>
        </div>
        <div>
          <div className="flex w-full justify-center">
            <p
              className={classNames(
                `mb-2 w-56 text-center font-['Gilroy'] text-xl font-[700] text-[#3A3A3B] md:w-full md:text-2xl`
              )}
            >
              Powered by Former Apple Engineers
            </p>
          </div>
          <p
            className={classNames(`text-justify font-['Gilroy'] text-lg font-[400] text-[#7B7C7D]`)}
          >
            Our development team is comprised of former Senior iOS Engineers from Apple Inc.
            inspired to make a difference. These highly skilled professionals have played a pivotal
            role in building and maintaining iOS, iPad, AppleTV, and AppleWatch apps for a variety
            of services. Their expertise spans projects such as the iTunes Store, App Store, Apple
            Trailers, Apple Remote, iTunes U, Podcasts, and Apple Music.
          </p>
        </div>
      </div>

      <div className="relative basis-full">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          <Image
            className="object-contain max-w-[800px] sm:max-w-[1000px] md:max-w-[1200px]"
            src={HOME_IMAGES.team.url}
            alt={HOME_IMAGES.team.alt}
            width={HOME_IMAGES.team.width}
            height={HOME_IMAGES.team.height}
          />
        </div>
      </div>
    </AboutDevelopersWrapper>
  );
};

export default AboutDevelopers;
