import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import Head from 'next/head';

const Layout = (props) => {
  const { title, children, siteInfo } = props;
  const { siteName, siteDescription, siteKeywords, siteLogo, siteFavicon } =
    siteInfo;

  const siteTitle = title
    ? ` ${title} - ${siteName}`
    : `${siteName} - ${siteDescription}`;

  return (
    <>
      <Head>
        <title>{siteTitle}</title>
        <meta name='robots' content='index, follow' />
        <meta name='description' content={siteDescription} />
        <meta name='keywords' content={siteKeywords} />
        <meta property='og:title' content={siteTitle} />
        <meta property='og:description' content={siteDescription} />
        <meta property='og:image' content={siteLogo?.formats.small.url} />
        <link rel='apple-touch-icon' href={siteLogo?.formats.small.url} />
        <link rel='icon' type='image/png' href={siteFavicon.url}></link>
      </Head>
      <Header {...props} />
      <main>{children}</main>
      <Footer {...props} />
    </>
  );
};
export default Layout;
