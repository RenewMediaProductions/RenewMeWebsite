import { ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax';

import Image from 'next/image';

import { imageDomainUrl } from 'shared/constants/Assets';

import { Carousel, CarouselContent, CarouselItem } from 'src/components/ui/carousel';
import { Dialog, DialogContent, DialogTrigger } from 'src/components/ui/dialog';
import { cn } from 'src/lib/utils';

const listenToRenewMeCarouselContent = [
  {
    title: 'Path to Prosperity',
    description: 'Balance',
    duration: '3:00',
    type: 'RenewMe',
    thumbnail: `${imageDomainUrl}/Code/listen-to-renewme/image/path-to-prosperity.jpg`,
    imageClass: 'object-center',
    video: `https://rqbgrdsdkazwogdqjqxi.supabase.co/storage/v1/object/public/listen-video-samples/renewme/renewme-contemplative-without-qr-compress.mp4?t=2024-03-07T01%3A45%3A16.764Z`,
  },
  {
    title: 'Keys to Optimism',
    description: 'Happiness',
    duration: '1:30',
    type: 'RenewMe',
    thumbnail: `${imageDomainUrl}/Code/listen-to-renewme/image/keys-to-optimism.jpg`,
    imageClass: 'object-center',
    video: `https://rqbgrdsdkazwogdqjqxi.supabase.co/storage/v1/object/public/listen-video-samples/renewme/renewme-keys-to-optimism-without-qr.mp4?t=2024-03-07T01%3A45%3A35.901Z`,
  },
  {
    title: 'Jump Start Your Day',
    description: 'Motivation',
    duration: '1:30',
    type: 'RenewMe',
    thumbnail: `${imageDomainUrl}/Code/listen-to-renewme/image/jump-start-your-day.jpg`,
    imageClass: 'object-center',
    video: `https://rqbgrdsdkazwogdqjqxi.supabase.co/storage/v1/object/public/listen-video-samples/renewme/renewme-jump-start-without-qr.mp4?t=2024-03-07T01%3A45%3A27.699Z`,
  },
  {
    title: 'Motivating Habits',
    description: 'Balance',
    duration: '1:30',
    type: 'RenewMe',
    thumbnail: `${imageDomainUrl}/Code/listen-to-renewme/image/motivating-habits.jpg`,
    imageClass: 'object-center',
    video: `https://rqbgrdsdkazwogdqjqxi.supabase.co/storage/v1/object/public/listen-video-samples/renewme/renewme-keys-to-optimism-without-qr.mp4?t=2024-03-07T01%3A45%3A35.901Z`,
  },
  {
    title: 'Melt Away Stress',
    description:
      'A soothing experience for the mindful traveler to stay relaxed and balanced on their wanderlust journeys.',
    duration: '3:00',
    type: 'Soulscape',
    thumbnail: `${imageDomainUrl}/Code/listen-to-renewme/image/melt-away-stress.png`,
    imageClass: 'object-center',
    video: `https://rqbgrdsdkazwogdqjqxi.supabase.co/storage/v1/object/public/listen-video-samples/soulscape/soulscape-meditation-short-with-qr.mp4?t=2024-03-07T01%3A45%3A58.375Z`,
  },
];

interface CarouselContentItemsType {
  title: string;
  description: string;
  duration: string;
  type: string;
  thumbnail: string;
  imageClass: string;
  video?: string;
}

export function ListenToRenewMeCarousel({ companyId }: { companyId: string }) {
  // Filter the content based on companyId. Ensure case-insensitivity by converting both to lowercase.
  const filteredContent = listenToRenewMeCarouselContent.filter(
    content => content.type.toLowerCase() === companyId.toLowerCase()
  );

  // Filter those are not matching the companyId
  const otherContent = listenToRenewMeCarouselContent.filter(
    content => content.type.toLowerCase() !== companyId.toLowerCase() // Here, call toLowerCase as a method
  );

  const isFilteredContentSingleItem = filteredContent.length === 1;
  const isOtherContentSingleItem = otherContent.length === 1;

  return (
    <ParallaxProvider>
      <Carousel className={cn('relative mb-14 w-full', isFilteredContentSingleItem && 'mb-20')}>
        <CarouselContent>
          {filteredContent.map((content: CarouselContentItemsType, index) => (
            <CarouselItem
              key={index}
              className={cn(
                'relative',
                'md:basis-1/2',
                'lg:basis-1/3',
                isFilteredContentSingleItem &&
                  'basis-full md:flex md:basis-full md:flex-row md:items-center md:justify-center md:gap-6 lg:basis-full'
              )}
            >
              <Dialog>
                <DialogTrigger
                  className={cn(
                    'w-full',
                    isFilteredContentSingleItem &&
                      'basis-full md:flex md:basis-full md:flex-row md:items-center md:justify-center md:gap-6 lg:basis-full'
                  )}
                >
                  {isFilteredContentSingleItem ? (
                    <Image
                      src={content.thumbnail}
                      alt={content.title}
                      className={cn(
                        `mb-2 h-40 rounded-xl object-cover ${content.imageClass} drop-shadow-lg`,
                        'md:h-52',
                        isFilteredContentSingleItem && 'basis-full md:mb-0 md:w-1/2'
                      )}
                      width={2560}
                      height={1024}
                    />
                  ) : (
                    <ParallaxBanner
                      layers={[{ image: content.thumbnail, speed: -10 }]}
                      className={cn(
                        `mb-2 h-40 rounded-xl object-cover ${content.imageClass} drop-shadow-lg`,
                        'md:h-52',
                        isFilteredContentSingleItem && 'basis-full md:mb-0 md:w-1/2'
                      )}
                    />
                  )}

                  {/* Flex Row */}
                  <div
                    className={cn(
                      'hidden w-full flex-col items-start justify-start text-center',
                      'md:flex'
                    )}
                  >
                    <h3 className="text-md md:text-lg font-bold">{content.title}</h3>
                    <p className="mb-2 font-medium max-w-md text-left text-base text-zinc-500">
                      {content.description}
                    </p>
                    <p className="text-base text-zinc-500">{content.duration}</p>
                  </div>

                  {/* Flex Col  */}
                  <div
                    className={cn(
                      'absolute z-10 flex w-full flex-col items-center justify-center pr-4 text-center',
                      'md:hidden',
                      isFilteredContentSingleItem ? 'items-center' : 'items-start'
                    )}
                  >
                    <h3 className="text-md md:text-lg font-bold">{content.title}</h3>
                    <p
                      className={cn(
                        'mb-2 text-sm text-zinc-500 font-medium',
                        isFilteredContentSingleItem ? 'text-center' : 'text-left'
                      )}
                    >
                      {content.description}
                    </p>
                    <p className="text-sm text-zinc-500">{content.duration}</p>
                  </div>
                </DialogTrigger>

                <DialogContent className="min-w-[70vw] rounded-xl bg-white">
                  {content.video && (
                    <video controls className="aspect-video w-full">
                      <source src={content.video} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  )}
                </DialogContent>
              </Dialog>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <h1
        className={cn(
          'mb-2 mt-6 w-full text-left text-xl font-bold',
          'md:text-4xl md:mb-10 md:mt-0 md:text-center'
        )}
      >
        Listen to{' '}
        {companyId === 'renewme' ? (
          <span className="text-[#00C6C9]">Soulscape</span>
        ) : (
          <span className="text-[#F07E58]">
            Renew<span className="text-[#F29D81]">Me</span>
          </span>
        )}
      </h1>

      <Carousel className={cn('relative mb-20 w-full', 'md:mb-14')}>
        <CarouselContent>
          {otherContent.map((content: CarouselContentItemsType, index) => (
            <CarouselItem
              key={index}
              className={cn(
                'relative',
                'basis-1/2',
                'lg:basis-1/3',
                isOtherContentSingleItem &&
                  'basis-full md:flex md:basis-full md:flex-row md:items-center md:justify-center md:gap-6 lg:basis-full'
              )}
            >
              <Dialog>
                <DialogTrigger
                  className={cn(
                    'w-full',
                    isOtherContentSingleItem &&
                      'basis-full md:flex md:basis-full md:flex-row md:items-center md:justify-center md:gap-6 lg:basis-full'
                  )}
                >
                  {isOtherContentSingleItem ? (
                    <Image
                      src={content.thumbnail}
                      alt={content.title}
                      className={cn(
                        `mb-2 h-28 rounded-xl object-cover ${content.imageClass} drop-shadow-lg`,
                        'md:h-40',
                        isOtherContentSingleItem && 'basis-full md:mb-0'
                      )}
                      width={2560}
                      height={1024}
                    />
                  ) : (
                    <ParallaxBanner
                      layers={[{ image: content.thumbnail, speed: -10 }]}
                      className={cn(
                        `mb-2 h-28 rounded-xl object-cover ${content.imageClass} drop-shadow-lg`,
                        'md:h-40',
                        isOtherContentSingleItem && 'basis-full md:mb-0 md:w-1/2'
                      )}
                    />
                  )}

                  {/* Flex Row */}
                  <div
                    className={cn(
                      'hidden w-full flex-col items-start justify-start text-center',
                      'md:flex',
                      !isOtherContentSingleItem && 'mt-2'
                    )}
                  >
                    <h3 className="text-md md:text-lg font-bold">{content.title}</h3>
                    <p className="mb-2 max-w-md text-left text-base text-zinc-500 font-medium">
                      {content.description}
                    </p>
                    <p className="text-base text-zinc-500">{content.duration}</p>
                  </div>

                  {/* Flex Col  */}
                  <div
                    className={cn(
                      'absolute z-10 flex w-full flex-col items-center justify-start pr-4 text-center',
                      'md:hidden',
                      isOtherContentSingleItem ? 'items-center' : 'items-start'
                    )}
                  >
                    <h3 className="text-md md:text-lg text-left font-bold">{content.title}</h3>
                    <p
                      className={cn(
                        'mb-2 text-sm text-zinc-500 font-medium',
                        isOtherContentSingleItem ? 'text-center' : 'text-left'
                      )}
                    >
                      {content.description}
                    </p>
                    <p className="text-sm text-zinc-500">{content.duration}</p>
                  </div>
                </DialogTrigger>

                <DialogContent className="min-w-[70vw] rounded-xl bg-white">
                  {content.video && (
                    <video controls className="aspect-video w-full">
                      <source src={content.video} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  )}
                </DialogContent>
              </Dialog>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </ParallaxProvider>
  );
}
