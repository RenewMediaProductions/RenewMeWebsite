/* eslint-disable react/no-unescaped-entities */
import classNames from 'classnames';
import React from 'react';

import ArrowRightSvg from 'shared/assets/svg/arrow-right.svg';
import QouteSvg from 'shared/assets/svg/t-qoute.svg';

import { TESTIMONIALS } from '../constants';
import { WhatPeopleAreSayingWrapper } from './WhatPeopleAreSaying.styled';

interface Props {
  className?: string;
}

const WhatPeopleAreSaying: React.FC<Props> = ({ className }) => {
  return (
    <WhatPeopleAreSayingWrapper
      className={classNames(
        'relative flex w-screen flex-col bg-[#f07e58] pt-10 pb-10 sm:pb-28 md:pt-20',
        className
      )}
    >
      <div className="bg"></div>

      {/* <div className="pb-16 sm:pb-16 md:pb-24 lg:pb-32"> */}
      <div className="isolate flex justify-center">
        <h1 className="max-w-[250px] text-center font-['Gilroy'] text-3xl font-[500] text-black-1 md:max-w-full md:text-4xl lg:text-5xl xl:text-6xl">
          What People Are Saying...
        </h1>
      </div>
      <div className="pb-10 md:pb-20 testimonials grid grid-flow-col items-start gap-4 overflow-x-auto px-4 pt-10  md:gap-8 md:pt-20 lg:pt-24 ">
        {TESTIMONIALS.map((testimonial, testimonialIdx) => (
          <div
            key={testimonialIdx}
            className="testimonial relative min-w-[315px] rounded-xl md:min-w-[445px]"
          >
            <QouteSvg />
            <p className="text-center md:leading-relaxed md:text-xl text-base md:text-justify">
              "{testimonial.message}"
            </p>
            <div className="author-main">
              <div className="name">{testimonial.author}</div>
              <sub>{testimonial.title}</sub>
              <div className="place">{testimonial.place}</div>
            </div>
          </div>
        ))}
      </div>
      {/* </div> */}

      <div className="container isolate mx-auto flex flex-col items-center gap-6 px-6 md:gap-10 lg:gap-24">
        <h1 className="text-center font-['Gilroy'] text-3xl font-[500] text-black-1 md:text-4xl lg:text-5xl xl:text-6xl">
          Never miss an update <br />
          Join our mailing list.
        </h1>
        <div className="relative flex w-full rounded-[100px] bg-white md:max-w-[500px] lg:max-w-[730px]">
          <input
            className="w-[95%] bg-transparent p-5 font-['Gilroy'] text-base font-[400] outline-none placeholder:text-black-1 md:px-7 md:text-lg lg:text-xl"
            type="text"
            placeholder="Email Address"
          />
          <span className="absolute top-[50%] right-3 flex h-11 w-11 translate-y-[-50%] cursor-pointer items-center justify-center rounded-[50%] bg-orange-1">
            <ArrowRightSvg className="h-[40%] w-auto" />
          </span>
        </div>
      </div>
    </WhatPeopleAreSayingWrapper>
  );
};

export default WhatPeopleAreSaying;
