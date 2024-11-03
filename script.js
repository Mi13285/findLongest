function findLongest(array) {
  return array.reduce((res, curr) =>
    String(res).length < String(curr).length ? curr : res
  );
}
console.log(findLongest[(1, 10, 100)]);
