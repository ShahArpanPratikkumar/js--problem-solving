// let arr = [5, 2, 8, 1, 4];

// let sortedArr = arr.sort((a, b) => a - b);

// console.log(sortedArr); 


// let arr1 = [5, 2, 8, 1, 4];


// let sortedArr1 = arr1.sort((a, b) => a - b);

// console.log(sortedArr1); 



// let numbers = [5, 2, 9, 1, 4];
// let sortedArr = sortAscending(numbers);

// function sortAscending(arr) {
//   return arr.sort((a, b) => a - b);
// }

// console.log(sortedArr); 


// function checkSorted(arr){
//     for (let i = 0; i < arr.length - 1; i++){
//         if (arr[i] > arr[i + 1]) {
//         return false;
//         }
//     }
//       return true;
// }
// console.log(checkSorted([28,29,27]));


function checkSorted(arr){
for(let i=0;i<arr.length;i++){
if(arr[i]>arr[i+1]){
console.log("Array is not sorted ")
return;
}
}
console.log("Array is sorted"):

}

checkSorted([1,2,4,5,5,3,2])

