/*To do ---
The requirement for this assignment is to create a new array that takes in two other arrays as elements. The new array provides a merged and sorted form of the other two arrays */

const arr1 = [1, 2, 4, 5, 10, 6, 3];
const arr2 = [0, 8, 19, 90, 11, 16, 13];

function mergedArray(arr1, arr2){
    let arr3= [...arr1, ...arr2];
    return arr3.sort((a,b) => a - b);
}

console.log(mergedArray(arr1, arr2));
