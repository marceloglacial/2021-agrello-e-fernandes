import HeaderNav from './HeaderNav';
import Logo from './Logo';

const PageHeader = (props) => {
  return (
    <header className='flex items-center fixed p-8 w-full'>
      <Logo />
      <HeaderNav />
    </header>
  );
};
export default PageHeader;
