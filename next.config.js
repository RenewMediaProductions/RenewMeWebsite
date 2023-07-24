require('dotenv').config();
/** @type {import('next').NextConfig} */

const forDockerDevelopment = () => {
  if (process.env.MACHINE !== 'docker') return {};
  return {
    webpackDevMiddleware: config => {
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
      };
      return config;
    },
  };
};

module.exports = {
  env: {
    PORT: process.env.PORT,
    STAGE: process.env.STAGE,
    YOUTUBE_API_KEY: process.env.YOUTUBE_API_KEY,
    WEB_PASSWORD: process.env.WEB_PASSWORD,
    SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
  },
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['d1nzwmcp9dgg5h.cloudfront.net'],
  },

  /* Headers */
  async headers() {
    return [
      {
        source: '/:all*',
        headers: [
          {
            key: 'Cache-Control',
            value: `s-maxage=${60 * 60 * 24 * 365}, stale-while-revalidate=${60 * 60 * 24}`,
          },
        ],
      },
    ];
  },

  /* Webpack */
  webpack(config) {
    const fileLoaderRule = config.module.rules.find(rule => rule.test && rule.test.test('.svg'));
    fileLoaderRule.exclude = /\.svg$/;
    config.module.rules.push({
      test: /\.svg$/,
      loader: require.resolve('@svgr/webpack'),
    });
    return config;
  },
  ...forDockerDevelopment(),
};
