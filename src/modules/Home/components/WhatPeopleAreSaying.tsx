/* eslint-disable react/no-unescaped-entities */
import { WhatPeopleAreSayingWrapper } from './WhatPeopleAreSaying.styled';

import { TESTIMONIALS } from '../constants';

import classNames from 'classnames';
import React from 'react';
import ArrowRightSvg from 'shared/assets/svg/arrow-right.svg';
import QouteSvg from 'shared/assets/svg/t-qoute.svg';

interface Props {
  className?: string;
}

const WhatPeopleAreSaying: React.FC<Props> = ({ className }) => {
  const mainClass = classNames(
    'w-screen relative flex flex-col pt-10 pb-28 !bg-blue-2 md:pt-20',
    className
  );

  return (
    <WhatPeopleAreSayingWrapper className={mainClass}>
      <div className="bg"></div>
      <div className="flex justify-center isolate">
        <h1 className="font-['Gilroy'] font-[500] max-w-[250px] text-3xl text-center md:text-4xl md:max-w-full lg:text-5xl xl:text-6xl">
          What People Are Saying...
        </h1>
      </div>
      <div className="grid items-start grid-flow-col gap-4 px-4 pt-10 pb-16 overflow-x-auto testimonials isolate md:gap-8 md:pt-20 md:pb-24 lg:pt-24 lg:pb-32">
        {TESTIMONIALS.map((testimonial, testimonialIdx) => (
          <div
            key={testimonialIdx}
            className="testimonial relative rounded-xl min-w-[315px] md:min-w-[445px]"
          >
            <QouteSvg />
            <p>"{testimonial.message}"</p>
            <div className="author-main">
              <div className="name">{testimonial.author}</div>
              <sub>{testimonial.title}</sub>
              <div className="place">{testimonial.place}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="container flex flex-col items-center gap-6 px-6 mx-auto isolate md:gap-10 lg:gap-24">
        <h1 className="font-['Gilroy'] font-[500] text-3xl text-center md:text-4xl lg:text-5xl xl:text-6xl">
          Never miss an update <br />
          Join our mailing list
        </h1>
        <div className="relative flex w-full bg-white rounded-[100px] md:max-w-[500px] lg:max-w-[730px]">
          <input
            className="font-['Gilroy'] font-[400] p-5 bg-transparent text-base outline-none w-[95%] placeholder:text-black-1 md:text-lg md:px-7 lg:text-xl"
            type="text"
            placeholder="Email Address"
          />
          <span className="absolute h-11 w-11 top-[50%] translate-y-[-50%] right-3 bg-orange-1 rounded-[50%] flex items-center justify-center cursor-pointer">
            <ArrowRightSvg className="w-auto h-[40%]" />
          </span>
        </div>
      </div>
    </WhatPeopleAreSayingWrapper>
  );
};

export default WhatPeopleAreSaying;
