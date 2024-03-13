import classNames from 'classnames';
import React from 'react';

import Image from 'next/image';

import InfoSvg from 'shared/assets/svg/Home/s4-info.svg';

import { HOME_IMAGES } from '../constants';
import { SleepEscapeWrapper } from './SleepEscape.styled';

interface Props {
  className?: string;
}

// Removed
// const Stars = () => {
//   return (
//     <React.Fragment>
//       {STARS.map((star, idx) => (
//         <span
//           key={idx}
//           className={classNames(`absolute rounded-[50%] bg-white`)}
//           style={{
//             top: `${star.top}%`,
//             left: `${star.left}%`,
//             height: star.size,
//             width: star.size,
//           }}
//         ></span>
//       ))}
//     </React.Fragment>
//   );
// };

const SleepEscape: React.FC<Props> = ({ className }) => {
  return (
    <SleepEscapeWrapper
      className={classNames(
        `relative py-[120px] h-[calc(470px+157px+240px)]`, // {phone height} + {info height} + {margin between phone and info}
        `md:h-[calc(470px+245px+60px+240px)]`,
        `lg:h-[calc(613px+272px+90px+240px)]`,
        `xl:h-[calc(666px+272px+90px+240px)]`,
        className
      )}
    >
      <Image
        className="object-cover brightness-75 contrast-100"
        src={HOME_IMAGES['s6-bg'].url}
        alt={HOME_IMAGES['s6-bg'].alt}
        fill
      />
      <div
        className={classNames(
          `relative isolate flex h-full w-screen flex-col items-center justify-between`,
          `md:justify-start`
        )}
      >
        <Image
          className={classNames(
            `top-[-10px] block w-full max-w-[230px] transition-opacity duration-1000 drop-shadow-phone-shadow`,
            `md:absolute md:top-0`,
            `lg:max-w-[300px]`,
            `xl:max-w-[326px]`
          )}
          src={HOME_IMAGES['s4-phone-2'].url}
          width={HOME_IMAGES['s4-phone-2'].width}
          height={HOME_IMAGES['s4-phone-2'].height}
          alt={HOME_IMAGES['s4-phone-2'].alt}
        />
        <Image
          className={classNames(
            `hidden w-full max-w-[230px] transition-opacity duration-1000 drop-shadow-phone-shadow`,
            `md:absolute md:bottom-[calc(40px*2)] md:left-[calc(50%-250px)] md:block md:translate-x-[-50%]`,
            `lg:bottom-[calc(30px*2)] lg:left-[calc(50%-320px)] lg:max-w-[300px]`,
            `xl:bottom-[calc(20px*2)] xl:left-[calc(50%-395px)] xl:max-w-[326px]`
          )}
          src={HOME_IMAGES['s4-phone-1'].url}
          width={HOME_IMAGES['s4-phone-1'].width}
          height={HOME_IMAGES['s4-phone-1'].height}
          alt={HOME_IMAGES['s4-phone-1'].alt}
        />
        <Image
          className={classNames(
            `hidden w-full max-w-[230px] transition-opacity duration-1000 drop-shadow-phone-shadow`,
            `md:absolute md:bottom-[calc(40px*2)] md:left-[calc(50%+250px)] md:block md:translate-x-[-50%]`,
            `lg:bottom-[calc(30px*2)] lg:left-[calc(50%+320px)] lg:max-w-[300px]`,
            `xl:bottom-[calc(20px*2)] xl:left-[calc(50%+395px)] xl:max-w-[326px]`
          )}
          src={HOME_IMAGES['s4-phone-3'].url}
          width={HOME_IMAGES['s4-phone-3'].width}
          height={HOME_IMAGES['s4-phone-3'].height}
          alt={HOME_IMAGES['s4-phone-3'].alt}
        />
        <div
          className={classNames(
            `absolute bottom-0 flex w-[305px] flex-col items-center justify-center gap-2 transition-opacity duration-1000`,
            `md:left-[50%] md:w-[230px] md:translate-x-[-50%]`,
            `lg:w-[300px]`,
            `xl:w-[326px]`
          )}
        >
          <InfoSvg className={classNames(`h-[33px] w-[auto]`, `lg:h-[48px]`)} />
          <p
            className={classNames(
              `text-center font-['Gilroy'] text-lg font-[600] text-white`,
              `md:text-xl`,
              `lg:pt-[8px] lg:text-2xl`
            )}
          >
            Sleep Escape
          </p>
          <p
            className={classNames(
              `text-justify font-['Gilroy'] text-sm font-[400] text-white`,
              `md:text-base`,
              `lg:text-lg`
            )}
          >
            Embark on serene bedtime journeys crafted to nurture your well-being, fostering
            relaxation, imagination, and positive beliefs as you peacefully rest your mind.
          </p>
        </div>
      </div>
    </SleepEscapeWrapper>
  );
};

export default SleepEscape;
