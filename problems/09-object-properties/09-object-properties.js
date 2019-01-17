/* 9. Object Properties
Define function objectProperties(someObj)
Print every property and it's value. */
function objectProperties(someObj) {
  for (let item in someObj) {
    console.log(`${item}:\t${someObj[item]}`);
  }
}
