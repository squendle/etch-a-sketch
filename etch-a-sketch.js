// Here be the Etch-a-Squetch code

//all this stuff handles the grid - setting the grid size, etc

const easContainer = document.querySelector(".eas-container");

let squares = 16;
let pixels;
createGrid(squares);
const gridSize = document.getElementById("grid-size");
const gridBtn = document.getElementById("grid-btn").onclick = setGridSize;

function setGridSize(){
  squares = gridSize.value;
  if (squares > 64){
    alert("Maximum grid size is 64")
  } else {
  clearGrid();
  createGrid(squares);
  }
};

function createGrid(squares) {
  let size = (550 / squares);
  for (let i = 1; i <= squares; i++){
    for (let j = 1; j <= squares; j++) {
      let square = document.createElement("div");
      square.setAttribute('style', `border: 1px solid rgba(91, 91, 91, 0.2); height: ${size}px; width: ${size}px`);
      square.setAttribute('class', 'pixel');
      easContainer.appendChild(square);
    }
  }
  draw();
};

function clearGrid() {
  while (easContainer.firstChild){
    easContainer.removeChild(easContainer.firstChild);
  }
};

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
let chosenColor = '#bc19eb';
colorPick.onchange = function () {
  chosenColor = colorPick.value;
};

function colorChange(e){
  //if isDrawing is true, we change each pixel to the chosen color
  if (isDrawing){this.style.backgroundColor = chosenColor};
};


//the draw function that executes a color change on mouseover
function draw() {
  pixels = document.querySelectorAll(".pixel");
  pixels.forEach(pixel => pixel.addEventListener("mouseover", colorChange));
};

// this stuff handles the reset/"shake it" button
const resetBtn = document.getElementById("shake-it").onclick = function() {
  pixels = document.querySelectorAll(".pixel");
  pixels.forEach(pixel => pixel.style.backgroundColor = "#000000");
};

