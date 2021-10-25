const Section = (props) => {
  const { id, title, children, className, dark, page } = props;
  const styles = {
    section: `relative bg-white`,
    title: `bottom-decoration mb-12 p-0 inline-block font-bold`,
    container: `container mx-auto px-6 xl:px-0 ${
      page ? `pt-8 pb-16` : `pt-32 pb-8 xl:pb-32 text-center xl:text-left`
    }`,
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
