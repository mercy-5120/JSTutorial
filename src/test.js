///15.Write a function that takes an array and a number, and returns true if the number is found at an even index.
function isAtEvenIndex(arr, num) {
  for (let index = 0; index < arr.length; index++) {// index is 0, and until it reaches the length of the array, the index increments by 1 each time it loops
    if (index % 2 === 0 && arr[index] === num) { // checks if index is even and if the element at the index matches the number that is being input
      return true;// if both conditions are met, it returns true
    }
}
          return false;// if not and the checks are done, it returns false
  
}

console.log(isAtEvenIndex([10, 20, 40, 60, 100], 20));
console.log(isAtEvenIndex([5, 15, 20, 80, 110], 5));
console.log(isAtEvenIndex([-3, 7.5, 0, 12, -8.2], -8.2));
console.log(isAtEvenIndex([14, 27, 35, 42, 58], 42));
console.log(isAtEvenIndex([5, 10, 15, 20, 25], 25));

/*
//18.Write a function that takes an array and returns true if the array is sorted in ascending order.
function isSortedAscending(arr) {
    // An empty array or single-element array is considered sorted
    for (let i = 0; i < arr.length - 1; i++) {
        // If any element is greater than the next element, array is not sorted
        if (arr[i] > arr[i + 1]) {
            return false;
        }
    }
    return true;
}
console.log( isSortedAscending([1, 2, 3, 4, 5]));  
console.log( isSortedAscending([1, 3, 2, 4, 5]));  
console.log( isSortedAscending([5,2]));                         
console.log( isSortedAscending([]));                          
console.log( isSortedAscending([1, 2, 2, 3, 4]));

//Write a function that returns the index of the first negative number in an array, or -1 if there are none.
const randomArray = [1, 5, -2, 3, -4, 8]
function checkIndexOfNegativeNumber(arrNums){
  for(let index =  0; index < arrNums.length; index++){ //index is 0, and until it reaches the length of the array, the index increments by 1 each time it loops
    if(arrNums[index]<0){//if the number at the array index is  less than zero return its index
      return index;// terminates function when first index is found
    }
  }
  return -1;// if no negative number is found, return -1
}

console.log(checkIndexOfNegativeNumber(randomArray)); */


//17.Write a function that returns the sum of numbers at even indexes in an array.
function sumEvenIndexes(arr) {
  let sum = 0;
  
  // Loop through the array
  for (let i = 0; i < arr.length; i++) {
    // Check if the current index is even
    if (i % 2 === 0) {
      // Add the value at this even index to the sum
      sum += arr[i];
    }
  }
  
  // Return the final sum
  return sum;
}

//1. Write a function that takes an array of numbers and returns the sum of all the numbers.
function sumArray(numbers) {
  let total = 0;
  
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  
  return total;
}
