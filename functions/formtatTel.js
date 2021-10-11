const formatTel = (tel) => {
  return tel
    .replaceAll('(', '')
    .replaceAll(')', '')
    .replaceAll('-', '')
    .replaceAll('.', '')
    .replaceAll(' ', '');
};
export default formatTel;
