import classNames from 'classnames';
import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { imageDomainUrl } from 'shared/constants/Assets';

import { Badge } from 'src/components/ui/badge';
import { toast } from 'src/components/ui/use-toast';
import { cn } from 'src/lib/utils';

import { HOME_IMAGES } from '../constants';
import { HeroWrapper } from './Hero.styled';

const Hero: React.FC = () => {
  return (
    <HeroWrapper className="relative">
      <Image
        className={classNames(
          `absolute top-0 w-screen object-cover object-bottom brightness-[75%] contrast-[130%] saturate-[120%]`
        )}
        src={HOME_IMAGES['h-bg'].url}
        alt={HOME_IMAGES['h-bg'].alt}
        priority
        fill
      />
      <div className={classNames(`bg-bot`)}></div>

      <div
        className={classNames(
          `container isolate mx-auto flex h-full flex-col items-center px-6 pt-28`
        )}
      >
        <div className={classNames(`flex flex-col items-center pb-6`)}>
          <Badge
            variant="outline"
            className="font-medium mb-16 border-transparent font-['Gilroy'] text-sm text-white outline outline-1 outline-white md:text-md"
          >
            Coming Soon!
          </Badge>
          <h1
            className={classNames(
              `hero-text pb-4 text-center font-['Gilroy'] text-5xl font-medium leading-10 text-white`,
              `md:text-7xl`
            )}
          >
            A World of Balance
          </h1>
          <p
            className={classNames(
              `hero-text max-w-[450px] text-center font-['Gilroy'] text-base font-[500] text-white`,
              `md:max-w-lg`,
              `lg:max-w-lg lg:text-lg`,
              `xl:max-w-lg xl:text-xl`
            )}
          >
            A new and refreshing wellness brand inspiring you to lead a happier and more balanced
            life.
          </p>
        </div>
        <div className={classNames(`hero-buttons flex gap-4 font-['Gilroy'] text-base md:text-lg`)}>
          <div className="flex flex-col items-center justify-center gap-6">
            <div className="flex items-center justify-center gap-4">
              <div className={cn('flex flex-col items-center justify-center gap-2')}>
                <p className={cn('text-white font-medium', 'lg:text-sm', 'xl:text-base')}>
                  Use code
                </p>
                <Badge
                  className={cn(
                    'flex font-medium items-center justify-center bg-[#3A3A3B] text-center h-[30px] w-[110px] text-sm',
                    'lg:text-sm',
                    'xl:text-base'
                  )}
                >
                  PEACE369
                </Badge>
              </div>

              {/* Vertical Divider */}
              <div className="h-[4rem] w-[1px] bg-white"></div>

              <div className="flex flex-col items-center justify-center gap-2">
                <p className={cn('text-white font-medium', 'lg:text-sm', 'xl:text-base')}>
                  Download
                </p>
                <Image
                  className="h-auto w-[110px] cursor-pointer"
                  src={`${imageDomainUrl}/Code/app-store-button.png`}
                  alt="Download Icon"
                  width={1200}
                  height={1200}
                  onClick={() => {
                    toast({
                      title: `Coming Soon!`,
                      className: 'bg-white rounded-xl',
                      description: 'RenewMe is coming! Will be available in the App Store soon!',
                    });
                  }}
                />
              </div>
            </div>

            <div
              className="flex cursor-pointer items-center gap-1 text-base font-medium"
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
                href="https://www.myrenewme.com/renewme/code/peace369"
                target="_blank"
                rel="noreferrer"
              >
                Share with friends
              </Link>
            </div>
          </div>
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
          />
        </div>
      </div>
    </HeroWrapper>
  );
};

export default Hero;
