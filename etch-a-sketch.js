// Here be the etch-a-sketch code

const container = document.querySelector(".eas-container");

function createGrid(squares) {
  let size = (550 / squares);
  
  for (let i = 1; i <= squares; i++){
    for (let j = 1; j <= squares; j++) {
      let square = document.createElement("div");
      square.setAttribute('style', `border: 1px solid blue; height: ${size}px; width: ${size}px`);
      square.setAttribute('class', 'pixel');
      container.appendChild(square);
    }
  }
};
// then this should put the grid in the container...

let grid = createGrid(16);

//this function adds red to a targeted element

function colorChange(e){
  this.classList.add('hovered');
};

//on mouseover we change each pixel to red

let pixels = document.querySelectorAll(".pixel");
pixels.forEach(pixel => pixel.addEventListener("mouseover", colorChange));