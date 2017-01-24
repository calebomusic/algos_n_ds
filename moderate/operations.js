// Write a method to implement the multiply, subtract, and divide operations, for integers.
// The result of all these are integers. Use only the add operator.


const subtract = (a, b) => {
  b = negate(b);
  return a + b;
}

const multiply = (a, b) => {
  const [larger, smaller] = a > b ? [a, b] : [b, a];
  let sum = 0;

  for (var i = 0; i < Math.abs(smaller); i++) {
    sum  += larger;
  }

  if (larger < 0 && smaller < 0) {
    return negate(sum);
  } else if (smaller < 0 && larger > 0) {
    return negate(sum)
  } else {
    return sum;
  }
}

const divide = (a, b) => {
  let absA = Math.abs(a),
      absB = Math.abs(b);

  const [ larger, smaller ] = absA > absB ? [absA, absB] : [absB, absA];

  if(absA < absB) {
    return 0;
  } else if (b === 0) {
    new Error("Zero Division Error");
  }

  result = 1;
  inc = absB;

  while(absA >= (inc + absB)) {
    absB += inc;
    result ++;
  }

  if ((a < 0 && b < 0) || (a > 0 && b > 0)) {
    return result;
  } else {
    return negate(result);
  }
}


const negate = (a) => {
  let neg = 0,
      newSign = a < 0 ? 1 : -1,
      delta = newSign;

  while(a !== 0) {
    let differentSigns = (a + delta > 0) != a > 0;

    if (a + delta !== 0 && differentSigns) {
      delta = newSign;
    }
    neg += delta;
    a += delta;
    delta += delta;
  }

  return neg;
}
