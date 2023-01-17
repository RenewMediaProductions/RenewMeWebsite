import { Service2Wrapper } from './Service2.styled';

import { HOME_IMAGES } from '../constants';

import classNames from 'classnames';
import Image from 'next/image';
import React from 'react';
import InfoSvg from 'shared/assets/svg/Home/s2-info.svg';

interface Props {
  className?: string;
}

const Service2: React.FC<Props> = ({ className }) => {
  const serviceClass = classNames(
    `relative h-[650px] mt-[-60px]`,
    `md:h-[700px] md:mt-[65px]`,
    `lg:h-[1000px] lg:mt-0`,
    className
  );
  const contentClass = classNames(
    `relative flex flex-col items-center justify-center w-screen h-full isolate`
  );
  const phone1Class = classNames(
    `hidden w-full max-w-[320px] transition-opacity duration-1000`,
    `md:left-[calc(50%_-_250px)] md:top-[calc(50%_+_95px)] md:max-w-[330px] md:block md:absolute md:translate-x-[-50%] md:translate-y-[-50%]`,
    `lg:left-[calc(50%_-_350px)] lg:top-[calc(50%_+_105px)] lg:max-w-[470px]`
  );
  const phone2Class = classNames(
    `block w-full max-w-[320px] transition-opacity duration-1000`,
    `md:max-w-[330px]`,
    `lg:max-w-[470px]`
  );
  const phone3Class = classNames(
    `hidden w-full max-w-[320px] transition-opacity duration-1000`,
    `md:left-[calc(50%_+_250px)] md:top-[calc(50%_-_95px)] md:max-w-[330px] md:block md:absolute md:translate-x-[-50%] md:translate-y-[-50%]`,
    `lg:left-[calc(50%_+_350px)] lg:top-[calc(50%_-_105px)] lg:max-w-[470px]`
  );
  const infoClass = classNames(
    `flex flex-col gap-2 items-center mt-[-50px] transition-opacity duration-1000 w-[305px]`,
    `md:items-start md:left-[calc(50%_-_250px)] md:top-[calc(50%_-_235px)] md:w-[220px] md:absolute md:translate-x-[-50%] md:translate-y-[-50%]`,
    `lg:left-[calc(50%_-_350px)] lg:top-[calc(50%_-_350px)] lg:w-[315px]`
  );

  return (
    <Service2Wrapper className={serviceClass}>
      <div className="bg"></div>
      <div className={contentClass}>
        <div className={phone2Class}>
          <Image
            src={HOME_IMAGES['s2-phone-2'].url}
            layout="responsive"
            width={HOME_IMAGES['s2-phone-2'].width}
            height={HOME_IMAGES['s2-phone-2'].height}
            alt={HOME_IMAGES['s2-phone-2'].alt}
          />
        </div>
        <div className={phone1Class}>
          <Image
            src={HOME_IMAGES['s2-phone-1'].url}
            layout="responsive"
            width={HOME_IMAGES['s2-phone-1'].width}
            height={HOME_IMAGES['s2-phone-1'].height}
            alt={HOME_IMAGES['s2-phone-1'].alt}
          />
        </div>
        <div className={phone3Class}>
          <Image
            src={HOME_IMAGES['s2-phone-3'].url}
            layout="responsive"
            width={HOME_IMAGES['s2-phone-3'].width}
            height={HOME_IMAGES['s2-phone-3'].height}
            alt={HOME_IMAGES['s2-phone-3'].alt}
          />
        </div>
        <div className={infoClass}>
          <InfoSvg className="h-[33px] w-[auto] lg:h-[48px]" />
          <p className="font-['Gilroy'] font-[600] text-lg text-black-1 text-center md:text-xl lg:text-2xl">
            Skillful Living
          </p>
          <p className="font-['Gilroy'] font-[400] text-sm text-gray-3 text-center md:text-start md:text-base lg:text-lg">
            Discover coping skills and daily habits best suited to match your balance needs.
          </p>
        </div>
      </div>
    </Service2Wrapper>
  );
};

export default Service2;
