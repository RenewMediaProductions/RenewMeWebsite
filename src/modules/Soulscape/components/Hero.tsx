import classNames from 'classnames';
import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { imageDomainUrl } from 'shared/constants/Assets';

import { Badge } from 'src/components/ui/badge';
import { toast } from 'src/components/ui/use-toast';

import { SOULSCAPE_IMAGES } from '../constants';
import { HeroWrapper } from './Hero.styled';

const Hero: React.FC = () => {
  return (
    <HeroWrapper className="relative">
      <Image
        className={classNames(
          `absolute top-0 hidden h-[1440px] w-[2560px] object-cover object-center md:block`
        )}
        src={SOULSCAPE_IMAGES['soulscape-h-bg'].url}
        alt={SOULSCAPE_IMAGES['soulscape-h-bg'].alt}
        quality={100}
        fill
        priority
      />
      <Image
        className={classNames(
          `absolute top-0 block h-[1440px] w-[2560px] object-cover object-center md:hidden`
        )}
        src={SOULSCAPE_IMAGES['soulscape-h-bg-mobile'].url}
        alt={SOULSCAPE_IMAGES['soulscape-h-bg-mobile'].alt}
        quality={100}
        fill
        priority
      />

      <div className={classNames(`bg-bot`)}></div>
      <div
        className={classNames(
          `container isolate mx-auto flex h-full flex-col items-center px-6 pt-36`
        )}
      >
        <div className={classNames(`flex flex-col items-center pb-8`)}>
          <Badge
            variant="outline"
            className="mb-6 border-transparent font-['Gilroy'] text-sm text-white outline outline-1 outline-white md:text-lg"
          >
            Coming Soon!
          </Badge>
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
              `hero-text max-w-[450px] text-center font-['Gilroy'] text-base font-[500] text-white`,
              `md:max-w-lg md:text-lg`,
              `lg:max-w-xl lg:text-xl`,
              `xl:max-w-2xl xl:text-2xl`
            )}
          >
            A soothing experience for the mindful traveler to stay relaxed and balanced on their
            wanderlust journeys.
          </p>
        </div>
        <div className={classNames(`hero-buttons flex gap-4 font-['Gilroy'] text-base md:text-lg`)}>
          <div className="flex flex-col items-center justify-center gap-6">
            <div className="flex items-center justify-center gap-4">
              <div className="flex flex-col items-center justify-center gap-2">
                <p className="text-base text-white md:text-lg">Use code</p>
                <Badge className="bg-[#3A3A3B] w-[110px] text-center text-base md:text-lg flex items-center justify-center">
                  JOY369
                </Badge>
              </div>

              {/* Vertical Divider */}
              <div className="h-[4rem] w-[1px] bg-white"></div>

              <div className="flex flex-col items-center justify-center gap-2">
                <p className="text-base text-white md:text-lg">Download</p>
                <Image
                  className="h-auto w-[110px] cursor-pointer md:w-32"
                  src={`${imageDomainUrl}/Code/app-store-button.png`}
                  alt="Download Icon"
                  width={1200}
                  height={1200}
                  onClick={() => {
                    toast({
                      title: `Coming Soon!`,
                      className: 'bg-white rounded-xl',
                      description:
                        'RenewMe Soulscape is coming! Will be available in the App Store soon!',
                    });
                  }}
                />
              </div>
            </div>

            <div
              className="flex cursor-pointer items-center gap-2 text-base md:text-lg"
              onClick={() => {
                navigator.clipboard.writeText(window.location.href);

                toast({
                  title: `Link Copied!`,
                  className: 'bg-white rounded-xl',
                  description: 'Share with friends! RenewMe is coming soon!',
                });
              }}
            >
              <Image
                className="h-4 w-4"
                src={`${imageDomainUrl}/Code/share.svg`}
                alt="Share Icon"
                width={2560}
                height={1024}
              />
              <Link
                href="https://www.myrenewme.com/soulscape/code/joy369"
                target="_blank"
                rel="noreferrer"
              >
                Share with friends
              </Link>
            </div>
          </div>
        </div>

        {/* <div className={classNames(`hero-buttons grid grid-cols-[1fr_1fr] gap-4`)}>
          <Link legacyBehavior href={ROUTES.GLOBAL_PARTNERS}>
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
        </div> */}
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
          {/* <Image
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
          /> */}
          <Image
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
          <Image
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
