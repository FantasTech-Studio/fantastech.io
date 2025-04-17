'use client';

import Script from 'next/script';

export const GoogleAnalytics = () => {
  return (
    <>
      <Script
        id="gtag"
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=G-2BCKN64TFX`}
      />
      <Script
        id="gtag-config"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-2BCKN64TFX', {
              'cookie_flags': 'max-age=7200;secure;samesite=none'
            });
          `,
        }}
      />
    </>
  );
};