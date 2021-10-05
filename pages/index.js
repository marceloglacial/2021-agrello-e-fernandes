import Hero from 'components/Hero/Hero';
import Layout from 'components/Layout/Layout';
import PageHeader from 'components/PageHeader/PageHeader';
import ThemeSwitch from 'components/ThemeSwitch/ThemeSwitch';

export default function Home() {
  const siteProps = {
    title: 'Agrello & Fernandes',
    description: 'Advocacia e Consultoria Jurídica',
  };
  return (
    <Layout>
      <ThemeSwitch />
      <PageHeader {...siteProps} />
      <Hero {...siteProps} />
    </Layout>
  );
}
