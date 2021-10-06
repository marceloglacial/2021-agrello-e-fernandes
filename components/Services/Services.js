import fetcher from 'functions/fetcher';
import useSWR from 'swr';

const SerivcesWrapper = (props) => {
  const { children, title } = props;
  return (
    <section
      id='servicos'
      className='services container mx-auto h-screen pt-32'
    >
      {title && <h2>{title}</h2>}
      {children}
    </section>
  );
};

const Services = () => {
  const { data, error } = useSWR('/api/services', fetcher);
  if (error)
    return <SerivcesWrapper title={'Error'}>failed to load</SerivcesWrapper>;
  if (!data) return <SerivcesWrapper>loading...</SerivcesWrapper>;

  return (
    <SerivcesWrapper title={'Serviços'}>
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
    </SerivcesWrapper>
  );
};

export default Services;
