import Section from 'components/Section/Section';
import fetcher from 'functions/fetcher';
import useSWR from 'swr';

const Services = () => {
  const { data, error } = useSWR('/api/services', fetcher);
  if (error) return <Section title={'Error'}>failed to load</Section>;
  if (!data) return <Section>loading...</Section>;

  return (
    <Section title={'Serviços'} id={'servicos'}>
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
    </Section>
  );
};

export default Services;
