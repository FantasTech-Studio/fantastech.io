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
                "acceptButtonDisplay":true,
                "customizeButtonDisplay":true,
                "position":"float-bottom-center"
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