import Link from 'next/link';

const FooterQuickLinks = (props) => {
  const { styles, data } = props;
  const clickHandle = (e) => {
    e.preventDefault();
    document.location.href = `${process.env.MY_HEROKU_URL}/admin`;
  };
  return (
    <div>
      <h4 className={styles.footer.heading}>Acesso Rápido</h4>
      <ul className={styles.footer.list}>
        {data.map((item) => (
          <li key={item.id}>
            <Link href={`/${item.link}`}>
              <a className={styles.footer.link}>{item.text}</a>
            </Link>
          </li>
        ))}
        <li>
          <a onClick={(e) => clickHandle(e)} className={styles.footer.link}>
            Site Admin
          </a>
        </li>
      </ul>
    </div>
  );
};
export default FooterQuickLinks;
