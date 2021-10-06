import fetcher from 'functions/fetcher';
import useSWR from 'swr';

const Services = () => {
  const { data, error } = useSWR('/api/services', fetcher);
  if (error) return <section title={'Error'}>failed to load</section>;
  if (!data) return <section>loading...</section>;

  return (
    <section id={'servicos'}>
      <div className='grid grid-cols-4 gap-4'>
        {data?.map((item) => (
          <div
            key={item.id}
            className={`bg-gray-500 rounded-lg p-4 shadow-lg text-white`}
          >
            {item.title}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
