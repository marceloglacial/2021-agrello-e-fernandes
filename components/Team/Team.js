import Section from 'components/Section/Section';
import formatTel from 'functions/formtatTel';
import Image from 'next/image';

const Team = (props) => {
  const { active, title, data } = props;

  if (!active) return '';

  return (
    <Section id='quemsomos' title={title} dark>
      <div className={styles.grid}>
        {data.map((item) => {
          const { active, id, name, license, tel, email, image } = item;
          if (!active) return false;
          return (
            <div className={styles.member.container} key={id}>
              <div className={styles.member.avatar}>
                <figure className={styles.member.figure}>
                  <Image
                    alt={image.alternativeText || ''}
                    src={image.formats.small.url}
                    layout='fill'
                    className={styles.member.image}
                  />
                </figure>
              </div>
              <div className={styles.member.info}>
                <h3 className={styles.member.name}>{name}</h3>
                <div className={styles.member.description}>
                  {license && <p>{license}</p>}
                  {tel && (
                    <p>
                      <a
                        className={styles.member.link}
                        href={`tel:${formatTel(tel)}`}
                      >
                        {tel}
                      </a>
                    </p>
                  )}
                  {email && (
                    <p>
                      <a
                        className={styles.member.link}
                        href={`mailto:${email}`}
                      >
                        {email}
                      </a>
                    </p>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
};
export default Team;

const styles = {
  section: 'section--dark pt-28 pb-7 xl:pt-32 xl:pb-32',
  container: 'container mx-auto',
  grid: 'grid xl:grid-cols-2 gap-8',
  member: {
    container: 'team-member relative',
    avatar: 'team-member__avatar relative z-0',
    figure: 'relative min-h-360 mx-6 xl:m-0',
    image: 'object-cover',
    info: 'team-member__info xl:absolute left-6 bottom-6 z-10 bg-white mx-6 my-0 p-6 xl:m-0 text-black shadow-xl',
    name: 'team-member__name p-0 mb-4 text-xl font-bold inline-block bottom-decoration',
    description: 'text-sm',
    link: 'text-black',
  },
};
