import { PageLayoutWrapper } from './PageLayout.styled';

import AuthenticatedRoute from '../AuthenticatedRoute';
import Footer from '../Partials/Footer';
import Navbar from '../Partials/Navbar';

import React, { useMemo } from 'react';
import { useInView } from 'react-intersection-observer';
import { useScroll } from 'shared/hooks/useScroll';

interface Props {
  children: any;
  showFooter?: boolean;
  showHeader?: boolean;
}

const PageLayout: React.FC<Props> = ({ children, showFooter = true, showHeader = true }) => {
  const { ref: topRef, inView: topVisible } = useInView();
  const { ref: pageLayoutRef, scroll, touchY } = useScroll();

  const showNavbar = useMemo(
    () => (!scroll && !touchY) || scroll === 'top' || touchY === 'bottom',
    [scroll, touchY]
  );

  return (
    <AuthenticatedRoute>
      <PageLayoutWrapper ref={pageLayoutRef} className="relative flex flex-col w-full h-full">
        <div ref={topRef} className="absolute top-0 w-full h-1"></div>
        {showHeader && <Navbar hide={!showNavbar} isTop={topVisible} />}
        <div className="w-full h-full mt-[-4rem]">{children}</div>
        {showFooter && <Footer />}
      </PageLayoutWrapper>
    </AuthenticatedRoute>
  );
};

export default PageLayout;
