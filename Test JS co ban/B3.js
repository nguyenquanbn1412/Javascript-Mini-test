function getCountElement(arr) {
  const count = {};
  arr.forEach((item) => {
    if (count[item]) {
      count[item]++;
    } else {
      count[item] = 1;
    }
  });
  return count;
}
