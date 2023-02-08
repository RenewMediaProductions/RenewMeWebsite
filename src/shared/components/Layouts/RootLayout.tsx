import { RootLayoutWrapper } from './RootLayout.styled';

import Lock from 'modules/Lock';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { ROUTES } from 'shared/constants/Routes';
import { useThemeStore } from 'shared/store/Theme';
import { Themes } from 'shared/types/Theme';

const RootLayout: React.FC<{ children: any }> = ({ children }) => {
  const router = useRouter();

  const setTheme = useThemeStore(state => state.setTheme);

  useEffect(() => {
    if (
      router.pathname === ROUTES.SPASCAPE ||
      router.pathname === ROUTES.PRIVACY ||
      router.pathname === ROUTES.TERMS ||
      router.pathname === ROUTES.GLOBAL_PARTNERS ||
      router.pathname === ROUTES.NEWS
    ) {
      setTheme(Themes.Dark);
    } else {
      setTheme(Themes.Light);
    }
  }, [router.pathname, setTheme]);

  return (
    <RootLayoutWrapper className="relative">
      <Lock>{children}</Lock>
    </RootLayoutWrapper>
  );
};

export default RootLayout;
