import classNames from 'classnames';
import React, { useMemo, useState } from 'react';
import { useEffectOnce, useWindowSize } from 'react-use';

import Link from 'next/link';
import { useRouter } from 'next/router';

import CloseSvg from 'shared/assets/svg/close.svg';
import LogoDarkSvg from 'shared/assets/svg/logo-dark.svg';
import LogoSvg from 'shared/assets/svg/logo.svg';
import { ROUTES } from 'shared/constants/Routes';
import { useThemeStore } from 'shared/store/Theme';
import { screens } from 'shared/theme';
import { Themes } from 'shared/types/Theme';

import { cn } from 'src/lib/utils';

import { NavbarWrapper } from './Navbar.styled';

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
    'top-0 z-20 w-full sticky transition-[top] duration-300',
    hide ? (show ? 'top-0' : 'top-[-64px]') : 'top-0',
    !isTop && !show ? 'backdrop-blur-2xl bg-[#ffffff99]' : ''
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
  const mobileMenuClass = classNames(
    `fixed w-full h-screen top-0 left-0 px-[15%] pt-[15%] text-white`,
    show ? 'block backdrop-blur-2xl bg-[rgba(83,158,216,0.5)]' : 'hidden',
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

  let mobileMainNavigationLink;
  let mobileMainNavigationContent;

  if (router.pathname === ROUTES.HOME) {
    mobileMainNavigationLink = ROUTES.SOULSCAPE;
    mobileMainNavigationContent = 'Soulscape';
  } else if (router.pathname === ROUTES.SOULSCAPE) {
    mobileMainNavigationLink = ROUTES.SPASCAPE;
    mobileMainNavigationContent = 'Spascape';
  } else if (router.pathname === ROUTES.SPASCAPE) {
    mobileMainNavigationLink = ROUTES.GLOBAL_PARTNERS;
    mobileMainNavigationContent = 'Partners';
  } else if (router.pathname === ROUTES.GLOBAL_PARTNERS) {
    mobileMainNavigationLink = ROUTES.CONTACT.MEDIA_INQUIRIES;
    mobileMainNavigationContent = 'Media';
  } else {
    mobileMainNavigationLink = ROUTES.HOME;
    mobileMainNavigationContent = 'RenewMe';
  }

  return (
    <NavbarWrapper className={mainClass}>
      <div className="container relative mx-auto flex h-16 items-center justify-between px-6">
        <div className="flex items-center">
          <div
            className="z-[3] mr-3 flex cursor-pointer flex-col space-y-1 lg:hidden"
            onClick={handleClick}
          >
            <span
              className={classNames(
                'h-0.5 w-5',
                theme !== Themes.Light || !isTop ? 'bg-black-1' : 'bg-white',
                show && 'hidden'
              )}
            ></span>
            <span
              className={classNames(
                'h-0.5 w-5',
                theme !== Themes.Light || !isTop ? 'bg-black-1' : 'bg-white',
                show && 'hidden'
              )}
            ></span>
            <span
              className={classNames(
                'h-0.5 w-5',
                theme !== Themes.Light || !isTop ? 'bg-black-1' : 'bg-white',
                show && 'hidden'
              )}
            ></span>
          </div>
          <Link legacyBehavior href={ROUTES.HOME}>
            <a className="ga z-[3] h-7 w-auto cursor-pointer lg:h-8">{renderLogo}</a>
          </Link>
        </div>

        <Link legacyBehavior href={mobileMainNavigationLink}>
          <a
            className={cn(
              soulScapeClass,
              "block text-white md:hidden text-sm m-0 py-1 px-4 font-['Gilroy'] outline outline-1 outline-white rounded-full",
              mobileMainNavigationContent === 'Media' &&
                'text-black outline outline-1 outline-black',
              mobileMainNavigationContent === 'RenewMe' && 'hidden'
            )}
          >
            {mobileMainNavigationContent}
          </a>
        </Link>

        <div className={menuClass}>
          <div className={menuPlaceholderClass}>
            <Link legacyBehavior href={ROUTES.HOME}>
              <a className={renewMeClass}>RenewMe</a>
            </Link>
            <Link legacyBehavior href={ROUTES.SOULSCAPE}>
              <a className={soulScapeClass}>Soulscape</a>
            </Link>
            <Link legacyBehavior href={ROUTES.SPASCAPE}>
              <a className={spaScapeClass}>Spascape</a>
            </Link>
          </div>
        </div>

        <div className="hidden z-[2] ml-auto md:flex gap-1 font-['Gilroy'] text-sm font-[500]">
          <Link legacyBehavior href={ROUTES.GLOBAL_PARTNERS}>
            <a className={globalPartnersClass}>Global Partners</a>
          </Link>
          <Link legacyBehavior href={ROUTES.NEWS}>
            <a className={inTheNewsClass}>In the News</a>
          </Link>
        </div>

        <div className={mobileMenuClass}>
          <div className="flex flex-col gap-7 font-['Gilroy'] text-xl font-[500]">
            <div
              className="flex h-[36px] w-[36px] cursor-pointer items-center justify-center rounded-[50%] bg-orange-1"
              onClick={handleClick}
            >
              <CloseSvg className="h-[11px] w-auto" />
            </div>
            <Link legacyBehavior href={ROUTES.HOME}>
              <a className="hover:underline">RenewMe</a>
            </Link>
            <Link legacyBehavior href={ROUTES.SOULSCAPE}>
              <a className="hover:underline">Soulscape</a>
            </Link>
            <Link legacyBehavior href={ROUTES.SPASCAPE}>
              <a className="hover:underline">Spascape</a>
            </Link>
            <div className="h-[1px] w-full bg-[#f2f2f2]"></div>
            <Link legacyBehavior href={ROUTES.GLOBAL_PARTNERS}>
              <a className="hover:underline">Global Partners</a>
            </Link>
            <Link legacyBehavior href={ROUTES.NEWS}>
              <a className="hover:underline">In the News</a>
            </Link>
            <Link legacyBehavior href={ROUTES.CONTACT.INDEX}>
              <a className="hover:underline">Contact Us</a>
            </Link>
          </div>
        </div>
      </div>
    </NavbarWrapper>
  );
};

export default Navbar;
