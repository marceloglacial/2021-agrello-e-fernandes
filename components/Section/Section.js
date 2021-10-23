const Section = (props) => {
  const { id, title, children, className, dark, page } = props;
  const styles = {
    section: `${
      !page ? `py-32` : `py-8`
    } xl:py-28 px-6 xl:px-0 xl:py-32 relative bg-white`,
    title: `bottom-decoration mb-12 p-0 inline-block font-bold`,
    container: `container mx-auto ${!page && `text-center xl:text-left`}`,
    dark: `bg-transparent text-white text-center xl:text-left`,
  };

  return (
    <>
      {page && <div className='p-11 xl:p-12 bg-black bg-opacity-90' />}
      <section
        id={id || ''}
        className={`${dark && styles.dark} ${styles.section}`}
      >
        <div className={`${styles.container} ${className}`}>
          {title && <h2 className={styles.title}>{title}</h2>}
          {children}
        </div>
      </section>
    </>
  );
};
export default Section;
