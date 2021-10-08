import Logo from 'components/PageHeader/Logo';
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
  const { styles } = props;
  return (
    <div className='vcard'>
      <div className={styles.footer.vcard.logo}>
        <Logo />
      </div>
      <div id='vcard' className='vcard'>
        <a className='email' href='mailto:contato@agrelloefernandes.com.br'>
          contato@agrelloefernandes.com.br
        </a>
        <div className='adr'>
          <div className='street-address'>
            Av. Julio Abreu, n°160, Sala 705, 7° Andar
          </div>
          <span className='locality'>Fortaleza</span>,
          <span className='region'> CE</span>,
          <span className='postal-code'> 60.160</span>
          <span className='country-name'> Brazil</span>
        </div>
        <div className='tel'>
          <a href='tel:+558530358116'>(85) 3035.8116</a>
        </div>
      </div>
      <div className={styles.footer.vcard.iconsContainer}>
        <a href='#' title='Linkedin'>
          <AiOutlineLinkedin
            size={styles.footer.vcard.iconSize}
            className={styles.footer.vcard.icon}
          />
        </a>
        <a href='#' title='Facebook'>
          <AiOutlineFacebook
            size={styles.footer.vcard.iconSize}
            className={styles.footer.vcard.icon}
          />
        </a>
        <a href='#' title='Instagram'>
          <AiOutlineInstagram
            size={styles.footer.vcard.iconSize}
            className={styles.footer.vcard.icon}
          />
        </a>
      </div>
    </div>
  );
};
export default FooterVcard;
