import { Service4Wrapper } from './Service4.styled';

import { HOME_IMAGES, STARS } from '../constants';

import classNames from 'classnames';
import ImageFuture from 'next/future/image';
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
          className={classNames(`absolute rounded-[50%] bg-white`)}
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
  return (
    <Service4Wrapper
      className={classNames(
        `relative h-[calc(470px+157px+40px)]`, // {phone height} + {info height} + {margin between phone and info}
        `md:h-[calc(470px+245px+60px)]`,
        `lg:h-[calc(613px+272px+90px)]`,
        `xl:h-[calc(666px+272px+90px)]`,
        className
      )}
    >
      <div className={classNames(`bg`)}>
        <Stars />
      </div>
      <div
        className={classNames(
          `relative isolate flex h-full w-screen flex-col items-center justify-between`,
          `md:justify-start`
        )}
      >
        <ImageFuture
          className={classNames(
            `top-[-10px] block w-full max-w-[230px] transition-opacity duration-1000`,
            `md:absolute md:top-0`,
            `lg:max-w-[300px]`,
            `xl:max-w-[326px]`
          )}
          src={HOME_IMAGES['s4-phone-2'].url}
          width={HOME_IMAGES['s4-phone-2'].width}
          height={HOME_IMAGES['s4-phone-2'].height}
          alt={HOME_IMAGES['s4-phone-2'].alt}
        />
        <ImageFuture
          className={classNames(
            `hidden w-full max-w-[230px] transition-opacity duration-1000`,
            `md:absolute md:bottom-[calc(40px*2)] md:left-[calc(50%-250px)] md:block md:translate-x-[-50%]`,
            `lg:bottom-[calc(30px*2)] lg:left-[calc(50%-320px)] lg:max-w-[300px]`,
            `xl:bottom-[calc(20px*2)] xl:left-[calc(50%-395px)] xl:max-w-[326px]`
          )}
          src={HOME_IMAGES['s4-phone-1'].url}
          width={HOME_IMAGES['s4-phone-1'].width}
          height={HOME_IMAGES['s4-phone-1'].height}
          alt={HOME_IMAGES['s4-phone-1'].alt}
        />
        <ImageFuture
          className={classNames(
            `hidden w-full max-w-[230px] transition-opacity duration-1000`,
            `md:absolute md:bottom-[calc(40px*2)] md:left-[calc(50%+250px)] md:block md:translate-x-[-50%]`,
            `lg:bottom-[calc(30px*2)] lg:left-[calc(50%+320px)] lg:max-w-[300px]`,
            `xl:bottom-[calc(20px*2)] xl:left-[calc(50%+395px)] xl:max-w-[326px]`
          )}
          src={HOME_IMAGES['s4-phone-3'].url}
          width={HOME_IMAGES['s4-phone-3'].width}
          height={HOME_IMAGES['s4-phone-3'].height}
          alt={HOME_IMAGES['s4-phone-3'].alt}
        />
        <div
          className={classNames(
            `absolute bottom-0 flex w-[305px] flex-col items-center gap-2 transition-opacity duration-1000`,
            `md:left-[50%] md:w-[230px] md:translate-x-[-50%] md:items-start`,
            `lg:w-[300px]`,
            `xl:w-[326px]`
          )}
        >
          <InfoSvg className={classNames(`h-[33px] w-[auto]`, `lg:h-[48px]`)} />
          <p
            className={classNames(
              `text-center font-['Gilroy'] text-lg font-[600] text-white`,
              `md:text-xl`,
              `lg:pt-[8px] lg:text-2xl`
            )}
          >
            Sleep Escape
          </p>
          <p
            className={classNames(
              `text-center font-['Gilroy'] text-sm font-[400] text-white`,
              `md:text-start md:text-base`,
              `lg:text-lg`
            )}
          >
            Drift into a world of peace and tranquility with bedtime journeys designed to gently
            nurture your well-being and enhance relaxation, imagination, and positive beliefs while
            you rest.
          </p>
        </div>
      </div>
    </Service4Wrapper>
  );
};

export default Service4;
