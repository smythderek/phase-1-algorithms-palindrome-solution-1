function reverseWord(word) {
  return word.split("").reverse().join("");
}
function isPalindrome(word) {
  const reversedArgument = reverseWord(word);
  return reversedArgument === word;
}

/* 
  Add your pseudocode here
    We'll be invoking the function with an argument of a lower-case string (single word)
    To evaluate if it's a palindrome, we need to look at each letter of the string
    WAIT -- might there be a method to reverse the letters of a string? Then you could compare that with the original, as a straight comp
    Step 1: split the argument string into an array by using .split("")
    Step 2: use the .reverse() method to reverse the order of elements in the array
    Step 3: now that all the elements (letters of the argument) are in reverse order, use .join("") to make a single word again
    Step 4: if (argument string === new string), return true; if else return false
*/

/*
  Add written explanation of your solution here
    The passed-in string is split into an array, with each letter as an element.
    Then that array is reversed, so all letters of the passed-in string are now in reverse order.
    Then that reversed array is joined together so all the now-reversed letters form a new string.
    This new string will be the reverse of the passed-in string.
    Check if the new string is equal to the passed-in string. If so, return true. If not, return false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
