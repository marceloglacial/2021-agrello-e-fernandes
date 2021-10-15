const Contact = (props) => {
  const { title, formName, formEmail, formMessage, formButton, mapAddress } =
    props;
  const styles = {
    container: 'pt-24 pb-2 xl:py-48 relative overflow-hidden',
    grid: 'xl:grid xl:grid-cols-2 container p-6 xl:p-0 mx-auto',
    form: {
      container: 'xl:pr-12 text-center xl:text-left',
      group: 'flex flex-col gap-2 mb-6',
      button: 'bg-yellow-400 text-white  xl:max-w-xs',
    },
    map: {
      container: '',
      title: `hidden`,
      iframe: `h-full w-full min-h-360 xl:w-1/2 xl:absolute top-0`,
    },
  };

  return (
    <section id='contato' className={styles.container}>
      <div className={styles.grid}>
        <div className={styles.form.container}>
          <h2 className='page-heading'>{title}</h2>
          <form action='https://api.staticforms.xyz/submit' method='post'>
            <input type='text' name='honeypot' className='hidden' />
            <input
              type='hidden'
              name='accessKey'
              value='aaaaaaaa-bbbb-cccc-dddd-eeee6666kkkk'
            />
            <input
              type='hidden'
              name='subject'
              value='Agrello e Fernandes - Fale Conosco'
            />
            <input type='hidden' name='replyTo' value='@' />
            <div className={styles.form.group}>
              <label htmlFor='formName'>{formName}</label>
              <input
                id='formName'
                type='text'
                placeholder={formName}
                required
              />
            </div>
            <div className={styles.form.group}>
              <label htmlFor='formEmail'>{formEmail}</label>
              <input
                id='formEmail'
                type='email'
                placeholder={formEmail}
                required
              />
            </div>
            <div className={styles.form.group}>
              <label htmlFor='formMessage'>{formMessage}</label>
              <textarea id='formMessage' placeholder={formMessage} required />
            </div>
            <div className={styles.form.group}>
              <input
                className={styles.form.button}
                type='submit'
                value={formButton}
              />
            </div>
          </form>
        </div>
        <div className={styles.map.container}>
          <h2 className={styles.map.title}>Onde nos Encontrar</h2>
          <iframe
            title='Onde nos Encontrar'
            className={styles.map.iframe}
            src={`https://maps.google.com/maps?q=${mapAddress}&output=embed`}
            loading='lazy'
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
