import { Service5Wrapper } from './Service5.styled';

import { SOULSCAPE_IMAGES } from '../constants';

import classNames from 'classnames';
import ImageFuture from 'next/future/image';
import Link from 'next/link';
import React from 'react';
import InfoSvg from 'shared/assets/svg/Soulscape/s5-info.svg';

interface Props {
  className?: string;
}

const Service5: React.FC<Props> = ({ className }) => {
  return (
    <Service5Wrapper
      className={classNames(
        `relative h-[calc(470px+185px+40px)]`, // {phone height} + {info height} + {margin between phone and info}
        `md:h-[calc(470px+253px+60px)]`,
        `lg:h-[calc(613px+280px+90px)]`,
        `xl:h-[calc(666px+280px+90px)]`,
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
            `md:absolute md:top-0`,
            `lg:max-w-[300px]`,
            `xl:max-w-[326px]`
          )}
          src={SOULSCAPE_IMAGES['s5-phone-3'].url}
          width={SOULSCAPE_IMAGES['s5-phone-3'].width}
          height={SOULSCAPE_IMAGES['s5-phone-3'].height}
          alt={SOULSCAPE_IMAGES['s5-phone-3'].alt}
        />
        <ImageFuture
          className={classNames(
            `hidden w-full max-w-[230px] transition-opacity duration-1000`,
            `md:absolute md:bottom-[calc(80px*2)] md:left-[calc(50%-250px)] md:block md:translate-x-[-50%]`,
            `lg:bottom-[calc(70px*2)] lg:left-[calc(50%-320px)] lg:max-w-[300px]`,
            `xl:bottom-[calc(60px*2)] xl:left-[calc(50%-395px)] xl:max-w-[326px]`
          )}
          src={SOULSCAPE_IMAGES['s5-phone-1'].url}
          width={SOULSCAPE_IMAGES['s5-phone-1'].width}
          height={SOULSCAPE_IMAGES['s5-phone-1'].height}
          alt={SOULSCAPE_IMAGES['s5-phone-1'].alt}
        />
        <ImageFuture
          className={classNames(
            `hidden w-full max-w-[230px] transition-opacity duration-1000`,
            `md:absolute md:bottom-[calc(80px*2)] md:left-[calc(50%+250px)] md:block md:translate-x-[-50%]`,
            `lg:bottom-[calc(70px*2)] lg:left-[calc(50%+320px)] lg:max-w-[300px]`,
            `xl:bottom-[calc(60px*2)] xl:left-[calc(50%+395px)] xl:max-w-[326px]`
          )}
          src={SOULSCAPE_IMAGES['s5-phone-2'].url}
          width={SOULSCAPE_IMAGES['s5-phone-2'].width}
          height={SOULSCAPE_IMAGES['s5-phone-2'].height}
          alt={SOULSCAPE_IMAGES['s5-phone-2'].alt}
        />
        <div
          className={classNames(
            `absolute bottom-0 flex w-[305px] flex-col items-center gap-2 transition-opacity duration-1000`,
            `md:left-[50%] md:w-[230px] md:translate-x-[-50%] md:items-start`,
            `lg:w-[300px]`,
            `xl:w-[326px]`
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
            Book a Trip
          </p>
          <p
            className={classNames(
              `text-center font-['Gilroy'] text-sm font-[400] text-gray-3`,
              `md:text-start md:text-base`,
              `lg:text-lg`
            )}
          >
            Soulscape makes it easy to plan your next vacation. Book with airlines, hotels, and
            other sites, and discover the best deals to your favorite destinations.
          </p>
          <Link href={'#'}>
            <a
              className={classNames(
                `font-['Gilroy'] text-sm font-[600] text-blue-3 underline`,
                `md:text-base`,
                `lg:text-lg`
              )}
            >
              Book a Vacation
            </a>
          </Link>
        </div>
      </div>
    </Service5Wrapper>
  );
};

export default Service5;
