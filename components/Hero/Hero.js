const Hero = (props) => {
  const { title, description, buttons } = props;
  return (
    <div className='hero'>
      {title && <h1>{title}</h1>}
      {description && <p>{description}</p>}
    </div>
  );
};
export default Hero;
