import { Service4Wrapper } from './Service4.styled';

import { SOULSCAPE_IMAGES } from '../constants';

import classNames from 'classnames';
import ImageFuture from 'next/future/image';
import React from 'react';
import InfoSvg from 'shared/assets/svg/Soulscape/s4-info.svg';

interface Props {
  className?: string;
}

const Service4: React.FC<Props> = ({ className }) => {
  return (
    <Service4Wrapper
      className={classNames(
        `relative h-[calc(470px+157px+40px)]`, // {phone height} + {info height} + {margin between phone and info}
        `md:h-[calc(470px+221px+60px)]`,
        `lg:h-[calc(613px+244px+90px)]`,
        `xl:h-[calc(666px+244px+90px)]`,
        className
      )}
    >
      <div className={classNames(`bg mt-[-20%]`, `md:mt-[unset]`)}></div>
      <div
        className={classNames(
          `relative isolate flex h-full w-screen flex-col items-center justify-between`,
          `md:justify-start`
        )}
      >
        <ImageFuture
          className={classNames(
            `top-[-10px] block w-full max-w-[230px] transition-opacity duration-1000`,
            `md:absolute md:top-[unset] md:bottom-[0] md:left-[calc(50%-250px/2)] md:block md:translate-x-[-50%]`,
            `lg:left-[calc(50%-320px/2)] lg:max-w-[300px]`,
            `xl:left-[calc(50%-395px/2)] xl:max-w-[326px]`
          )}
          src={SOULSCAPE_IMAGES['s4-phone-2'].url}
          width={SOULSCAPE_IMAGES['s4-phone-2'].width}
          height={SOULSCAPE_IMAGES['s4-phone-2'].height}
          alt={SOULSCAPE_IMAGES['s4-phone-2'].alt}
        />
        <ImageFuture
          className={classNames(
            `hidden w-full max-w-[230px] transition-opacity duration-1000`,
            `md:absolute md:top-[0] md:left-[calc(50%-250px*-1.5)] md:block md:translate-x-[-50%]`,
            `lg:left-[calc(50%-320px*-1.5)] lg:max-w-[300px]`,
            `xl:left-[calc(50%-395px*-1.5)] xl:max-w-[326px]`
          )}
          src={SOULSCAPE_IMAGES['s4-phone-4'].url}
          width={SOULSCAPE_IMAGES['s4-phone-4'].width}
          height={SOULSCAPE_IMAGES['s4-phone-4'].height}
          alt={SOULSCAPE_IMAGES['s4-phone-4'].alt}
        />
        <ImageFuture
          className={classNames(
            `hidden w-full max-w-[230px] transition-opacity duration-1000`,
            `md:absolute md:bottom-[calc(100px*2)] md:left-[calc(50%+250px/2)] md:block md:translate-x-[-50%]`,
            `lg:bottom-[calc(90px*2)] lg:left-[calc(50%+320px/2)] lg:max-w-[300px]`,
            `xl:bottom-[calc(80px*2)] xl:left-[calc(50%+395px/2)] xl:max-w-[326px]`
          )}
          src={SOULSCAPE_IMAGES['s4-phone-3'].url}
          width={SOULSCAPE_IMAGES['s4-phone-3'].width}
          height={SOULSCAPE_IMAGES['s4-phone-3'].height}
          alt={SOULSCAPE_IMAGES['s4-phone-3'].alt}
        />
        <ImageFuture
          className={classNames(
            `hidden w-full max-w-[230px] transition-opacity duration-1000`,
            `md:absolute md:top-[0] md:left-[calc(50%+250px*-1.5)] md:block md:translate-x-[-50%]`,
            `lg:left-[calc(50%+320px*-1.5)] lg:max-w-[300px]`,
            `xl:left-[calc(50%+395px*-1.5)] xl:max-w-[326px]`
          )}
          src={SOULSCAPE_IMAGES['s4-phone-1'].url}
          width={SOULSCAPE_IMAGES['s4-phone-1'].width}
          height={SOULSCAPE_IMAGES['s4-phone-1'].height}
          alt={SOULSCAPE_IMAGES['s4-phone-1'].alt}
        />
        <div
          className={classNames(
            `absolute bottom-0 flex w-[305px] flex-col items-center gap-2 transition-opacity duration-1000`,
            `md:left-[calc(50%-250px/2)] md:top-0 md:bottom-[unset] md:w-[230px] md:translate-x-[-50%] md:items-start`,
            `lg:left-[calc(50%-320px/2)] lg:w-[300px]`,
            `xl:left-[calc(50%-395px/2)] xl:w-[326px]`
          )}
        >
          <InfoSvg className={classNames(`h-[33px] w-[auto] lg:h-[48px]`)} />
          <p
            className={classNames(
              `text-center font-['Gilroy'] text-lg font-[600] text-black-1`,
              `md:text-xl`,
              `lg:pt-[8px] lg:text-2xl`
            )}
          >
            Mindful Traveler
          </p>
          <p
            className={classNames(
              `text-center font-['Gilroy'] text-sm font-[400] text-gray-3`,
              `md:text-start md:text-base`,
              `lg:text-lg`
            )}
          >
            A suite of meditations helps you enhance a state of peace and tranquility whether on the
            move at the airport, or unwinding in the comfort of your hotel.
          </p>
        </div>
      </div>
    </Service4Wrapper>
  );
};

export default Service4;
