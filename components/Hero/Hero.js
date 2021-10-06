const Hero = (props) => {
  const { title, description, buttons, video } = props;
  const styles = {
    container: `hero relative flex items-center justify-center text-white overflow-hidden min-h-50`,
    content:
      'hero__content absolute w-full h-full bg-black bg-opacity-60 flex items-center justify-center',
    header: `hero__header p-6 container`,
    video: `w-screen h-screen max-h-720 object-cover`,
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <header className={styles.header}>
          {title && <h1 className='pb-2'>{title}</h1>}
          {description && <p className='text-xl'>{description}</p>}
        </header>
      </div>
      {video && (
        <div className='hero__video'>
          <video autoPlay muted loop className={styles.video}>
            <source src={video} type='video/mp4' />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
    </div>
  );
};
export default Hero;
