import Image from 'next/image';
import useViewport from 'hooks/useViewport';

const Hero = (props) => {
  const { title, description, video, image } = props;
  const [width] = useViewport();

  const hasVideo = video && width > 1024;

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <header className={styles.header}>
          {title && <h1 className={styles.headerTitle}>{title}</h1>}
          {description && (
            <div
              className={styles.headerDesription}
              dangerouslySetInnerHTML={{ __html: description }}
            />
          )}
        </header>
      </div>
      {hasVideo ? (
        <div className='hero__video'>
          <video autoPlay muted loop className={styles.video}>
            <source src={video.url} type='video/mp4' />
            Your browser does not support the video tag.
          </video>
        </div>
      ) : (
        <Image
          className={styles.image}
          src={image.formats?.small.url}
          alt='Hero Image'
          layout='fill'
        />
      )}
    </div>
  );
};
export default Hero;

const styles = {
  container: `hero relative flex items-center justify-center text-white overflow-hidden h-screen max-h-720`,
  content:
    'hero__content absolute z-10 w-full h-full bg-black bg-opacity-60 flex items-center justify-center',
  header: `hero__header p-6 container`,
  headerTitle: 'text-4xl xl:text-5xl pb-2',
  headerDesription: 'text-xl',
  video: `w-screen h-screen max-h-720 object-cover relative z-5`,
  image: `block xl:hidden object-cover w-full h-full`,
};
