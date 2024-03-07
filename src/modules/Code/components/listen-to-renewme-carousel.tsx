import Image from 'next/image';
import { imageDomainUrl } from 'shared/constants/Assets';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from 'src/components/ui/carousel';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from 'src/components/ui/dialog';
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
    thumbnail: `${imageDomainUrl}/Code/listen-to-renewme/image/keys-to-optimism.png`,
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

  const isSingleItem = filteredContent.length === 1;

  return (
    <>
      <Carousel
        opts={{
          align: 'start',
        }}
        className="relative w-full"
      >
        <CarouselContent>
          {filteredContent.map((content: CarouselContentItemsType, index) => (
            <CarouselItem
              key={index}
              className={cn(
                `md:basis-1/2 lg:basis-1/3`,
                isSingleItem && 'md:basis-full lg:basis-full'
              )}
            >
              <Dialog>
                <DialogTrigger className="cursor-pointer" asChild>
                  <div
                    className={cn(
                      'flex h-full w-full flex-col items-start justify-start gap-4 text-center',
                      isSingleItem && 'w-full flex-col items-start justify-center lg:flex-row'
                    )}
                  >
                    <Image
                      className={cn(
                        `h-56 w-full rounded-xl object-cover object-center`,
                        content.imageClass
                      )}
                      src={content.thumbnail}
                      alt="Listen to RenewMe"
                      width={2560}
                      height={1024}
                    />
                    <div className="flex w-full flex-col items-start">
                      <div className="flex w-full items-center justify-between">
                        <h1
                          className={cn(
                            'mb-2 text-left text-xl font-bold leading-snug',
                            isSingleItem && 'text-xl md:text-3xl'
                          )}
                        >
                          {content.title}
                        </h1>
                        <p className="md text-xs font-normal text-zinc-400">{content.duration}</p>
                      </div>
                      <p className="max-w-[25rem] text-left text-sm font-normal">
                        {content.description}
                      </p>
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent className="min-w-[50vw] rounded-xl bg-white">
                  <DialogHeader className="rounded-xl">
                    <DialogTitle>{content.title}</DialogTitle>
                    <DialogDescription>{content.description}</DialogDescription>
                  </DialogHeader>
                  {/* Assuming `video` is a URL to a video file */}
                  {content.video && (
                    <video controls className="w-full">
                      <source src={content.video} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  )}
                </DialogContent>
              </Dialog>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious
          className={isSingleItem ? 'hidden' : 'absolute -left-6 h-12 w-12 bg-white/100'}
        />
        <CarouselNext
          className={isSingleItem ? 'hidden' : 'absolute -right-6 h-12 w-12 bg-white/100'}
        />
      </Carousel>
    </>
  );
}
