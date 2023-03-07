import { HeroWrapper } from './Hero.styled';

import { HOME_IMAGES } from '../constants';

import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import AppleSvg from 'shared/assets/svg/apple.svg';

const Hero: React.FC = () => {
  return (
    <HeroWrapper className={classNames(`relative`)}>
      <Image
        className={classNames(`absolute top-0 h-[1024px] w-[2560px] object-cover`)}
        src={HOME_IMAGES['h-bg'].url}
        height={HOME_IMAGES['h-bg'].height}
        width={HOME_IMAGES['h-bg'].width}
        alt={HOME_IMAGES['h-bg'].alt}
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
              `pb-4 text-center font-['Gilroy'] text-base font-[400] tracking-[2px] text-white`
            )}
          >
            RENEWME BRAND
          </p>
          <h1
            className={classNames(
              `hero-text pb-4 text-center font-['Gilroy'] text-3xl font-[600] leading-10 text-white`,
              `md:text-4xl`,
              `lg:text-5xl`,
              `xl:text-6xl`
            )}
          >
            A World of Balance
          </h1>
          <p
            className={classNames(
              `hero-text max-w-[380px] text-center font-['Gilroy'] text-base font-[500] text-white`,
              `md:max-w-[420px] md:text-lg`,
              `lg:max-w-[460px] lg:text-xl`,
              `xl:max-w-[550px] xl:text-2xl`
            )}
          >
            A new and refreshing wellness brand inspiring you to be all you are meant to be.
          </p>
        </div>
        <div className={classNames(`hero-buttons flex gap-4`)}>
          <Link legacyBehavior href={'#'}>
            <a
              className={classNames(
                `flex h-10 w-[129px] items-center rounded-lg bg-orange-1 px-4 text-center font-['Gilroy'] text-sm font-[600] text-white hover:bg-orange-1-hover`
              )}
            >
              Brand Partners
            </a>
          </Link>
          <Link legacyBehavior href={'#'}>
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
            `xl:gap-[70px]`
          )}
        >
          <Image
            className={classNames(
              `h-auto w-full max-w-[230px]`,
              `lg:max-w-[300px]`,
              `xl:max-w-[326px]`
            )}
            src={HOME_IMAGES['h-phone-1'].url}
            height={HOME_IMAGES['h-phone-1'].height}
            width={HOME_IMAGES['h-phone-1'].width}
            alt={HOME_IMAGES['h-phone-1'].alt}
            priority
          />
          <Image
            className={classNames(
              `h-auto w-full max-w-[230px]`,
              `lg:max-w-[300px]`,
              `xl:max-w-[326px]`
            )}
            src={HOME_IMAGES['h-phone-2'].url}
            height={HOME_IMAGES['h-phone-2'].height}
            width={HOME_IMAGES['h-phone-2'].width}
            alt={HOME_IMAGES['h-phone-2'].alt}
            priority
          />
          <Image
            className={classNames(
              `h-auto w-full max-w-[230px]`,
              `lg:max-w-[300px]`,
              `xl:max-w-[326px]`
            )}
            src={HOME_IMAGES['h-phone-3'].url}
            height={HOME_IMAGES['h-phone-3'].height}
            width={HOME_IMAGES['h-phone-3'].width}
            alt={HOME_IMAGES['h-phone-3'].alt}
            priority
          />
        </div>
      </div>
    </HeroWrapper>
  );
};

export default Hero;
