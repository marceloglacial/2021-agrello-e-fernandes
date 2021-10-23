import Link from 'next/link';
import Section from 'components/Section/Section';
import sortArray from 'functions/sortArray';

const Services = (props) => {
  const { active, title, data } = props;

  if (!active) return '';

  const services = sortArray(data);

  return (
    <Section id='servicos' title={title}>
      <div className={styles.grid}>
        {services.map((item) => (
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
  grid: 'px-6 xl:px-0 grid xl:grid-cols-4 gap-8',
  item: 'flex items-center justify-center cursor-pointer p-8 border-2 border-yellow-400 text-black hover:bg-yellow-400 hover:text-white transition-colors text-center',
};
