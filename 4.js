var arr = [2,34,21,45,35,92,39];
var sum = 0 ;

for(var i = 0; i<8; i++){
    if(arr[i] %2 == 0)
    sum = sum+arr[i];
}
console.log("sum is even: ", sum);

var arr = [2,34,21,45,35,92,39];
var sum = 0 ;

for(var i = 0; i<8; i++){
    if(arr[i] %2 != 0)
        console.log(sum/arr.length);

    }


console.log(sum/arr.length);

var arr = [2,34,21,45,53,92,39];

var obj = {
    id :  9,
    name :  "arpan",
    number :  1234567890,
    marks : arr,
    bday: {
        day : 23,
        month:11,
        year:2007
    }
};

// console.log(obj.marks[5]);
// console.log(obj.id);
// console.log(obj);
console.log(obj.bday.day+"/"+obj.bday.month+"/"+obj.bday.year);

var obj2 = 
{
  "id": 1,
  "name": "Leanne Graham",
  "username": "Bret",
  "email": "Sincere@april.biz",
  "address": {
    "street": "Kulas Light",
    "suite": "Apt. 556",
    "city": "Gwenborough",
    "zipcode": "92998-3874",
    "geo": {
      "lat": "-37.3159",
      "lng": "81.1496"
    }
  },
  "phone": "1-770-736-8031 x56442",
  "website": "hildegard.org",
  "company": {
    "name": "Romaguera-Crona",
    "catchPhrase": "Multi-layered client-server neural-net",
    "bs": "harness real-time e-markets"
  }
}



console.log(obj2.company.name);

