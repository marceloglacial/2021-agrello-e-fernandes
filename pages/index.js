import Contact from 'components/Contact/Contact';
import Hero from 'components/Hero/Hero';

export default function Home() {
  const heroProps = {
    title: 'Dedicação, compromisso e ética',
    description: 'Conheça mais sobre os nossos valores',
    video:
      // 'https://res.cloudinary.com/dw2wjwhuv/video/upload/v1633469810/agrelloefernandes/pexels-ekaterina-bolovtsova-6101151_jkuyq0.mp4',
      // 'https://res.cloudinary.com/dw2wjwhuv/video/upload/v1633469809/agrelloefernandes/pexels-pavel-danilyuk-8061570_wxlmyz.mp4',
      'https://res.cloudinary.com/dw2wjwhuv/video/upload/v1633469809/agrelloefernandes/pexels-pavel-danilyuk-8061667_gmkut6.mp4',
  };
  return (
    <>
      <Hero {...heroProps} />
      <Contact />
    </>
  );
}
