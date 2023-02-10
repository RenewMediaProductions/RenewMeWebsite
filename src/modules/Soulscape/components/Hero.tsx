import { HeroWrapper } from './Hero.styled';

import { SOULSCAPE_IMAGES } from '../constants';

import classNames from 'classnames';
import ImageFuture from 'next/future/image';
import Link from 'next/link';
import React from 'react';
import AppleSvg from 'shared/assets/svg/apple.svg';

const Hero: React.FC = () => {
  return (
    <HeroWrapper className={classNames(`relative`)}>
      <ImageFuture
        className={classNames(
          `absolute top-0 h-[1440px] w-[2560px] object-cover object-[center-416px]`
        )}
        src={SOULSCAPE_IMAGES['h-bg'].url}
        height={SOULSCAPE_IMAGES['h-bg'].height}
        width={SOULSCAPE_IMAGES['h-bg'].width}
        alt={SOULSCAPE_IMAGES['h-bg'].alt}
        priority
      />
      <div className={classNames(`bg-bot`)}></div>
      <div
        className={classNames(
          `container isolate mx-auto flex h-full flex-col items-center px-6 pt-36`,
          `xl:pt-40`
        )}
      >
        <div className={classNames(`pb-8`)}>
          <p
            className={classNames(
              `max-w-xs pb-4 text-center font-['Gilroy'] text-base font-[400] tracking-[2px] text-white`,
              `md:max-w-md`,
              `lg:max-w-xl`,
              `xl:max-w-4xl`
            )}
          >
            RENEWME TRAVEL
          </p>
          <h1
            className={classNames(
              `hero-text pb-4 text-center font-['Gilroy'] text-3xl font-[600] leading-10 text-white`,
              `md:text-4xl`,
              `lg:text-5xl`,
              `xl:text-6xl`
            )}
          >
            Soulscape
          </h1>
          <p
            className={classNames(
              `hero-text max-w-xs text-center font-['Gilroy'] text-base font-[500] text-white`,
              `md:max-w-md md:text-lg`,
              `lg:max-w-xl lg:text-xl`,
              `xl:max-w-3xl xl:text-2xl`
            )}
          >
            An immersive experience for the mindful traveler to stay relaxed, organized, and
            balanced on their wanderlust journeys.
          </p>
        </div>
        <div className={classNames(`hero-buttons grid grid-cols-[1fr_1fr] gap-4`)}>
          <Link href={'#'}>
            <a
              className={classNames(
                `flex h-10 w-[129px] items-center rounded-lg bg-orange-1 px-4 text-center font-['Gilroy'] text-sm font-[600] text-white hover:bg-orange-1-hover`
              )}
            >
              Brand Partners
            </a>
          </Link>
          <Link href={'#'}>
            <a
              className={classNames(
                `grid h-10 w-[121px] grid-cols-[auto_1fr] grid-rows-[auto_1fr] items-center gap-x-[5px] rounded-lg bg-white pl-2 hover:bg-white/90`
              )}
            >
              <AppleSvg
                className={classNames(
                  `col-start-1 row-start-1 row-end-3 h-auto w-[17px] justify-self-end`
                )}
              />
              <sub
                className={classNames(
                  `col-start-2 row-span-1 mt-2 mb-0.5 font-['Gilroy'] text-[8px] font-[500] text-black-1`
                )}
              >
                Download on the
              </sub>
              <span
                className={classNames(
                  `col-start-2 row-span-2  font-['Gilroy'] text-lg font-[600] text-black-1`
                )}
              >
                App Store
              </span>
            </a>
          </Link>
        </div>
      </div>
      <div
        className={classNames(
          `relative mt-20 flex h-[500px] w-full justify-center overflow-hidden`,
          `lg:h-[650px]`,
          `xl:h-[700px]`
        )}
      >
        <div
          className={classNames(
            `hero-image absolute flex h-auto justify-center gap-[20px]`,
            `lg:gap-[20px]`,
            `xl:gap-[44px]`
          )}
        >
          <ImageFuture
            className={classNames(
              `h-auto w-full max-w-[230px]`,
              `lg:max-w-[300px]`,
              `xl:max-w-[326px]`
            )}
            src={SOULSCAPE_IMAGES['h-phone-1'].url}
            height={SOULSCAPE_IMAGES['h-phone-1'].height}
            width={SOULSCAPE_IMAGES['h-phone-1'].width}
            alt={SOULSCAPE_IMAGES['h-phone-1'].alt}
            priority
          />
          <ImageFuture
            className={classNames(
              `h-auto w-full max-w-[230px]`,
              `lg:max-w-[300px]`,
              `xl:max-w-[326px]`
            )}
            src={SOULSCAPE_IMAGES['h-phone-2'].url}
            height={SOULSCAPE_IMAGES['h-phone-2'].height}
            width={SOULSCAPE_IMAGES['h-phone-2'].width}
            alt={SOULSCAPE_IMAGES['h-phone-2'].alt}
            priority
          />
          <ImageFuture
            className={classNames(
              `h-auto w-full max-w-[230px]`,
              `lg:max-w-[300px]`,
              `xl:max-w-[326px]`
            )}
            src={SOULSCAPE_IMAGES['h-phone-3'].url}
            height={SOULSCAPE_IMAGES['h-phone-3'].height}
            width={SOULSCAPE_IMAGES['h-phone-3'].width}
            alt={SOULSCAPE_IMAGES['h-phone-3'].alt}
            priority
          />
        </div>
      </div>
    </HeroWrapper>
  );
};

export default Hero;
