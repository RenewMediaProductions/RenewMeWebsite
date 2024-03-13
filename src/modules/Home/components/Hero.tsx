import classNames from 'classnames';
import React from 'react';

import Image from 'next/image';

import { imageDomainUrl } from 'shared/constants/Assets';

import { Badge } from 'src/components/ui/badge';
import { toast } from 'src/components/ui/use-toast';

import { HOME_IMAGES } from '../constants';
import { HeroWrapper } from './Hero.styled';

const Hero: React.FC = () => {
  return (
    <HeroWrapper className={classNames(`relative`)}>
      <Image
        className={classNames(
          `absolute top-0 w-screen object-cover object-bottom brightness-[85%] contrast-125`
        )}
        src={HOME_IMAGES['h-bg'].url}
        alt={HOME_IMAGES['h-bg'].alt}
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
            A new and refreshing wellness brand inspiring you to lead a happier and more balanced
            life.
          </p>
        </div>
        <div className={classNames(`hero-buttons flex gap-4 font-['Gilroy'] text-base md:text-lg`)}>
          <div className="flex flex-col items-center justify-center gap-6">
            <div className="flex items-center justify-center gap-4">
              <div className="flex flex-col items-center justify-center gap-2">
                <p className="text-base md:text-lg">Use code</p>
                <Badge className="bg-[#3A3A3B] text-base md:text-lg">PEACE369</Badge>
              </div>

              <div className="h-[2.5rem] w-[1px] bg-white"></div>

              <div className="flex flex-col items-center justify-center gap-2">
                <p className="text-base md:text-lg">Download</p>
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
              Share with friends
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
