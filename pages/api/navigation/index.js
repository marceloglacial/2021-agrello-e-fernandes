const data = {
  main: [
    {
      id: 1,
      title: 'Missão',
      link: '/missao',
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
      title: '(85) 3035.8116',
      link: 'tel:+558530358116',
      type: 'tel',
    },
  ],
};

export default function handler(req, res) {
  res.status(200).json(data);
}
