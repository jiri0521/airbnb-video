import Document, { Html, Head, Main, NextScript } from "next/document";


class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="manifest" href="/manifest.json" />
          <link rel="service-worker" href="/service-worker.js" />
          <link rel="apple-touch-icon" href="/icon-192x192.png"></link>
          <meta name="theme-color" content="#fff" />
      
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
