import Link from 'next/link';
import { useState } from 'react';
import fetcher from 'functions/fetcher';
import useSWR from 'swr';

const HeaderNav = (props) => {
  const { data, error } = useSWR('/api/navigation', fetcher);
  const [isOpen, setIsOpen] = useState(false);

  if (error) return <div title={'Error'}>failed to load</div>;
  if (!data) return <div>loading...</div>;

  const styles = {
    header: `flex flex-grow justify-end`,
    menu: {
      header: `text-white bottom-decoration ml-8 p-0 mb-4 inline-block  lg:hidden`,
      open: isOpen ? `right-0` : `-right-full lg:right-0`,
      mobile: `absolute top-0 w-full h-screen bg-black bg-opacity-90 transition-all pt-6`,
      desktop: `lg:relative lg:flex lg:h-auto lg:bg-transparent`,
      primary: 'lg:flex list-none mx-auto',
      primaryItem: 'py-2 lg:px-8',
      primaryItemLink: 'text-xl text-white',
      secondary: 'flex list-none',
      secondaryItem: 'py-2 lg:px-2',
      secondaryItemLink: 'text-xl',
    },
    button: {
      mobile: `ml-auto z-50 cursor-pointer`,
      desktop: `lg:hidden`,
      icon: 'w-8 h-8 text-yellow-400',
    },
  };

  return (
    <div className={styles.header}>
      <div className={`${styles.button.mobile} ${styles.button.desktop}`}>
        <svg
          className={styles.button.icon}
          x-show='!showMenu'
          fill='none'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='1'
          viewBox='0 0 24 24'
          stroke='currentColor'
          onClick={() => setIsOpen(!isOpen)}
        >
          <path d='M4 6h16M4 12h16M4 18h16'></path>
        </svg>
      </div>
      <div
        className={`${styles.menu.mobile} ${styles.menu.open} ${styles.menu.desktop}`}
      >
        {isOpen && <h2 className={styles.menu.header}>Menu</h2>}
        <ul className={styles.menu.primary}>
          {data.main.map((item, index) => (
            <li key={index} className={styles.menu.primaryItem}>
              <Link href={item.link}>
                <a
                  className={styles.menu.primaryItemLink}
                  onClick={() => setIsOpen(!isOpen)}
                >
                  {item.title}
                </a>
              </Link>
            </li>
          ))}
        </ul>
        <ul className={styles.menu.secondary}>
          {data.social.map((item, index) => (
            <li key={index} className={styles.menu.secondaryItem}>
              <Link href={item.link}>
                <a
                  className={styles.menu.secondaryItemLink}
                  onClick={() => setIsOpen(!isOpen)}
                >
                  {item.title}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default HeaderNav;
