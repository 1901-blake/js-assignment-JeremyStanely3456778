/* 2. Bubble Sort
Define function: bubbleSort(numArray)
Use the bubble sort algorithm to sort the array.
Return the sorted array. */

function swap(numArray, i, j) {
  let temp = numArray[i];
  numArray[i] = numArray[j];
  numArray[j] = temp;
}

function bubbleSort(numArray) {
  let swappedVar = false;
  do {
  for (let i = 0; i < numArray.length; i++){
    if (numArray[i] && numArray[i + 1] && numArray[i] > numArray[i + 1]){
      swap(numArray, i, i + 1);
      swappedVar = true;
    }
  }
  } while(swappedVar)
  return numArray;
}
