import fetcher from 'functions/fetcher';
import useSWR from 'swr';

const Services = (props) => {
  const { data, error } = useSWR('/api/services', fetcher);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  const styles = {
    section: 'pt-28 pb-7 px-6 xl:px-0 xl:pt-32 xl:pb-32 min-h-360',
    container: 'container mx-auto text-center xl:text-left',
    grid: 'grid xl:grid-cols-4 gap-8',
  };

  return (
    <section id='servicos' className={styles.section}>
      <div className={styles.container}>
        <h2 className='page-heading'>Áreas de Atuação</h2>
        <div className={styles.grid}>
          {data.map((item) => (
            <div
              key={item.id}
              className='card p-6 xl:p-10 border border-gray-300 hover:border-yellow-400 cursor-pointer text-center m-0 flex justify-center items-center'
            >
              {item.title}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Services;
