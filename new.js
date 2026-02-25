// var add1 = ()=>{
//     console.log("arrow function called");
//     let number=1234;
//     return number;
// }

// add1();
// console.log(add1());

// var add2 = ()=>{
//     console.log("arrow function ");
//     let number=4321;
//     return number;
// }

// add1();
// console.log(add2());

// function add(a,b ){
//     console.log(a+b);
//     return ()=>{
//         console.log(a+b);
//     }
// }
// var sub = add(10,20); 
// console.log(add(10,20));

var arr = [2,33,44,55,66,77,88,99];
console.log(arr);
console.log(arr[0]);
console.log(arr[3]);

var sum = 0 ;

for(var i = 0; i<5; i++){
    if(arr[i] %2 == 0)
    sum = sum+arr[i];
}
console.log("sum is : ", sum);

console.log(arr.length);