// Here be the etch-a-sketch code

// Create a div container to hold my EAS grid - done
// class = .eas-container

// create variables to select the container, and one to store the grid squares going inside it

const container = document.querySelector(".eas-container");

// write a function to create a 16x16 grid of divs inside of the container

function createGrid(squares) {
  let size = (960 / squares);
  
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

let grid = createGrid(64);
//success!



//this function adds red to a targeted element

function colorChange(e){
  this.classList.add('hovered');
};

//on mouseover we change each pixel to red

let pixels = document.querySelectorAll(".pixel");
pixels.forEach(pixel => pixel.addEventListener("mouseover", colorChange));

//success again!!