const Section = (props) => {
  const { id = '', children, title } = props;
  return (
    <section id={id} className='services container mx-auto h-screen pt-32'>
      {title && <h2>{title}</h2>}
      {children}
    </section>
  );
};

export default Section;
