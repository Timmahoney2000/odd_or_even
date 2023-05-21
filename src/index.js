/*
Given a list of integers, determine whether the sum of its elements is odd or even.

Give your answer as a string matching "odd" or "even".

If the input array is empty consider it as: [0] (array with a zero).
*/

function oddOrEven(array) {
  let arraySum = 0;
  for (let i = 0; i < array.length; i++) {
    arraySum = arraySum + array[i];
  }

  if (arraySum === 0) {
    return "even";
  } else if (arraySum % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
}
