import { FC, ReactNode, useEffect, useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { imageDomainUrl } from 'shared/constants/Assets';

import { Badge } from 'src/components/ui/badge';
import { Button } from 'src/components/ui/button';

import { Loader2 } from 'lucide-react';

import Hero from './components/code-hero';
import { ListenToRenewMeCarousel } from './components/listen-to-renewme-carousel';
import { TermsDialog } from './components/terms-dialog';

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

const Code: FC = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true); // Prevents 404 page from flashing
  const [popoverTermsIsOpened, setPopoverTermsisOpened] = useState(false);
  const [termsIsChecked, setTermsIsChecked] = useState(false);

  const companyId = router.query.companyId as string;
  const code = router.query.code as string;
  const companyContent = companyContentMap[companyId];

  const isValidCompanyId = companyContent !== undefined;
  const isValidCode = isValidCompanyId ? companyContent.validCodes.includes(code) : false;

  useEffect(() => {
    if (router.isReady) {
      setIsLoading(false); // Indicate loading is complete
      setPopoverTermsisOpened(true); // Open the terms popover
    }
  }, [companyId, code, isValidCompanyId, isValidCode, router]);

  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center p-10">
        <Loader2 size={64} className="animate-spin" />
      </div>
    );
  }

  if (!isValidCompanyId || !isValidCode) {
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
    <main className="w-full overflow-hidden font-['Gilroy'] text-[#3A3A3B]">
      <TermsDialog
        popoverTermsIsOpened={popoverTermsIsOpened}
        setPopoverTermsisOpened={setPopoverTermsisOpened}
        termsIsChecked={termsIsChecked}
        setTermsIsChecked={setTermsIsChecked}
      />

      {/* Hero Section */}
      <Hero companyContent={companyContent} code={code} />

      {/* Banner Vector Mobile */}
      <section className="relative mb-6 block w-full basis-full object-top md:hidden">
        {companyContent.bannerVectorMobile}
      </section>

      {/* Download and Use Code Section (For mobile view) */}
      <section className="mb-6 flex w-full flex-col items-center justify-center gap-6 px-4 text-lg sm:px-10 md:mb-20 md:hidden md:px-32">
        <Badge
          variant="outline"
          className={`${companyContent.textPrimaryColor} outline outline-1 ${companyContent.outlinePrimaryColor} border-transparent text-sm ${companyContent.backgroundPrimaryColorBadge} text-lg`}
        >
          Coming Soon!
        </Badge>
        <section className="flex items-center justify-center gap-4">
          <div className="flex flex-col items-center justify-center gap-2">
            <p>Use code</p>
            <Badge
              className={`${companyContent.backgroundPrimaryColor} ${companyContent.hoverBackgroundPrimaryColorBadge} text-lg`}
            >
              {companyContent.validCodes.find(validCode => validCode === code)?.toUpperCase()}
            </Badge>
          </div>

          <div className="h-[2.5rem] w-[1px] bg-zinc-200"></div>

          <div className="flex flex-col items-center justify-center gap-2">
            <p>Download</p>
            <Image
              className="h-auto w-28 cursor-pointer"
              src={`${imageDomainUrl}/Code/app-store-button.png`}
              alt="Download Icon"
              width={1200}
              height={1200}
            />
          </div>
        </section>
        <div className="h-[1px] w-full bg-zinc-200"></div>
      </section>

      {/* Listen to RenewMe Section */}
      <section className="flex w-full flex-col items-center justify-center px-4 sm:px-10 md:px-32">
        <div className="mb-10 hidden w-full flex-col items-center justify-center gap-4 md:flex">
          <Image
            className="h-auto w-8"
            src={`${imageDomainUrl}/Code/play-icon.svg`}
            alt="Play Icon"
            width={2560}
            height={1024}
          />
          <h1 className="text-4xl font-bold">
            Listen to{' '}
            {companyId === 'renewme' ? (
              <span className="text-[#F07E58]">
                Renew
                <span className="text-[#F29D81]">Me</span>
              </span>
            ) : (
              <span className="text-[#00C6C9]">Soulscape</span>
            )}
          </h1>
        </div>
      </section>

      {/* Carousel */}
      <section className="mb-6 flex w-full flex-col items-center justify-center px-4 sm:px-10 md:mb-0 md:px-32">
        <ListenToRenewMeCarousel companyId={companyId} />
      </section>

      {/* If RenewMe */}
      {companyId === 'renewme' && (
        <footer
          className="relative flex h-fit w-screen items-center justify-center gap-10 overflow-hidden rounded-t-2xl bg-[#004451] py-12 text-white md:bg-transparent
        md:px-24 md:py-16 lg:px-32 lg:py-20"
        >
          <div className="hidden lg:block">
            <h1 className="z-10 mb-2 max-w-xl text-6xl font-bold">
              Life balance is better together.
            </h1>
            <p className="text-xl">#mentalhealthawareness</p>
          </div>

          <div>
            <h1 className="mb-4 text-center text-2xl font-bold sm:text-4xl md:mb-8 md:text-6xl">
              Enjoying RenewMe?
            </h1>
            <Button
              variant="outline"
              className="w-full rounded-full border-white bg-transparent px-12 py-6 text-xl text-white hover:bg-white/20 hover:text-white"
            >
              <Link href={companyContent.shareYourThoughtsUrlForm} target="_blank" rel="noreferrer">
                Share your thoughts
              </Link>
            </Button>
          </div>

          <Image
            className="absolute -z-10 object-contain object-center"
            src={`${imageDomainUrl}/Code/renewme-footer.png`}
            alt="RenewMe Footer"
            width={8192}
            height={4096}
          />
        </footer>
      )}

      {/* If Soulscape */}
      {/* Banner Vector Desktop */}
      {companyId !== 'renewme' && (
        <section className="relative hidden w-full pt-14 font-['Gilroy'] text-[#131B42] md:block">
          <div className="absolute bottom-0 z-10 h-10 w-screen bg-[#131B42]"></div>
          <div className="absolute top-0 flex w-full flex-col items-center justify-center">
            <h1 className="text-5xl font-bold">Travel Mindfully.</h1>
            <p className="text-xl">#mentalhealthawareness</p>
          </div>
          {companyContent.bannerVectorDesktop}
        </section>
      )}

      {/* If Soulscape */}
      {companyId !== 'renewme' && (
        <footer
          className={`flex h-fit w-screen items-center justify-center gap-10 overflow-hidden rounded-t-2xl py-12 font-['Gilroy'] md:rounded-none md:px-24 md:py-16 lg:px-32 lg:py-20 ${companyContent.backgroundColor} h-fit text-2xl font-bold text-white md:text-4xl`}
        >
          <div>
            <h1 className="mb-4 text-center text-2xl font-bold sm:text-4xl md:mb-8 md:text-6xl">
              Enjoying Soulscape?
            </h1>
            <Button
              variant="outline"
              className="w-full rounded-full border-white bg-transparent px-12 py-6 text-xl text-white hover:bg-white/20 hover:text-white"
            >
              <Link href="https://form.typeform.com/to/euOLT3Wv" target="_blank" rel="noreferrer">
                Share your thoughts
              </Link>
            </Button>
          </div>
        </footer>
      )}
    </main>
  );
};

export default Code;
