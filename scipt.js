// var xhr = new XMLHttpRequest();
// let pokemon_name = "pikachu";
// let url = `https://pokeapi.co/api/v2/pokemon/${pokemon_name}`;

// // xhr.open('GET', url, true)

// // xhr.onload = function(){
// //     var responseData = JSON.parse(xhr.responseText)
// //     console.log(responseData)
// //     // console.log(responseData.name)
// //     // // console.log(responseData.moves)
// //     // // console.log(responseData.moves)
// //     // var moves = responseData.moves[0]
// //     // var moves1 = responseData.moves[104]
// //     // console.log(moves)
// //     // console.log(moves1)

// //     console.log(responseData.moves[1].version_group_details[2])
// // }
// // xhr.send()

// let image = document.querySelector(".image");

// fetch(url)
//   .then((res) => {
//     return res.json();
//   })
//   .then((data) => {
//     // imagelink_frontFemale = data.sprites['front_female']
//     // imagelink_backFemale =data.sprites['back_female']
//     // imgelement.src = imagelink_frontFemale
//     // image.appendChild(imgelement)
//     let selectedImage = [
//       "back_default",
//       "front_default",
//       "front_female",
//       "back_female",
//     ];
//     selectedImage.forEach(function (key) {
//       if (data.sprites.hasOwnProperty(key)) {
//         let imgelement = document.createElement("img");
//         imgelement.src = data.sprites[key];
//         image.appendChild(imgelement)
//       }
//     });
//     keyvalue = data.sprites
// keyvalue.forEach(element => {

//         console.log(data.sprites)
//     });
//     // console.log(data.sprites['front_female'])
//     // console.log(data.moves)
//     // for(move in data.moves.move.n){
//     //     console.log(move)
//     // }
//   });


//   document.addEventListener("DOMContentLoaded", () => {
//     document.querySelector(".nightmode").addEventListener('click', () => {
//       document.body.classList.toggle("lightmode");
//     });
  
//     document.querySelector("#submit").addEventListener("click", () => {
//       let uservalue = document.querySelector("#userinput").value.toLowerCase();
//       console.log("User input value: ", uservalue); // Debug user input
  
//       let url = `https://pokeapi.co/api/v2/pokemon/${uservalue}`;
//       console.log("Constructed URL: ", url); // Debug URL
  
//       divison.textContent = "";    // Clear existing content
//       pokeimagesdivison.innerHTML = "";
  
//       if (uservalue !== "") {
//         fetch(url)
//           .then((res) => {
//             if (!res.ok) {
//               throw new Error(`HTTP error! status: ${res.status}`);
//             }
//             return res.json();
//           })
//           .then((data) => {
//             console.log("Fetched data: ", data); // Debug fetched data
  
//             let htmldata = `
//               <h3 class="pokemonheight">Height of ${data.name} is: ${data.height}</h3>
//               <h3 class="pokemonexe">And their Base experience is: ${data.base_experience}</h3>
//             `;
//             divison.insertAdjacentHTML("afterbegin", htmldata);
  
//             let imagesArray = data.sprites;
//             let pokeimagehtml = `
//               <img class="pokeimgs" src="${imagesArray.front_default}" alt="${data.name}'s front default">
//               <img class="pokeimgs" src="${imagesArray.back_default}" alt="${data.name}'s back default">
//               <img class="pokeimgs" src="${imagesArray.front_female}" alt="${data.name}'s front female default">
//               <img class="pokeimgs" src="${imagesArray.back_female}" alt="${data.name}'s back female default">
//             `;
//             pokeimagesdivison.insertAdjacentHTML("afterbegin", pokeimagehtml);
  
//             let divisionborder = document.querySelectorAll(".divisionborder");
//             for (let i = 0; i < divisionborder.length; i++) {
//               divisionborder[i].classList.add("forborder");
//             }
//           })
//           .catch((err) => {
//             console.error("Error: ", err); // Log error to console
//             let errorhtml = `
//               <h3>Could not fetch the data. Error: ${err.message}</h3>
//             `;
//             divison.insertAdjacentHTML("afterbegin", errorhtml);
//           });
//       } else {
//         let htmldata = `
//           <h3>Enter a Pokémon name from the first generation!➕🌟⚡ </h3><span>!(*￣(￣　*)</span>
//         `;
//         divison.insertAdjacentHTML("afterbegin", htmldata);
//         pokeimagesdivison.innerHTML = "";
//       }
//     });
//   });
  

const pokedata = async  ()=>{
  const res = await fetch('./pika.json')
  const data = await res.json() 
  console.log(data.pokemon[1])
}

pokedata()