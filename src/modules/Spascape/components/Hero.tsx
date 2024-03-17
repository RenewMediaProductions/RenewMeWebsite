import classNames from 'classnames';
import React from 'react';

import Image from 'next/image';

import { imageDomainUrl } from 'shared/constants/Assets';

import { Badge } from 'src/components/ui/badge';
import { toast } from 'src/components/ui/use-toast';
import { cn } from 'src/lib/utils';

import { SPASCAPE_IMAGES } from '../constants';
import { HeroWrapper } from './Hero.styled';

const Hero: React.FC = () => {
  return (
    <HeroWrapper className="relative">
      <Image
        className={classNames(
          `absolute hidden h-[1440px] w-[2560px] object-cover object-center brightness-95 contrast-[110%] md:block`
        )}
        src={SPASCAPE_IMAGES['h-bg'].url}
        alt={SPASCAPE_IMAGES['h-bg'].alt}
        fill
        priority
      />
      <Image
        className={classNames(
          `absolute block h-[1440px] w-[2560px] object-cover object-center brightness-95 contrast-[110%] md:hidden`
        )}
        src={SPASCAPE_IMAGES['h-bg-mobile'].url}
        alt={SPASCAPE_IMAGES['h-bg-mobile'].alt}
        fill
      />

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
            Spascape
          </h1>
          <p
            className={classNames(
              `hero-text max-w-[300px] text-center font-['Gilroy'] text-base font-[500] text-white`,
              `md:max-w-lg`,
              `lg:max-w-xl lg:text-lg`,
              `xl:max-w-2xl xl:text-xl`
            )}
          >
            Spascape offers a curated escape while you indulge at spa destinations, providing an
            immersive experience for those seeking relaxation and rejuvenation of mind and body.
          </p>
        </div>
        <div className={classNames(`hero-buttons flex gap-4 font-['Gilroy'] text-base md:text-lg`)}>
          <div className="flex flex-col items-center justify-center gap-6">
            <div className="flex items-center justify-center gap-4">
              <div className={cn('flex flex-col items-center justify-center gap-2')}>
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
              Share with friends
            </div>
          </div>
        </div>
      </div>

      <div className={classNames(`my-10 flex w-full justify-center`, `xl:my-20`)}>
        <div
          className={classNames(
            `flex flex-col items-center justify-center gap-[20px]`,
            `lg:flex-row lg:gap-[40px]`,
            `xl:gap-[70px]`
          )}
        >
          <Image
            className={classNames(
              `z-10 h-auto w-full max-w-[230px] drop-shadow-phone-shadow`,
              `lg:max-w-[300px]`,
              `xl:max-w-[326px]`
            )}
            src={SPASCAPE_IMAGES['h-phone-1'].url}
            alt={SPASCAPE_IMAGES['h-phone-1'].alt}
            width={SPASCAPE_IMAGES['h-phone-1'].width}
            height={SPASCAPE_IMAGES['h-phone-1'].height}
            priority
          />
        </div>
      </div>
    </HeroWrapper>
  );
};

export default Hero;
