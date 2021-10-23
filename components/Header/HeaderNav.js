import formatTel from 'functions/formtatTel';
import Link from 'next/link';
import { useState } from 'react';
import { BsTelephone } from 'react-icons/bs';

const HeaderNav = (props) => {
  const { menu: data, siteTel } = props.siteInfo;
  const [isOpen, setIsOpen] = useState(false);

  const styles = {
    header: `flex flex-grow justify-end xl:py-4`,
    menu: {
      header: `menu__header text-white bottom-decoration ml-8 p-0 mb-4 inline-block  xl:hidden`,
      open: isOpen ? `right-0` : `-right-full xl:right-0`,
      mobile: `absolute xl:relative top-0 w-full h-screen bg-black bg-opacity-90 transition-all pt-6 xl:pt-0`,
      desktop: `xl:relative xl:flex xl:h-auto xl:bg-transparent`,
      primary: 'xl:flex list-none mx-auto',
      primaryItem: 'py-2 xl:px-8 xl:p-0 m-0',
      primaryItemLink: 'text-xl text-white',
      secondary: 'flex list-none',
      secondaryItem: 'py-2 xl:px-2  xl:p-0',
      secondaryItemLink: 'text-xl',
      icon: 'inline mr-2 mb-1',
      iconSize: 20,
    },
    button: {
      mobile: `ml-auto z-50 cursor-pointer`,
      desktop: `xl:hidden`,
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
          {data.map((item, index) => (
            <li key={index} className={styles.menu.primaryItem}>
              <Link href={`/${item.link}`}>
                <a
                  className={styles.menu.primaryItemLink}
                  onClick={() => setIsOpen(!isOpen)}
                >
                  {item.text}
                </a>
              </Link>
            </li>
          ))}
        </ul>
        <ul className={styles.menu.secondary}>
          {siteTel && (
            <li className={styles.menu.secondaryItem}>
              <a
                href={`tel:${formatTel(siteTel)}`}
                className={styles.menu.secondaryItemLink}
                onClick={() => setIsOpen(!isOpen)}
              >
                <div>
                  <BsTelephone
                    size={styles.menu.iconSize}
                    className={styles.menu.icon}
                  />
                  {siteTel}
                </div>
              </a>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};
export default HeaderNav;
