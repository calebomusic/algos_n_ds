// You have two numbers represented by a linked list, where each node contains a single digit.
// The digits are stored in reverse order, such that the one's digit is at the head of the list.
// write a function that adds the two numbers and returns the sum as a linked list.

const sumLists = (headA, headB) => {
  let [headA, headB] = configureLists(headA, headB);
  let carry = '';
  let sum = 0;

  while(headA) {
    let currentDigitsSum = headA.val + headB.val + carry;
    if (currentDigitsSum > 9) {
      sum = (currentDigitsSum % 10) + sum;
      carry = 1;
    } else {
      sum = currentDigitsSum + sum;
      carry = 0;
    }
  }

  return sum;
}

const configureLists = (headA, headB) => {
  let headALen = listLength(headA);
  let headBLen = listLength(headB);
  let [shorter, larger] = headALen < headBLen ? [headA, headB] : [headB, headA];
  let diff = Math.abs(headALen - headBLen);

  for (var i = 0; i < diff.length; i++) {
    shorter.append(new Node(0));
  }

  return [shorter, larger];
}
