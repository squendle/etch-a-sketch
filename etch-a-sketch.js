// Here be the etch-a-sketch code

// Create a div container to hold my EAS grid - done
// class = .eas-container

// create variables to select the container, and one to store the grid going inside it

const container = document.querySelector(".eas-container");

// write a function to create a 16x16 grid of divs inside of the container

function createGrid(squares) {
  const square = document.createElement("div");
  let size = (960 / squares);
  for (let i = 1; i <= squares; i++){
    for (let i = 1; i <= squares; i++) {
     square.setAttribute('style', `border: 1px solid blue; height: ${size}px; width: ${size}px`);
     container.appendChild(square);
    }
  }
};

// then this should put the 16x16 grid in the container...

let grid = createGrid(16);

// 