import { Service1Wrapper } from './Service1.styled';

import { SOULSCAPE_IMAGES } from '../constants';

import classNames from 'classnames';
import Image from 'next/image';
import React from 'react';
import InfoSvg from 'shared/assets/svg/Soulscape/s1-info.svg';

interface Props {
  className?: string;
}

const Service1: React.FC<Props> = ({ className }) => {
  const serviceClass = classNames(
    `relative h-[650px] mt-[15px]`,
    `md:h-[700px] md:mt-[25px]`,
    `lg:h-[1000px] lg:mt-[70px]`,
    className
  );
  const contentClass = classNames(
    `relative flex flex-col items-center justify-center w-screen h-full isolate`
  );
  const phone1Class = classNames(
    `hidden w-full max-w-[320px] transition-opacity duration-1000`,
    `md:left-[calc(50%_-_250px)] md:top-[calc(50%_+_60px)] md:max-w-[330px] md:block md:absolute md:translate-x-[-50%] md:translate-y-[-50%]`,
    `lg:left-[calc(50%_-_350px)] lg:top-[calc(50%_+_100px)] lg:max-w-[470px]`
  );
  const phone2Class = classNames(
    `block w-full max-w-[320px] transition-opacity duration-1000 top-[-10px]`,
    `md:max-w-[330px]`,
    `lg:max-w-[470px]`
  );
  const phone3Class = classNames(
    `hidden w-full max-w-[320px] transition-opacity duration-1000`,
    `md:left-[calc(50%_+_250px)] md:top-[calc(50%_-_60px)] md:max-w-[330px] md:block md:absolute md:translate-x-[-50%] md:translate-y-[-50%]`,
    `lg:left-[calc(50%_+_350px)] lg:top-[calc(50%_-_100px)] lg:max-w-[470px]`
  );
  const infoClass = classNames(
    `flex flex-col gap-2 items-center mt-[-50px] transition-opacity duration-1000 w-[305px]`,
    `md:items-start md:left-[calc(50%_+_250px)] md:top-[calc(50%_+_355px)] md:w-[220px] md:absolute md:translate-x-[-50%] md:translate-y-[-50%]`,
    `lg:left-[calc(50%_+_350px)] lg:top-[calc(50%_+_385px)] lg:w-[315px]`
  );

  return (
    <Service1Wrapper className={serviceClass}>
      <div className="bg"></div>
      <div className={contentClass}>
        <div className={phone2Class}>
          <Image
            src={SOULSCAPE_IMAGES['s1-phone-2'].url}
            layout="responsive"
            width={SOULSCAPE_IMAGES['s1-phone-2'].width}
            height={SOULSCAPE_IMAGES['s1-phone-2'].height}
            alt={SOULSCAPE_IMAGES['s1-phone-2'].alt}
          />
        </div>
        <div className={phone1Class}>
          <Image
            src={SOULSCAPE_IMAGES['s1-phone-1'].url}
            layout="responsive"
            width={SOULSCAPE_IMAGES['s1-phone-1'].width}
            height={SOULSCAPE_IMAGES['s1-phone-1'].height}
            alt={SOULSCAPE_IMAGES['s1-phone-1'].alt}
          />
        </div>
        <div className={phone3Class}>
          <Image
            src={SOULSCAPE_IMAGES['s1-phone-3'].url}
            layout="responsive"
            width={SOULSCAPE_IMAGES['s1-phone-3'].width}
            height={SOULSCAPE_IMAGES['s1-phone-3'].height}
            alt={SOULSCAPE_IMAGES['s1-phone-3'].alt}
          />
        </div>
        <div className={infoClass}>
          <InfoSvg className="h-[33px] w-[auto] lg:h-[48px]" />
          <p className="font-['Gilroy'] font-[600] text-lg text-black-1 text-center md:text-start md:text-xl xl:text-2xl">
            Travel Tips
          </p>
          <p className="font-['Gilroy'] font-[400] text-sm text-gray-3 text-center md:text-start md:text-base xl:text-lg">
            Simplify your travels and let Soulscape help you to pack better, and check-in and
            check-out to your favorite destinations.
          </p>
        </div>
      </div>
    </Service1Wrapper>
  );
};

export default Service1;
