import Contact from 'components/Contact/Contact';
import Hero from 'components/Hero/Hero';
import Layout from 'components/Layout/Layout';
import Services from 'components/Services/Services';
import Team from 'components/Team/Team';
import { fetchAPI } from 'functions/fetchApit';

const Home = (props) => {
  const {
    global,
    homepage,
    services: servicesData,
    members: membersData,
  } = props;

  const { hero, services, members, contact } = homepage;
  const servicesProps = {
    ...services,
    data: servicesData,
  };
  const membersProps = {
    ...members,
    data: membersData,
  };

  const layoutProps = {
    siteInfo: global,
    servicesData,
  };

  return (
    <Layout {...layoutProps}>
      <Hero {...hero} />
      <Services {...servicesProps} />
      <Team {...membersProps} />
      <Contact {...contact} />
    </Layout>
  );
};
export default Home;

export async function getStaticProps() {
  const [homepage, services, members, global] = await Promise.all([
    fetchAPI(`/homepage`),
    fetchAPI(`/services`),
    fetchAPI(`/members`),
    fetchAPI(`/global`),
  ]);
  return {
    props: {
      homepage,
      services,
      members,
      global,
    },
    revalidate: 10,
  };
}
