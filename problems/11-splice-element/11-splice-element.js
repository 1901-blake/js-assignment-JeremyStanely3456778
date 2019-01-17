/* 11. Splice Element
Define function spliceElement(someArr, index)
Splice the element at the provided index in the array.
*/
// remove the third element and add 1.
function spliceElement(someArr, index, add) {
  someArr.splice(index, choice, add);
}

let array = [1, 2, 3,];
let choice = 1;
spliceElement(array, 2, 1)
console.log(array);
