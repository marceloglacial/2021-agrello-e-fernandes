import Hero from 'components/Hero/Hero';
import Layout from 'components/Layout/Layout';
import Services from 'components/Services/Services';

export default function Home() {
  const siteProps = {
    title: 'Agrello & Fernandes',
    description: 'Advocacia e Consultoria Jurídica',
    background:
      'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1600&q=80',
  };
  return (
    <Layout>
      <Hero {...siteProps} />
      <Services />
    </Layout>
  );
}
