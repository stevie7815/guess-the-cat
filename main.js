const url = `https://api.thecatapi.com/v1/images/search?limit=12&has_breeds=true&mime_types=jpg,png`;

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


    /*  let imagesData = data;
      imagesData.map(function (imageData) {
  
        let image = document.createElement('img');
        //use the url from the image object
        image.src = `${imageData.url}`;
  
        let gridCell = document.createElement('div');
        gridCell.classList.add('clmn');
        gridCell.classList.add('clmnShadow');
        gridCell.appendChild(image)
  
        document.getElementById('grid').appendChild(gridCell);
  
      });
  */

  })

  .catch(function (error) {
    console.log("Fetch Error: ", error);
  });


function displayImage(data) {

  const catImgDiv = document.getElementById("catImg");

  const catImg = document.createElement("img");
  catImg.src = data.url;
  catBreedsDiv.appendChild(catImg);
  document.body.style.backgroundImage = "url('" + data.url + "')";

}


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
  const printTrait = document.createElement("b");
  printTrait.innerHTML = breedTrait;
  catTraitDiv.appendChild(printTrait);

}
