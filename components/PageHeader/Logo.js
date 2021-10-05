import Link from 'next/link';
const Logo = (props) => {
  return (
    <div className='flex w-48'>
      <Link href='/'>
        <a className='flex text-yellow-600'>Agrello &Fernandes</a>
      </Link>
    </div>
  );
};

export default Logo;
