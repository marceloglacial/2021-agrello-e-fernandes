import Image from 'next/image';

const Team = (props) => {
  const data = [
    {
      id: 1,
      name: 'Adriano Pascarelli Agrello',
      license: 'OAB/CE 12.792',
      tel: '(85) 996617999',
      avatar: {
        alt: '',
        src: 'https://res.cloudinary.com/dw2wjwhuv/image/upload/v1633723638/agrelloefernandes/hunters-race-MYbhN8KaaEc-unsplash_pj8eh9.jpg',
      },
    },
    {
      id: 2,
      name: 'Carlos Everton Fernandes de Oliveira',
      license: 'OAB/CE 12.792',
      tel: 'CEL: (85) 996617999',
      avatar: {
        alt: '',
        src: 'https://res.cloudinary.com/dw2wjwhuv/image/upload/v1633723634/agrelloefernandes/ruthson-zimmerman-Ws4wd-vJ9M0-unsplash_gm30al.jpg',
      },
    },
  ];

  return (
    <section id='quemsomos' className='section--dark'>
      <div className='container mx-auto py-32'>
        <h2 className='page-heading'>Quem Somos</h2>
        <div className='grid xl:grid-cols-2 gap-8'>
          {data.map((item) => (
            <div className='team-member' key={item.id}>
              <div className='team-member__avatar'>
                <figure className='relative min-h-360 m-6 xl:m-0'>
                  <Image
                    alt={item.avatar.alt}
                    src={item.avatar.src}
                    layout='fill'
                    className='object-cover'
                  />
                </figure>
              </div>
              <header className='team-member__info'>
                <h3 className='team-member__name'>{item.name}</h3>
                <p>{item.license}</p>
                <p>{item.tel}</p>
              </header>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Team;
