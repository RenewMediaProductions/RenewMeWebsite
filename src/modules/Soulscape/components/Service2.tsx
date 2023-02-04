import { Service2Wrapper } from './Service2.styled';

import { SOULSCAPE_IMAGES } from '../constants';

import classNames from 'classnames';
import ImageFuture from 'next/future/image';
import React from 'react';
import InfoSvg from 'shared/assets/svg/Soulscape/s2-info.svg';

interface Props {
  className?: string;
}

const Service2: React.FC<Props> = ({ className }) => {
  return (
    <Service2Wrapper
      className={classNames(
        `relative h-[calc(470px+137px+40px)]`, // {phone height} + {info height} + {margin between phone and info}
        `md:h-[calc(470px+120px)]`,
        `lg:h-[calc(613px+120px)]`,
        `xl:h-[calc(666px+120px)]`,
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
            `md:absolute md:left-[calc(50%-250px)] md:top-0 md:block md:translate-x-[-50%]`,
            `lg:left-[calc(50%-320px)] lg:max-w-[300px]`,
            `xl:left-[calc(50%-370px)] xl:max-w-[326px]`
          )}
          src={SOULSCAPE_IMAGES['s2-phone-1'].url}
          width={SOULSCAPE_IMAGES['s2-phone-1'].width}
          height={SOULSCAPE_IMAGES['s2-phone-1'].height}
          alt={SOULSCAPE_IMAGES['s2-phone-1'].alt}
        />
        <ImageFuture
          className={classNames(
            `hidden w-full max-w-[230px] transition-opacity duration-1000`,
            `md:absolute md:left-[calc(50%+250px)] md:bottom-0 md:block md:translate-x-[-50%]`,
            `lg:left-[calc(50%+320px)] lg:max-w-[300px]`,
            `xl:left-[calc(50%+370px)] xl:max-w-[326px]`
          )}
          src={SOULSCAPE_IMAGES['s2-phone-2'].url}
          width={SOULSCAPE_IMAGES['s2-phone-2'].width}
          height={SOULSCAPE_IMAGES['s2-phone-2'].height}
          alt={SOULSCAPE_IMAGES['s2-phone-2'].alt}
        />
        <div
          className={classNames(
            `absolute bottom-0 flex w-[305px] flex-col items-center gap-2 transition-opacity duration-1000`,
            `md:bottom-[unset] md:top-[50%] md:left-[50%] md:w-[230px] md:translate-x-[-50%] md:translate-y-[-50%]`,
            `lg:w-[300px]`,
            `xl:w-[326px]`
          )}
        >
          <InfoSvg className={classNames(`h-[33px] w-[auto]`, `lg:h-[48px]`)} />
          <p
            className={classNames(
              `text-center font-['Gilroy'] text-lg font-[600] text-black-1`,
              `md:text-xl`,
              `lg:text-2xl`
            )}
          >
            Travel Safe
          </p>
          <p
            className={classNames(
              `text-center font-['Gilroy'] text-sm font-[400] text-gray-3`,
              `md:text-base`,
              `lg:text-lg`
            )}
          >
            A safe traveler is a more balanced traveler. Check for news updates, weather, and safety
            considerations, and essential travel tips for a stress-free and enjoyable experience on
            your journey.
          </p>
        </div>
      </div>
    </Service2Wrapper>
  );
};

export default Service2;
