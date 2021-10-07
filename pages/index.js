import Contact from 'components/Contact/Contact';
import Hero from 'components/Hero/Hero';

export default function Home() {
  const heroProps = {
    title: 'Dedicação, compromisso e ética',
    description: 'Conheça mais sobre os nossos valores',
    video: {
      poster:
        'https://res.cloudinary.com/dw2wjwhuv/video/upload/ac_none,c_scale,w_609/v1633469809/agrelloefernandes/pexels-pavel-danilyuk-8061667_gmkut6.gif',
      source:
        'https://res.cloudinary.com/dw2wjwhuv/video/upload/v1633469809/agrelloefernandes/pexels-pavel-danilyuk-8061667_gmkut6.mp4',
    },
  };
  return (
    <>
      <Hero {...heroProps} />
      <Contact />
    </>
  );
}
