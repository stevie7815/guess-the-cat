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



    const startGame = document.querySelector('#startGame');
    startGame.addEventListener('click', () => {

      let imagesData = data;
      imagesData.map(function (imageData) {


        let image = document.createElement('img');
        //use the url from the image object
        image.src = `${imageData.url}`;

        const cat = imageData;


        const breedName = cat.breeds[0].name;
        const showBrd = document.createElement("b");
        showBrd.classList.add('breedClass')
        showBrd.innerHTML = breedName;



        const breedTrait = cat.breeds[0].temperament;
        const showTrt = document.createElement("p");
        showTrt.classList.add('traitClass')
        showTrt.innerHTML = breedTrait;

        let gridCell = document.createElement('div');


        // apply CSS to grid cells
        gridCell.classList.add('clmn');
        gridCell.classList.add('clmnShadow');
        gridCell.classList.add('brgrid');
        gridCell.classList.add('brgrid:hover');

        gridCell.id = String(breedName)
        showTrt.id = String(breedTrait)


        gridCell.appendChild(image)


        gridCell.appendChild(showBrd)
        gridCell.appendChild(showTrt)


        document.getElementById('grid').appendChild(gridCell);
        document.getElementById("hint").innerHTML = "hint";
        document.getElementById("more").innerHTML = "more cats!";

      });


      // ADD MORE CATS TO THE GRID //
      //add more cats when button clicked
      const more = document.querySelector('#more');
      more.addEventListener('click', () => {

        let imagesData = data;
        imagesData.map(function (imageData) {


          let image = document.createElement('img');
          //use the url from the image object
          image.src = `${imageData.url}`;

          const cat = imageData;


          const breedName = cat.breeds[0].name;
          const showBrd = document.createElement("b");
          showBrd.classList.add('breedClass')
          showBrd.innerHTML = breedName;


          const breedTrait = cat.breeds[0].temperament;
          const showTrt = document.createElement("p");
          showTrt.classList.add('traitClass')
          showTrt.innerHTML = breedTrait;

          let gridCell = document.createElement('div');


          // apply CSS to grid cells
          gridCell.classList.add('clmn');
          gridCell.classList.add('clmnShadow');
          gridCell.classList.add('brgrid');
          gridCell.classList.add('brgrid:hover');

          gridCell.id = String(breedName)
          showTrt.id = String(breedTrait)


          gridCell.appendChild(image)


          gridCell.appendChild(showBrd)
          gridCell.appendChild(showTrt)


          document.getElementById('grid').appendChild(gridCell);
          document.getElementById("moreText").innerHTML = "Can you win against so many cats?";

        });
      })

        // show breed selection
        let select = document.getElementById("selectCatBreed");

        for (let i = 0; i < imagesData.length; i++) {
          const breed = imagesData[i];
          let option = document.createElement('option');

          selectBreed = breed.breeds[0].name;
          hintBreed = breed.breeds[0].temperament;
          option.value = i;
          option.innerHTML = selectBreed;
          select.appendChild(option);


        }

        const buttonBreed = document.querySelector('#hint');
        buttonBreed.addEventListener('click', () => {
          let hint = hintBreed
          document.getElementById("hintMessage").innerHTML = hint;

        })

        // discover value/text -  displays dropdown selected option in console
        select.addEventListener("change", e => {
          var value = select.options[select.selectedIndex].text;
          console.log(value);

          const buttonBreed = document.querySelector('#buttonBreed');
          buttonBreed.addEventListener('click', () => {
            // if cat breed matches - change colour and display message
            if (selectBreed == value) {
              document.getElementById(value).style.backgroundColor = '#688f4e'
              document.getElementById(value).style.color = '#fff'
              document.getElementById("playAgainMessage").innerHTML = "Congratulations! Play again soon!"

              // if cat breed does not match - change cell colour and add message
            } else if (selectBreed != value) {
              document.getElementById(value).style.backgroundColor = '#DB636C'
              document.getElementById(value).style.color = '#fff'
              document.getElementById("playAgainMessage").innerHTML = "Try again!"
            }

            /*
            // DISABLE BUTTON AFTER IT HAS BEEN CLICKED
            const disableButton = () => {
              button.disabled = true;
  
            };
  
            buttonBreed.addEventListener('click', disableButton);
            document.getElementById("disableButton").innerHTML = "Start a new game"
  */
          })
        })






        // check that selectBreed shows one breed
        console.log(selectBreed)


        let selectCatTemp = document.getElementById("selectCatTemperament");

        // show temperament selection
        for (let i = 0; i < imagesData.length; i++) {
          const breed = imagesData[i];
          let option = document.createElement('option');

          // retrieve temperament of cat breeds
          let selectTemp = breed.breeds[0].temperament;
          option.value = i;

          //split regular expression - i.e. remove commas
          let splitTemp = selectTemp.split(/[,]/);
          // console.table(splitTemp)
          option.innerHTML = splitTemp[i];

          for (let i = 0; i < splitTemp.length; i++) {
            const singleValue = splitTemp[0];
            option.value = i
            option.innerHTML = singleValue

            selectCatTemp.appendChild(option);
          }

          //console.log(splitTemp)
          console.log(splitTemp[0])


        }

        // discover value/text -  displays dropdown selected option in console
        selectCatTemp.addEventListener("change", e => {
          var valueTemp = selectCatTemp.options[selectCatTemp.selectedIndex].text;
          console.log(valueTemp);

          // if temperament matches, change background colour and font colour
          if (splitTemp.includes(valueTemp)) {
            document.getElementsByClassName(valueTemp).style.backgroundColor = '#688f4e'
            document.getElementsByClassName(valueTemp).style.color = '#fff'

          }
          // if temperament does not match, change background colour and font colour
          else {
            document.getElementById(valueTemp).style.backgroundColor = '#DB636C'
            document.getElementById(valueTemp).style.color = '#fff'

          }
        })


     

    })

    // BUTTON TO QUIT GAME
    const quitGame = document.querySelector('#quitGame');
    // even listener to perform action when clicked
    quitGame.addEventListener('click', () => {
      // send alert when game is quit
      alert("Play again soon!")
    })
  })

  // console.log error if error occurs during fetch
  .catch(function (error) {
    console.log("Fetch Error: ", error);
  });

