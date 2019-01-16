/* 7. Palindrome
Define function isPalindrome(someStr)
Return true if someStr is a palindrome, otherwise return false */
function isPalindrome(someStr) {
 
 let splitString = someStr.split("");
  
 let reverseArray = splitString.reverse();
  
 let joinedArray = reverseArray.join("");


  if(someStr === joinedArray){
    return true
  }
  else {
    return false
  }
  
  
}
//test code
let variable = 'tut';
 
let test = isPalindrome(variable);

console.log(test);
