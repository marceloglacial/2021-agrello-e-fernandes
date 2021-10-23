const data = [
  {
    id: 1,
    name: 'Adriano Pascarelli Agrello',
    license: 'OAB/CE 12.792',
    tel: '(85) 99661.7999',
    avatar: {
      alt: '',
      src: 'https://res.cloudinary.com/dw2wjwhuv/image/upload/v1633723638/agrelloefernandes/hunters-race-MYbhN8KaaEc-unsplash_pj8eh9.jpg',
    },
  },
  {
    id: 2,
    name: 'Carlos Everton Fernandes de Oliveira',
    license: 'OAB/CE 12.792',
    tel: ' (85) 98930.0506',
    avatar: {
      alt: '',
      src: 'https://res.cloudinary.com/dw2wjwhuv/image/upload/v1633723634/agrelloefernandes/ruthson-zimmerman-Ws4wd-vJ9M0-unsplash_gm30al.jpg',
    },
  },
];

export default function handler(req, res) {
  res.status(200).json(data);
}
