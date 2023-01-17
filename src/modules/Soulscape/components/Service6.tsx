import { Service6Wrapper } from './Service6.styled';

import { SOULSCAPE_IMAGES } from '../constants';

import classNames from 'classnames';
import ImageFuture from 'next/future/image';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import InfoSvg from 'shared/assets/svg/Soulscape/s6-info.svg';

interface Props {
  className?: string;
}

const Service6: React.FC<Props> = ({ className }) => {
  const serviceClass = classNames(
    `relative h-[680px] mt-[-35px]`,
    `md:h-[520px] md:mt-[25px]`,
    `lg:h-[770px] lg:mt-0`,
    className
  );
  const contentClass = classNames(
    `relative flex flex-col items-center justify-center w-screen h-full isolate`
  );
  const phone1Class = classNames(
    `hidden w-full max-w-[320px] transition-opacity duration-1000`,
    `md:mt-[13px] md:left-[calc(50%_-_250px)] md:top-[50%] md:max-w-[330px] md:block md:absolute md:translate-x-[-50%] md:translate-y-[-50%]`,
    `lg:left-[50%] lg:top-[50%] lg:max-w-[470px]`
  );
  const phone2Class = classNames(
    `block w-full max-w-[320px] transition-opacity duration-1000 mt-[-35px]`,
    `md:mt-[25px] md:left-[calc(50%_+_250px)] md:top-[50%] md:max-w-[330px] md:block md:absolute md:translate-x-[-50%] md:translate-y-[-50%]`,
    `lg:left-[calc(50%_-_350px)] lg:top-[50%] lg:max-w-[470px]`
  );
  const infoClass = classNames(
    `flex flex-col gap-2 items-center mt-[-50px] transition-opacity duration-1000 w-[305px]`,
    `md:mt-0 md:left-[50%] md:top-[50%] md:w-[220px] md:absolute md:translate-x-[-50%] md:translate-y-[-50%]`,
    `lg:items-start lg:left-[calc(50%_+_350px)] lg:top-[50%] lg:w-[315px]`
  );

  return (
    <Service6Wrapper className={serviceClass}>
      <ImageFuture
        className="absolute top-0 object-cover object-right w-full h-full"
        src={SOULSCAPE_IMAGES['s6-bg'].url}
        height={SOULSCAPE_IMAGES['s6-bg'].height}
        width={SOULSCAPE_IMAGES['s6-bg'].width}
        alt={SOULSCAPE_IMAGES['s6-bg'].alt}
      />
      <div className={contentClass}>
        <div className={phone1Class}>
          <Image
            src={SOULSCAPE_IMAGES['s6-phone-2'].url}
            layout="responsive"
            width={SOULSCAPE_IMAGES['s6-phone-2'].width}
            alt={SOULSCAPE_IMAGES['s6-phone-2'].alt}
            height={SOULSCAPE_IMAGES['s6-phone-2'].height}
          />
        </div>
        <div className={phone2Class}>
          <Image
            src={SOULSCAPE_IMAGES['s6-phone-1'].url}
            layout="responsive"
            width={SOULSCAPE_IMAGES['s6-phone-1'].width}
            alt={SOULSCAPE_IMAGES['s6-phone-1'].alt}
            height={SOULSCAPE_IMAGES['s6-phone-1'].height}
          />
        </div>
        <div className={infoClass}>
          <InfoSvg className="h-[33px] w-[auto] lg:h-[48px]" />
          <p className="font-['Gilroy'] font-[600] text-lg text-black-1 text-center md:text-xl lg:text-2xl lg:text-start">
            Spa Finder
          </p>
          <p className="font-['Gilroy'] font-[400] text-sm text-gray-3 text-center md:text-base lg:text-lg lg:text-start">
            Pep Talks, affirmations, and spotlight influencers inspire you to lead a more productive
            and balanced life.
          </p>
          <Link href={'#'}>
            <a className="font-['Gilroy'] font-[600] text-sm text-blue-3 underline md:text-base lg:text-lg">
              Find a Resort & Spa
            </a>
          </Link>
        </div>
      </div>
    </Service6Wrapper>
  );
};

export default Service6;
