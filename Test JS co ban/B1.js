function getStringHasMaxLength(arr) {
  let maxLength = Math.max(...arr.map((s) => s.length));
  return arr.filter((s) => s.length === maxLength);
}
