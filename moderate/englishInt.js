// Given any integer, print an English phrase that descriebs the integer (One Thousand, Two Hundred Thirty Four)

/*
  Negative integers? Include commas, capitalization matter? Include 'and'?

  Create constants which store english words. Ones, Teens, Tens, Magnitudes. Handle larger numbers with recursion.

  Mod result appropraitely to find correct word.
*/

ONES = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine']
TEENS = [ 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen','Eighteen', 'Nineteen']
TENS = ['Ten', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety']
MAGNITUDES = { 100: 'Hundred', 1000: 'Thousand', 1000000: 'Million', 1000000000: 'Billion' }

const englishInt = (int) => {
  if (int < 0) {
    return "Negative " + englishInt(int * -1);
  } else if (int === 0) {
    return 'Zero';
  }

  if (int < 10) {
    return ONES[int];
  } else if (int < 20) {
    return TEENS[(int % 10) - 1];
  } else if (int < 100) {
    const tens = Math.floor(int / 10) - 1,
          ones = int % 10;
    let englishOnes = '';

    if (ones !== 0) {
      englishOnes = ' ' + englishInt(ones);
    }

    return TENS[tens] + englishOnes;
  } else {
    let mag = magnitude(int);
    let englishMagnitude = MAGNITUDES[mag],
        rem = int % mag,
        magAmount = Math.floor(int / mag),
        englishRem = '';

    if (rem !== 0) {
      englishRem = ' ' + englishInt(rem);
    }

    return englishInt(magAmount) + ' ' + MAGNITUDES[mag] + englishRem;
  }
}

const magnitude = int => {
  const mags = Object.keys(MAGNITUDES);

  for (var i = 1; i < mags.length; i++) {
    if(mags[i] > int) {
      return mags[i-1];
    }
  }

  return mags[i-1];
}
