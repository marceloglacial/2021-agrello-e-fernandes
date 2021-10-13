import formatTel from 'functions/formtatTel';
import Image from 'next/image';
import fetcher from 'functions/fetcher';
import useSWR from 'swr';

const Team = (props) => {
  const { data, error } = useSWR('/api/team', fetcher);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  const styles = {
    section: 'section--dark pt-28 pb-7 xl:pt-32 xl:pb-32',
    container: 'container mx-auto',
    grid: 'grid xl:grid-cols-2 gap-8',
    teamMember: {
      container: 'team-member relative',
      avatar: 'team-member__avatar relative z-0',
      figure: 'relative min-h-360 mx-6 xl:m-0',
      image: 'object-cover',
      info: 'team-member__info xl:absolute left-6 bottom-6 z-10 bg-white mx-6 my-0 p-6 xl:m-0 text-black shadow-xl',
      name: 'team-member__name p-0 mb-4 text-xl font-bold inline-block bottom-decoration',
      description: 'text-sm',
      tel: 'text-black',
    },
  };

  return (
    <section id='quemsomos' className={styles.section}>
      <div className={styles.container}>
        <h2 className='page-heading'>Quem Somos</h2>
        <div className={styles.grid}>
          {data.map((item) => (
            <div className={styles.teamMember.container} key={item.id}>
              <div className={styles.teamMember.avatar}>
                <figure className={styles.teamMember.figure}>
                  <Image
                    alt={item.avatar.alt}
                    src={item.avatar.src}
                    layout='fill'
                    className={styles.teamMember.image}
                  />
                </figure>
              </div>
              <div className={styles.teamMember.info}>
                <h3 className={styles.teamMember.name}>{item.name}</h3>
                <p className={styles.teamMember.description}>{item.license}</p>
                <p className={styles.teamMember.description}>
                  <a
                    className={styles.teamMember.tel}
                    href={`tel:${formatTel(item.tel)}`}
                  >
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
