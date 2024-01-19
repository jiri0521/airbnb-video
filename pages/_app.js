// pages/_app.js

import { useEffect } from 'react';
import Script from 'next/script'; // この行を追加


function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker
          .register('/public/service-worker.js')
          .then((registration) => {
            console.log('Service Worker registered: ', registration);
          })
          .catch((error) => {
            console.log('Service Worker registration failed: ', error);
          });
      });
    }
  }, []);
 
 return (
    <>
                {/* Next.jsのScriptコンポーネントを使用して外部スクリプトを追加 */}
                <script src="https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.page.js" defer></script>
          <script>
            window.OneSignalDeferred = window.OneSignalDeferred || [];
            OneSignalDeferred.push(function(OneSignal) {
              OneSignal.init({
                appId: "584d9f8f-3fb4-4843-ad96-5c400641f934",
              })};
            );
          </script>
      {/* この下にページの主要なコンポーネントが表示されます */}
         <Component {...pageProps} />
  
  </>
  );
}

export default MyApp;
