import { Service4Wrapper } from './Service4.styled';

import { HOME_IMAGES, STARS } from '../constants';

import classNames from 'classnames';
import Image from 'next/image';
import React from 'react';
import InfoSvg from 'shared/assets/svg/Home/s4-info.svg';

interface Props {
  className?: string;
}

const Stars = () => {
  return (
    <React.Fragment>
      {STARS.map((star, idx) => (
        <span
          key={idx}
          className="absolute rounded-[50%] bg-white"
          style={{
            top: `${star.top}%`,
            left: `${star.left}%`,
            height: star.size,
            width: star.size,
          }}
        ></span>
      ))}
    </React.Fragment>
  );
};

const Service4: React.FC<Props> = ({ className }) => {
  const serviceClass = classNames(
    `relative h-[680px] mt-[-30px]`,
    `md:h-[830px] md:mt-[-45px]`,
    `lg:h-[1090px] lg:mt-[-60px]`,
    className
  );
  const contentClass = classNames(
    `relative flex flex-col items-center justify-center w-screen h-full isolate`
  );
  const phone1Class = classNames(
    `hidden w-full max-w-[320px] transition-opacity duration-1000`,
    `md:left-[calc(50%_-_250px)] md:top-[calc(50%_+_10px)] md:max-w-[330px] md:block md:absolute md:translate-x-[-50%] md:translate-y-[-50%]`,
    `lg:left-[calc(50%_-_350px)] lg:top-[calc(50%_+_30px)] lg:max-w-[470px]`
  );
  const phone2Class = classNames(
    `block w-full max-w-[320px] transition-opacity duration-1000 mt-[-30px]`,
    `md:left-[50%] md:top-[calc(50%_-_100px)] md:max-w-[330px] md:absolute md:translate-x-[-50%] md:translate-y-[-50%]`,
    `lg:top-[calc(50%_-_100px)] lg:max-w-[470px]`
  );
  const phone3Class = classNames(
    `hidden w-full max-w-[320px] transition-opacity duration-1000`,
    `md:left-[calc(50%_+_250px)] md:top-[calc(50%_+_65px)] md:max-w-[330px] md:block md:absolute md:translate-x-[-50%] md:translate-y-[-50%]`,
    `lg:left-[calc(50%_+_350px)] lg:top-[calc(50%_+_95px)] lg:max-w-[470px]`
  );
  const infoClass = classNames(
    `flex flex-col gap-2 items-center mt-[-50px] transition-opacity duration-1000 w-[305px]`,
    `md:items-start md:left-[50%] md:top-[calc(50%_+_310px)] md:w-[220px] md:absolute md:translate-x-[-50%] md:translate-y-[-50%]`,
    `lg:top-[calc(50%_+_410px)] lg:w-[315px]`
  );

  return (
    <Service4Wrapper className={serviceClass}>
      <div className="bg">
        <Stars />
      </div>
      <div className={contentClass}>
        <div className={phone2Class}>
          <Image
            src={HOME_IMAGES['s4-phone-1'].url}
            layout="responsive"
            width={HOME_IMAGES['s4-phone-1'].width}
            height={HOME_IMAGES['s4-phone-1'].height}
            alt={HOME_IMAGES['s4-phone-1'].alt}
          />
        </div>
        <div className={phone1Class}>
          <Image
            src={HOME_IMAGES['s4-phone-2'].url}
            layout="responsive"
            width={HOME_IMAGES['s4-phone-2'].width}
            height={HOME_IMAGES['s4-phone-2'].height}
            alt={HOME_IMAGES['s4-phone-2'].alt}
          />
        </div>
        <div className={phone3Class}>
          <Image
            src={HOME_IMAGES['s4-phone-3'].url}
            layout="responsive"
            width={HOME_IMAGES['s4-phone-3'].width}
            height={HOME_IMAGES['s4-phone-3'].height}
            alt={HOME_IMAGES['s4-phone-3'].alt}
          />
        </div>
        <div className={infoClass}>
          <InfoSvg className="h-[33px] w-[auto] lg:h-[48px]" />
          <p className="font-['Gilroy'] font-[600] text-lg text-white text-center md:text-xl lg:text-2xl">
            Sleep Smarter
          </p>
          <p className="font-['Gilroy'] font-[400] text-sm text-white text-center md:text-start md:text-base lg:text-lg">
            Designed to help you make the most out of your sleep, our bedtime journeys gently
            nurture your subconscious to develop positivity, enhance imagination, and peace of mind.
          </p>
        </div>
      </div>
    </Service4Wrapper>
  );
};

export default Service4;
