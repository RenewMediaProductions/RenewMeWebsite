import { Service10Wrapper } from './Service10.styled';

import { HOME_IMAGES } from '../constants';

import classNames from 'classnames';
import Image from 'next/image';
import React from 'react';
import InfoSvg from 'shared/assets/svg/Home/s10-info.svg';

interface Props {
  className?: string;
}

const Service10: React.FC<Props> = ({ className }) => {
  const serviceClass = classNames(
    `relative h-[650px] mt-[-60px]`,
    `md:h-[830px] md:mt-[-190px]`,
    `lg:h-[1000px] lg:mt-[-55px]`,
    className
  );
  const contentClass = classNames(
    `relative flex flex-col items-center justify-center w-screen h-full isolate`
  );
  const phone1Class = classNames(
    `hidden w-full max-w-[320px] transition-opacity duration-1000`,
    `md:left-[calc(50%_-_250px)] md:top-[calc(50%_+_50px)] md:max-w-[330px] md:block md:absolute md:translate-x-[-50%] md:translate-y-[-50%]`,
    `lg:left-[calc(50%_-_350px)] lg:top-[calc(50%_+_170px)] lg:max-w-[470px]`
  );
  const phone2Class = classNames(
    `block w-full max-w-[320px] transition-opacity duration-1000`,
    `md:max-w-[330px]`,
    `lg:max-w-[470px]`
  );
  const phone3Class = classNames(
    `hidden w-full max-w-[320px] transition-opacity duration-1000`,
    `md:left-[calc(50%_+_250px)] md:top-[calc(50%_-_50px)] md:max-w-[330px] md:block md:absolute md:translate-x-[-50%] md:translate-y-[-50%]`,
    `lg:left-[calc(50%_+_350px)] lg:top-[calc(50%_-_170px)] lg:max-w-[470px]`
  );
  const infoClass = classNames(
    `flex flex-col gap-2 items-center mt-[-50px] transition-opacity duration-1000 w-[305px]`,
    `md:items-start md:left-[calc(50%_+_265px)] md:top-[calc(50%_+_340px)] md:w-[220px] md:absolute md:translate-x-[-50%] md:translate-y-[-50%]`,
    `lg:left-[calc(50%_+_350px)] lg:top-[calc(50%_+_320px)] lg:w-[315px]`
  );

  return (
    <Service10Wrapper className={serviceClass}>
      <div className="bg"></div>
      <div className={contentClass}>
        <div className={phone2Class}>
          <Image
            src={HOME_IMAGES['s10-phone-2'].url}
            layout="responsive"
            width={HOME_IMAGES['s10-phone-2'].width}
            height={HOME_IMAGES['s10-phone-2'].height}
            alt={HOME_IMAGES['s10-phone-2'].alt}
          />
        </div>
        <div className={phone1Class}>
          <Image
            src={HOME_IMAGES['s10-phone-1'].url}
            layout="responsive"
            width={HOME_IMAGES['s10-phone-1'].width}
            height={HOME_IMAGES['s10-phone-1'].height}
            alt={HOME_IMAGES['s10-phone-1'].alt}
          />
        </div>
        <div className={phone3Class}>
          <Image
            src={HOME_IMAGES['s10-phone-3'].url}
            layout="responsive"
            width={HOME_IMAGES['s10-phone-3'].width}
            height={HOME_IMAGES['s10-phone-3'].height}
            alt={HOME_IMAGES['s10-phone-3'].alt}
          />
        </div>
        <div className={infoClass}>
          <InfoSvg className="h-[33px] w-[auto] lg:h-[48px]" />
          <p className="font-['Gilroy'] font-[600] text-lg text-black-1 text-center md:text-xl lg:text-2xl">
            Resources & Treatment
          </p>
          <p className="font-['Gilroy'] font-[400] text-sm text-gray-3 text-center md:text-start md:text-base lg:text-lg">
            Discover articles, resources, and treatment to empower self-growth.
          </p>
        </div>
      </div>
    </Service10Wrapper>
  );
};

export default Service10;
