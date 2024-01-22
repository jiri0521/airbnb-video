// pages/_app.js

// pages/_app.js
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  
  // サービスワーカーの登録用のuseEffect
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/service-worker.js')
        .then((registration) => {
          console.log('Service Worker registered: ', registration);
        })
        .catch((error) => {
          console.log('Service Worker registration failed: ', error);
        });
    }
  }, []);

  // PushCodeスクリプトの読み込み用のuseEffect
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.pushcode.jp/dist/js/pushcode.js';
    script.defer = true;
    document.head.appendChild(script);

    const pushCodeInit = () => {
      if (window.PushCode && window.PushCode.isSupport()) {
        window.PushCode.init({
          domainToken: 'a95d6a61cd54c5d393f520d66994a5d34edef682941984dec5cc3096a864f0f4',
          userid: ''
        });
        window.PushCode.components.openSubscribeDialog();
      }
    };

    script.addEventListener('load', pushCodeInit);

    // クリーンアップ関数
    return () => {
      script.removeEventListener('load', pushCodeInit);
      document.head.removeChild(script);
    };
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
