import { ListenToRenewMeCarousel } from './components/listen-to-renewme-carousel';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import * as React from 'react';
import { ReactNode } from 'react';
import { imageDomainUrl } from 'shared/constants/Assets';
import { Badge } from 'src/components/ui/badge';
import { Button } from 'src/components/ui/button';

interface CompanyContent {
  type: string;
  bannerTitle: ReactNode;
  textPrimaryColor: string;
  backgroundPrimaryColor: string;
  backgroundPrimaryColorBadge: string;
  hoverBackgroundPrimaryColorBadge: string;
  outlinePrimaryColor: string;
  backgroundColor: string;
  bannerVectorDesktop?: ReactNode;
  bannerVectorMobile?: ReactNode;
  validCodes: string[];
  shareYourThoughtsUrlForm: string;
}

// Update the companyContentMap to include valid codes
const companyContentMap: { [key: string]: CompanyContent } = {
  soulscape: {
    type: 'Soulscape',
    textPrimaryColor: 'text-[#00C6C9]',
    backgroundPrimaryColor: 'bg-[#00C6C9]',
    backgroundPrimaryColorBadge: 'bg-[#00C6C9]/10',
    hoverBackgroundPrimaryColorBadge: 'hover:bg-[#00C6C9]/80',
    outlinePrimaryColor: 'outline-[#00C6C9]',
    backgroundColor: 'bg-[#131B42]',
    bannerTitle: 'Travel Mindfully',
    bannerVectorDesktop: (
      <Image
        className="object-cover"
        src={`${imageDomainUrl}/Code/vector-illustration/soulscape-vector-desktop.png`}
        alt="Background QR Code Banner"
        width={2560}
        height={1024}
      />
    ),
    bannerVectorMobile: (
      <Image
        className="object-cover"
        src={`${imageDomainUrl}/Code/vector-illustration/soulscape-vector-mobile.png`}
        alt="Background QR Code Banner"
        width={2560}
        height={1024}
      />
    ),
    validCodes: ['joy369'],
    shareYourThoughtsUrlForm: 'https://form.typeform.com/to/euOLT3Wv',
  },
  renewme: {
    type: 'RenewMe',
    textPrimaryColor: 'text-[#F07E58]',
    backgroundPrimaryColor: 'bg-[#F07E58]',
    backgroundPrimaryColorBadge: 'bg-[#F07E58]/10',
    hoverBackgroundPrimaryColorBadge: 'hover:bg-[#F07E58]/80',
    outlinePrimaryColor: 'outline-[#F07E58]',
    backgroundColor: 'bg-[#0D1A27]',
    bannerTitle: 'Life balance is better together.',
    bannerVectorDesktop: (
      <Image
        className="object-cover"
        src={`${imageDomainUrl}/Code/vector-illustration/buddha-vector-desktop.png`}
        alt="Background QR Code Banner"
        width={2560}
        height={1024}
      />
    ),
    bannerVectorMobile: (
      <Image
        className="object-cover"
        src={`${imageDomainUrl}/Code/vector-illustration/buddha-vector-mobile.png`}
        alt="Background QR Code Banner"
        width={2560}
        height={1024}
      />
    ),
    validCodes: ['peace369'], // Add valid codes for RenewMe
    shareYourThoughtsUrlForm: 'https://form.typeform.com/to/lcqRUOKZ',
  },
};

