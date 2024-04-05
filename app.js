
const urlbreed = `https://api.thedogapi.com/v1/breeds`;
const api_key = `live_0wLzknNYaA8J2pGEVXS0CFnmuPHcIsRNUFRKN0TdlageZWbZoAIEyFRvcQcs2f7i`;
const url = `https://api.thedogapi.com/v1/images/search?limit=9&has_breeds`;
let storedBreeds = [];

fetch(urlbreed, { headers: { "x-api-key": api_key } })
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    data = data.filter((img) => img.image?.url != null);
    storedBreeds = data;
    for (let i = 0; i < storedBreeds.length; i++) {
      const breed = storedBreeds[i];
      let option = document.createElement("option");
      if (!breed.image) continue;
      option.value = i;
      option.innerHTML = `${breed.name}`;
      document.getElementById("breed_Selector").appendChild(option);
    }
    showBreedImage(value);
  })
  .catch(function (error) {
    console.log(error);
  });

  
function showBreedImage(index) {
  document.getElementById("breed_image").src = storedBreeds[index].image.url;
  document.getElementById("temperament").textContent =
    storedBreeds[index].temperament;
    document.getElementById("name").textContent =
    storedBreeds[index].name;
    document.getElementById("breed_group").textContent =
    storedBreeds[index].breed_group;
    document.getElementById("bred_for").textContent =
    storedBreeds[index].bred_for;
    document.getElementById("weight").textContent =
    storedBreeds[index].weight.metric;
    document.getElementById("height").textContent =
    storedBreeds[index].height.metric;
    document.getElementById("life_span").textContent =
    storedBreeds[index].life_span;
}


 fetch(url,{headers: {
      'x-api-key': api_key
    }})
 .then((response) => {
   return response.json();
 })
.then((data) => {
  let imagesData = data;
  imagesData.map(function(imageData) {
    
    let image = document.createElement('img');
    image.src = `${imageData.url}`;
        
    let gridCell = document.createElement('div');
    gridCell.classList.add('col');
    gridCell.classList.add('col-lg');
    gridCell.appendChild(image)
      
    document.getElementById('grid').appendChild(gridCell);
    
    });
})
.catch(function(error) {
   console.log(error);
});




function toggleBreedInfo() {
  const breedInfoWrapper = document.getElementById('breedInfoWrapper');
  breedInfoWrapper.style.display = breedInfoWrapper.style.display === 'none' ? 'block' : 'none';
}
