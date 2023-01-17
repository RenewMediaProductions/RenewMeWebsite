import { Service2Wrapper } from './Service2.styled';

import { SOULSCAPE_IMAGES } from '../constants';

import classNames from 'classnames';
import Image from 'next/image';
import React from 'react';
import InfoSvg from 'shared/assets/svg/Soulscape/s2-info.svg';

interface Props {
  className?: string;
}

const Service2: React.FC<Props> = ({ className }) => {
  const serviceClass = classNames(
    `relative h-[650px] mt-[-50px]`,
    `md:h-[700px] md:mt-[5px]`,
    `lg:h-[1000px] lg:mt-[-120px]`,
    className
  );
  const contentClass = classNames(
    `relative flex flex-col items-center justify-center w-screen h-full isolate`
  );
  const phone1Class = classNames(
    `hidden w-full max-w-[320px] transition-opacity duration-1000`,
    `md:left-[calc(50%_-_250px)] md:top-[calc(50%_+_50px)] md:max-w-[330px] md:block md:absolute md:translate-x-[-50%] md:translate-y-[-50%]`,
    `lg:left-[calc(50%_-_350px)] lg:top-[calc(50%_+_60px)] lg:max-w-[470px]`
  );
  const phone2Class = classNames(
    `block w-full max-w-[320px] transition-opacity duration-1000`,
    `md:left-[calc(50%_+_250px)] md:top-[calc(50%_-_50px)] md:max-w-[330px] md:block md:absolute md:translate-x-[-50%] md:translate-y-[-50%]`,
    `lg:left-[calc(50%_+_350px)] lg:top-[calc(50%_-_60px)] lg:max-w-[470px]`
  );
  const infoClass = classNames(
    `flex flex-col gap-2 items-center mt-[-50px] transition-opacity duration-1000 w-[305px]`,
    `md:left-[calc(50%)] md:top-[50%] md:w-[220px] md:absolute md:translate-x-[-50%] md:translate-y-[-50%]`,
    `lg:left-[calc(50%)] lg:top-[50%] lg:w-[315px]`
  );

  return (
    <Service2Wrapper className={serviceClass}>
      <div className="bg"></div>
      <div className={contentClass}>
        <div className={phone2Class}>
          <Image
            src={SOULSCAPE_IMAGES['s2-phone-2'].url}
            layout="responsive"
            width={SOULSCAPE_IMAGES['s2-phone-2'].width}
            height={SOULSCAPE_IMAGES['s2-phone-2'].height}
            alt={SOULSCAPE_IMAGES['s2-phone-2'].alt}
          />
        </div>
        <div className={phone1Class}>
          <Image
            src={SOULSCAPE_IMAGES['s2-phone-1'].url}
            layout="responsive"
            width={SOULSCAPE_IMAGES['s2-phone-1'].width}
            height={SOULSCAPE_IMAGES['s2-phone-1'].height}
            alt={SOULSCAPE_IMAGES['s2-phone-1'].alt}
          />
        </div>
        <div className={infoClass}>
          <InfoSvg className="h-[33px] w-[auto] lg:h-[48px]" />
          <p className="font-['Gilroy'] font-[600] text-lg text-black-1 text-center md:text-xl lg:text-2xl">
            Travel Safe
          </p>
          <p className="font-['Gilroy'] font-[400] text-sm text-gray-3 text-center md:text-base lg:text-lg">
            Check for news updates, weather, and safety considerations for a more balanced travel
            experience.
          </p>
        </div>
      </div>
    </Service2Wrapper>
  );
};

export default Service2;
