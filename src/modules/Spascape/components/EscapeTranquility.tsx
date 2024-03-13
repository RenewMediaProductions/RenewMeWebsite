import classNames from 'classnames';
import React from 'react';

import Image from 'next/image';

import { imageDomainUrl } from 'shared/constants/Assets';

import { SPASCAPE_IMAGES } from '../constants';
import { EscapeTranquilityWrapper } from './EscapeTranquility.styled';

const EscapeTranquility: React.FC = () => {
  return (
    <EscapeTranquilityWrapper className={classNames(`relative gap-14 bg-[#EFE7E0]`)}>
      <Image
        className="object-cover"
        src={`${imageDomainUrl}/Spascape/bg-escape-to-tranquility.png`}
        alt="Escape to Tranquility Background"
        quality={100}
        fill
      />
      <div className="mx-auto relative h-full flex flex-col items-center justify-center md:flex-row gap-10 py-[80px] md:py-[120px] lg:py-[160px] xl:gap-12">
        <Image
          className={classNames(
            `h-auto w-full max-w-[230px]`,
            `lg:max-w-[300px]`,
            `xl:max-w-[326px]`
          )}
          src={SPASCAPE_IMAGES['s1-phone-1'].url}
          height={SPASCAPE_IMAGES['s1-phone-1'].height}
          width={SPASCAPE_IMAGES['s1-phone-1'].width}
          alt={SPASCAPE_IMAGES['s1-phone-1'].alt}
          priority
        />
        <div>
          <h1 className="pb-4 w-full font-['Gilroy'] text-[32px] font-[600] md:text-5xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-br from-[#00CACC] to-[#009699]">
            Escape to Tranquility
          </h1>
          <p className="isolate max-w-[325px] pb-0 md:pb-8 text-justify font-['Gilroy'] font-[500] tracking-[0.2px] text-gray-3 md:max-w-[450px] md:text-lg lg:max-w-[600px] lg:text-xl">
            Spascape is exclusively designed for spa goers to have an immersive experience that
            invigorates the soul while rejuvenating the mind and body at the most luxurious spa
            destinations around the world.
          </p>
        </div>
      </div>
    </EscapeTranquilityWrapper>
  );
};

export default EscapeTranquility;
