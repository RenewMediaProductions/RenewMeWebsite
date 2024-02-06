import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { ReactNode } from 'react';
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
}

// Define a mapping for dynamic content based on companyId
const companyContentMap: { [key: string]: CompanyContent } = {
  soulscape: {
    title: (
      <h1 className="mb-2 max-w-xs text-center text-3xl font-bold md:mb-4 md:max-w-xl md:text-6xl">
        Enjoy <span className="text-sea-1">Soulscape.</span> Travel Mindfully.
      </h1>
    ),
    backgroundColor: 'bg-[#131B42]', // Example background color
    banner: (
      <Image
        className="mt-32 md:mt-28 lg:mt-12"
        src={`${imageDomainUrl}/Code/qr-code-bg-soulscape.svg`}
        alt="Background QR Code Banner"
        width={2560}
        height={1024}
      />
    ),
  },
  renewme: {
    title: (
      <h1 className="mb-2 max-w-[190px] text-center text-3xl font-bold md:mb-4 md:max-w-4xl md:text-6xl">
        Live Better. Be Balanced.
      </h1>
    ),
    backgroundColor: 'bg-[#0D1A27]', // Different background color
    banner: (
      <Image
        className="mt-40 md:mt-48 lg:mt-32"
        src={`${imageDomainUrl}/Code/qr-code-bg-renewme.svg`}
        alt="Background QR Code Banner"
        width={2560}
        height={1024}
      />
    ),
  },
  // Add more companies here as needed
};

const QRCode: React.FC = () => {
  const router = useRouter();

  const companyId = router.query.companyId as string;
  const code = router.query.code as string;

  // Get the content and style based on companyId, or default to a fallback object
  const { title, backgroundColor } = companyContentMap[companyId] || {
    title: <>Default Title</>,
    backgroundColor: 'bg-white-1', // Default background color
  };

  return (
    <main className={`bg-white-1 font-['Gilroy'] text-base font-[700] text-[#3A3A3B]`}>
      <section className="relative flex w-full flex-col items-center justify-center">
        <div className="absolute top-0 z-10 pt-16 md:pt-24">
          {title}
          <p className="text-center text-base font-medium md:text-2xl">#mentalhealthawareness</p>
        </div>

        {companyContentMap[companyId]?.banner}

        <section
          className={`flex h-screen w-full flex-col items-center gap-10 py-10 px-10 text-white-1 md:px-40 ${backgroundColor}`}
        >
          <Image
            className="hidden md:block"
            src={`${imageDomainUrl}/Code/renew-logo.svg`}
            alt="Soulscape QR Code"
            width={200}
            height={200}
          />

          <Image
            className="md:hidden"
            src={`${imageDomainUrl}/Code/renew-logo.svg`}
            alt="Soulscape QR Code"
            width={140}
            height={140}
          />

          <div className="flex w-full flex-col items-center gap-12">
            <div className="flex w-full flex-col items-center gap-2">
              <Image
                className="hidden md:block"
                src={`${imageDomainUrl}/Code/renew-logo-tm.svg`}
                alt="Soulscape QR Code"
                width={220}
                height={220}
              />
              <Image
                className="md:hidden"
                src={`${imageDomainUrl}/Code/renew-logo-tm.svg`}
                alt="Soulscape QR Code"
                width={162}
                height={162}
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
