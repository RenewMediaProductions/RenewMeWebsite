/* eslint-disable react/no-unescaped-entities */
import { HeroWrapper } from './Hero.styled';

import { NEWS_IMAGES } from '../constants';
import { NewsVideo } from '../types';

import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import React from 'react';
import ABCSvg from 'shared/assets/svg/n-abc.svg';
import CBSSvg from 'shared/assets/svg/n-cbs.svg';
import CNNSvg from 'shared/assets/svg/n-cnn.svg';
import FOXSvg from 'shared/assets/svg/n-fox.svg';
import NBCSvg from 'shared/assets/svg/n-nbc.svg';
import SKYSvg from 'shared/assets/svg/n-sky.svg';
import { HttpResponse } from 'shared/types/Http';
import CommonUtil from 'shared/utils/Common';

const Hero: React.FC = () => {
  const {
    data: featuredVideo,
    isLoading,
    isFetching,
  } = useQuery({
    queryKey: ['featuredVideo'],
    queryFn: async () => {
      const response = await fetch(`${CommonUtil.getDomainURL()}/api/news/featured-video`);
      const data = (await response.json()) as HttpResponse<NewsVideo[]>;
      if (!data?.records) return [];
      return data.records;
    },
    placeholderData: [],
  });

  if (isLoading && isFetching) return null;

  return (
    <HeroWrapper className="relative">
      <Image
        className="absolute top-16 left-0 hidden h-auto object-cover object-right-bottom lg:block lg:max-w-[400px] xl:max-w-[500px] min-[1440px]:max-w-[630px]"
        src={NEWS_IMAGES['dr-lisa-palmer'].url}
        height={NEWS_IMAGES['dr-lisa-palmer'].height}
        width={NEWS_IMAGES['dr-lisa-palmer'].width}
        alt={NEWS_IMAGES['dr-lisa-palmer'].alt}
        priority
      />
      <div className="container relative isolate mx-auto flex h-full flex-col items-center px-6 pt-36 lg:items-end xl:pt-40 min-[1920px]:items-center">
        <div className="pb-8">
          <p className="hero-text pb-4 font-['Gilroy'] text-base font-[400] tracking-[2px] text-black-1"></p>
          <h1 className="hero-text pb-4 font-['Gilroy'] text-3xl font-[600] leading-10 text-black-1 md:text-4xl lg:text-5xl xl:text-6xl">
            News & Updates
          </h1>
          <p className="hero-text xl:max-wxl font-['Gilroy'] text-base font-[400] text-black-1 md:text-lg lg:max-w-xl lg:text-xl xl:text-3xl min-[1550px]:max-w-4xl">
            America's leading psychotherapist, healer, and a regularly featured national and
            international television personality, Dr. Lisa Palmer wants you to lead a more healthy
            and balanced life. <br />
            <br />
            Founder of RenewMe, Dr. Lisa Palmer is seen on networks:
          </p>
          <div className="grid grid-cols-3 grid-rows-2 items-center justify-items-center gap-8 py-8 md:grid-cols-6 md:grid-rows-1">
            <div className="h-[27px] xl:h-[33px]">
              <CBSSvg className="h-full w-auto" />
            </div>
            <div className="h-[18px] xl:h-[24px]">
              <NBCSvg className="h-full w-auto" />
            </div>
            <div className="h-[20px] xl:h-[26px]">
              <FOXSvg className="h-full w-auto" />
            </div>
            <div className="h-[21px] xl:h-[27px]">
              <CNNSvg className="h-full w-auto" />
            </div>
            <div className="h-[31px] xl:h-[37px]">
              <SKYSvg className="h-full w-auto" />
            </div>
            <div className="h-[29px] xl:h-[35px]">
              <ABCSvg className="h-full w-auto" />
            </div>
          </div>
        </div>
        <div className="container flex flex-col gap-y-[10px]">
          <div className="h-screen max-h-[260px] overflow-hidden rounded-[16px] md:max-h-[400px] lg:max-h-[615px]">
            <iframe
              width="100%"
              height="100%"
              src={featuredVideo && featuredVideo[0]?.url}
              title={featuredVideo && featuredVideo[0]?.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <div className="flex flex-col">
            <div className="font-['Gilroy'] text-sm font-[500] text-orange-1 md:text-base">
              NOW PLAYING
            </div>
            <div className="font-['Gilroy'] text-xl font-[600] text-[#333333] md:text-2xl">
              {featuredVideo && featuredVideo[0]?.title}
            </div>
          </div>
        </div>
      </div>
    </HeroWrapper>
  );
};

export default Hero;
