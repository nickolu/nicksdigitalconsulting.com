import '@/styles/globals.css';
import theme from '@/styles/theme';
import {ThemeProvider} from '@mui/material';

import type {AppProps} from 'next/app';
import Script from 'next/script';

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export default function App({Component, pageProps}: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <div>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', ${GA_MEASUREMENT_ID});
        `}
        </Script>
      </div>
    </ThemeProvider>
  );
}
