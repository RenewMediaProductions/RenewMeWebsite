/* eslint-disable react/no-unescaped-entities */
import { FooterWrapper } from './Footer.styled';

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
    <FooterWrapper className="z-10 bg-blue-1">
      <div className="container mx-auto px-6 py-10 flex flex-col gap-10 md:grid md:grid-rows-[1fr_auto] md:grid-cols-2 md:gap-y-20">
        <div className="grid gap-2 md:flex md:flex-col">
          <div className="w-auto cursor-pointer h-9 md:h-10">
            <LogoFooterSvg className="w-auto h-full" />
          </div>
          <p className="font-['Gilroy'] font-[400] text-xs text-white max-w-sm md:text-sm">
            Created by Former Apple Developers and Founded by America's Leading Psychotherapist, Dr.
            Lisa Palmer Director of The Renew Center of Florida , Ranked #1 for Treatment of PTSD in
            US.
          </p>
        </div>
        <div className="flex flex-col gap-8 md:flex-row md:justify-between">
          <div className="flex flex-col gap-3">
            <div className="font-['Gilroy'] font-[500] text-xs text-white md:text-sm">Explore</div>
            <Link href={/* ROUTES.SIGNUP */ '#'}>
              <a className="font-['Gilroy'] font-[400] text-xs text-white md:text-sm">Sign Up</a>
            </Link>
            <Link href={ROUTES.HOME}>
              <a className="font-['Gilroy'] font-[400] text-xs text-white md:text-sm">RenewMe</a>
            </Link>
            <Link href={ROUTES.SOULSCAPE}>
              <a className="font-['Gilroy'] font-[400] text-xs text-white md:text-sm">Soulscape</a>
            </Link>
            <Link href={ROUTES.SPASCAPE}>
              <a className="font-['Gilroy'] font-[400] text-xs text-white md:text-sm">Spascape</a>
            </Link>
          </div>
          <div className="flex flex-col gap-3">
            <div className="font-['Gilroy'] font-[500] text-xs text-white md:text-sm">About</div>
            <Link href={ROUTES.HOME}>
              <a className="font-['Gilroy'] font-[400] text-xs text-white md:text-sm">RenewMe</a>
            </Link>
            <Link href={`${ROUTES.HOME}#about-developers`}>
              <a className="font-['Gilroy'] font-[400] text-xs text-white md:text-sm">Developers</a>
            </Link>
            <Link href={'#'}>
              <a className="font-['Gilroy'] font-[400] text-xs text-white md:text-sm">
                Global Partners
              </a>
            </Link>
            <Link href={'#'}>
              <a className="font-['Gilroy'] font-[400] text-xs text-white md:text-sm">
                In the News
              </a>
            </Link>
          </div>
          <div className="flex flex-col gap-3">
            <div className="font-['Gilroy'] font-[500] text-xs text-white md:text-sm">Help</div>
            <Link href={'#'}>
              <a className="font-['Gilroy'] font-[400] text-xs text-white md:text-sm">
                Help & Support
              </a>
            </Link>
            <Link href={ROUTES.PRIVACY}>
              <a className="font-['Gilroy'] font-[400] text-xs text-white md:text-sm">
                Privacy Policy
              </a>
            </Link>
            <Link href={ROUTES.TERMS}>
              <a className="font-['Gilroy'] font-[400] text-xs text-white md:text-sm">
                Terms of Use
              </a>
            </Link>
            <Link href={'#'}>
              <a className="font-['Gilroy'] font-[400] text-xs text-white md:text-sm">Contact Us</a>
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-10 md:col-span-2 md:flex-row md:items-end">
          <p className="font-['Gilroy'] font-[400] text-xs text-white md:text-sm">
            © 2022 RenewMe. All Rights Reserved.
          </p>
          <div className="flex gap-7 md:ml-auto">
            <Link href={'#'}>
              <a className="h-6">
                <FacebookSvg className="w-auto h-full" />
              </a>
            </Link>
            <Link href={'#'}>
              <a className="h-6">
                <InstagramSvg className="w-auto h-full" />
              </a>
            </Link>
            <Link href={'#'}>
              <a className="h-6">
                <YoutubeSvg className="w-auto h-full" />
              </a>
            </Link>
            <Link href={'#'}>
              <a className="h-6">
                <LinkedInSvg className="w-auto h-full" />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </FooterWrapper>
  );
};

export default Footer;
