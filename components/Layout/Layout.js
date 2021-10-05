import Head from 'next/head';

const Layout = (props) => {
  const { title, children } = props;

  const siteInfo = {
    title: 'Agrello & Fernandes',
    description: 'Advocacia e Consultoria Jurídica',
    keywords: 'advocacia, advogado, jurídico',
  };

  return (
    <>
      <Head>
        <title>
          {!title
            ? `${siteInfo.title} - ${siteInfo.description}`
            : ` ${title} - ${siteInfo.title}`}
        </title>
        <meta name='robots' content='index, follow' />
        <meta name='description' content={siteInfo.description} />
        <meta name='keywords' content={siteInfo.keywords} />
        <meta property='og:title' content={siteInfo.title} />
        <meta property='og:description' content={siteInfo.description} />
        <meta property='og:image' content='tile-wide.png' />
        <link rel='apple-touch-icon' href='apple-touch-icon.png' />
      </Head>
      <main>{children}</main>
    </>
  );
};
export default Layout;
