/**
 * Finds absolute middle of an array and returns the middle -1
 * @todo add test to support results
 * @param a Array of numbers
 */
function absoluteValuesSumMinimization(a: number[]): number {
  const isEven = a.length % 2 === 0; // even / odd

  // isEven then find the index that is half -1 of middle
  // isOdd find the absolute middle index
  return isEven ? a[a.length / 2 - 1] : a[Math.floor(a.length / 2)];
}

console.log(absoluteValuesSumMinimization([2, 4, 7]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6, 8]));
