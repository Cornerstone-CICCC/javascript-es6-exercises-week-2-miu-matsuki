/*
In this exercise, we will be given an array of 2 or more numbers. 
We will then have to find the two largest numbers in that array, and sum them together.

Instruction
Create a function named sumLargestNumbers that will receive an array of numbers and return the sum of the two largest numbers in that array.
*/

// const sumLargestNumbers = function (data) {
//   // Put your solution here
// };



const sumLargestNumbers = function (data) {

  let max1 = Math.max(...data);
  let max2 = Math.max(...data.filter((num)=> num !== max1))  //not max1 Math.max(...[1, 2]) =>...（点々3つ）をつけると、配列の殻をピキッと割って Math.max(1, 2) にしてくれるから読める！

  return max1 + max2;
};

console.log(sumLargestNumbers([1, 10])); // 11
console.log(sumLargestNumbers([1, 2, 3])); // 5
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2])); // 126

module.exports = sumLargestNumbers;