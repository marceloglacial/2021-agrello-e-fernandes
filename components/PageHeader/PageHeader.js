import { useEffect, useState } from 'react';
import HeaderNav from './HeaderNav';
import Logo from './Logo';

const PageHeader = (props) => {
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

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [scrollTop]);

  const styles = {
    default: `page-header fixed z-50 flex items-center w-full bg-black transition-all ease-in-out duration-500`,
    mobile: `p-6`,
    desktop: `lg:p-8`,
  };

  return (
    <header
      className={`${styles.default} ${styles.mobile} ${styles.desktop} ${
        scrollTop >= 200 ? `bg-opacity-90 shadow-lg` : 'bg-opacity-0'
      }`}
    >
      <Logo />
      <HeaderNav />
    </header>
  );
};
export default PageHeader;
