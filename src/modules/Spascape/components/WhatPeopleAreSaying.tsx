import classNames from 'classnames';
import React from 'react';

import Image from 'next/image';

import { imageDomainUrl } from 'shared/constants/Assets';

import { WhatPeopleAreSayingWrapper } from './WhatPeopleAreSaying.styled';

interface Props {
  className?: string;
}

const WhatPeopleAreSaying: React.FC<Props> = ({ className }) => {
  return (
    <WhatPeopleAreSayingWrapper
      className={classNames('relative flex w-screen flex-col py-28', className)}
    >
      <Image
        className="object-cover"
        src={`${imageDomainUrl}/Spascape/bg-never-miss-an-update.png`}
        alt="Never Miss An Update Background"
        fill
      />
      <div className="container isolate mx-auto flex flex-col items-center gap-6 px-6 md:gap-10 lg:gap-24">
        <h1 className="text-center font-['Gilroy'] text-3xl font-[500] md:text-4xl lg:text-5xl xl:text-6xl">
          Never miss an update <br />
          Join our mailing list.
        </h1>
        <div className="relative flex w-full rounded-[100px] bg-white md:max-w-[500px] lg:max-w-[730px]">
          <input
            className="w-[95%] bg-transparent p-5 font-['Gilroy'] text-base font-[400] outline-none placeholder:text-black-1 md:px-7 md:text-lg lg:text-xl"
            type="text"
            placeholder="Email Address"
          />
          <span className="absolute top-[50%] right-3 flex h-11 w-11 translate-y-[-50%] cursor-pointer items-center justify-center rounded-[50%] bg-[#F9E1B9]">
            <Image
              className="w-7 h-7"
              src={`${imageDomainUrl}/Spascape/arrow-right-dark.svg`}
              width={100}
              height={100}
              alt="Arrow Right Dark"
            />
          </span>
        </div>
      </div>
    </WhatPeopleAreSayingWrapper>
  );
};

export default WhatPeopleAreSaying;
