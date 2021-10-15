import Contact from 'components/Contact/Contact';
import Hero from 'components/Hero/Hero';
import Services from 'components/Services/Services';
import Team from 'components/Team/Team';

export default function Home({ homepage }) {
  const { hero, services, team, contact } = homepage;
  return (
    <>
      <Hero {...hero} />
      <Services {...services} />
      <Team team={team} />
      <Contact {...contact} />
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    'https://agrello-e-fernandes-admin.herokuapp.com/homepage'
  );
  const homepage = await res.json();

  return {
    props: {
      homepage,
    },
    revalidate: 10,
  };
}
