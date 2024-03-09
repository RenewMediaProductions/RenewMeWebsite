import { Loader2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC, ReactNode, useEffect, useState } from 'react';
import { imageDomainUrl } from 'shared/constants/Assets';
import { Badge } from 'src/components/ui/badge';
import { Button } from 'src/components/ui/button';
import { Checkbox } from 'src/components/ui/checkbox';
import { Dialog, DialogContent } from 'src/components/ui/dialog-no-close';
import { useToast } from 'src/components/ui/use-toast';
import { ListenToRenewMeCarousel } from './components/listen-to-renewme-carousel';

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
  const { toast } = useToast();

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
    <main className="w-full overflow-hidden font-['Gilroy'] text-[#3A3A3B]">
      <Dialog open={popoverTermsIsOpened} onOpenChange={setPopoverTermsisOpened}>
        <DialogContent
          onInteractOutside={event => event.preventDefault()}
          className="m-0 flex h-fit min-w-[50vw] gap-0 rounded-xl bg-white p-0 text-xs"
        >
          <div className="relative md:basis-[40%]">
            <div className="absolute bottom-0 z-10 m-4 hidden rounded-lg bg-white p-2 font-['Gilroy'] shadow-2xl md:block">
              <h1 className="font-semibold">Dr. Lisa Palmer</h1>
              <p className="text-[#3A3A3B]">
                Founder @ <span>Renew</span>
                <span className="text-[#3A3A3B]">Me</span>
              </p>
            </div>

            <Image
              fill
              className="hidden rounded-lg object-cover md:block"
              src={`${imageDomainUrl}/Code/lisa-photo-1.png`}
              alt="Lisa"
            />
          </div>
          <div className="flex h-full basis-full flex-col justify-between p-6 font-['Gilroy'] md:basis-[60%]">
            <div>
              <div className="flex flex-row-reverse justify-between md:flex-col">
                <Image
                  src={`${imageDomainUrl}/Code/renewme-icon.png`}
                  alt="RenewMe Logo"
                  className="mb-4 h-14 w-14"
                  width={2560}
                  height={1024}
                />
                <Image
                  src={`${imageDomainUrl}/Code/hey-there.png`}
                  alt="RenewMe Logo"
                  className="h-16 w-32 md:h-20 md:w-44"
                  width={2560}
                  height={1024}
                />
              </div>
              <div>
                <p className="mb-4">Welcome!</p>
                <p className="mb-4 leading-5">
                  Your well-being is super important to us! Check out RenewMe for a dose of
                  mindfulness and motivation while you enjoy your day. Let us know what you think,
                  and join us in spreading mental health awareness worldwide.
                </p>
                <p className="mb-4">Cheers to a more balanced world!</p>

                <div className="mb-4 flex items-center gap-2 md:hidden">
                  <Image
                    src={`${imageDomainUrl}/Code/lisa-photo-2.png`}
                    alt="Lisa"
                    className="h-8 w-8 rounded-full"
                    width={2560}
                    height={1024}
                  />
                  <div>
                    <h1 className="font-semibold">Dr. Lisa Palmer</h1>
                    <p className="text-[#3A3A3B]">
                      Founder @ <span>Renew</span>
                      <span className="text-[#3A3A3B]">Me</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="mb-4 h-[0.5px] w-full bg-zinc-200"></div>

              <div className="items-top mb-4 flex space-x-2">
                <Checkbox
                  className="rounded-md"
                  id="terms1"
                  checked={termsIsChecked}
                  onCheckedChange={() => setTermsIsChecked(!termsIsChecked)}
                />
                <div className="grid gap-1.5 leading-none">
                  <label
                    htmlFor="terms1"
                    className="font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Accept terms and conditions
                  </label>
                  <p className="text-xs text-muted-foreground">
                    You agree to our{' '}
                    <Link
                      href="https://www.myrenewme.com/terms"
                      className="underline"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Terms of Service
                    </Link>{' '}
                    and{' '}
                    <Link
                      href="https://www.myrenewme.com/privacy"
                      className="underline"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Privacy Policy.
                    </Link>
                  </p>
                </div>
              </div>

              <Button
                className="mb-4 w-full rounded-xl bg-[#00C6C9] hover:bg-[#00C6C9]/80"
                disabled={!termsIsChecked}
                onClick={() => setPopoverTermsisOpened(false)}
              >
                Enter RenewMe
              </Button>
              <div className="flex w-full items-center justify-center">
                <p className="mb-4 w-64 text-center text-xs leading-4 text-zinc-400">
                  Join our global community supporting a mission of life balance.{' '}
                </p>
              </div>

              <div className="flex w-full flex-col justify-between text-center text-xs text-zinc-400 md:flex-row">
                <a href="https://www.myrenewme.com/" target="_blank" rel="noreferrer">
                  www.myrenewme.com
                </a>
                <p>Live Better. Be Balanced</p>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Hero Section */}
      <section className="mb-6 flex w-full flex-col items-center justify-between gap-10 px-4 pt-12 sm:px-20 md:mb-20 md:items-center md:px-32 md:pt-20 lg:flex-row">
        <div className="flex flex-col items-center gap-8 md:flex-row md:items-center">
          {companyId === 'renewme' && (
            <Image
              src={`${imageDomainUrl}/Code/renewme-footer.png`}
              alt="RenewMe Logo"
              className={`absolute -top-12 -z-10 block h-52 w-screen rounded-b-3xl object-cover md:hidden`}
              width={2560}
              height={1024}
            />
          )}
          <Image
            src={`${imageDomainUrl}/Code/renewme-logo.png`}
            alt="RenewMe Logo"
            className="h-44 w-44 rounded-3xl bg-white md:h-64 md:w-64"
            width={2560}
            height={1024}
          />
          <div className="flex flex-col items-center justify-center md:items-start">
            <h1 className="text-center text-5xl font-bold md:text-left">
              Renew<span className="text-[#3A3A3B]/70">Me</span>
            </h1>
            <p className="mb-6 text-center text-2xl font-medium md:text-left">
              Live Better. Be Balanced.
            </p>
            <Button
              variant="outline"
              className="w-fit rounded-full border-[#3A3A3B] text-base text-[#3A3A3B]"
            >
              <Link href={companyContent.shareYourThoughtsUrlForm} target="_blank" rel="noreferrer">
                Join the movement
              </Link>
            </Button>
          </div>
        </div>

        <div className="hidden flex-col items-center justify-center gap-6 text-lg md:flex">
          <Badge
            variant="outline"
            className={`${companyContent.textPrimaryColor} text-lg outline outline-1 ${companyContent.outlinePrimaryColor} border-transparent ${companyContent.backgroundPrimaryColorBadge}`}
          >
            Coming Soon!
          </Badge>
          <section className="flex items-center justify-center gap-4">
            <div className="flex flex-col items-center justify-center gap-2">
              <p>Use code</p>
              <Badge className="bg-[#3A3A3B] text-lg">
                {companyContent.validCodes.find(validCode => validCode === code)?.toUpperCase()}
              </Badge>
            </div>

            <div className="h-[2.5rem] w-0.5 bg-zinc-200"></div>

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
          </section>

          <div
            className="flex cursor-pointer items-center gap-2"
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

      {/* Banner Vector Mobile */}
      <section className="relative mb-6 block w-full basis-full object-top md:hidden">
        {companyContent.bannerVectorMobile}
      </section>

      {/* Download and Use Code Section */}
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
                Renew<span className="text-[#F29D81]">Me</span>
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
