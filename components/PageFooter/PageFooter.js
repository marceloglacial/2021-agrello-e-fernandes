import FooterQuickLinks from './FooterQuickLinks';
import FooterServices from './FooterServices';
import FooterVcard from './FooterVcard';

const PageFooter = (props) => {
  const styles = {
    footer: {
      container: 'footer w-screen section--dark',
      grid: 'xl:grid grid-cols-4 container px-6 xl:p-0 mx-auto',
      heading: 'bottom-decoration inline-block mb-4',
      list: 'list-none p-0',
      vcard: {
        logo: 'mb-4',
        iconsContainer: 'flex justify-center xl:justify-start gap-2 py-4',
        icon: 'stroke-current text-white cursor-pointer hover:text-yellow-400',
        iconSize: 32,
      },
      services: {
        container: 'py-12 lx:py-0 xl:px-24 col-span-2',
        column: 'xl:list-cols-2',
      },
    },
  };

  return (
    <footer className={styles.footer.container}>
      <div className={styles.footer.grid}>
        <FooterVcard styles={styles} />
        <FooterServices styles={styles} />
        <FooterQuickLinks styles={styles} />
      </div>
    </footer>
  );
};
export default PageFooter;
