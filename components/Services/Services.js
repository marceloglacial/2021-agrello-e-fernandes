import fetcher from 'functions/fetcher';
import useSWR from 'swr';

const SerivcesWrapper = (props) => {
  const { children, title } = props;
  return (
    <section id='servicos' className='services container mx-auto'>
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
    <SerivcesWrapper>
      <h2>Serviços</h2>
      <div className='grid grid-cols-4 gap-4'>
        {data?.map((item, index) => (
          <div
            key={index}
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
