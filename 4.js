function palindromeChecker(word) {
  const wordArr = word.split('');
  let firstLetter = 0;
  let lastLetter = word.length - 1;
  let isPalindrome = true;

  wordArr.forEach(item => {
    if (wordArr[firstLetter] !== wordArr[lastLetter]) {
      isPalindrome = false;
    }
    firstLetter++;
    lastLetter--;
  });
  return isPalindrome;
}

function largestPalindromeProduct(n) {
  const lowNumber = Math.pow(10, n - 1);
  const highNumber = Math.pow(10, n) - 1;
  let largestPalindrome = null;
  for (let i = highNumber; i >= lowNumber; i--) {
    for (let j = highNumber; j >= lowNumber; j--) {
      let sum = (i * j).toString();
      if (palindromeChecker(sum)) {
        if (i * j > largestPalindrome) {
          largestPalindrome = i * j;
        }
      }
    }
  }
  return largestPalindrome;
}

largestPalindromeProduct(3);
// palindromeChecker('')

/*A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
  
  Find the largest palindrome made from the product of two n-digit numbers.
  
  largestPalindromeProduct(2) should return 9009.
  largestPalindromeProduct(3) should return 906609. */
