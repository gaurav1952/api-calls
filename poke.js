let divison = document.querySelector(".apidata");
let userinputbe = document.querySelector("#userinput");
let pokeimagesdivison = document.querySelector(".pokeimagesdivision");
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
let i;
document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".nightmode").addEventListener('click',()=>{
    console.log("helloworld");
    document.body.classList.toggle("lightmode")
  })


  document.querySelector("#submit").addEventListener("click", () => {
    let uservalue = document.querySelector("#userinput").value;
    // console.log("uservalue: ", uservalue);

    let url = `https://pokeapi.co/api/v2/pokemon/${uservalue}`;
    divison.textContent = "";    //remove the contenct if it already exist
    pokeimagesdivison.innerHTML = ""

    if (uservalue != "") {
      fetch(url)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          // console.log(data);
          // On fetching , this section is to show case the data in index file
          let htmldata = `

       <h3 class = "pokemonheight"> Height of ${data.name} is: ${data.height}</h3>
       <h3 class = "pokemonexe"> And their Base exprience is: ${data.base_experience}</h3>
      `;
          divison.insertAdjacentHTML("afterbegin", htmldata);
          imagesarray = data.sprites;
          // console.log("imagesarray: ", imagesarray);

          front_default = document.createElement("img");
          front_default.classList.add("pokeimgs");
          back_default = document.createElement("img");
          back_default.classList.add("pokeimgs");
          front_female = document.createElement("img");
          front_female.classList.add("pokeimgs");
          back_female = document.createElement("img");
          back_female.classList.add("pokeimgs");

          front_default.src = imagesarray.front_default;
          // front_default.alt = ``;
          back_default.src = imagesarray.back_default;
          // back_default.alt = `${data.name}'s back defalut`;
          front_female.src = imagesarray.front_female;
          // front_female.alt = `${data.name}'s front female    `;
          back_female.src = imagesarray.back_female;
          // back_female.alt = `${data.name}'s back female`;

          // pokeimagesdivison.appendChild(front_default);
          // pokeimagesdivison.appendChild(back_default);
          // pokeimagesdivison.appendChild(front_female);
          // pokeimagesdivison.appendChild(back_female);

          let pokeimagehtml = `
          
          <img class="pokeimgs" src="${front_default.src}" alt="${data.name}'s front default">
          <img class="pokeimgs" src="${back_default.src}" alt="${data.name}'s back default">
          <img class="pokeimgs" src="${front_female.src}" alt="${data.name}'s front female default">
          <img class="pokeimgs" src="${back_female.src}" alt="${data.name}'s back female default">
          `;
          pokeimagesdivison.insertAdjacentHTML("afterbegin", pokeimagehtml)
          // divison.appendChild(htmldata)
          let divisionborder = document.querySelectorAll(".divisionborder")
          // console.log('divisionborder: ', divisionborder);
          
          for (i = 0; i< divisionborder.length; i++){
            let classadditon = divisionborder[i]
            classadditon.classList.add("forborder")
            // console.log(divisionborder[1])
            // console.log('i: ', i);
       
          }
          uservalue.value = "";
        })
        .catch((err) => {
          // console.log("Error: ", Error);
          let errorhtml = `
            <h3>${err}</h3>
          `;
          divison.insertAdjacentHTML("afterbegin", errorhtml);
        });
    } else {
      let htmldata = `
      
        <h3>Enter a pokemon name from first genration!➕🌟⚡ </h3><span>!(*￣(￣　*)</span>
      `;
      divison.insertAdjacentHTML("afterbegin", htmldata);
      pokeimagesdivison.innerHTML = "";
    }
  });



});

