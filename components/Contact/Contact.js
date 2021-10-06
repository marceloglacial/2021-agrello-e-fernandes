const Contact = (props) => {
  const styles = {
    container: 'pt-24 pb-2 xl:py-48 min-h-360 relative overflow-hidden',
    grid: 'xl:grid xl:grid-cols-2 container p-6 xl:p-0 mx-auto',
    form: {
      container: 'xl:pr-12',
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
          <h2 className='bottom-decoration mb-8 p-0 inline-block text-yellow-400 font-bold'>
            Fale Conosco
          </h2>
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
              <label htmlFor='formName'>Nome Completo</label>
              <input id='formName' type='text' placeholder='Nome' required />
            </div>
            <div className={styles.form.group}>
              <label htmlFor='formEmail'>Seu E-mail</label>
              <input
                id='formEmail'
                type='email'
                placeholder='Seu e-mail'
                required
              />
            </div>
            <div className={styles.form.group}>
              <label htmlFor='formMessage'>Mesagem</label>
              <textarea id='formMessage' placeholder='Mensagem' required />
            </div>
            <div className={styles.form.group}>
              <input
                className={styles.form.button}
                type='submit'
                value='Enviar'
              />
            </div>
          </form>
        </div>
        <div className={styles.map.container}>
          <h2 className={styles.map.title}>Onde nos Encontrar</h2>
          <iframe
            className={styles.map.iframe}
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.3385543482077!2d-38.489932385240856!3d-3.7361985972817333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c7487e2bbae5db%3A0xa286e675e7c5bd07!2sAv.%20J%C3%BAlio%20Abreu%2C%20160%20-%20Meireles%2C%20Fortaleza%20-%20CE%2C%2060160-240%2C%20Brazil!5e0!3m2!1sen!2sca!4v1633542878700!5m2!1sen!2sca'
            loading='lazy'
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
