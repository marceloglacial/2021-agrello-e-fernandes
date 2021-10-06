import Link from 'next/link';
import { useState } from 'react';

const HeaderNav = (props) => {
  const menuItems = {
    main: [
      {
        title: 'Missão',
        link: '/missao',
      },
      {
        title: 'Áreas de Atuação',
        link: '/#servicos',
      },
      {
        title: 'Quem Somos',
        link: '/#quemsomos',
      },
      {
        title: 'Contato',
        link: '/#contato',
      },
    ],
    social: [
      {
        title: '(88) 8888.8888',
        link: 'tel: (88) 8888.8888',
      },
    ],
  };

  const [isOpen, setIsOpen] = useState(false);
  const styles = {
    header: `flex flex-grow justify-end`,
    menu: {
      mobile: `absolute top-0 w-full h-screen bg-black bg-opacity-90 transition-all pt-6`,
      open: isOpen ? `right-0` : `-right-full`,
      desktop: `lg:relative lg:flex lg:h-auto lg:bg-transparent`,
    },
    button: {
      mobile: `ml-auto z-50`,
      desktop: `lg:hidden`,
    },
  };

  return (
    <div className={`nav-header ${styles.header}`}>
      <div
        className={`nav-button ${styles.button.mobile} ${styles.button.desktop}`}
      >
        <svg
          className='w-8 h-8 text-yellow-400'
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
        className={`nav-header__menu ${styles.menu.mobile} ${styles.menu.open} ${styles.menu.desktop}`}
      >
        {isOpen && (
          <h2 className={`text-white  bottom-decoration pl-8`}>Menu</h2>
        )}
        <ul className='lg:flex list-none mx-auto'>
          {menuItems.main.map((item, index) => (
            <li key={index} className='py-2 lg:px-8'>
              <Link href={item.link}>
                <a
                  className='text-xl text-white'
                  onClick={() => setIsOpen(!isOpen)}
                >
                  {item.title}
                </a>
              </Link>
            </li>
          ))}
        </ul>
        <ul className='flex list-none'>
          {menuItems.social.map((item, index) => (
            <li key={index} className='py-2 lg:px-2'>
              <Link href={item.link}>
                <a className='text-xl' onClick={() => setIsOpen(!isOpen)}>
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
