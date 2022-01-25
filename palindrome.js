const str = "madam";

function isPalindrome(str1) {
  let j = str1.length - 1;
  let isPalindrome = true;
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] === " ") i++;
    if (str1[j] === " ") j--;
    if (str1[i].toLowerCase() !== str1[j].toLowerCase()) {
      isPalindrome = false;
      break;
    }
    j--;
  }
  return isPalindrome;
}

console.log(isPalindrome(str));
