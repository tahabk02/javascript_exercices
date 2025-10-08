const grid = document.getElementById("grid");
const colorPicker = document.getElementById("colorPicker");
const gridSizeInput = document.getElementById("gridSize");
const clearBtn = document.getElementById("clearBtn");

let isDrawing = false;
let currentColor = colorPicker.value;

//  Fonction pour créer la grille
function createGrid(size) {
  grid.innerHTML = ""; // clear
  grid.style.gridTemplateColumns = `repeat(${size}, 20px)`;
  grid.style.gridTemplateRows = `repeat(${size}, 20px)`;

  for (let i = 0; i < size * size; i++) {
    const square = document.createElement("div");
    square.classList.add("square");

    square.addEventListener("mousedown", () => {
      isDrawing = true;
      square.style.backgroundColor = currentColor;
    });

    square.addEventListener("mouseover", () => {
      if (isDrawing) square.style.backgroundColor = currentColor;
    });

    square.addEventListener("mouseup", () => (isDrawing = false));

    grid.appendChild(square);
  }
}

//  Mettre à jour la couleur
colorPicker.addEventListener("input", (e) => {
  currentColor = e.target.value;
});

//  Réinitialiser la grille
clearBtn.addEventListener("click", () => {
  document.querySelectorAll(".square").forEach((sq) => {
    sq.style.backgroundColor = "white";
  });
});

//  Changer la taille de la grille
gridSizeInput.addEventListener("change", (e) => {
  let newSize = parseInt(e.target.value);
  if (newSize < 5 || newSize > 50) {
    alert("Please choose a grid size between 5 and 50");
    return;
  }
  createGrid(newSize);
});

createGrid(20);

// Stop drawing when mouse is released anywhere
document.body.addEventListener("mouseup", () => (isDrawing = false));
