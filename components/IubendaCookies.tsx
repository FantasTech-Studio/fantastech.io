'use client';

import Script from 'next/script';

export const IubendaCookies = () => {
  return (
    <>
      <Script
        id="iubenda-config"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            var _iub = _iub || [];
            _iub.csConfiguration = {
              "siteId":4001241,
              "cookiePolicyId":52417407,
              "lang":"en",
              "storage":{"useSiteId":true},
              "banner":{
                "position":"float-bottom-center",
                "acceptButtonDisplay":true,
                "customizeButtonDisplay":true,
                "rejectButtonDisplay":true,
                "closeButtonRejects":true,
                "backgroundOverlay":false,
                "applyStyles":true,
                "fontSizeBody":"14px",
                "backgroundColor":"#000319",
                "textColor":"#FFFFFF",
                "brandBackgroundColor":"#000319",
                "brandTextColor":"#FFFFFF",
                "acceptButtonColor":"#CBACF9",
                "acceptButtonCaptionColor":"#000319",
                "customizeButtonColor":"#161A31",
                "customizeButtonCaptionColor":"#BEC1DD",
                "rejectButtonColor":"#161A31",
                "rejectButtonCaptionColor":"#BEC1DD"
              }
            };
          `,
        }}
      />
      <Script
        id="iubenda-stub"
        strategy="beforeInteractive"
        src="//cdn.iubenda.com/cs/gpp/stub.js"
      />
      <Script
        id="iubenda-autoblocking"
        strategy="beforeInteractive"
        src="https://cs.iubenda.com/autoblocking/4001241.js"
      />
      <Script
        id="iubenda-cs"
        strategy="beforeInteractive"
        src="//cdn.iubenda.com/cs/iubenda_cs.js"
        async
      />
    </>
  );
};