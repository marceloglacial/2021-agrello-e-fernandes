import FooterQuickLinks from './FooterQuickLinks';
import FooterServices from './FooterServices';
import FooterVcard from './FooterVcard';

const Footer = (props) => {
  const { siteInfo, servicesData, siteMenu } = props;
  return (
    <footer className={styles.footer.container}>
      <div className={styles.footer.grid}>
        <FooterVcard styles={styles} siteInfo={siteInfo} />
        <FooterServices styles={styles} data={servicesData} />
        <FooterQuickLinks styles={styles} data={siteMenu} />
      </div>
    </footer>
  );
};
export default Footer;

const styles = {
  footer: {
    container:
      'footer w-screen bg-black bg-opacity-90 text-white text-center xl:text-left py-16',
    grid: 'xl:grid grid-cols-4 container px-6 xl:p-0 mx-auto',
    heading: 'bottom-decoration inline-block mb-4',
    list: 'list-none p-0',
    link: 'text-white relative',
    vcard: {
      logo: 'mb-4',
      iconsContainer: 'flex justify-center xl:justify-start gap-2 py-4',
      icon: 'stroke-current text-white cursor-pointer hover:text-yellow-400',
      iconSize: 32,
    },
    services: {
      container: 'py-12 xl:py-0 xl:px-24 col-span-2',
      column: 'xl:list-cols-2',
    },
  },
};
