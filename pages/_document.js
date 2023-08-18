import Document, { Html, Head, Main, NextScript } from "next/document";
import OneSignal from 'react-onesignal';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="manifest" href="/manifest.json" />
          <link rel="service-worker" href="/service-worker.js" />
          <link rel="apple-touch-icon" href="/icon-192x192.png"></link>
          <meta name="theme-color" content="#fff" />
          <script src="https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.page.js" defer></script>
<script>
  window.OneSignalDeferred = window.OneSignalDeferred || [];
  OneSignalDeferred.push(function(OneSignal) {
    OneSignal.init({
      appId: "584d9f8f-3fb4-4843-ad96-5c400641f934",
      safari_web_id: "web.onesignal.auto.10485988-1822-4e96-b399-29edb7cde282",
      notifyButton: {
        enable: true,
      },
    })
  });
</script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
