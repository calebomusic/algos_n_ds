const recursiveMultiply = (a, b) => {
  let [larger, smaller] = a > b ? [ a, b ] : [ b, a ];

  return recursiveMuliplicationHelper(larger, smaller, {});
}

const recursiveMuliplicationHelper = (larger, smaller) => {
  if (smaller === 0) {
    return 0;
  }

  let halfSmaller = smaller >> 1;

  half = recursiveMuliplicationHelper(larger, halfSmaller);

  if (smaller % 2 === 0) {
    return half + half;
  } else {
    return half + half + larger;
  }
}
