import Layout from 'components/Layout/Layout';
import Section from 'components/Section/Section';
import { fetchAPI } from 'functions/fetchApit';

const SinglePage = (props) => {
  const { global, content, services: servicesData } = props;

  const layoutProps = {
    siteInfo: global,
    servicesData,
  };

  return (
    <Layout {...layoutProps}>
      <Section title={content.title} page>
        <div dangerouslySetInnerHTML={{ __html: content.content }} />
      </Section>
    </Layout>
  );
};

export async function getStaticPaths() {
  const pages = await fetchAPI('/pages');

  return {
    paths: pages.map((page) => ({
      params: {
        slug: page.slug,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const [services, content, global] = await Promise.all([
    fetchAPI(`/services`),
    fetchAPI(`/pages?slug=${params.slug}`),
    fetchAPI(`/global`),
  ]);
  return {
    props: {
      services,
      content: content[0],
      global,
    },
    revalidate: 10,
  };
}

export default SinglePage;
