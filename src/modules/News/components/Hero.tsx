/* eslint-disable react/no-unescaped-entities */
import { HeroWrapper } from './Hero.styled';

import { NEWS_IMAGES } from '../constants';
import { NewsVideo } from '../types';

import ImageFuture from 'next/future/image';
import React from 'react';
import ABCSvg from 'shared/assets/svg/n-abc.svg';
import CBSSvg from 'shared/assets/svg/n-cbs.svg';
import CNNSvg from 'shared/assets/svg/n-cnn.svg';
import FOXSvg from 'shared/assets/svg/n-fox.svg';
import NBCSvg from 'shared/assets/svg/n-nbc.svg';
import SKYSvg from 'shared/assets/svg/n-sky.svg';
import { HttpResponse } from 'shared/types/Http';
import CommonUtil from 'shared/utils/Common';
import useSWR from 'swr';

const Hero: React.FC = () => {
  const { data } = useSWR<HttpResponse<NewsVideo[]>>(
    `${CommonUtil.getDomainURL()}/api/news/featured-video`
  );
  const [featuredVideo] = data && data.records ? data.records : [];

  return (
    <HeroWrapper className="relative">
      <ImageFuture
        className="absolute top-16 left-0 hidden object-cover object-right-bottom h-auto lg:block lg:max-w-[400px] xl:max-w-[500px] min-[1440px]:max-w-[630px]"
        src={NEWS_IMAGES['dr-lisa-palmer'].url}
        height={NEWS_IMAGES['dr-lisa-palmer'].height}
        width={NEWS_IMAGES['dr-lisa-palmer'].width}
        alt={NEWS_IMAGES['dr-lisa-palmer'].alt}
        priority
      />
      <div className="container relative flex flex-col items-center h-full px-6 mx-auto pt-36 isolate lg:items-end xl:pt-40 min-[1920px]:items-center">
        <div className="pb-8">
          <p className="hero-text font-['Gilroy'] font-[400] text-base tracking-[2px] pb-4 text-black-1"></p>
          <h1 className="hero-text font-['Gilroy'] font-[600] leading-10 text-3xl pb-4 text-black-1 md:text-4xl lg:text-5xl xl:text-6xl">
            News & Updates
          </h1>
          <p className="hero-text font-['Gilroy'] font-[400] text-base text-black-1 md:text-lg lg:text-xl lg:max-w-xl xl:text-3xl xl:max-w-2xl min-[1550px]:max-w-4xl">
            America's leading psychotherapist, healer, and a regularly featured national and
            international television personality, Dr. Lisa Palmer wants you to lead a more healthy
            and balanced life. <br />
            <br />
            Founder of RenewMe, Dr. Lisa Palmer is seen on networks:
          </p>
          <div className="grid items-center grid-cols-3 grid-rows-2 gap-8 py-8 justify-items-center md:grid-rows-1 md:grid-cols-6">
            <div className="h-[27px] xl:h-[33px]">
              <CBSSvg className="w-auto h-full" />
            </div>
            <div className="h-[18px] xl:h-[24px]">
              <NBCSvg className="w-auto h-full" />
            </div>
            <div className="h-[20px] xl:h-[26px]">
              <FOXSvg className="w-auto h-full" />
            </div>
            <div className="h-[21px] xl:h-[27px]">
              <CNNSvg className="w-auto h-full" />
            </div>
            <div className="h-[31px] xl:h-[37px]">
              <SKYSvg className="w-auto h-full" />
            </div>
            <div className="h-[29px] xl:h-[35px]">
              <ABCSvg className="w-auto h-full" />
            </div>
          </div>
        </div>
        <div className="container flex flex-col gap-y-[10px]">
          <div className="h-screen max-h-[260px] rounded-[16px] overflow-hidden md:max-h-[400px] lg:max-h-[615px]">
            <iframe
              width="100%"
              height="100%"
              src={featuredVideo && featuredVideo.url}
              title={featuredVideo && featuredVideo.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <div className="flex flex-col">
            <div className="font-['Gilroy'] font-[500] text-orange-1 text-sm md:text-base">
              NOW PLAYING
            </div>
            <div className="font-['Gilroy'] font-[600] text-[#333333] text-xl md:text-2xl">
              {featuredVideo && featuredVideo.title}
            </div>
          </div>
        </div>
      </div>
    </HeroWrapper>
  );
};

export default Hero;
