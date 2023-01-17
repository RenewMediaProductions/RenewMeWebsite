import { Service6Wrapper } from './Service6.styled';

import { HOME_IMAGES } from '../constants';

import classNames from 'classnames';
import Image from 'next/image';
import React from 'react';
import InfoSvg from 'shared/assets/svg/Home/s6-info.svg';

interface Props {
  className?: string;
}

const Service6: React.FC<Props> = ({ className }) => {
  const serviceClass = classNames(
    `relative h-[650px] mt-[-50px]`,
    `md:h-[830px]`,
    `lg:h-[1000px] lg:mt-[165px]`,
    className
  );
  const contentClass = classNames(
    `relative flex flex-col items-center justify-center w-screen h-full isolate`
  );
  const phone1Class = classNames(
    `hidden w-full max-w-[320px] transition-opacity duration-1000`,
    `md:left-[calc(50%_-_100px)] md:top-[calc(50%_-_260px)] md:max-w-[330px] md:block md:absolute md:translate-x-[-50%] md:translate-y-[-50%]`,
    `lg:left-[calc(50%_-_130px)] lg:top-[calc(50%_-_260px)] lg:max-w-[470px]`
  );
  const phone2Class = classNames(
    `block w-full max-w-[320px] transition-opacity duration-1000`,
    `md:left-[calc(50%_-_520px)] md:top-[calc(50%_-_400px)] md:max-w-[330px] md:absolute`,
    `lg:left-[calc(50%_-_710px)] lg:top-[calc(50%_-_500px)] lg:max-w-[470px]`
  );
  const phone3Class = classNames(
    `hidden w-full max-w-[320px] transition-opacity duration-1000`,
    `md:left-[calc(50%_+_160px)] md:top-[calc(50%_+_100px)] md:max-w-[330px] md:block md:absolute md:translate-x-[-50%] md:translate-y-[-50%]`,
    `lg:left-[calc(50%_+_220px)] lg:top-[calc(50%_+_150px)] lg:max-w-[470px]`
  );
  const phone4Class = classNames(
    `hidden w-full max-w-[320px] transition-opacity duration-1000`,
    `md:left-[calc(50%_+_415px)] md:top-[calc(50%_-_100px)] md:max-w-[330px] md:block md:absolute md:translate-x-[-50%] md:translate-y-[-50%]`,
    `lg:left-[calc(50%_+_565px)] lg:top-[calc(50%_-_100px)] lg:max-w-[470px]`
  );
  const infoClass = classNames(
    `flex flex-col gap-2 items-center mt-[-50px] transition-opacity duration-1000 w-[305px]`,
    `md:items-start md:left-[calc(50%_-_100px)] md:top-[calc(50%_+_145px)] md:w-[220px] md:absolute md:translate-x-[-50%] md:translate-y-[-50%]`,
    `lg:left-[calc(50%_-_130px)] lg:top-[calc(50%_+_245px)] lg:w-[315px]`
  );

  return (
    <Service6Wrapper className={serviceClass}>
      <div className="bg"></div>
      <div className={contentClass}>
        <div className={phone2Class}>
          <Image
            src={HOME_IMAGES['s6-phone-1'].url}
            layout="responsive"
            width={HOME_IMAGES['s6-phone-1'].width}
            height={HOME_IMAGES['s6-phone-1'].height}
            alt={HOME_IMAGES['s6-phone-1'].alt}
          />
        </div>
        <div className={phone1Class}>
          <Image
            src={HOME_IMAGES['s6-phone-2'].url}
            layout="responsive"
            width={HOME_IMAGES['s6-phone-2'].width}
            height={HOME_IMAGES['s6-phone-2'].height}
            alt={HOME_IMAGES['s6-phone-2'].alt}
          />
        </div>
        <div className={phone3Class}>
          <Image
            src={HOME_IMAGES['s6-phone-3'].url}
            layout="responsive"
            width={HOME_IMAGES['s6-phone-3'].width}
            height={HOME_IMAGES['s6-phone-3'].height}
            alt={HOME_IMAGES['s6-phone-3'].alt}
          />
        </div>
        <div className={phone4Class}>
          <Image
            src={HOME_IMAGES['s6-phone-4'].url}
            layout="responsive"
            width={HOME_IMAGES['s6-phone-4'].width}
            height={HOME_IMAGES['s6-phone-4'].height}
            alt={HOME_IMAGES['s6-phone-4'].alt}
            priority
          />
        </div>
        <div className={infoClass}>
          <InfoSvg className="h-[33px] w-[auto] lg:h-[48px]" />
          <p className="font-['Gilroy'] font-[600] text-lg text-black-1 text-center md:text-xl lg:text-2xl">
            Stay Motivated
          </p>
          <p className="font-['Gilroy'] font-[400] text-sm text-gray-3 text-center md:text-start md:text-base lg:text-lg">
            Pep Talks, affirmations, and spotlight influencers inspire you to lead a more productive
            and balanced life.
          </p>
        </div>
      </div>
    </Service6Wrapper>
  );
};

export default Service6;
