const gameContainer = document.getElementById("game");
const flippedCards = document.getElementsByClassName("flipped");
let cardColorToMatch = "";

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}

// TODO: Implement this function!
function handleCardClick(event) {
  console.log("you just clicked", event.target);
  console.log("flipped cards", flippedCards);

  let clickedCard = event.target
  clickedCard.classList.toggle("flipped");

  if(clickedCard.classList.contains("flipped")){
    clickedCard.style.backgroundColor = clickedCard.classList[0];
  }
  else{
    clickedCard.style.backgroundColor = '';
  }

  if(flippedCards.length === 10){
    alert("game over!");
  }
}

createDivsForColors(shuffledColors);