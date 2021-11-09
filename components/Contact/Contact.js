import { useState } from 'react';
import Section from 'components/Section/Section';

const Contact = (props) => {
  const {
    active,
    title,
    formName,
    formEmail,
    formMessage,
    formButton,
    mapAddress,
  } = props;

  const [contact, setContact] = useState({
    name: '',
    email: '',
    subject: 'Agrello & Fernandes - Fale Conosco',
    honeypot: '',
    message: '',
    replyTo: 'everton@gmail.com',
    accessKey: process.env.NEXT_PUBLIC_FORM_KEY,
  });

  const [response, setResponse] = useState({
    type: '',
    message: '',
  });

  const handleChange = (e) =>
    setContact({ ...contact, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('https://api.staticforms.xyz/submit', {
        method: 'POST',
        body: JSON.stringify(contact),
        headers: { 'Content-Type': 'application/json' },
      });

      const json = await res.json();

      if (json.success) {
        setResponse({
          type: 'success',
          message:
            'Sua mensagem foi enviada com sucesso. Obrigado pelo contato!',
        });
      } else {
        setResponse({
          type: 'error',
          message:
            'Ocorreu um erro no envio do formulário. Favor tentar mais tarde.',
        });
      }
    } catch (e) {
      console.log('An error occurred', e);
      setResponse({
        type: 'error',
        message:
          'Ocorreu um erro no envio do formulário. Favor tentar mais tarde.',
      });
    }
  };

  if (!active) return '';

  return (
    <Section id='contato' title={title}>
      <div className={styles.grid}>
        <div className={styles.form.container}>
          {response.type === 'success' && (
            <p className='pb-72'>{response.message}</p>
          )}
          {response.type === 'error' && (
            <p className='text-red-700 pb-8'>{response.message}</p>
          )}

          {!response.type && (
            <form
              action='https://api.staticforms.xyz/submit'
              method='post'
              onSubmit={handleSubmit}
            >
              <input type='text' name='honeypot' className='hidden' />
              <input type='hidden' name='replyTo' value='@' />
              <div className={styles.form.group}>
                <label htmlFor='formName'>{formName}</label>
                <input
                  id='formName'
                  type='text'
                  placeholder={formName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.form.group}>
                <label htmlFor='formEmail'>{formEmail}</label>
                <input
                  id='formEmail'
                  type='email'
                  onChange={handleChange}
                  placeholder={formEmail}
                  required
                />
              </div>
              <div className={styles.form.group}>
                <label htmlFor='formMessage'>{formMessage}</label>
                <textarea
                  id='formMessage'
                  placeholder={formMessage}
                  onChange={handleChange}
                  required
                />
              </div>
              <input
                type='text'
                name='honeypot'
                className='hidden'
                onChange={handleChange}
              />
              <input type='hidden' name='subject' onChange={handleChange} />
              <div className={styles.form.group}>
                <input
                  className={styles.form.button}
                  type='submit'
                  value={formButton}
                />
              </div>
            </form>
          )}
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
    </Section>
  );
};
export default Contact;

const styles = {
  grid: 'xl:grid xl:grid-cols-2 container mx-auto',
  form: {
    container: 'xl:pr-12 text-center xl:text-left',
    group: 'flex flex-col gap-2 mb-6',
    button:
      'bg-yellow-400 text-white  xl:max-w-xs hover:bg-white hover:text-black cursor-pointer transition-colors',
  },
  map: {
    container: '',
    title: `hidden`,
    iframe: `h-full w-full min-h-360 xl:w-1/2 xl:absolute top-0`,
  },
};
