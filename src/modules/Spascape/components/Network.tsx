import { NetworkWrapper } from './Network.styled';

import React from 'react';
import ABCSvg from 'shared/assets/svg/n-abc.svg';
import CBSSvg from 'shared/assets/svg/n-cbs.svg';
import CNNSvg from 'shared/assets/svg/n-cnn.svg';
import FOXSvg from 'shared/assets/svg/n-fox.svg';
import NBCSvg from 'shared/assets/svg/n-nbc.svg';
import SKYSvg from 'shared/assets/svg/n-sky.svg';

const Network: React.FC = () => {
  return (
    <NetworkWrapper className="">
      <div className="container flex flex-col h-full gap-10 px-6 pt-16 mx-auto">
        <span className="font-['Gilroy'] font-[400] text-base text-center text-black-1 md:text-lg lg:text-xl">
          CEO of RenewMe, Dr. Lisa Palmer is seen on the following networks:
        </span>
        <div className="grid items-center grid-cols-3 grid-rows-2 gap-10 justify-items-center md:grid-rows-1 md:grid-cols-6 ">
          <div className="h-[27px] lg:h-[33px] xl:h-[40px]">
            <CBSSvg className="w-auto h-full" />
          </div>
          <div className="h-[18px] lg:h-[24px] xl:h-[30px]">
            <NBCSvg className="w-auto h-full" />
          </div>
          <div className="h-[20px] lg:h-[26px] xl:h-[32px]">
            <FOXSvg className="w-auto h-full" />
          </div>
          <div className="h-[21px] lg:h-[27px] xl:h-[34px]">
            <CNNSvg className="w-auto h-full" />
          </div>
          <div className="h-[31px] lg:h-[37px] xl:h-[41px]">
            <SKYSvg className="w-auto h-full" />
          </div>
          <div className="h-[29px] lg:h-[35px] xl:h-[42px]">
            <ABCSvg className="w-auto h-full" />
          </div>
        </div>
      </div>
    </NetworkWrapper>
  );
};

export default Network;
