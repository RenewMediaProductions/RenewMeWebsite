import Service1 from './Service1';
import Service2 from './Service2';
import Service3 from './Service3';
import Service4 from './Service4';
import Service5 from './Service5';
import Service6 from './Service6';
import { ServicesWrapper } from './Services.styled';

import classNames from 'classnames';
import React from 'react';

const Services: React.FC = () => {
  return (
    <ServicesWrapper
      className={classNames(
        `mt-16 flex flex-col gap-16`,
        `md:mt-[60px] md:gap-[60px]`,
        `lg:mt-[80px] lg:gap-[80px]`
      )}
    >
      <Service1 />
      <Service2 />
      <Service3 />
      <Service4 />
      <Service5 />
      <Service6 />
    </ServicesWrapper>
  );
};

export default Services;
