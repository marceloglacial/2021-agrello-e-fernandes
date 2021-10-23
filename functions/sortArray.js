const sortArray = (arrayToSort) => {
  return arrayToSort.sort((a, b) => {
    const titleA = a.title;
    const titleB = b.title;

    if (titleA) {
      if (titleA < titleB) {
        return -1;
      }
      if (titleA > titleB) {
        return 1;
      }
      return 0;
    }
  });
};
export default sortArray;
