import Hero from 'components/Hero/Hero';
import Layout from 'components/Layout/Layout';
import Services from 'components/Services/Services';

export default function Home() {
  const siteProps = {
    title: 'Agrello & Fernandes',
    description: 'Advocacia e Consultoria Jurídica',
    video:
      'https://res.cloudinary.com/dw2wjwhuv/video/upload/v1633469810/agrelloefernandes/pexels-ekaterina-bolovtsova-6101151_jkuyq0.mp4',
    // 'https://res.cloudinary.com/dw2wjwhuv/video/upload/v1633469809/agrelloefernandes/pexels-pavel-danilyuk-8061570_wxlmyz.mp4'
    // 'https://res.cloudinary.com/dw2wjwhuv/video/upload/v1633469809/agrelloefernandes/pexels-pavel-danilyuk-8061667_gmkut6.mp4'
  };
  return (
    <Layout>
      <Hero {...siteProps} />
    </Layout>
  );
}
