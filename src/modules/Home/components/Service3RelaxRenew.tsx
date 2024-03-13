import classNames from 'classnames';
import React from 'react';

import Image from 'next/image';

import InfoSvg from 'shared/assets/svg/Home/s3-info.svg';

import { HOME_IMAGES } from '../constants';
import { Service3WrapperRelaxRenew } from './Service3RelaxRenew.styled';

interface Props {
  className?: string;
}

const Service3: React.FC<Props> = ({ className }) => {
  return (
    <Service3WrapperRelaxRenew
      className={classNames(
        `relative h-[calc(470px+177px+40px)]`, // {phone height} + {info height} + {margin between phone and info}
        `md:h-[calc(470px+269px+60px)]`,
        `lg:h-[calc(613px+300px+90px)]`,
        `xl:h-[calc(666px+300px+90px)]`,
        className
      )}
    >
      <div className={classNames(`bg mt-[-20%]`, `md:mt-[unset]`)}></div>
      <div
        className={classNames(
          `relative isolate flex h-full w-screen flex-col items-center justify-between`,
          `md:justify-start`
        )}
      >
        <Image
          className={classNames(
            `top-[-10px] block w-full max-w-[230px] transition-opacity duration-1000`,
            `md:absolute md:top-0`,
            `lg:max-w-[300px]`,
            `xl:max-w-[326px]`
          )}
          src={HOME_IMAGES['s3-phone-1'].url}
          width={HOME_IMAGES['s3-phone-1'].width}
          height={HOME_IMAGES['s3-phone-1'].height}
          alt={HOME_IMAGES['s3-phone-1'].alt}
        />
        <Image
          className={classNames(
            `hidden w-full max-w-[230px] transition-opacity duration-1000`,
            `md:absolute md:bottom-[calc(40px*2)] md:left-[calc(50%-250px)] md:block md:translate-x-[-50%]`,
            `lg:bottom-[calc(30px*2)] lg:left-[calc(50%-320px)] lg:max-w-[300px]`,
            `xl:bottom-[calc(20px*2)] xl:left-[calc(50%-395px)] xl:max-w-[326px]`
          )}
          src={HOME_IMAGES['s3-phone-2'].url}
          width={HOME_IMAGES['s3-phone-2'].width}
          height={HOME_IMAGES['s3-phone-2'].height}
          alt={HOME_IMAGES['s3-phone-2'].alt}
        />
        <Image
          className={classNames(
            `hidden w-full max-w-[230px] transition-opacity duration-1000`,
            `md:absolute md:bottom-[calc(40px*2)] md:left-[calc(50%+250px)] md:block md:translate-x-[-50%]`,
            `lg:bottom-[calc(30px*2)] lg:left-[calc(50%+320px)] lg:max-w-[300px]`,
            `xl:bottom-[calc(20px*2)] xl:left-[calc(50%+395px)] xl:max-w-[326px]`
          )}
          src={HOME_IMAGES['s3-phone-3'].url}
          width={HOME_IMAGES['s3-phone-3'].width}
          height={HOME_IMAGES['s3-phone-3'].height}
          alt={HOME_IMAGES['s3-phone-3'].alt}
        />
        <div
          className={classNames(
            `absolute bottom-0 flex w-[305px] flex-col items-center gap-2 transition-opacity duration-1000`,
            `md:left-[50%] md:w-[230px] md:translate-x-[-50%] md:items-start`,
            `lg:w-[300px]`,
            `xl:w-[326px]`
          )}
        >
          <InfoSvg className={classNames(`h-[33px] w-[auto] lg:h-[48px]`)} />
          <p
            className={classNames(
              `text-center font-['Gilroy'] text-lg font-[600] text-black-1`,
              `md:text-xl`,
              `lg:pt-[8px] lg:text-2xl`
            )}
          >
            Relax & Renew
          </p>
          <p
            className={classNames(
              `text-center font-['Gilroy'] text-sm font-[400] text-gray-3`,
              `md:text-start md:text-base`,
              `lg:text-lg`
            )}
          >
            Ease tension and boost a positive mindset with 1-10 minute audio tracks to improve
            health, self-esteem, mindfulness, motivation, relationships, body image, confidence,
            coping skills, self-awareness, and happiness.
          </p>
        </div>
      </div>
    </Service3WrapperRelaxRenew>
  );
};

export default Service3;
