import { Service1Wrapper } from './Service1.styled';

import { SOULSCAPE_IMAGES } from '../constants';

import classNames from 'classnames';
import ImageFuture from 'next/future/image';
import React from 'react';
import InfoSvg from 'shared/assets/svg/Soulscape/s1-info.svg';

interface Props {
  className?: string;
}

const Service1: React.FC<Props> = ({ className }) => {
  return (
    <Service1Wrapper
      className={classNames(
        `relative h-[calc(470px+137px+40px)]`, // {phone height} + {info height} + {margin between phone and info}
        `md:h-[calc(470px+197px+40px)]`,
        `lg:h-[calc(613px+208px+60px)]`,
        `xl:h-[calc(666px+208px+60px)]`,
        className
      )}
    >
      <div className={classNames(`bg mt-[-20%]`, `md:mt-[-60px]`, `lg:mt-[-90px]`)}></div>
      <div
        className={classNames(
          `relative isolate flex h-full w-screen flex-col items-center justify-between`,
          `md:justify-start`
        )}
      >
        <ImageFuture
          className={classNames(
            `top-[-10px] block w-full max-w-[230px] transition-opacity duration-1000`,
            `md:absolute md:top-[60px]`,
            `lg:top-[90px] lg:max-w-[300px]`,
            `xl:max-w-[326px]`
          )}
          src={SOULSCAPE_IMAGES['s1-phone-2'].url}
          width={SOULSCAPE_IMAGES['s1-phone-2'].width}
          height={SOULSCAPE_IMAGES['s1-phone-2'].height}
          alt={SOULSCAPE_IMAGES['s1-phone-2'].alt}
        />
        <ImageFuture
          className={classNames(
            `hidden w-full max-w-[230px] transition-opacity duration-1000`,
            `md:absolute md:left-[calc(50%-250px)] md:top-[calc(60px*2)] md:block md:translate-x-[-50%]`,
            `lg:left-[calc(50%-320px)] lg:top-[calc(90px*2)] lg:max-w-[300px]`,
            `xl:left-[calc(50%-370px)] xl:max-w-[326px]`
          )}
          src={SOULSCAPE_IMAGES['s1-phone-1'].url}
          width={SOULSCAPE_IMAGES['s1-phone-1'].width}
          height={SOULSCAPE_IMAGES['s1-phone-1'].height}
          alt={SOULSCAPE_IMAGES['s1-phone-1'].alt}
        />
        <ImageFuture
          className={classNames(
            `hidden w-full max-w-[230px] transition-opacity duration-1000`,
            `md:absolute md:left-[calc(50%+250px)] md:top-0 md:block md:translate-x-[-50%]`,
            `lg:left-[calc(50%+320px)] lg:max-w-[300px]`,
            `xl:left-[calc(50%+370px)] xl:max-w-[326px]`
          )}
          src={SOULSCAPE_IMAGES['s1-phone-3'].url}
          width={SOULSCAPE_IMAGES['s1-phone-3'].width}
          height={SOULSCAPE_IMAGES['s1-phone-3'].height}
          alt={SOULSCAPE_IMAGES['s1-phone-3'].alt}
        />
        <div
          className={classNames(
            `absolute bottom-0 flex w-[305px] flex-col items-center gap-2 transition-opacity duration-1000`,
            `md:left-[calc(50%+250px)] md:w-[230px] md:translate-x-[-50%] md:items-start`,
            `lg:left-[calc(50%+320px)] lg:w-[300px]`,
            `xl:left-[calc(50%+370px)] xl:w-[326px]`
          )}
        >
          <InfoSvg className="h-[33px] w-[auto] lg:h-[48px]" />
          <p
            className={classNames(
              `text-center font-['Gilroy'] text-lg font-[600] text-black-1`,
              `md:text-start md:text-xl`,
              `lg:text-2xl`
            )}
          >
            Travel Tips
          </p>
          <p
            className={classNames(
              `text-center font-['Gilroy'] text-sm font-[400] text-gray-3`,
              `md:text-start md:text-base`,
              `lg:text-lg`
            )}
          >
            Simplify your travels and let Soulscape help you to travel with ease. Explore tips to
            pack, weather updates, and how to best check-in and check-out of your favorite
            destinations.
          </p>
        </div>
      </div>
    </Service1Wrapper>
  );
};

export default Service1;
