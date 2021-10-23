const formatTel = (tel) => {
  return tel
    .split('(')
    .join('')
    .split(')')
    .join('')
    .split('-')
    .join('')
    .split('.')
    .join('')
    .split(' ')
    .join('');
};
export default formatTel;
