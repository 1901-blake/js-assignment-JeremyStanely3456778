/* 3. Reverse String
Define function: reverseStr(someStr)
Reverse and return the String. */
function reverseStr(someStr) {
  
  let splitString = someStr.split("");
  
  let reverseArray = splitString.reverse();
  
  let joinedArray = reverseArray.join("");
 
  return joinedArray;
}
