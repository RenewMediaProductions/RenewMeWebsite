import { AboutDevelopersWrapper } from './AboutDevelopers.styled';

import { HOME_IMAGES } from '../constants';

import classNames from 'classnames';
import Image from 'next/image';
import React from 'react';

interface Props {
  className?: string;
}

const AboutDevelopers: React.FC<Props> = ({ className }) => {
  return (
    <AboutDevelopersWrapper
      className={classNames(
        `sticky top-[-30%] flex min-h-[1150px] w-full flex-col gap-10 bg-white pt-10`,
        `md:grid md:h-full md:min-h-[900px] md:grid-cols-[repeat(10,1fr)] md:items-center md:justify-center`,
        className
      )}
      id="about-developers"
    >
      <div className="ad-text flex flex-col gap-6 px-6 md:col-start-5 md:col-end-11 md:row-start-1 md:row-end-2 lg:max-w-[540px] xl:max-w-[600px]">
        <h1 className="font-['Gilroy'] text-3xl font-[600] text-black-1 md:text-4xl lg:text-5xl xl:text-6xl">
          About Developers
        </h1>
        <p className="font-['Gilroy'] text-base font-[500] text-black-1 md:text-lg lg:text-xl">
          <a href="https://www.therenewcenter.com" target="_blank" rel="noopener noreferrer">
            RenewMe
          </a>{' '}
          brand is the brainchild of leading psychotherapist and national media personality Dr. Lisa
          Palmer, the only female psychotherapist to develop a smartphone “superapp” of its kind in
          the mindfulness and self-growth space.
        </p>
        <p className="font-['Gilroy'] text-base font-[500] text-black-1 md:text-lg lg:text-xl">
          Founder of The Renew Center of Florida Ranked #1 in the U.S. for the Treatment of PTSD,
          RenewMe combines psychology with the power of advanced technology engineered by former
          Apple engineers to empower employees and customers of global brands with a mission of
          helping them lead a more happy and balanced life.
        </p>
        <div className="mt-10">
          <div className="font-['Gilroy'] text-lg font-[600] text-black-1 md:text-xl lg:text-2xl xl:text-3xl">
            Dr. Lisa Palmer
          </div>
          <sub className="font-['Gilroy'] text-base font-[500] text-black-1 md:text-lg lg:text-xl">
            CEO of RenewMe Brand
          </sub>
        </div>
      </div>
      <div className="ad-image relative left-0 mt-auto w-screen max-w-[350px] md:col-start-1 md:col-end-6 md:row-start-1 md:row-end-2 md:grid md:w-full md:self-end lg:max-w-[430px] xl:max-w-[630px]">
        <Image
          src={HOME_IMAGES['dr-lisa-palmer'].url}
          alt={HOME_IMAGES['dr-lisa-palmer'].alt}
          layout="responsive"
          height={HOME_IMAGES['dr-lisa-palmer'].height}
          width={HOME_IMAGES['dr-lisa-palmer'].width}
        />
      </div>
    </AboutDevelopersWrapper>
  );
};

export default AboutDevelopers;
