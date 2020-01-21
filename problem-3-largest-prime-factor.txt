function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

function getFactors(n) {
  let factorsArr = [];
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      factorsArr.push(i);
    }
  }
  return factorsArr;
}

function largestPrimeFactor(number) {
  let factors = getFactors(number);
  factors = factors.filter(item => isPrime(item));
  return factors[factors.length - 1];
}

largestPrimeFactor(13195);
