import fetcher from 'functions/fetcher';
import useSWR from 'swr';

const FooterQuickLinks = (props) => {
  const { styles } = props;
  const { data, error } = useSWR('/api/navigation', fetcher);
  if (error) return <section title={'Error'}>failed to load</section>;
  if (!data) return <section>loading...</section>;
  return (
    <div>
      <h4 className={styles.footer.heading}>Acesso Rápido</h4>
      <ul className={styles.footer.list}>
        {data.main.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};
export default FooterQuickLinks;
