import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { ReactNode, useEffect, useState } from 'react';
import { imageDomainUrl } from 'shared/constants/Assets';

interface ButtonProps {
  textContent: string;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ textContent, className }) => (
  <button
    className={classNames(
      'rounded-full bg-transparent px-4 py-2 text-sm font-normal text-white-1 outline outline-1 outline-white-1 transition-all ease-in-out hover:bg-white-1/10 md:text-base',
      className
    )}
  >
    {textContent}
  </button>
);

interface CompanyContent {
  title: ReactNode;
  backgroundColor: string;
  banner?: ReactNode;
  validCodes: string[]; // Add this line
}

// Update the companyContentMap to include valid codes
const companyContentMap: { [key: string]: CompanyContent } = {
  soulscape: {
    title: (
      <h1 className="z-20 max-w-xs text-center text-3xl font-bold leading-normal text-black md:mb-6 md:max-w-xl md:text-left md:text-4xl">
        Enjoy <span className="text-sea-1">Soulscape.</span> Travel Mindfully.
      </h1>
    ),
    backgroundColor: 'bg-[#131B42]',
    banner: (
      <Image
        fill
        className="ml-[4vh] object-contain object-bottom px-10 md:pt-6"
        src={`${imageDomainUrl}/Code/hero-soulscape-foreground.svg`}
        alt="Background QR Code Banner"
      />
    ),
    validCodes: ['joy369'],
  },
  renewme: {
    title: (
      <h1 className="z-20 max-w-[11.875rem] text-center text-3xl font-bold leading-snug text-black md:mb-6 md:max-w-xl md:text-left md:text-4xl">
        Live Better. Be Balanced.
      </h1>
    ),
    backgroundColor: 'bg-[#0D1A27]',
    banner: (
      <Image
        fill
        className="object-contain object-bottom px-10 md:pt-6"
        src={`${imageDomainUrl}/Code/hero-renewme-foreground.svg`}
        alt="Background QR Code Banner"
      />
    ),
    validCodes: ['peace369'], // Add valid codes for RenewMe
  },
  // Add more companies and their valid codes here
};

const Code: React.FC = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true); // Track if we're still loading the query

  const companyId = router.query.companyId as string;
  const code = router.query.code as string;
  const companyContent = companyContentMap[companyId];

  // Check if companyId exists and code is valid for that companyId
  const isValidCompanyId = companyContent !== undefined;
  const isValidCode = isValidCompanyId ? companyContent.validCodes.includes(code) : false;

  useEffect(() => {
    // Router is ready when we have the companyId and code, or if Next.js has determined there won't be additional query parameters
    if (router.isReady) {
      setIsLoading(false); // Indicate loading is complete
    }
  }, [companyId, code, isValidCompanyId, isValidCode, router]);

  if (isLoading) {
    // Optionally show a loading spinner or return null while waiting
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

  // Get the content and style based on companyId, or default to a fallback object
  const { title, backgroundColor } = companyContentMap[companyId] || {
    title: <>Default Title</>,
    backgroundColor: 'bg-white-1', // Default background color
  };

  return (
    <main className="flex flex-col font-['Gilroy'] text-black">
      <section className="flex h-[100svh] w-full flex-col items-center justify-start bg-white-1 text-base font-[700]">
        {/* Hero Vector */}
        <section className="relative flex h-full w-full flex-col items-center gap-2 overflow-hidden md:flex-row">
          {/* Hero Title */}
          <section className="ml-[.5rem] flex w-full flex-col items-center pt-8 md:ml-0 md:items-start md:px-20 md:pt-0">
            {title}
            <p className="z-20 mt-[2px] text-center text-base font-medium text-black">
              #mentalhealthawareness
            </p>
          </section>
          <div className="relative z-10 h-full w-full md:mr-20">
            {companyContentMap[companyId]?.banner}
          </div>

          <Image
            className="absolute bottom-0 h-[40vh] w-full object-cover"
            src={`${imageDomainUrl}/Code/hero-background.svg`}
            alt="Background QR Code Banner"
            width={2560}
            height={1024}
          />
        </section>

        <section
          className={`flex h-fit w-full flex-col items-center justify-center px-10 py-8 text-white-1 md:h-fit md:px-40 ${backgroundColor}`}
        >
          <div className="flex w-full flex-col items-center gap-12">
            <div className="flex w-full flex-col items-center gap-2">
              <Image
                className="hidden h-48 w-auto md:block"
                src="/assets/Code/renew-logo.png"
                alt="RenewMe Logo"
                width={1000}
                height={1000}
              />
              <Image
                className="h-28 w-auto md:hidden"
                src={`/assets/Code/renew-logo.png`}
                alt="Renew Logo"
                width={1000}
                height={1000}
              />
              <Image
                className="md:hidden"
                src={`${imageDomainUrl}/Code/renew-logo-tm.svg`}
                alt="Renew Logo TM"
                width={150}
                height={150}
              />
              <Image
                className="hidden md:block"
                src={`${imageDomainUrl}/Code/renew-logo-tm.svg`}
                alt="Renew Logo TM"
                width={220}
                height={220}
              />
              <p className="flex items-center gap-2 text-sm font-medium md:text-base">
                CODE:{' '}
                <span className="rounded-full bg-white px-2 pt-[2px] pb-[1px] uppercase text-black">
                  {code}
                </span>
              </p>
            </div>
            <Link href="#">
              <Image
                src={`${imageDomainUrl}/Code/download-app-store.svg`}
                alt="Download App Store"
                width={130}
                height={130}
              />
            </Link>
          </div>
        </section>
      </section>
      <footer
        className={classNames(
          'flex h-fit w-full flex-col items-center gap-6 px-6 pb-6 font-medium text-white md:px-16',
          backgroundColor === 'bg-[#131B42]' ? 'bg-[#131B42]' : 'bg-[#0D1A27]' // Add this line
        )}
      >
        <div className="h-2 w-full border-t-[1px] border-white/20"></div>
        <Link href="#">
          <Button textContent="Join the Movement" />
        </Link>
        <p className="text-center text-sm md:text-base">Life balance is better together.</p>
      </footer>
    </main>
  );
};

export default Code;
