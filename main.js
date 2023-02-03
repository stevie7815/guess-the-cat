//const url = `https://api.thecatapi.com/v1/images/search?limit=12&has_breeds=true&mime_types=jpg,png`;
const url = `https://api.thecatapi.com/v1/breeds`;
const api_key = "live_qtoWFwBFjh3eaGRU0Vw49yQH13EHWpql5P2juMbgbthEutYOiXzu0OeYWc5xDxSK";


fetch(url, {
  headers: {
    'x-api-key': api_key
  }
})
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    console.table(data);
    displayBreed(data)
    displayTrait(data)



    let imagesData = data;
    imagesData.map(function (imageData) {

      let image = document.createElement('img');
      //use the url from the image object
      image.src = `${imageData.url}`;

      const cat = data[0];

      // const catBreedsDiv = document.getElementById("catBreeds");

      const breedName = cat.breeds[0].name;
      const showBrd = document.createElement("b");
      showBrd.innerHTML = breedName;
      //catBreedsDiv.appendChild(showBrd);


      //const catTraitDiv = document.getElementById("catTrait");

      const breedTrait = cat.breeds[0].temperament;
      const showTrt = document.createElement("p");
      showTrt.innerHTML = breedTrait;
      //catTraitDiv.appendChild(showTrt);

      let gridCell = document.createElement('div');
      gridCell.classList.add('clmn');
      gridCell.classList.add('clmnShadow');

      gridCell.classList.add('brgrid');
      gridCell.classList.add('brgrid:hover');
      

      gridCell.appendChild(image)


      gridCell.appendChild(showBrd)
      gridCell.appendChild(showTrt)
      // gridCell.appendChild(printBreed)

      /*
       let gridBreed = document.createElement('div');
       gridBreed.classList.add('brgrid');
       gridBreed.classList.add('brgrid:hover');
       gridBreed.appendChild(showBrd)
       gridBreed.appendChild(showTrt)
  */

      document.getElementById('grid').appendChild(gridCell);
      // document.getElementById('grid').appendChild(gridBreed);


    });

  })

  .catch(function (error) {
    console.log("Fetch Error: ", error);
  });


/*
function showBreedImage(data) {
  storedBreeds = data;

  document.getElementById("breed_image").src = storedBreeds[data].image.url;
}
*
function displayImage(data) {
  /*
  const catBreedsDiv = document.getElementById("catImg");

  const image = document.createElement("img");
  image.src = `${data.url}`;
  catBreedsDiv.appendChild(image);
  //document.body.style.backgroundImage = "url(" + data.url + ")";
*

  let image = document.getElementById("catImag")
  fetch(url)
  .then(resp => resp.json())
  .then(json => image.src = json[0].url)

}

function btnClick(){
  let button = document.getElementById("catBtn")
  button.addEventListener("click", displayImage)

  document.addEventListener("DOMContentLoaded", () =>{
    displayImage()
    btnClick()
  })
}


/*function displayCatInfo(data) {
  for (i = 0; i <= 10; i++) {
    let catType = data[i].breeds[0].name + data[i].breeds[0].temperament;
    //console.log(data[i].breeds[0].name + data[i].breeds[0].temperament);
  }
  const catBreedsDiv = document.getElementById("catBreeds");
  const printBreed = document.createElement("p");
  printBreed.innerHTML = breedName;
  catBreedsDiv.appendChild(printBreed);

}*/

function displayBreed(data) {

  const catBreeds = data[0];

  const catBreedsDiv = document.getElementById("catBreeds");

  const breedName = catBreeds.breeds[0].name;
  const printBreed = document.createElement("b");
  printBreed.innerHTML = breedName;
  catBreedsDiv.appendChild(printBreed);

}

function displayTrait(data) {
  const catTrait = data[0];

  const catTraitDiv = document.getElementById("catTrait");

  const breedTrait = catTrait.breeds[0].temperament;
  const printTrait = document.createElement("p");
  printTrait.innerHTML = breedTrait;
  catTraitDiv.appendChild(printTrait);

}


function selectCatTemperament(data){
  const temperament = document.getElementById("selectCatTemperament");
  for(var i = 0; i < 0; i++){
      var option = document.createElement("option");
      option.text = option.value = data[i][0];
      temperament.add(option);
  }
}
