import formatTel from 'functions/formtatTel';
import Image from 'next/image';

const Team = (props) => {
  const data = [
    {
      id: 1,
      name: 'Adriano Pascarelli Agrello',
      license: 'OAB/CE 12.792',
      tel: '(85) 99661.7999',
      avatar: {
        alt: '',
        src: 'https://res.cloudinary.com/dw2wjwhuv/image/upload/v1633723638/agrelloefernandes/hunters-race-MYbhN8KaaEc-unsplash_pj8eh9.jpg',
      },
    },
    {
      id: 2,
      name: 'Carlos Everton Fernandes de Oliveira',
      license: 'OAB/CE 12.792',
      tel: ' (85) 98930.0506',
      avatar: {
        alt: '',
        src: 'https://res.cloudinary.com/dw2wjwhuv/image/upload/v1633723634/agrelloefernandes/ruthson-zimmerman-Ws4wd-vJ9M0-unsplash_gm30al.jpg',
      },
    },
  ];

  return (
    <section id='quemsomos' className='section--dark py-24'>
      <div className='container mx-auto'>
        <h2 className='page-heading'>Quem Somos</h2>
        <div className='grid xl:grid-cols-2 gap-8'>
          {data.map((item) => (
            <div className='team-member relative' key={item.id}>
              <div className='team-member__avatar relative z-0'>
                <figure className='relative min-h-360 mx-6 xl:m-0'>
                  <Image
                    alt={item.avatar.alt}
                    src={item.avatar.src}
                    layout='fill'
                    className='object-cover'
                  />
                </figure>
              </div>
              <div className='team-member__info xl:absolute left-6 bottom-6 z-10 bg-white mx-6 my-0 p-6 xl:m-0 text-black shadow-xl'>
                <h3 className='team-member__name p-0 mb-4 text-xl font-bold inline-block bottom-decoration'>
                  {item.name}
                </h3>
                <p className=' text-sm'>{item.license}</p>
                <p className=' text-sm'>
                  <a className='text-black' href={`tel:${formatTel(item.tel)}`}>
                    {item.tel}
                  </a>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Team;
