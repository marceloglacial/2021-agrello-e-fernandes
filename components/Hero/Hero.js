const Hero = (props) => {
  const { title, description, buttons, background } = props;

  return (
    <div
      className={`hero flex items-center justify-center bg-gray-900 bg-cover bg-fixed bg-center bg-top bg-blend-overlay text-white h-screen`}
      style={
        background && {
          backgroundImage: `url(${background})`,
        }
      }
    >
      <div className='hero__content container'>
        {title && <h1>{title}</h1>}
        {description && <p>{description}</p>}
      </div>
    </div>
  );
};
export default Hero;
