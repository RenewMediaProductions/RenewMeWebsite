/* eslint-disable react/no-unescaped-entities */
import { FooterWrapper } from './Footer.styled';

import { getYear } from 'date-fns';
import Link from 'next/link';
import React from 'react';
import FacebookSvg from 'shared/assets/svg/facebook.svg';
import InstagramSvg from 'shared/assets/svg/instagram.svg';
import LinkedInSvg from 'shared/assets/svg/linkedin.svg';
import LogoFooterSvg from 'shared/assets/svg/logo-footer.svg';
import YoutubeSvg from 'shared/assets/svg/youtube.svg';
import { ROUTES } from 'shared/constants/Routes';

const Footer: React.FC = () => {
  return (
    <FooterWrapper className="z-10 bg-[#3A3A3B]">
      <div className="container mx-auto flex flex-col gap-10 px-6 py-10 md:grid md:grid-cols-2 md:grid-rows-[1fr_auto] md:gap-y-20">
        <div className="grid gap-2 md:flex md:flex-col md:gap-[25px]">
          <div className="h-9 w-auto cursor-pointer md:h-9">
            <LogoFooterSvg className="h-full w-auto" />
          </div>
          <p className="max-w-sm font-['Gilroy'] text-xs font-[400] text-white md:text-sm">
            Created by Former Apple Developers and Founded by America’s Leading Psychotherapist, Dr.
            Lisa Palmer, Director of The Renew Center of Florida , Ranked #1 for Treatment of PTSD
            in US.
          </p>
          <p className="max-w-sm font-['Gilroy'] text-xs font-[400] text-white md:text-sm">
            Discover Resources and Wellness Brands
          </p>
        </div>
        <div className="flex flex-col gap-8 md:flex-row md:justify-between">
          <div className="flex flex-col gap-3">
            <div className="font-['Gilroy'] text-xs font-[500] text-white md:text-sm">Explore</div>
            <Link legacyBehavior href={/* ROUTES.SIGNUP */ '#'}>
              <a className="font-['Gilroy'] text-xs font-[400] text-white md:text-sm">Sign Up</a>
            </Link>
            <Link legacyBehavior href={ROUTES.HOME}>
              <a className="font-['Gilroy'] text-xs font-[400] text-white md:text-sm">RenewMe</a>
            </Link>
            <Link legacyBehavior href={ROUTES.SOULSCAPE}>
              <a className="font-['Gilroy'] text-xs font-[400] text-white md:text-sm">Soulscape</a>
            </Link>
            <Link legacyBehavior href={ROUTES.SPASCAPE}>
              <a className="font-['Gilroy'] text-xs font-[400] text-white md:text-sm">Spascape</a>
            </Link>
          </div>
          <div className="flex flex-col gap-3">
            <div className="font-['Gilroy'] text-xs font-[500] text-white md:text-sm">About</div>
            <Link legacyBehavior href={ROUTES.HOME}>
              <a className="font-['Gilroy'] text-xs font-[400] text-white md:text-sm">RenewMe</a>
            </Link>
            <Link legacyBehavior href={`${ROUTES.HOME}#about-developers`}>
              <a className="font-['Gilroy'] text-xs font-[400] text-white md:text-sm">Developers</a>
            </Link>
            <Link legacyBehavior href={'#'}>
              <a className="font-['Gilroy'] text-xs font-[400] text-white md:text-sm">
                Global Partners
              </a>
            </Link>
            <Link legacyBehavior href={'#'}>
              <a className="font-['Gilroy'] text-xs font-[400] text-white md:text-sm">
                In the News
              </a>
            </Link>
          </div>
          <div className="flex flex-col gap-3">
            <div className="font-['Gilroy'] text-xs font-[500] text-white md:text-sm">Help</div>
            <Link legacyBehavior href={'#'}>
              <a className="font-['Gilroy'] text-xs font-[400] text-white md:text-sm">
                Help & Support
              </a>
            </Link>
            <Link legacyBehavior href={ROUTES.PRIVACY}>
              <a className="font-['Gilroy'] text-xs font-[400] text-white md:text-sm">
                Privacy Policy
              </a>
            </Link>
            <Link legacyBehavior href={ROUTES.TERMS}>
              <a className="font-['Gilroy'] text-xs font-[400] text-white md:text-sm">
                Terms of Use
              </a>
            </Link>
            <Link legacyBehavior href={'#'}>
              <a className="font-['Gilroy'] text-xs font-[400] text-white md:text-sm">Contact Us</a>
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-10 md:col-span-2 md:flex-row md:items-end">
          <p className="font-['Gilroy'] text-xs font-[400] text-white md:text-sm">
            © {getYear(new Date())} RenewMe. All Rights Reserved.
          </p>
          <div className="flex gap-7 md:ml-auto">
            <Link legacyBehavior href={'#'}>
              <a className="h-6">
                <FacebookSvg className="h-full w-auto" />
              </a>
            </Link>
            <Link legacyBehavior href={'#'}>
              <a className="h-6">
                <InstagramSvg className="h-full w-auto" />
              </a>
            </Link>
            <Link legacyBehavior href={'#'}>
              <a className="h-6">
                <YoutubeSvg className="h-full w-auto" />
              </a>
            </Link>
            <Link legacyBehavior href={'#'}>
              <a className="h-6">
                <LinkedInSvg className="h-full w-auto" />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </FooterWrapper>
  );
};

export default Footer;
