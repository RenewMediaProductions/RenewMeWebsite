import { NavbarWrapper } from './Navbar.styled';

import classNames from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useMemo, useState } from 'react';
import { useEffectOnce, useWindowSize } from 'react-use';
import CloseSvg from 'shared/assets/svg/close.svg';
import LogoDarkSvg from 'shared/assets/svg/logo-dark.svg';
import LogoSvg from 'shared/assets/svg/logo.svg';
import { ROUTES } from 'shared/constants/Routes';
import { useThemeStore } from 'shared/store/Theme';
import { screens } from 'shared/theme';
import { Themes } from 'shared/types/Theme';

interface Props {
  hide: boolean;
  isTop: boolean;
}

const Navbar: React.FC<Props> = ({ hide, isTop = true }) => {
  const router = useRouter();
  const [show, setShow] = useState(false);
  const [currentWidth, setCurrentWidth] = useState(0);

  const { width } = useWindowSize();
  const theme = useThemeStore(state => state.theme);

  const isDesktop = useMemo(() => currentWidth && width >= screens.large, [width, currentWidth]);

  const isActiveClass = (path: string) => {
    if (router.pathname !== path) return 'hover:bg-[#ffffff4c] hover:rounded-[100px]';
    return theme === Themes.Light && isTop
      ? 'bg-[#ffffff4c] rounded-[100px]'
      : 'bg-[#ffffff] rounded-[100px]';
  };

  const defaultLinkClass = classNames(
    `mt-0 px-4 py-1.5`,
    theme !== Themes.Light || !isTop ? 'text-black-1' : 'text-white'
  );

  const mainClass = classNames(
    'top-0 z-10 w-full sticky transition-[top] duration-300',
    hide ? (show ? 'top-0' : 'top-[-64px]') : 'top-0',
    !isTop && !show ? 'backdrop-blur-2xl bg-[#ffffff99]' : ''
  );

  const loginClass = classNames(
    !isDesktop && show && 'hidden',
    defaultLinkClass,
    isActiveClass(ROUTES.LOGIN),
    `ml-auto`
  );
  const renewMeClass = classNames(defaultLinkClass, isActiveClass(ROUTES.HOME));
  const soulScapeClass = classNames(defaultLinkClass, isActiveClass(ROUTES.SOULSCAPE));
  const spaScapeClass = classNames(defaultLinkClass, isActiveClass(ROUTES.SPASCAPE));
  const globalPartnersClass = classNames(
    'hidden',
    defaultLinkClass,
    isActiveClass(ROUTES.GLOBAL_PARTNERS),
    `lg:block`
  );
  const inTheNewsClass = classNames(
    'hidden',
    defaultLinkClass,
    isActiveClass(ROUTES.NEWS),
    `lg:block`
  );
  const menuClass = classNames(
    `hidden bg-transparent w-full h-auto absolute left-0 top-[50%] translate-y-[-50%]`,
    `lg:block`
  );
  const menuPlaceholderClass = classNames(
    `mx-auto flex justify-center items-center gap-1 font-['Gilroy'] font-[500] text-sm`
  );
  const hamburgerClass = classNames(
    'h-0.5 w-5',
    theme !== Themes.Light || !isTop ? 'bg-black-1' : 'bg-white',
    show && 'hidden'
  );
  const mobileMenuClass = classNames(
    `fixed w-full h-screen top-0 left-0 px-[15%] pt-[15%] text-white`,
    show ? 'block backdrop-blur-2xl' : 'hidden',
    'lg:hidden'
  );

  const renderLogo = useMemo(() => {
    const logoClass = classNames(`w-auto h-full`, !isDesktop && show && 'hidden');

    if (theme !== Themes.Light || !isTop) return <LogoDarkSvg className={logoClass} />;
    return <LogoSvg className={logoClass} />;
  }, [theme, isDesktop, show, isTop]);

  const handleClick = () => setShow(!show);

  useEffectOnce(() => {
    if (window) setCurrentWidth(window.innerWidth);
  });

  return (
    <NavbarWrapper className={mainClass}>
      <div className="container relative flex items-center justify-center h-16 px-6 mx-auto">
        <div
          className="flex flex-col space-y-1 mr-3 cursor-pointer z-[3] lg:hidden"
          onClick={handleClick}
        >
          <span className={hamburgerClass}></span>
          <span className={hamburgerClass}></span>
          <span className={hamburgerClass}></span>
        </div>
        <Link href={ROUTES.HOME}>
          <a className="h-7 w-auto cursor-pointer z-[3] lg:h-8 ga">{renderLogo}</a>
        </Link>
        <div className={menuClass}>
          <div className={menuPlaceholderClass}>
            <Link href={ROUTES.HOME}>
              <a className={renewMeClass}>RenewMe</a>
            </Link>
            <Link href={ROUTES.SOULSCAPE}>
              <a className={soulScapeClass}>Soulscape</a>
            </Link>
            <Link href={ROUTES.SPASCAPE}>
              <a className={spaScapeClass}>Spascape</a>
            </Link>
          </div>
        </div>
        <div className="flex gap-1 ml-auto z-[2] font-['Gilroy'] font-[500] text-sm">
          <Link href={ROUTES.GLOBAL_PARTNERS}>
            <a className={globalPartnersClass}>Global Partners</a>
          </Link>
          <Link href={ROUTES.NEWS}>
            <a className={inTheNewsClass}>In the News</a>
          </Link>
          <Link href={/* ROUTES.LOGIN */ '#'}>
            <a className={loginClass}>Log In</a>
          </Link>
        </div>
        <div className={mobileMenuClass}>
          <div className="flex flex-col gap-7 font-['Gilroy'] font-[500] text-xl">
            <div
              className="h-[36px] w-[36px] rounded-[50%] bg-orange-1 cursor-pointer flex justify-center items-center"
              onClick={handleClick}
            >
              <CloseSvg className="w-auto h-[11px]" />
            </div>
            <Link href={ROUTES.HOME}>
              <a className="hover:underline">RenewMe</a>
            </Link>
            <Link href={ROUTES.SOULSCAPE}>
              <a className="hover:underline">Soulscape</a>
            </Link>
            <Link href={ROUTES.SPASCAPE}>
              <a className="hover:underline">Spascape</a>
            </Link>
            <div className="w-full h-[1px] bg-[#f2f2f2]"></div>
            <Link href={ROUTES.GLOBAL_PARTNERS}>
              <a className="hover:underline">Global Partners</a>
            </Link>
            <Link href={ROUTES.NEWS}>
              <a className="hover:underline">In the News</a>
            </Link>
            <Link href={/* ROUTES.LOGIN */ '#'}>
              <a className="hover:underline">Login</a>
            </Link>
            <Link href={/* ROUTES.SIGNUP */ '#'}>
              <a className="hover:underline">Sign Up</a>
            </Link>
          </div>
        </div>
      </div>
    </NavbarWrapper>
  );
};

export default Navbar;
