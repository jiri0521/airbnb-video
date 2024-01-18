// pages/_app.js

import { useEffect } from 'react';

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
 
  return(
    <>
            <script defer src="https://www.pushcode.jp/dist/js/pushcode.js"></script>
        <script>
        window.PushCodeInit = function() {
          try {
            if (PushCode && PushCode.isSupport()) {
              PushCode.init({ domainToken: 'a95d6a61cd54c5d393f520d66994a5d34edef682941984dec5cc3096a864f0f4', userid: '' });
              PushCode.components.openSubscribeDialog();
            }
          }
          catch (err) {
            console.error(err);
            if (PushCode) {
              PushCode.sendError(err);
            }
          }
        };
        // スクリプトが読み込まれた後、window.PushCodeInit()関数を実行します
          window.PushCodeInit();
        </script>
          
      <Component {...pageProps} />;
  </>
  );
}

export default MyApp;