const Code: React.FC = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = React.useState(true); // Prevents 404 page from flashing

  const companyId = router.query.companyId as string;
  const code = router.query.code as string;
  const companyContent = companyContentMap[companyId];

  // Check if companyId exists and code is valid for that companyId
  const isValidCompanyId = companyContent !== undefined;
  const isValidCode = isValidCompanyId ? companyContent.validCodes.includes(code) : false;

  React.useEffect(() => {
    // Router is ready when we have the companyId and code, or if Next.js has determined there won't be additional query parameters
    if (router.isReady) {
      setIsLoading(false); // Indicate loading is complete
    }
  }, [companyId, code, isValidCompanyId, isValidCode, router]);

  if (isLoading) {
    return null;
  }

  if (!isValidCompanyId || !isValidCode) {
    // Return a "Not Found" message or render a specific component
    return (
      <main className="flex h-screen items-center justify-center bg-gray-100 px-4">
        <div className="text-center">
          <h1 className="font-['Gilroy'] text-4xl font-bold text-gray-800 md:text-6xl">
            Page not found!
          </h1>
          <p className="mt-4 font-['Gilroy'] text-lg text-gray-600 md:text-xl">
            Sorry, we couldn&apos;t find the QR code you&apos;re looking for.
          </p>
        </div>
      </main>
    );
  }

  return (
    <>
      <main className="mb-6 flex w-full flex-col gap-10 px-10 pt-20 font-['Gilroy'] text-[#3A3A3B] sm:px-20 md:mb-20 md:px-32">
        {/* Hero Section */}
        <section className="flex w-full flex-col items-center justify-between gap-10 md:flex-row md:items-start">
          <div className="flex flex-col items-center gap-4 md:flex-row md:items-start">
            <Image
              src={`${imageDomainUrl}/Code/renewme-logo.png`}
              alt="RenewMe Logo"
              className="h-44 w-44 rounded-3xl shadow-lg"
              width={2560}
              height={1024}
            />
            <div>
              <h1 className="text-center text-4xl font-bold md:text-left">RenewMe</h1>
              <p className="text-center text-lg md:text-left">Live Better. Be Balanced.</p>
            </div>
          </div>

          <div className="hidden flex-col items-center justify-center gap-4 md:flex">
            <Badge
              variant="outline"
              className={`${companyContent.textPrimaryColor} outline outline-1 ${companyContent.outlinePrimaryColor} border-transparent text-sm ${companyContent.backgroundPrimaryColorBadge}`}
            >
              Coming Soon!
            </Badge>
            <section className="flex items-center justify-center gap-4">
              <div className="flex flex-col items-center justify-center gap-2">
                <p className="text-sm">Use code</p>
                <Badge
                  className={`${companyContent.backgroundPrimaryColor} ${companyContent.hoverBackgroundPrimaryColorBadge} text-sm`}
                >
                  PEACE369
                </Badge>
              </div>

              <div className="h-[2.5rem] w-0.5 bg-zinc-200"></div>

              <div className="flex flex-col items-center justify-center gap-2">
                <p className="text-sm">Download</p>
                <Image
                  className="h-auto w-[5.4rem] cursor-pointer"
                  src={`${imageDomainUrl}/Code/app-store-button.png`}
                  alt="Download Icon"
                  width={1200}
                  height={1200}
                />
              </div>
            </section>
          </div>
        </section>
      </main>

      <section className="mb-6 md:hidden">{companyContent.bannerVectorMobile}</section>

      <main className="mb-6 flex w-full flex-col gap-6 px-10 font-['Gilroy'] text-[#3A3A3B] sm:px-20 md:mb-20 md:px-32">
        <div className="flex flex-col items-center justify-center gap-4 md:hidden">
          <Badge
            variant="outline"
            className={`${companyContent.textPrimaryColor} outline outline-1 ${companyContent.outlinePrimaryColor} border-transparent text-sm ${companyContent.backgroundPrimaryColorBadge}`}
          >
            Coming Soon!
          </Badge>
          <section className="flex items-center justify-center gap-4">
            <div className="flex flex-col items-center justify-center gap-2">
              <p className="text-sm">Use code</p>
              <Badge
                className={`${companyContent.backgroundPrimaryColor} ${companyContent.hoverBackgroundPrimaryColorBadge} text-sm`}
              >
                PEACE369
              </Badge>
            </div>

            <div className="h-[2.5rem] w-[1px] bg-zinc-200"></div>

            <div className="flex flex-col items-center justify-center gap-2">
              <p className="text-sm">Download</p>
              <Image
                className="h-auto w-[5.4rem] cursor-pointer"
                src={`${imageDomainUrl}/Code/app-store-button.png`}
                alt="Download Icon"
                width={1200}
                height={1200}
              />
            </div>
          </section>
          <div className="h-[1px] w-full bg-zinc-200"></div>
        </div>

        {/* Listen to RenewMe Section */}
        <section className="flex w-full flex-col items-center justify-center">
          <div className="mb-10 hidden flex-col items-center justify-center gap-4 md:flex">
            <Image
              className="h-auto w-8"
              src={`${imageDomainUrl}/Code/play-icon.svg`}
              alt="Play Icon"
              width={2560}
              height={1024}
            />
            <h1 className="text-4xl font-bold">
              Listen to <span className={`${companyContent.textPrimaryColor}`}>RenewMe</span>
            </h1>
          </div>

          <ListenToRenewMeCarousel companyId={companyId} />
        </section>
      </main>

      {/* Background Banner */}
      <section className="relative hidden w-full pt-14 font-['Gilroy'] text-[#131B42] md:block">
        <div className="absolute top-0 flex w-full flex-col items-center justify-center">
          <h1 className="text-4xl font-bold">{companyContent.bannerTitle}</h1>
          <p className="text-lg">#mentalhealthawareness</p>
        </div>
        {companyContent.bannerVectorDesktop}
      </section>

      {/* Share Your Thoughts Section */}
      <footer
        className={`flex w-full flex-col items-center justify-center gap-4 py-20 font-['Gilroy'] ${companyContent.backgroundColor} h-fit text-3xl font-bold text-white`}
      >
        <h1>Enjoying {companyContent.type}?</h1>
        <Button className="rounded-full bg-transparent text-white outline outline-1 outline-white hover:bg-white/5">
          <Link href={companyContent.shareYourThoughtsUrlForm} target="_blank">
            Share your thoughts
          </Link>
        </Button>
      </footer>
    </>
  );
};

export default Code;
