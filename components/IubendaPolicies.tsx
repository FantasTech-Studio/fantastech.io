'use client';

import Script from 'next/script';

export const IubendaPolicies = () => {
  return (
    <div className="iubenda-policies">
      <a 
        href="https://www.iubenda.com/privacy-policy/52417407" 
        className="iubenda-white iubenda-noiframe iubenda-embed iubenda-noiframe"
        title="Privacy Policy"
      >
        Privacy Policy
      </a>
      <a 
        href="https://www.iubenda.com/privacy-policy/52417407/cookie-policy" 
        className="iubenda-white iubenda-noiframe iubenda-embed iubenda-noiframe"
        title="Cookie Policy"
      >
        Cookie Policy
      </a>
      <Script
        id="iubenda-policy-loader"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
            (function (w,d) {
              var loader = function () {
                var s = d.createElement("script"), tag = d.getElementsByTagName("script")[0];
                s.src="https://cdn.iubenda.com/iubenda.js";
                tag.parentNode.insertBefore(s,tag);
              };
              if(w.addEventListener){w.addEventListener("load", loader, false);}
              else if(w.attachEvent){w.attachEvent("onload", loader);}
              else{w.onload = loader;}
            })(window, document);
          `,
        }}
      />
    </div>
  );
};