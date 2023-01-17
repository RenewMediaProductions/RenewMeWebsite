import { WhatPeopleAreSayingWrapper } from './WhatPeopleAreSaying.styled';

import classNames from 'classnames';
import React from 'react';
import ArrowRightSvg from 'shared/assets/svg/arrow-right.svg';

interface Props {
  className?: string;
}

const WhatPeopleAreSaying: React.FC<Props> = ({ className }) => {
  const mainClass = classNames('w-screen relative flex flex-col py-28 !bg-blue-2', className);

  return (
    <WhatPeopleAreSayingWrapper className={mainClass}>
      <div className="bg"></div>
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
