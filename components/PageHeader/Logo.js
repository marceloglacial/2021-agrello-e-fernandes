import Link from 'next/link';
const Logo = (props) => {
  const styles = {
    container: 'logo',
    logo: 'flex text-white  no-underline text-xl bottom-decoration',
  };

  return (
    <div className={styles.container}>
      <Link href='/'>
        <a className={styles.logo}>Agrello & Fernandes</a>
      </Link>
    </div>
  );
};

export default Logo;
