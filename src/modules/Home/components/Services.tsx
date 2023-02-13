import Service1 from './Service1';
import Service10 from './Service10';
import Service2 from './Service2';
import Service3 from './Service3';
import Service4 from './Service4';
import Service5 from './Service5';
import Service6 from './Service6';
import Service7 from './Service7';
import Service8 from './Service8';
import Service9 from './Service9';
import { ServicesWrapper } from './Services.styled';

import classNames from 'classnames';
import React from 'react';

const Services: React.FC = () => {
  return (
    <ServicesWrapper
      className={classNames(
        `mt-[80px] flex flex-col gap-[80px]`,
        `md:mt-[120px] md:gap-[120px]`,
        `lg:mt-[160px] lg:gap-[160px]`
      )}
    >
      <Service1 />
      <Service2 />
      <Service3 />
      <Service4 />
      <Service5 />
      <Service6 />
      <Service7 />
      <Service8 />
      <Service9 />
      <Service10 />
    </ServicesWrapper>
  );
};

export default Services;
