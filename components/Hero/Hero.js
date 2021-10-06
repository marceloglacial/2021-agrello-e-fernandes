const Hero = (props) => {
  const { title, description, buttons, video } = props;

  return (
    <div
      className={`hero relative flex items-center justify-center text-white overflow-hidden min-h-50`}
    >
      <div className='hero__content absolute w-full h-full bg-black bg-opacity-60 flex items-center justify-center'>
        <header className='hero__header container z-10'>
          {title && <h1>{title}</h1>}
          {description && <p>{description}</p>}
        </header>
      </div>
      {video && (
        <div className='hero__video'>
          <video autoPlay muted loop className='w-screen max-h-screen'>
            <source src={video} type='video/mp4' />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
    </div>
  );
};
export default Hero;
