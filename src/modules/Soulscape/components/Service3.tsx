import { Service3Wrapper } from './Service3.styled';

import { SOULSCAPE_IMAGES } from '../constants';

import classNames from 'classnames';
import Image from 'next/image';
import React from 'react';
import InfoSvg from 'shared/assets/svg/Soulscape/s3-info.svg';

interface Props {
  className?: string;
}

const Service3: React.FC<Props> = ({ className }) => {
  const serviceClass = classNames(
    `relative h-[650px] mt-[-60px]`,
    `md:h-[830px] md:mt-0`,
    `lg:h-[1000px] lg:mt-[10px]`,
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
    `md:left-[calc(50%_+_160px)] md:top-[calc(50%_+_50px)] md:max-w-[330px] md:block md:absolute md:translate-x-[-50%] md:translate-y-[-50%]`,
    `lg:left-[calc(50%_+_220px)] lg:top-[calc(50%_+_150px)] lg:max-w-[470px]`
  );
  const phone4Class = classNames(
    `hidden w-full max-w-[320px] transition-opacity duration-1000`,
    `md:left-[calc(50%_+_415px)] md:top-[calc(50%_-_100px)] md:max-w-[330px] md:block md:absolute md:translate-x-[-50%] md:translate-y-[-50%]`,
    `lg:left-[calc(50%_+_565px)] lg:top-[calc(50%_-_100px)] lg:max-w-[470px]`
  );
  const infoClass = classNames(
    `flex flex-col gap-2 items-center mt-[-50px] transition-opacity duration-1000 w-[305px]`,
    `md:items-start md:left-[calc(50%_-_100px)] md:top-[calc(50%_+_140px)] md:w-[220px] md:absolute md:translate-x-[-50%] md:translate-y-[-50%]`,
    `lg:left-[calc(50%_-_130px)] lg:top-[calc(50%_+_225px)] lg:w-[315px]`
  );

  return (
    <Service3Wrapper className={serviceClass}>
      <div className="bg"></div>
      <div className={contentClass}>
        <div className={phone2Class}>
          <Image
            src={SOULSCAPE_IMAGES['s3-phone-1'].url}
            layout="responsive"
            width={SOULSCAPE_IMAGES['s3-phone-1'].width}
            height={SOULSCAPE_IMAGES['s3-phone-1'].height}
            alt={SOULSCAPE_IMAGES['s3-phone-1'].alt}
          />
        </div>
        <div className={phone1Class}>
          <Image
            src={SOULSCAPE_IMAGES['s3-phone-2'].url}
            layout="responsive"
            width={SOULSCAPE_IMAGES['s3-phone-2'].width}
            height={SOULSCAPE_IMAGES['s3-phone-2'].height}
            alt={SOULSCAPE_IMAGES['s3-phone-2'].alt}
          />
        </div>
        <div className={phone3Class}>
          <Image
            src={SOULSCAPE_IMAGES['s3-phone-3'].url}
            layout="responsive"
            width={SOULSCAPE_IMAGES['s3-phone-3'].width}
            height={SOULSCAPE_IMAGES['s3-phone-3'].height}
            alt={SOULSCAPE_IMAGES['s3-phone-3'].alt}
          />
        </div>
        <div className={phone4Class}>
          <Image
            src={SOULSCAPE_IMAGES['s3-phone-4'].url}
            layout="responsive"
            width={SOULSCAPE_IMAGES['s3-phone-4'].width}
            height={SOULSCAPE_IMAGES['s3-phone-4'].height}
            alt={SOULSCAPE_IMAGES['s3-phone-4'].alt}
            priority
          />
        </div>
        <div className={infoClass}>
          <InfoSvg className="h-[33px] w-[auto] lg:h-[48px]" />
          <p className="font-['Gilroy'] font-[600] text-lg text-black-1 text-center md:text-start md:text-xl lg:text-2xl">
            Balance on the Go
          </p>
          <p className="font-['Gilroy'] font-[400] text-sm text-gray-3 text-center md:text-start md:text-base lg:text-lg">
            Learn ways to have a healthier mind-body-soul while traveling to your favorite
            destinations.
          </p>
        </div>
      </div>
    </Service3Wrapper>
  );
};

export default Service3;
