import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { ReactNode, useEffect, useState } from 'react';
import { imageDomainUrl } from 'shared/constants/Assets';
const Separator: React.FC = () => <div className="mx-4 h-[1px] w-full bg-white-1/30" />;

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
      <h1 className="max-w-xs text-center text-3xl font-bold text-black md:mb-6 md:max-w-xl md:text-6xl">
        Enjoy <span className="text-sea-1">Soulscape.</span> Travel Mindfully.
      </h1>
    ),
    backgroundColor: 'bg-[#131B42]',
    banner: (
      <>
        {/* Extra small devices (mobile phones) */}
        <Image
          className="absolute bottom-0 left-5 right-0 z-10 mx-auto block md:hidden"
          src={`${imageDomainUrl}/Code/hero-soulscape-foreground.svg`}
          alt="Background QR Code Banner"
          width={137}
          height={137}
        />

        <Image
          className="absolute left-16 bottom-0 right-0 z-10 mx-auto hidden md:block lg:hidden"
          src={`${imageDomainUrl}/Code/hero-soulscape-foreground.svg`}
          alt="Background QR Code Banner"
          width={220}
          height={220}
        />

        <Image
          className="absolute left-28 bottom-0 right-0 z-10 mx-auto hidden lg:block xl:hidden"
          src={`${imageDomainUrl}/Code/hero-soulscape-foreground.svg`}
          alt="Background QR Code Banner"
          width={360}
          height={360}
        />

        <Image
          className="absolute left-32 bottom-0 right-0 z-10 mx-auto hidden xl:block"
          src={`${imageDomainUrl}/Code/hero-soulscape-foreground.svg`}
          alt="Background QR Code Banner"
          width={430}
          height={430}
        />
      </>
    ),
    validCodes: ['joy369'], // Example valid code for Soulscape
  },
  renewme: {
    title: (
      <h1 className="max-w-[190px] text-center text-3xl font-bold text-black md:mb-6 md:max-w-4xl md:text-6xl">
        Live Better. Be Balanced.
      </h1>
    ),
    backgroundColor: 'bg-[#0D1A27]',
    banner: (
      <>
        <Image
          // Apply absolute positioning, bottom alignment, z-index, and horizontal centering
          className="absolute bottom-0 left-0 right-0 z-10 mx-auto block md:hidden"
          src={`${imageDomainUrl}/Code/hero-renewme-foreground.svg`}
          alt="Background QR Code Banner"
          width={210}
          height={210}
        />

        <Image
          // Apply absolute positioning, bottom alignment, z-index, and horizontal centering
          className="absolute left-0 bottom-0 right-0 z-10 mx-auto hidden md:block lg:hidden"
          src={`${imageDomainUrl}/Code/hero-renewme-foreground.svg`}
          alt="Background QR Code Banner"
          width={440}
          height={440}
        />

        <Image
          // Apply absolute positioning, bottom alignment, z-index, and horizontal centering
          className="absolute left-0 bottom-0 right-0 z-10 mx-auto hidden lg:block xl:hidden"
          src={`${imageDomainUrl}/Code/hero-renewme-foreground.svg`}
          alt="Background QR Code Banner"
          width={600}
          height={600}
        />

        <Image
          // Apply absolute positioning, bottom alignment, z-index, and horizontal centering
          className="absolute left-0 bottom-0 right-0 z-10 mx-auto hidden xl:block"
          src={`${imageDomainUrl}/Code/hero-renewme-foreground.svg`}
          alt="Background QR Code Banner"
          width={700}
          height={700}
        />
      </>
    ),
    validCodes: ['peace369'], // Add valid codes for RenewMe
  },
  // Add more companies and their valid codes here
};

const QRCode: React.FC = () => {
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
    <main className={`bg-white-1 font-['Gilroy'] text-base font-[700] text-[#3A3A3B]`}>
      <section className="relative flex w-full flex-col items-center justify-center">
        <section className="absolute top-0 z-10 pt-8 md:pt-14">
          {title}
          <p className="mt-1 text-center text-base font-medium text-black md:text-2xl">
            #mentalhealthawareness
          </p>
        </section>

        <section className="relative h-72 w-full overflow-hidden md:h-[500px] lg:h-[650px] xl:h-screen">
          {companyContentMap[companyId]?.banner}

          <Image
            className="absolute bottom-0 mt-28"
            src={`${imageDomainUrl}/Code/hero-background.svg`}
            alt="Background QR Code Banner"
            width={2560}
            height={1024}
          />
        </section>

        <section
          className={`flex h-fit w-full flex-col items-center justify-center gap-2 py-10 px-10 text-white-1 md:px-40 ${backgroundColor}`}
        >
          <Image
            className="hidden md:block"
            src={`${imageDomainUrl}/Code/renew-logo.svg`}
            alt="Renew Logo"
            width={220}
            height={220}
          />

          <Image
            className="md:hidden"
            src={`${imageDomainUrl}/Code/renew-logo.svg`}
            alt="Renew Logo"
            width={130}
            height={130}
          />

          <div className="flex w-full flex-col items-center gap-12">
            <div className="flex w-full flex-col items-center gap-2">
              <Image
                className="hidden md:block"
                src={`${imageDomainUrl}/Code/renew-logo-tm.svg`}
                alt="Renew Logo TM"
                width={220}
                height={220}
              />
              <Image
                className="md:hidden"
                src={`${imageDomainUrl}/Code/renew-logo-tm.svg`}
                alt="Renew Logo TM"
                width={130}
                height={130}
              />
              <p className="flex items-center gap-2 text-sm font-medium md:text-base">
                CODE:{' '}
                <span className="rounded-full bg-white-1 px-3 py-1 uppercase text-black-1">
                  {code}
                </span>
              </p>
            </div>
            <Link href="#">
              <Image
                src={`${imageDomainUrl}/Code/download-app-store.svg`}
                alt="Download App Store"
                width={140}
                height={140}
              />
            </Link>

            <Separator />
            <section className="flex w-full flex-col items-center gap-6 font-medium">
              <Link href="#">
                <Button textContent="Join the Movement" />
              </Link>
              <p className="text-center text-sm md:text-base">Life balance is better together.</p>
            </section>
          </div>
        </section>
      </section>
    </main>
  );
};

export default QRCode;
