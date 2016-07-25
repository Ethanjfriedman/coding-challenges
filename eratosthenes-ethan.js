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
  const primeSum = result.reduce((a,b) => a+b, 0);
  console.log(primeSum);
  return primeSum;
}

eratosthenes(2000000);
