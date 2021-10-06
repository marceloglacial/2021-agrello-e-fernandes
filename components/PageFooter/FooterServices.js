import fetcher from 'functions/fetcher';
import useSWR from 'swr';

const FooterServices = (props) => {
  const { styles } = props;
  const { data, error } = useSWR('/api/services', fetcher);

  if (error) return <section title={'Error'}>failed to load</section>;
  if (!data) return <section>loading...</section>;

  return (
    <div className={styles.footer.services.container}>
      <h4 className={styles.footer.heading}>Serviços</h4>
      <ul className={`${styles.footer.list} ${styles.footer.services.column}`}>
        {data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};
export default FooterServices;
