/* eslint-disable no-console */

import { WellnessWrapper } from './Wellness.styled';

import { WELLNESS } from '../constants';

import classNames from 'classnames';
import ImageFuture from 'next/future/image';
import React, { useMemo, useRef, useState } from 'react';
import { useWindowSize } from 'react-use';
import CarouselArrow from 'shared/assets/svg/carousel-arrow.svg';

interface Props {
  className?: string;
}

const Wellness: React.FC<Props> = ({ className }) => {
  const [activeIdx, setActiveIdx] = useState<number>(0);

  const lifestyleRef = useRef<HTMLDivElement | null>(null);
  const hospitalityRef = useRef<HTMLDivElement | null>(null);
  const employeesRef = useRef<HTMLDivElement | null>(null);
  const respondersRef = useRef<HTMLDivElement | null>(null);
  const studentsRef = useRef<HTMLDivElement | null>(null);

  const refArr = [lifestyleRef, hospitalityRef, employeesRef, respondersRef, studentsRef];

  const { width } = useWindowSize();

  const handleNext = () => {
    if (activeIdx < WELLNESS.length - 1) setActiveIdx(activeIdx + 1);
    return;
  };

  const handleBack = () => {
    if (activeIdx !== 0) return setActiveIdx(activeIdx - 1);
    return;
  };

  const left = useMemo(() => {
    if (!lifestyleRef.current) return 0;
    return activeIdx ? activeIdx * lifestyleRef.current.clientWidth + activeIdx * 50 : 0;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIdx, width]);

  return (
    <WellnessWrapper
      className={classNames(
        `relative mt-12 flex h-screen max-h-[896px] w-screen flex-col items-center justify-between gap-5 overflow-hidden py-12 px-5`,
        `lg:max-h-screen lg:min-h-[1024px]`,
        `xl:max-h-[1024px]`,
        className
      )}
      style={{ background: WELLNESS[activeIdx].bgColor }}
    >
      <div className="absolute bottom-[35%] z-10 flex w-screen justify-between">
        <div
          className="relative cursor-pointer [&>svg>g>path]:hover:fill-orange-1 [&>svg>g>circle]:hover:stroke-orange-1"
          onClick={handleBack}
        >
          <CarouselArrow className="h-[45px] w-[45px]" />
        </div>
        <div
          className="relative cursor-pointer [&>svg>g>path]:hover:fill-orange-1 [&>svg>g>circle]:hover:stroke-orange-1"
          onClick={handleNext}
        >
          <CarouselArrow className="absolute right-0 top-[-2px] h-[45px] w-[45px] origin-center rotate-180" />
        </div>
      </div>
      <div className="container grid max-w-[1110px] gap-y-[10px] md:grid-cols-[repeat(2,1fr)] md:pt-12">
        <div className="lg:leading-[72px ] font-['Gilroy'] text-4xl font-[600] text-black-1 transition-all duration-1000 ease-in-out md:text-5xl lg:text-[60px]">
          {WELLNESS[activeIdx].title} <br />
          {WELLNESS[activeIdx].subtitle}
        </div>
        <div className="font-['Gilroy'] text-base font-[500] text-black-1 transition-all duration-1000 ease-in-out md:text-lg lg:text-[20px] lg:leading-[32px] ">
          {WELLNESS[activeIdx].description}
        </div>
      </div>
      <div className="2xl:!max-w-[1110px]! container relative grid pb-12 xl:!max-w-[1110px]">
        <div
          className="relative left-0 flex h-full w-full gap-[50px] transition-all duration-1000 ease-in-out"
          style={{ left: -left }}
        >
          {WELLNESS.map((wellness, wellnessIdx) => {
            return (
              <div
                key={wellnessIdx}
                className="relative h-screen max-h-[500px] w-screen max-w-[calc(100vw-40px)] overflow-hidden rounded-[20px] md:max-h-[589px] xl:max-w-[1110px]"
                ref={refArr[wellnessIdx]}
              >
                <ImageFuture
                  className="absolute top-0 h-full w-full object-cover object-top"
                  src={wellness.image.url}
                  height={wellness.image.height}
                  width={wellness.image.width}
                  alt={wellness.image.alt}
                  priority
                />
              </div>
            );
          })}
        </div>
      </div>
    </WellnessWrapper>
  );
};

export default Wellness;
