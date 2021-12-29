import { useEffect, useState } from 'react';
import HeaderNav from './HeaderNav';
import Image from 'next/image';
import Link from 'next/link';

const Header = (props) => {
  const { siteLogo, siteName } = props.siteInfo;

  // Scroll detection
  // ==============================================
  const [scrolling, setScrolling] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    function onScroll() {
      let currentPosition = window.pageYOffset;
      if (currentPosition > scrollTop) {
        // downscroll code
        setScrolling(false);
      } else {
        // upscroll code
        setScrolling(true);
      }
      setScrollTop(currentPosition <= 0 ? 0 : currentPosition);
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [scrollTop]);

  // Styles
  // ==============================================
  const styles = {
    default: `page-header fixed z-50 flex items-center w-full bg-black transition-all ease-in-out duration-500`,
    mobile: `py-4 px-6`,
    desktop: `xl:py-6 xl:px-8`,
    scroll: scrollTop >= 10 ? `bg-opacity-90 shadow-lg` : 'bg-opacity-0',
    logo: 'object-cover',
  };

  // Return
  // ==============================================
  return (
    <header
      className={`${styles.default} ${styles.mobile} ${styles.desktop} ${styles.scroll}`}
    >
      <Link href={`/`}>
        <a className='link--no-decoration'>
          {siteLogo?.url && (
            <Image
              src={siteLogo.url}
              width={211}
              height={60}
              alt={'site logo'}
              className={styles.logo}
            />
          )}
          <h1 className='hidden'>{siteName}</h1>
        </a>
      </Link>
      <HeaderNav {...props} />
    </header>
  );
};
export default Header;
