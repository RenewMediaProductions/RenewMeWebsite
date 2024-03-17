import { FC } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { imageDomainUrl } from 'shared/constants/Assets';

import { Badge } from 'src/components/ui/badge';
import { Button } from 'src/components/ui/button';
import { useToast } from 'src/components/ui/use-toast';
import { cn } from 'src/lib/utils';

import { ParallaxProvider } from 'react-scroll-parallax';
import { ParallaxBanner } from 'react-scroll-parallax';

interface CompanyContent {
  companyId?: string;
  type?: string;
  titleSpanClassName?: string;
  titleSpanContent?: string;
  description?: string;
  shareYourThoughtsUrlForm: string;
  validCodes: string[];
  textPrimaryColor?: string;
  outlinePrimaryColor?: string;
  backgroundPrimaryColorBadge?: string;
}

interface HeroSectionProps {
  companyContent: CompanyContent;
  code: string;
}

const Hero: FC<HeroSectionProps> = ({ companyContent, code }) => {
  const { toast } = useToast();

  return (
    <ParallaxProvider>
      <section className="mb-6 flex w-full flex-col items-center justify-between gap-10 px-4 pt-12 sm:px-20 md:mb-20 md:items-center md:px-32 md:pt-20 lg:flex-row">
        <div className="flex flex-col items-center gap-8 md:flex-row md:items-center">
          {companyContent.type === 'RenewMe' && (
            <div className="bg-red absolute top-0 h-96 w-full">
              <ParallaxBanner
                layers={[{ image: `${imageDomainUrl}/Code/renewme-footer.png`, speed: -10 }]}
                className="absolute -top-12 -z-10 block h-52 w-screen rounded-b-3xl object-cover md:hidden"
              />
            </div>
          )}

          <Image
            src={`${imageDomainUrl}/Code/renewme-logo.png`}
            alt={`${companyContent.type} Logo`}
            className="h-44 w-44 rounded-3xl bg-white md:h-64 md:w-64"
            width={2560}
            height={1024}
          />

          <div className="flex flex-col items-center justify-center md:items-start">
            <h1 className="text-center text-5xl font-bold md:text-left">
              Renew
              <span className="text-[#3A3A3B]/70">Me</span>
            </h1>
            <p className="mb-2 mt-2 text-center text-xl font-medium md:text-left">
              Life balance is better together.
            </p>
            <Button
              variant="outline"
              className="mt-4 hidden w-fit rounded-full border-[#3A3A3B] text-lg font-medium text-[#3A3A3B] md:flex md:items-center md:justify-center"
            >
              <Link href={companyContent.shareYourThoughtsUrlForm} target="_blank" rel="noreferrer">
                Join the movement
              </Link>
            </Button>
          </div>
        </div>

        <div className="hidden flex-col items-center justify-center gap-6 text-lg font-medium md:flex">
          <Badge
            variant="outline"
            className={cn(
              'border-transparent text-lg outline outline-1',
              companyContent.textPrimaryColor,
              companyContent.outlinePrimaryColor,
              companyContent.backgroundPrimaryColorBadge
            )}
          >
            Coming Soon!
          </Badge>
          <div className="flex items-center justify-center gap-4">
            <div className="flex flex-col items-center justify-center gap-2">
              <p>Use code</p>
              <Badge className="flex w-[112px] items-center justify-center bg-[#3A3A3B] text-center text-lg">
                {companyContent.validCodes.includes(code) ? code.toUpperCase() : ''}
              </Badge>
            </div>
            <div className="h-[4rem] w-0.5 bg-zinc-200"></div>
            <div className="flex flex-col items-center justify-center gap-2">
              <p>Download</p>
              <Image
                className="h-auto w-28 cursor-pointer"
                src={`${imageDomainUrl}/Code/app-store-button.png`}
                alt="Download Icon"
                width={1200}
                height={1200}
                onClick={() => {
                  toast({
                    title: `Coming Soon!`,
                    className: 'bg-white rounded-xl',
                    description: 'RenewMe is coming! Will be available in the App Store soon!',
                  });
                }}
              />
            </div>
          </div>

          <div
            className="flex cursor-pointer items-center gap-2 font-medium"
            onClick={() => {
              navigator.clipboard.writeText(window.location.href);

              toast({
                title: `Link Copied!`,
                className: 'bg-white rounded-xl',
                description: 'Share with friends! RenewMe is coming soon!',
              });
            }}
          >
            <Image
              className="h-4 w-4"
              src={`${imageDomainUrl}/Code/share.svg`}
              alt="Share Icon"
              width={2560}
              height={1024}
            />
            Share with friends
          </div>
        </div>
      </section>
    </ParallaxProvider>
  );
};

export default Hero;
