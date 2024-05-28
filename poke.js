let divison = document.querySelector(".apidata");
let userinputbe = document.querySelector("#userinput");
let pokeimagesdivison  = document.querySelector(".pokeimagesdivision") 
let available_pokemon = [
  "bulbasaur",
  "venusaur",
  "charmander",
  "charmeleon",
  "charizard",
  "squirtle",
  "wartortle",
  "blastoise",
  "caterpie",
  "metapod",
  " butterfree",
  "weedle",
  "kakuna",
  "beedrill",
  "pidey",
  "pidgeotto",
  "pidgeot",
  "rattata",
  "raticate",
];

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#submit").addEventListener("click", () => {
    let uservalue = document.querySelector("#userinput").value;
    console.log('uservalue: ', uservalue);
    
    let url = `https://pokeapi.co/api/v2/pokemon/${uservalue}`;
    divison.textContent = "";


    if (uservalue != "") {
      fetch(url)
        .then(res => {
          return res.json();
        })
        .then(data => {
          console.log(data);
          // On fetching , this section is to show case the data in index file
          let htmldata = `
       <h3 class = "pokemonheight"> Height of ${data.name} is ${data.height}</h3>
       <h3 class = "pokemonexe"> And their Base exprience is ${data.base_experience}</h3>
      `;
          divison.insertAdjacentHTML("afterbegin", htmldata);
          imagesarray =data.sprites
          console.log('imagesarray: ', imagesarray);

          front_default = document.createElement("img")
          front_default.classList.add("pokeimgs")
          back_default = document.createElement("img")
          back_default.classList.add("pokeimgs")
          front_female = document.createElement("img")
          front_female.classList.add("pokeimgs")
          back_female = document.createElement("img")
          back_female.classList.add("pokeimgs")

         
          front_default.src = imagesarray.front_default
          front_default.alt = `${data.name}'s front default`
          back_default.src = imagesarray.back_default
          back_default.alt = `${data.name}'s back defalut`
          front_female.src = imagesarray.front_female
          front_female.alt = `${data.name}'s front female    `
          back_female.src = imagesarray.back_female
          back_female.alt = `${data.name}'s back female`



          pokeimagesdivison.appendChild(front_default)
          pokeimagesdivison.appendChild(back_default)
          pokeimagesdivison.appendChild(front_female)
          pokeimagesdivison.appendChild(back_female)
          // divison.appendChild(htmldata)
          uservalue.value = "";


           
        })
        .catch(err=>{
          console.log('Error: ', Error);
          let errorhtml =`
            <h3>${err}</h3>
          `
          divison.insertAdjacentHTML("afterbegin", errorhtml)
          
        })
        
        
    } else {
      let htmldata = `
      
        <h3>Enter a pokemon name from first genration!➕🌟⚡ </h3><span>!(*￣(￣　*)</span>
      `;
      divison.insertAdjacentHTML("afterbegin", htmldata);
      pokeimagesdivison.innerHTML = ""
    }
  });
});









//todo make it async await
// add click down page to show all the available pokemon
// add suggestons
// make it mistake proof if someone enter the wrong pokemon
// run through array to chaeck if the usergiven poke mon is availvable or not
// toggle to darkmode

// let pokemon_name = document.querySelector(".uservalue");
// let pokedata = document.querySelector(".container");
// let submitbtn = document.querySelector(".submitbtn");
// let globalpokedata = []
// submitbtn.addEventListener("click", () => {
//   uservalue = pokemon_name.value;
//   console.log(uservalue);
//   let url = `https://pokeapi.co/api/v2/pokemon/${uservalue}`;
// fetch(url)
//   .then((res) => {
//     return res.json();
//   })
//   .then((data) => {
//     heightnum = data.height;

//     console.log(data);
//     console.log(data.name)
//     console.log(data.weight)
//     console.log(data.sprites["back_default"])
//     pokedata.innerHTML = data.height;
//   })
//   .catch((err)=>{
//     pokedata.innerHTML = err
//   })

//   fetch(url)
//   .then(response=>{
//     if (!response.ok){
//       throw new Error("network error")

//     }
//     return response.json()
//   })
//   .then(data=>{
//     globalpokedata = data
//     processData(globalpokedata);
//   })
//   .catch(error=>{
//     console.log(error);
//   })

//     pokedata = globalpokedata.height
// });
