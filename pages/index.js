import Contact from 'components/Contact/Contact';
import Hero from 'components/Hero/Hero';
import Services from 'components/Services/Services';
import Team from 'components/Team/Team';
import { fetchAPI } from 'functions/fetchApit';

const Home = (props) => {
  const { homepage, services: servicesData, members: membersData } = props;
  const { hero, services, members, contact } = homepage;
  const servicesProps = {
    ...services,
    data: servicesData,
  };
  const membersProps = {
    ...members,
    data: membersData,
  };

  return (
    <>
      <Hero {...hero} />
      <Services {...servicesProps} />
      <Team {...membersProps} />
      <Contact {...contact} />
    </>
  );
};
export default Home;

export async function getStaticProps() {
  const [homepage, services, members] = await Promise.all([
    fetchAPI(`/homepage`),
    fetchAPI(`/services`),
    fetchAPI(`/members`),
  ]);
  return {
    props: {
      homepage,
      services,
      members,
    },
    revalidate: 10,
  };
}
