// var para = document.querySelector('p');
// var txt = document.querySelector(".txt");
// var btn = document.querySelector(".btn");

// function loadApikey(){
// fetch(`http://api.weatherapi.com/v1/current.json?key=9fe0008e30b04b5fa4462622250912&q=India&aqi=yes`)
// .then((response)=> response.json())
// .then((data1)=>{
// console.log(data1.location.lat);
// })
// }

// btn.addEventListener("click", loadApikey);


// var para = document.querySelector('p');
// var txt = document.querySelector(".txt");
// var btn = document.querySelector(".btn");

// function loadApiKey(){
//     fetch(`https://api.mfapi.in/mf/search?q=${txt.value} ICICI`)
//     .then((response) => response.json())
//     .then((data) => {

//         console.log(data); 

//         if(data.length === 0){
//             para.innerText = "No result found";
//             return;
//         }

//         para.innerText = data[0].schemeName; 
//     })
//     .catch((err) => console.log(err));
// }

// btn.addEventListener("click", loadApiKey);


var btn = document.querySelector('.btn');
var text = document.querySelector('.text');
var p1 = document.querySelector('p');
var data1 = document.querySelector('.dataContain');

function loadApi() {
    data1.innerHTML = ""; // clear old data

    fetch(`https://api.mfapi.in/mf/search?q=${text.value}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);

            for (let i = 0; i < 15 && i < data.length; i++) {
                var codeP = document.createElement('p');
                codeP.textContent = data[i].schemeCode;
                codeP.style.color = "green";

                var nameP = document.createElement('p');
                nameP.textContent = data[i].schemeName;
                nameP.style.color = "brown";

                var div = document.createElement('div');
                div.appendChild(codeP);
                div.appendChild(nameP);

                data1.appendChild(div);
            }
        })
        .catch(err => console.log("Error:", err));
}

btn.addEventListener("click", loadApi);
