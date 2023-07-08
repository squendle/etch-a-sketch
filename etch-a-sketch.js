// Here be the etch-a-sketch code

const easContainer = document.querySelector(".eas-container");

//this is a start, but I need the squares value to update to the text input when the button is clicked
const gridSize = document.getElementById("grid-size");
let squares = 16;
gridSize.onchange = function () {
  squares = gridSize.value;
};

function createGrid(squares) {
  let size = (550 / squares);
  
  for (let i = 1; i <= squares; i++){
    for (let j = 1; j <= squares; j++) {
      let square = document.createElement("div");
      square.setAttribute('style', `border: 1px solid darkgrey; height: ${size}px; width: ${size}px`);
      square.setAttribute('class', 'pixel');
      easContainer.appendChild(square);
    }
  }
};
// then this should put the grid in the container...

let grid = createGrid(squares);


// this creates a click and drag boolean to test when drawing on the eas

let isDrawing = false;
window.addEventListener("mousedown", () =>{
  isDrawing = true;
});
window.addEventListener("mouseup", () => {
  isDrawing = false;
});

//this adds a color (chosen by the color picker) to a targeted element

const colorPick = document.getElementById("color-pick");
let chosenColor = '#ff0000';
colorPick.onchange = function () {
  chosenColor = colorPick.value;
};

function colorChange(e){
  //if isDrawing is true, we change each pixel to the chosen color
  if (isDrawing){this.style.backgroundColor = chosenColor;}
};

//mouseover executes colorChange on each pixel div

let pixels = document.querySelectorAll(".pixel");
pixels.forEach(pixel => pixel.addEventListener("mouseover", colorChange));
