import Hero from './components/Hero';
import OtherVideos from './components/OtherVideos';
import WhatPeopleAreSaying from './components/WhatPeopleAreSaying';
import { NewsWrapper } from './index.styled';

import React from 'react';

const News: React.FC = () => {
  return (
    <NewsWrapper className="flex flex-col bg-white">
      <Hero />
      <OtherVideos />
      <WhatPeopleAreSaying />
    </NewsWrapper>
  );
};

export default News;
