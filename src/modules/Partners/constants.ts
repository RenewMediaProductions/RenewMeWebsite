import { assetVersion, imageDomainUrl } from 'shared/constants/Assets';

export const PARTNERS_IMAGES = {
  'h-card-1': {
    url: `${imageDomainUrl}/Partners/h-card-1.webp?v=${assetVersion}`,
    width: 420,
    height: 604,
    alt: 'image',
  },
  'h-card-2': {
    url: `${imageDomainUrl}/Partners/h-card-2.webp?v=${assetVersion}`,
    width: 420,
    height: 604,
    alt: 'image',
  },
  'h-card-3': {
    url: `${imageDomainUrl}/Partners/h-card-3.webp?v=${assetVersion}`,
    width: 420,
    height: 604,
    alt: 'image',
  },
  'h-card-4': {
    url: `${imageDomainUrl}/Partners/h-card-4.webp?v=${assetVersion}`,
    width: 420,
    height: 604,
    alt: 'image',
  },
  'h-card-5': {
    url: `${imageDomainUrl}/Partners/h-card-5.webp?v=${assetVersion}`,
    width: 420,
    height: 604,
    alt: 'image',
  },
  'wellness-1': {
    url: `${imageDomainUrl}/Partners/wellness-1.webp?v=${assetVersion}`,
    width: 1110,
    height: 589,
    alt: 'image',
  },
  'wellness-2': {
    url: `${imageDomainUrl}/Partners/wellness-2.webp?v=${assetVersion}`,
    width: 1110,
    height: 589,
    alt: 'image',
  },
  'wellness-3': {
    url: `${imageDomainUrl}/Partners/wellness-3.webp?v=${assetVersion}`,
    width: 1110,
    height: 589,
    alt: 'image',
  },
  'wellness-4': {
    url: `${imageDomainUrl}/Partners/wellness-4.webp?v=${assetVersion}`,
    width: 1110,
    height: 589,
    alt: 'image',
  },
  'wellness-5': {
    url: `${imageDomainUrl}/Partners/wellness-5.webp?v=${assetVersion}`,
    width: 1110,
    height: 589,
    alt: 'image',
  },
};

export const WELLNESS = [
  {
    title: 'Wellness for',
    subtitle: 'Lifestyle',
    description: `Everywhere you go, your mindset goes with you! We love collaborating with lifestyle brands to enhance added life balance benefits and rewards for customers. Nothing better than the added pleasure of mindfulness, motivation, and relaxation while you enjoy your  favorite popular brand products.`,
    image: PARTNERS_IMAGES['wellness-1'],
    bgColor: '#D9C6D9',
  },
  {
    title: 'Wellness for',
    subtitle: 'Hospitality',
    description: `Soulscape creates a more positive connection between consumers and our select group of popular hospitality brand partners. Travelers can explore their favorite destinations around the world with a sense of ease. Whether cruising, flying, or unwinding at a hotel, Soulscape is a pocket travel companion for balance.`,
    image: PARTNERS_IMAGES['wellness-2'],
    bgColor: '#C0D3B3',
  },
  {
    title: 'Wellness for',
    subtitle: 'Employees',
    description: `Happy employees make for happier customers.  Our suite of skillful thinking and skillful living is dedicated to inspiring corporate health and wellness. Our pocket guide improves mental health awareness, and provides tools to enhance focus, motivation, and productivity which improves workplace morale and customer satisfaction.`,
    image: PARTNERS_IMAGES['wellness-3'],
    bgColor: '#E6F9FA',
  },
  {
    title: 'Wellness for',
    subtitle: 'Responders',
    description: `First responders devote their lives to saving and protecting others, but who’s taking care of them? We are dedicated to helping heroes on the front lines: health care workers, law enforcement, dispatch, fire service, EMS, veterans, and military to reduce stress and achieve greater health, wellness, and life balance.`,
    image: PARTNERS_IMAGES['wellness-4'],
    bgColor: '#A9CFEC',
  },
  {
    title: 'Wellness for',
    subtitle: 'Students',
    description: `Knowledge is power, but a balanced student can become their best. Our university partners guide future leaders to boost mental health. We provide positive psychology, mindfulness, and motivation to reduce stress, navigate through life’s problems, strengthen memory, improve productivity, and inspire confidence.`,
    image: PARTNERS_IMAGES['wellness-5'],
    bgColor: '#D9C6D9',
  },
];
