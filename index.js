// const saveLocalButton = document.getElementById("saveLocalBtn");
// const retrieveLocalButton = document.getElementById("retrieveLocalBtn");
// const saveSessionButton = document.getElementById("saveSessionBtn");
// const retrieveSessionButton = document.getElementById("retrieveSessionBtn");
// const outputPragraph = document.getElementById("output");

// console.log(outputPragraph);


// saveLocalButton.addEventListener("click",function(){
//     localStorage.setitem("cityLocal", "Mumbai");
//     outputPragraph.textContent = "City saved to Local Storage : Mumbai";

// });

// retrieveLocalButton.addEventListener("click", function (){
//     const savedCityLocal = localStorage.getItem("cityLocal");
//     if (savedCityLocal){
//         outputPragraph.textContent = "city retrieved from Local Storage : "  + savedCityLocal ;
//     } else{
//         outputPragraph.textContent = "City not found in Local Storage. ";
//     }

// });

// saveSessionButton.addEventListener("click", function (){
//     sessionStorage.setItem("citySession","Delhi");
//     outputPragraph.textContent = "City saved to Session Storage : Delhi";
// });

// retrieveSessionButton.addEventListener("click", function(){
//     const savedCitySession = sessionStorage.getItem("citySession");
//     if (savedCitySession){
//         outputPragraph.textContent ="City retrieved from Session Storage: " + savedCitySession;
//     }
//     else{
//         outputPragraph.textContent = "City not found in Session Storage.";
//     }
// });

const saveLocalButton = document.getElementById("saveLocalBtn");
const retrieveLocalButton = document.getElementById("retrieveLocalBtn");
const saveSessionButton = document.getElementById("saveSessionBtn");
const retrieveSessionButton = document.getElementById("retrieveSessionBtn");
const outputParagraph = document.getElementById("output");

saveLocalButton.addEventListener("click", function() {
  localStorage.setItem("cityLocal", "Mumbai");
  outputParagraph.textContent = "City saved to Local Storage: Mumbai";
});

retrieveLocalButton.addEventListener("click", function() {
  const savedCityLocal = localStorage.getItem("cityLocal");
  if (savedCityLocal) {
    outputParagraph.textContent = "City retrieved from Local Storage: " + savedCityLocal;
  } else {
    outputParagraph.textContent = "City not found in Local Storage.";
  }
});

saveSessionButton.addEventListener("click", function() {
  sessionStorage.setItem("citySession", "Delhi");
  outputParagraph.textContent = "City saved to Session Storage: Delhi";
});

retrieveSessionButton.addEventListener("click", function() {
  const savedCitySession = sessionStorage.getItem("citySession");
  if (savedCitySession) {
    outputParagraph.textContent = "City retrieved from Session Storage: " + savedCitySession;
  } else {
    outputParagraph.textContent = "City not found in Session Storage.";
  }
});