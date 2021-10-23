import Link from 'next/link';
import Section from 'components/Section/Section';

const Services = (props) => {
  const { active, title, data } = props;

  if (!active) return '';

  return (
    <Section id='servicos' title={title}>
      <div className={styles.grid}>
        {data.map((item) => (
          <Link key={item.id} href={`/servicos/${item.slug}`}>
            <a className={styles.item}>{item.title}</a>
          </Link>
        ))}
      </div>
    </Section>
  );
};
export default Services;
const styles = {
  grid: 'grid xl:grid-cols-4 gap-8',
  item: 'cursor-pointer p-8 border-2 border-yellow-400 text-black hover:bg-yellow-400 hover:text-white transition-colors text-center',
};
