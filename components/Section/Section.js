const Section = (props) => {
  const { id, title, children, className, dark } = props;
  return (
    <section
      id={id || ''}
      className={`${dark && styles.dark} ${styles.section}`}
    >
      <div className={`${styles.container} ${className}`}>
        {title && <h2 className={styles.title}>{title}</h2>}
        {children}
      </div>
    </section>
  );
};
export default Section;

const styles = {
  section: 'py-28 px-6 xl:px-0 xl:py-32',
  title: `bottom-decoration mb-12 p-0 inline-block font-bold`,
  container: 'container mx-auto text-center xl:text-left',
  dark: `bg-black bg-opacity-90 text-white text-center xl:text-left`,
};
