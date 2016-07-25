/*
Smallest multiple
Problem 5
2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
*/
'use strict';
function smallestMult(n) {
  const divisors = [20,19,18,17,16,15,14,13,12,11,7];  //FIXME
  const primeMult = eratosthenes(n);
  // console.log(primeMult);
  var result;
  var counter = 0;
  var j = primeMult;
  while (!result) {
    // console.log(j);
    var test = true;
    for (let i = 0; i < divisors.length; i++) {
      if (test && j % divisors[i] !== 0) {
        test = false;
      }
      counter++;
    }
    if (test) {
      result = j;
    } else {
      j += primeMult;
    }
  }
  console.log(result);
  console.log(counter);
  return result;
}

smallestMult(20);

"use strict";
function eratosthenes(n) {
  const primes = [false,false];
  for (let i = 2; i <= n; i++) {
    if (i % 2 === 0 && i > 2) {
      primes.push(false)
    } else {
      primes.push(true);
    }
  }

  for (let i = 3; i <= n; i += 2) {
    if (primes[i]) {
      for (let j = 3 * i; j < n; j += 2 * i) {
        if (primes[j]) {
          primes[j] = false;
        }
      }
    }
  }

  const result = primes.map((v,i) => {return v ? i : null}).filter((v) => v);
  // console.log(result);
  const primemult = result.reduce((a,b) => a*b, 1);
  console.log(primemult);
  return primemult;
}
