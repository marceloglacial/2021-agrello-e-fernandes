import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang='en'>
        <Head>
          <link rel='dns-fetch' href='https://maps.googleapis.com' />
          <link rel='preconnect' href='https://fonts.gstatic.com' />
          <link
            crossOrigin='anonymous'
            href={`https://fonts.googleapis.com/css?family=Montserrat:200,400,500&display=swap`}
            rel='stylesheet'
          />
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
