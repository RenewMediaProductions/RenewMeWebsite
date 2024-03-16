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
        className={classNames(`absolute top-0 h-[1440px] w-[2560px] object-cover object-center`)}
        src={SPASCAPE_IMAGES['h-bg'].url}
        alt={SPASCAPE_IMAGES['h-bg'].alt}
        fill
        priority
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
              `hero-text max-w-[620px] text-center font-['Gilroy'] text-base font-[500] text-white`, // Increased from 520px to 620px
              `md:max-w-xl md:text-lg`, // Changed from md:max-w-lg to md:max-w-xl for medium devices
              `lg:max-w-2xl lg:text-xl`, // Changed from lg:max-w-xl to lg:max-w-2xl for large devices
              `xl:max-w-[800px] xl:text-2xl` // Increased from 700px to 800px for extra-large devices
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
            src={SPASCAPE_IMAGES['h-phone-1'].url}
            height={SPASCAPE_IMAGES['h-phone-1'].height}
            width={SPASCAPE_IMAGES['h-phone-1'].width}
            alt={SPASCAPE_IMAGES['h-phone-1'].alt}
            priority
          />
          {/* <Image
            className={classNames(
              `h-auto w-full max-w-[230px]`,
              `lg:max-w-[300px]`,
              `xl:max-w-[326px]`
            )}
            src={SPASCAPE_IMAGES['h-phone-2'].url}
            height={SPASCAPE_IMAGES['h-phone-2'].height}
            width={SPASCAPE_IMAGES['h-phone-2'].width}
            alt={SPASCAPE_IMAGES['h-phone-2'].alt}
            priority
          /> */}
        </div>
      </div>
    </HeroWrapper>
  );
};

export default Hero;
