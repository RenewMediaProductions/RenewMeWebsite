/* eslint-disable react/no-unescaped-entities */
import { OtherVideosWrapper } from './OtherVideos.styled';

import { NewsVideo } from '../types';

import React from 'react';
import { HttpResponse } from 'shared/types/Http';
import CommonUtil from 'shared/utils/Common';
import useSWR from 'swr';

const OtherVideos: React.FC = () => {
  const { data } = useSWR<HttpResponse<NewsVideo[]>>(`${CommonUtil.getDomainURL()}/api/news`);
  const newsVideos = data && data.records ? data.records : [];

  return (
    <OtherVideosWrapper className="relative">
      <div className="container h-full px-6 py-12 mx-auto isolate md:py-24 xl:py-36">
        <h2 className="font-['Gilroy'] font-[600] text-2xl pb-6 md:text-3xl">Other Videos</h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-x-[15px] gap-y-[30px] h-full">
          {newsVideos.map((newsVideo, newsVideoIdx) => (
            <div key={newsVideoIdx} className="flex flex-col gap-y-[16px]">
              <div className="rounded-[10px] overflow-hidden h-screen max-h-[260px]">
                <iframe
                  width="100%"
                  height="100%"
                  src={newsVideo.url}
                  title={newsVideo.title}
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="font-['Gilroy'] font-[400] text-base text-[#333333]">
                {newsVideo.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </OtherVideosWrapper>
  );
};

export default OtherVideos;
