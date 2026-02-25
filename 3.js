var arr = [2,33,44,55,66,77,88,99];
console.log(arr);
console.log(arr[0]);
console.log(arr[3]);

var sum = 0 ;

for(var i = 0; i<8; i++){
    // if(arr[i] %2 == 0)
    sum = sum+arr[i];


}
console.log("sum is : ", sum);

console.log(arr.length);

console.log(sum/arr.length);

var arr = [2, 33, 44, 55, 66, 77, 88, 99];
var largest = arr[0];
var second = 0;
var smallest = arr[0]; 

for (var i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
        largest = arr[i];
    }
}

for(var i = 0 ; i< arr.length; i++){
    if (arr[i]>second&& arr[i]<largest){
        second = arr[i];
    }
}

for (var i = 1; i<arr.length; i++){
    if(arr[i]< smallest){
        smallest = arr[i];
    }
}

// for(var i = arr.length-1;i>=0;i--){
//     console.log(arr[i])
// }

console.log("Largest number is:", largest);

console.log("second largest number is",second);

console.log("smallest number is ", smallest);


var numbers = [10, 25, 30, 5, 50, 18, 42];

var limit = 20;



for (var i = 0; i < numbers.length; i++) {
  if (numbers[i] > limit) {
    console.log(numbers[i]);
  }
}