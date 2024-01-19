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
 
  return <Component {...pageProps} />;
}

export default MyApp;
