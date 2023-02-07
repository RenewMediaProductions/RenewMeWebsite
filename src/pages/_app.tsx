import { QueryClientProvider } from '@tanstack/react-query';
import axios from 'axios';
import Head from 'next/head';
import React from 'react';
import RootLayout from 'shared/components/Layouts/RootLayout';
import { GlobalStyle, theme, ThemeProvider } from 'shared/theme';
import { queryClient } from 'shared/utils/Query';
import { SWRConfig } from 'swr';

import type { AppProps } from 'next/app';
import '../../styles/globals.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <Head>
        <title>RenewMe</title>

        {/* <!-- Viewport --> */}
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />

        {/* <!--  Primary --> */}
        <meta name="title" content="RenewMe" />
        <meta
          name="description"
          content="A new and refreshing wellness brand inspiring more confidence, balance, and peace of mind."
        />
        <meta name="application_name" content="RenewMe Website" />

        {/* <!--  Open Graph / Facebook --> */}
        <meta property="og:title" content="RenewMe" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="RenewMe" />
        <meta property="og:url" content="https://www.myrenewme.com" />
        <meta property="og:image" content="https://d1nzwmcp9dgg5h.cloudfront.net/banner.webp" />
        <meta
          property="og:description"
          content="A new and refreshing wellness brand inspiring more confidence, balance, and peace of mind."
        />

        {/* <!--  Twitter --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:image:alt"
          content="A new and refreshing wellness brand inspiring more confidence, balance, and peace of mind."
        />

        {/* <!--  For Analytics --> */}
        <meta property="fb:app_id" content="your_app_id" />
        <meta name="twitter:site" content="@username" />

        {/* <!--  Favicon --> */}
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <SWRConfig
            value={{
              dedupingInterval: 5000,
              fetcher: (url: string) => axios(url).then(r => r.data),
            }}
          >
            <GlobalStyle />
            <RootLayout>
              <Component {...pageProps} />
            </RootLayout>
          </SWRConfig>
        </ThemeProvider>
      </QueryClientProvider>
    </React.Fragment>
  );
}
