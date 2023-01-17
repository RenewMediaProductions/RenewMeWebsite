export enum Zones {
  Develop = 'develop',
  Staging = 'staging',
  Production = 'prod',
}

const imageDomainUrl = 'https://d1nzwmcp9dgg5h.cloudfront.net';

export const COMMON_IMAGES = {
  banner: {
    url: `${imageDomainUrl}/banner.webp`,
    width: 1048,
    height: 1536,
  },
};
