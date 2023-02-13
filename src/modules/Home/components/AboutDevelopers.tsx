import { AboutDevelopersWrapper } from './AboutDevelopers.styled';

import { HOME_IMAGES } from '../constants';

import classNames from 'classnames';
import ImageFuture from 'next/future/image';
import React from 'react';
import AppleSvg from 'shared/assets/svg/apple.svg';
import RenewMeSvg from 'shared/assets/svg/renew-me.svg';

interface Props {
  className?: string;
}

const AboutDevelopers: React.FC<Props> = ({ className }) => {
  return (
    <AboutDevelopersWrapper
      className={classNames(
        `grid h-[1600px] w-full grid-rows-[auto_1fr] bg-[#FAFAFA] pt-[80px]`,
        `md:px-10`,
        `xl:h-[1024px] xl:grid-cols-[repeat(2,1fr)] xl:grid-rows-[1fr] xl:items-center`,
        className
      )}
      id="about-developers"
    >
      <div
        className={classNames(
          `flex flex-col gap-6 px-6`,
          `xl:col-[2/3] xl:row-[1/2] xl:max-w-[calc(700px+(24px*2))] xl:gap-10`
        )}
      >
        <h1 className="font-['Gilroy'] text-3xl font-[600] text-black-1 md:text-4xl lg:text-5xl xl:text-6xl">
          M
          <AppleSvg
            className={classNames(
              `mb-[6px] inline-block h-auto w-full max-w-[21px] [&>path]:fill-[#3A3A3B]`,
              `lg:mb-[9px] lg:max-w-[29px]`,
              `xl:mb-[10px] xl:max-w-[37px]`
            )}
          />
          de with Love.
        </h1>
        <div>
          <p className={classNames(`font-['Gilroy'] text-2xl font-[700] text-[#3A3A3B]`)}>
            Where Psychology Meets Technology
          </p>
          <p className={classNames(`font-['Gilroy'] text-lg font-[400] text-[#7B7C7D]`)}>
            RenewMe combines psychology with the power of advanced technology engineered by former
            Apple engineers to empower employees and customers of global brands with a mission of
            helping them lead a more happy and balanced life.
          </p>
        </div>
        <div>
          <p className={classNames(`font-['Gilroy'] text-2xl font-[700] text-[#3A3A3B]`)}>
            Mission of Mental Health Awareness
          </p>
          <p className={classNames(`font-['Gilroy'] text-lg font-[400] text-[#7B7C7D]`)}>
            RenewMe brand is the brainchild of leading psychotherapist and national media
            personality Dr. Lisa Palmer, founder of The Renew Center of Florida Ranked #1 in the
            U.S. for the Treatment of PTSD, and the first female psychotherapist and minority woman
            in business to develop a self-help smartphone app of its kind.
          </p>
        </div>
        <div>
          <p className={classNames(`font-['Gilroy'] text-2xl font-[700] text-[#3A3A3B]`)}>
            Powered by Former Apple Engineers
          </p>
          <p className={classNames(`font-['Gilroy'] text-lg font-[400] text-[#7B7C7D]`)}>
            Our development team includes former Senior iOS Engineers at Apple Inc. (from 2011 to
            2015) where they were responsible for building and maintaining iOS, iPad, AppleTV and
            AppleWatch apps for the iTunes Store, App Store, Apple Trailers, Apple Remote, iTunes U,
            Podcasts and Apple Music.
          </p>
        </div>
      </div>
      <div
        className={classNames(
          `relative h-full w-full`,
          `xl:col-[1/2] xl:row-[1/2] xl:grid xl:max-w-[700px] xl:justify-self-end`
        )}
      >
        <div className="bg"></div>
        <div
          className={classNames(
            `absolute top-[50%] left-[50%] w-full max-w-[380px] translate-y-[-50%] translate-x-[-50%]`,
            `min-[575px]:max-w-[536px]`
          )}
        >
          <RenewMeSvg className={classNames(`h-auto w-full`)} />
        </div>
        <div
          className={classNames(
            `absolute top-[50%] left-[50%] w-full max-w-[202px] translate-y-[-50%] translate-x-[-50%]`,
            `min-[575px]:max-w-[250px]`
          )}
        >
          <ImageFuture
            className={classNames(`h-auto w-full`)}
            src={HOME_IMAGES.women.url}
            height={HOME_IMAGES.women.height}
            width={HOME_IMAGES.women.width}
            alt={HOME_IMAGES.women.alt}
          />
          <div className="absolute bottom-[-30px] flex w-full flex-col items-center justify-center">
            <span className="font-['Gilroy'] text-base font-[700] text-[#3A3A3B]">
              Dr. Lisa Palmer
            </span>
            <span className="font-['Gilroy'] text-base font-[400] text-[#7B7C7D]">
              CEO fo RenewMe Brand
            </span>
          </div>
        </div>
        <div
          className={classNames(
            `absolute top-[calc(50%-220px)] left-[calc(50%-80px)] w-full max-w-[120px] translate-x-[-50%] translate-y-[-50%]`,
            `min-[575px]:left-[calc(50%-100px)] min-[575px]:top-[calc(50%-300px)] min-[575px]:max-w-[159px]`
          )}
        >
          <ImageFuture
            className={classNames(`h-auto w-full`)}
            src={HOME_IMAGES['man-1'].url}
            height={HOME_IMAGES['man-1'].height}
            width={HOME_IMAGES['man-1'].width}
            alt={HOME_IMAGES['man-1'].alt}
          />
        </div>
        <div
          className={classNames(
            `absolute top-[calc(50%-200px)] left-[calc(50%+80px)] w-full max-w-[90px] translate-x-[-50%] translate-y-[-50%]`,
            `min-[575px]:left-[calc(50%+190px)] min-[575px]:top-[calc(50%-200px)] min-[575px]:max-w-[120px]`
          )}
        >
          <ImageFuture
            className={classNames(`h-auto w-full`)}
            src={HOME_IMAGES['man-2'].url}
            height={HOME_IMAGES['man-2'].height}
            width={HOME_IMAGES['man-2'].width}
            alt={HOME_IMAGES['man-2'].alt}
          />
        </div>
        <div
          className={classNames(
            `absolute top-[calc(50%+200px)] left-[calc(50%-130px)] w-full max-w-[130px] translate-x-[-50%] translate-y-[-50%]`,
            `min-[575px]:left-[calc(50%-190px)] min-[575px]:top-[calc(50%+190px)] min-[575px]:max-w-[160px]`
          )}
        >
          <ImageFuture
            className={classNames(`h-auto w-full`)}
            src={HOME_IMAGES['man-3'].url}
            height={HOME_IMAGES['man-3'].height}
            width={HOME_IMAGES['man-3'].width}
            alt={HOME_IMAGES['man-3'].alt}
          />
        </div>
        <div
          className={classNames(
            `absolute top-[calc(50%+250px)] left-[50%] w-full max-w-[90px] translate-x-[-50%] translate-y-[-50%]`,
            `min-[575px]:top-[calc(50%+300px)] min-[575px]:max-w-[120px]`,
            `xl:top-[calc(50%+350px)] `
          )}
        >
          <ImageFuture
            className={classNames(`h-auto w-full`)}
            src={HOME_IMAGES['man-4'].url}
            height={HOME_IMAGES['man-4'].height}
            width={HOME_IMAGES['man-4'].width}
            alt={HOME_IMAGES['man-4'].alt}
          />
        </div>
        <div
          className={classNames(
            `absolute top-[calc(50%+200px)] left-[calc(50%+130px)] w-full max-w-[130px] translate-x-[-50%] translate-y-[-50%]`,
            `min-[575px]:left-[calc(50%+190px)] min-[575px]:top-[calc(50%+220px)] min-[575px]:max-w-[160px]`
          )}
        >
          <ImageFuture
            className={classNames(`h-auto w-full`)}
            src={HOME_IMAGES['man-5'].url}
            height={HOME_IMAGES['man-5'].height}
            width={HOME_IMAGES['man-5'].width}
            alt={HOME_IMAGES['man-5'].alt}
          />
        </div>
      </div>
    </AboutDevelopersWrapper>
  );
};

export default AboutDevelopers;
