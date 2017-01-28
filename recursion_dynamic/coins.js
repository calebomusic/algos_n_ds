// Given an infinite number of quarters, dimes, nickels, and pennies,
// write code to calculate the number of ways of representing n cents.

/*
  Are 1, 10 the same representation as 10, 1 for 11. Assume yes.

  Recursively calculate the combinations, by iterating through each coin,
  calculating the remainder and making a recursive call if the remainder is
  greater than 0. Pass in the new remainder, current coin combination,
  coins (slicing from the current coin), results.
*/

function change(n, coins = [25, 10, 5, 1]) {
  let total = 0;

  if (n === 0) {
    return 1;
  }

  for (var i = 0; i < coins.length; i++) {
    let coin = coins[i],
        rem = n - coin;
    if (rem >= 0) {
      total += change(rem, coins.slice(i));
    }
  }

  return total;
}
