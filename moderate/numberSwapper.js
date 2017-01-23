// Implement a function that swaps a number in place (without temporary variables)



// Swap two numbers, A and B, through subtracting B by A and storing that in b.
// Then set A to A + B. Then subtract A by B and set that equal to b. Walk through an example with this.

const numberSwapper = (a, b) => {
  b = b - a;
  a = a + b;
  b = a - b;
  return [a, b];
}
