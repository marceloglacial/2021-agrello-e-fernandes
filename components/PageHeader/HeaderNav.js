import Link from 'next/link';

const HeaderNav = (props) => {
  const menuItems = {
    main: [
      {
        title: 'Missão',
        link: '/missao',
      },
      {
        title: 'Áreas de Atuação',
        link: '#servicos',
      },
      {
        title: 'Quem Somos',
        link: '#quem',
      },
      {
        title: 'Contato',
        link: '#contato',
      },
    ],
    social: [
      {
        title: '(88) 8888.8888',
        link: 'tel: (88) 8888.8888',
      },
    ],
  };

  return (
    <div className='flex w-full'>
      <ul className='flex list-none mx-auto'>
        {menuItems.main.map((item, index) => (
          <li key={index} className='p-2'>
            <Link href={item.link}>
              <a className='text-white'>{item.title}</a>
            </Link>
          </li>
        ))}
      </ul>
      <ul className='flex list-none'>
        {menuItems.social.map((item, index) => (
          <li key={index} className='p-2'>
            <Link href={item.link}>
              <a className='text-white'>{item.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default HeaderNav;
