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
              "storage":{"useSiteId":true}
            };
          `,
        }}
      />
      <Script
        strategy="beforeInteractive"
        src="https://cs.iubenda.com/autoblocking/4001241.js"
      />
      <Script
        strategy="beforeInteractive"
        src="//cdn.iubenda.com/cs/gpp/stub.js"
      />
      <Script
        strategy="beforeInteractive"
        src="//cdn.iubenda.com/cs/iubenda_cs.js"
      />
    </>
  );
};