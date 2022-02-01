import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta name="theme-color" content="#000" />
          <meta
            name="description"
            content="Store Cart, the best offers for you - Using Fake Store API"
          />
          <meta name="robots" content="index, follow" />

          {/**Meta Face */}
          <meta property="og:locale" content="pt_BR" />
          <meta
            property="og:title"
            content="Store Cart, the best offers for you - Using Fake Store API"
          />
          <meta property="og:type" content="website" />
          <meta
            property="og:description"
            content="Store Cart, the best offers for you - Using Fake Store API"
          />
          <meta
            property="og:image"
            content="https://fakestoreapi.com/icons/logo.png"
          />
          <meta
            property="og:image:secure_url"
            content="https://fakestoreapi.com/icons/logo.png"
          />
          <meta
            property="og:url"
            content="https://store-cart-fake.vercel.app"
          />
          <meta property="og:site_name" content="Store Cart" />
          <meta property="fb:admins" content="99999999" />

          {/** Meta twitter */}
          <meta name="twitter:card" content="summary" />
          <meta
            name="twitter:description"
            content="Store Cart, the best offers for you - Using Fake Store API"
          />
          <meta
            name="twitter:title"
            content="Store Cart, the best offers for you - Using Fake Store API"
          />
          <meta
            name="twitter:image"
            content="https://fakestoreapi.com/icons/logo.png"
          />
          <meta
            name="twitter:url"
            content="https://store-cart-fake.vercel.app"
          />

          <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Titillium+Web:wght@400;600&display=swap"
            rel="stylesheet"
          />
          <link rel="manifest" href="manifest.json" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <div id="portal-root"></div>
        </body>
      </Html>
    );
  }
}
