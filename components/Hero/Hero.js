const Hero = (props) => {
  const { title, description, buttons, video } = props;

  return (
    <div
      className={`hero relative flex items-center justify-center text-white overflow-hidden min-h-50`}
    >
      <div className='hero__content absolute w-full h-full bg-black bg-opacity-60 flex items-center justify-center'>
        <header className='hero__header p-6 container'>
          {title && <h1 className='pb-2'>{title}</h1>}
          {description && <p className='text-xl'>{description}</p>}
        </header>
      </div>
      {video && (
        <div className='hero__video'>
          <video
            autoPlay
            muted
            loop
            className='w-screen h-screen max-h-720 object-cover'
          >
            <source src={video} type='video/mp4' />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
    </div>
  );
};
export default Hero;
