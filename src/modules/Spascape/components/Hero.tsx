import classNames from 'classnames';
import React from 'react';

import Image from 'next/image';

import { imageDomainUrl } from 'shared/constants/Assets';

import { Badge } from 'src/components/ui/badge';
import { toast } from 'src/components/ui/use-toast';

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
            Spascape
          </h1>
          <p
            className={classNames(
              `hero-text max-w-[620px] text-center font-['Gilroy'] text-base font-[500] text-white`,
              `md:max-w-xl md:text-lg`,
              `lg:max-w-2xl lg:text-xl`,
              `xl:max-w-[800px] xl:text-2xl`
            )}
          >
            Spascape offers a curated escape while you indulge at spa destinations, providing an
            immersive experience for those seeking relaxation and rejuvenation of mind and body.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-2 font-['Gilroy']">
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
                description: 'RenewMe is coming! Will be available in the App Store soon!',
              });
            }}
          />
        </div>
      </div>

      <div
        className="isolate z-10 mt-6 flex w-full cursor-pointer items-center justify-center gap-2 font-['Gilroy'] text-base md:text-lg"
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
        <p>Share with friends</p>
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
