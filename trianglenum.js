"use strict";
// project euler 12

function makeTriangleNum(n) {
  return (n * (n+1)) / 2;
}

function countDivisors(n) {
  let numDivs = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      numDivs++;
    }
  }
  console.log(numDivs);
  return numDivs;
}

function triangleDivs(n, pivot, top, bottom) {
  pivot = pivot || n*n;
  top = top || pivot;
  bottom = bottom || pivot;

  let result = null;
  while (!result) {
    let num = makeTriangleNum(pivot);
    if (countDivisors(num) > n) {
      result = num;
    } else {
      count++;
    }
  }
  console.log(result);
  return result;
}

triangleDivs(500);
