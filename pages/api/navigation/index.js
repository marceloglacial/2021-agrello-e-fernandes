const data = {
  main: [
    {
      title: 'Missão',
      link: '/#missao',
    },
    {
      title: 'Áreas de Atuação',
      link: '/#servicos',
    },
    {
      title: 'Quem Somos',
      link: '/#quemsomos',
    },
    {
      title: 'Contato',
      link: '/#contato',
    },
  ],
  social: [
    {
      title: '(88) 8888.8888',
      link: 'tel: (88) 8888.8888',
    },
  ],
};

export default function handler(req, res) {
  res.status(200).json(data);
}
