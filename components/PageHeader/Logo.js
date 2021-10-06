import Link from 'next/link';
const Logo = (props) => {
  return (
    <div className='flex w-64'>
      <Link href='/'>
        <a className='flex text-white  no-underline text-xl bottom-decoration'>
          Agrello & Fernandes
        </a>
      </Link>
    </div>
  );
};

export default Logo;
