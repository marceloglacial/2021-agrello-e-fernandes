import formatTel from 'functions/formtatTel';
import Image from 'next/image';
import {
  AiOutlineFacebook,
  AiOutlineLinkedin,
  AiOutlineInstagram,
} from 'react-icons/ai';

const FooterVcard = (props) => {
  const { styles, siteInfo } = props;
  const {
    siteAdress,
    siteEmail,
    siteTel,
    siteFacebook,
    siteInstagram,
    siteLinkedin,
    siteLogo,
  } = siteInfo;

  return (
    <div className='vcard'>
      {siteLogo?.url && (
        <div className={styles.footer.vcard.logo}>
          <Image
            src={siteLogo.url}
            width={211}
            height={60}
            alt={'site logo'}
            className={styles.logo}
          />
        </div>
      )}

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
