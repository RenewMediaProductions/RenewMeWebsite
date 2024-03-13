import classNames from 'classnames';
import React from 'react';

import Image from 'next/image';

import AppleSvg from 'shared/assets/svg/apple.svg';
import HeartSvg from 'shared/assets/svg/heart.svg';
import RenewMeSvg from 'shared/assets/svg/renew-me.svg';

import { HOME_IMAGES } from '../constants';
import { AboutDevelopersWrapper } from './AboutDevelopers.styled';

interface Props {
  className?: string;
}

const AboutDevelopers: React.FC<Props> = ({ className }) => {
  return (
    <AboutDevelopersWrapper
      className={classNames(
        `grid h-[1800px] w-full grid-rows-[auto_1fr] bg-[#FAFAFA] py-[40px]`,
        `min-[575px]:h-[1500px]`,
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
        <h1 className="text-black-1 text-center font-['Gilroy'] text-3xl font-[600] md:text-4xl lg:text-5xl xl:text-6xl">
          M
          <AppleSvg
            className={classNames(
              `mb-[6px] inline-block h-auto w-full max-w-[19px] [&>path]:fill-[#3A3A3B]`,
              `lg:mb-[9px] lg:max-w-[29px]`,
              `xl:mb-[10px] xl:max-w-[37px]`
            )}
          />
          de with L
          <HeartSvg
            className={classNames(
              `inline-block h-auto w-full max-w-[19px] [&>path]:fill-[#3A3A3B]`,
              `lg:max-w-[29px]`,
              `xl:max-w-[37px]`
            )}
          />
          ve.
        </h1>
        <div>
          <p
            className={classNames(
              `mb-2 text-center font-['Gilroy'] text-xl font-[700] text-[#3A3A3B] md:text-2xl`
            )}
          >
            Psychology Meets Technology
          </p>
          <p
            className={classNames(`text-justify font-['Gilroy'] text-lg font-[400] text-[#7B7C7D]`)}
          >
            RenewMe blends psychology with cutting-edge technology, crafted by former Apple
            engineers, to empower employees and customers of global brands. Our mission is to assist
            individuals in leading happier and more balanced lives.
          </p>
        </div>
        <div>
          <div className="flex w-full justify-center">
            <p
              className={classNames(
                `mb-2 w-44 text-center font-['Gilroy'] text-xl font-[700] text-[#3A3A3B] md:w-full md:text-2xl`
              )}
            >
              Mission of Mental Health Awareness
            </p>
          </div>
          <p
            className={classNames(`text-justify font-['Gilroy'] text-lg font-[400] text-[#7B7C7D]`)}
          >
            RenewMe is the brainchild of Dr. Lisa Palmer, a renowned psychotherapist and national
            media personality. As the founder of The Renew Center of Florida, ranked #1 in the U.S.
            for PTSD treatment, Dr. Palmer holds the distinction of being the first female
            psychotherapist and minority woman in business to create a self-help smartphone app of
            its kind.
          </p>
        </div>
        <div>
          <div className="flex w-full justify-center">
            <p
              className={classNames(
                `mb-2 w-56 text-center font-['Gilroy'] text-xl font-[700] text-[#3A3A3B] md:w-full md:text-2xl`
              )}
            >
              Powered by Former Apple Engineers
            </p>
          </div>
          <p
            className={classNames(`text-justify font-['Gilroy'] text-lg font-[400] text-[#7B7C7D]`)}
          >
            Our development team is comprised of former Senior iOS Engineers from Apple Inc.
            inspired to make a difference. These highly skilled professionals have played a pivotal
            role in building and maintaining iOS, iPad, AppleTV, and AppleWatch apps for a variety
            of services. Their expertise spans projects such as the iTunes Store, App Store, Apple
            Trailers, Apple Remote, iTunes U, Podcasts, and Apple Music.
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
            `absolute top-[calc(50%-220px)] left-[calc(50%-80px)] w-full max-w-[120px] translate-x-[-50%] translate-y-[-50%]`,
            `min-[575px]:left-[calc(50%-100px)] min-[575px]:top-[calc(50%-250px)] min-[575px]:max-w-[159px]`
          )}
        >
          <Image
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
            `min-[575px]:left-[calc(50%+190px)] min-[575px]:top-[calc(50%-200px)] min-[575px]:max-w-[120px]`,
            `lg:top-[calc(50%-170px)]`
          )}
        >
          <Image
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
          <Image
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
            `lg:top-[calc(50%+300px)] `
          )}
        >
          <Image
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
            `min-[575px]:left-[calc(50%+190px)] min-[575px]:top-[calc(50%+220px)] min-[575px]:max-w-[160px]`,
            `lg:left-[calc(50%+200px)]`
          )}
        >
          <Image
            className={classNames(`h-auto w-full`)}
            src={HOME_IMAGES['man-5'].url}
            height={HOME_IMAGES['man-5'].height}
            width={HOME_IMAGES['man-5'].width}
            alt={HOME_IMAGES['man-5'].alt}
          />
        </div>

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
            `min-[575px]:max-w-[250px]`,
            `lg:max-w-[252px]`
          )}
        >
          <Image
            className={classNames(`h-auto w-full`)}
            src={HOME_IMAGES.women.url}
            height={HOME_IMAGES.women.height}
            width={HOME_IMAGES.women.width}
            alt={HOME_IMAGES.women.alt}
          />
        </div>
      </div>
    </AboutDevelopersWrapper>
  );
};

export default AboutDevelopers;
