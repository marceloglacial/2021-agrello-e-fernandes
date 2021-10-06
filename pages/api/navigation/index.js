const data = {
  main: [
    {
      id: 1,
      title: 'Missão',
      link: '/#missao',
    },
    {
      id: 2,
      title: 'Áreas de Atuação',
      link: '/#servicos',
    },
    {
      id: 3,
      title: 'Quem Somos',
      link: '/#quemsomos',
    },
    {
      id: 4,
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
