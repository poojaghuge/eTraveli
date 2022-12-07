export const compare = (a, b) => {
  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }
  return 0;
};

export const sortArray = (data, order) => {
  return data.sort((a, b) => {
    if (order == "release_date") {
      return compare(new Date(a[order]), new Date(b[order]));
    }
    if (order == "episode_id") {
      return compare(a[order], b[order]);
    }
  });
};
