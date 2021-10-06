import HeaderNav from './HeaderNav';
import Logo from './Logo';

const PageHeader = (props) => {
  return (
    <header className='page-header fixed z-50 flex items-center p-8 w-full bg-black bg-opacity-10'>
      <Logo />
      <HeaderNav />
    </header>
  );
};
export default PageHeader;
