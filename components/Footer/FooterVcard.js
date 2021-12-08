import formatTel from 'functions/formtatTel';
import {
  AiOutlineFacebook,
  AiOutlineLinkedin,
  AiOutlineInstagram,
} from 'react-icons/ai';

const icons = {
  linkedin: {
    title: 'Linkedin',
    link: 'https://linkedin.com',
    icon: '',
  },
};

const FooterVcard = (props) => {
  const { styles, siteInfo } = props;
  const {
    siteAdress,
    siteEmail,
    siteTel,
    siteFacebook,
    siteInstagram,
    siteLinkedin,
  } = siteInfo;

  return (
    <div className='vcard'>
      <div className={styles.footer.vcard.logo}>Logo</div>
      <div id='vcard' className='vcard'>
        {siteAdress && (
          <div className='adr'>
            <div className='street-address'>{siteAdress}</div>
          </div>
        )}
        {siteEmail && (
          <a className='email' href={`mailto:${siteEmail}`}>
            {siteEmail}
          </a>
        )}
        {siteTel && (
          <div className='tel'>
            <a href={`tel:${formatTel(siteTel)}`}>{siteTel}</a>
          </div>
        )}
      </div>
      <div className={styles.footer.vcard.iconsContainer}>
        {siteLinkedin && (
          <a href={siteLinkedin} title='Linkedin'>
            <AiOutlineLinkedin
              size={styles.footer.vcard.iconSize}
              className={styles.footer.vcard.icon}
            />
          </a>
        )}
        {siteFacebook && (
          <a href={siteFacebook} title='Facebook'>
            <AiOutlineFacebook
              size={styles.footer.vcard.iconSize}
              className={styles.footer.vcard.icon}
            />
          </a>
        )}
        {siteInstagram && (
          <a href={siteInstagram} title='Instagram'>
            <AiOutlineInstagram
              size={styles.footer.vcard.iconSize}
              className={styles.footer.vcard.icon}
            />
          </a>
        )}
      </div>
    </div>
  );
};
export default FooterVcard;
