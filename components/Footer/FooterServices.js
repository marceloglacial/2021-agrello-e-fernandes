import sortArray from 'functions/sortArray';
import Link from 'next/link';
const FooterServices = (props) => {
  const { styles, data } = props;
  const services = sortArray(data);

  return (
    <div className={styles.footer.services.container}>
      <h4 className={styles.footer.heading}>Serviços</h4>
      <ul className={`${styles.footer.list} ${styles.footer.services.column}`}>
        {services.map((item) => (
          <li key={item.id}>
            <Link href={`/servicos/${item.slug}`}>
              <a className={styles.footer.link}>{item.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default FooterServices;
