const gridContainer = document.getElementById("grid");
const resetButton = document.getElementById("reset");

function createGrid(size) {
  gridContainer.innerHTML = ""; // Clear previous grid
  gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  const totalSquares = size * size;

  for (let i = 0; i < totalSquares; i++) {
    const square = document.createElement("div");
    square.classList.add("grid-square");

    square.addEventListener("mouseover", () => {
      square.style.backgroundColor = "black";
    });

    gridContainer.appendChild(square);
  }
}

// Default grid size
createGrid(16);

resetButton.addEventListener("click", () => {
  let newSize = prompt("Enter grid size (max 100):", 16);
  newSize = parseInt(newSize);

  if (newSize > 0 && newSize <= 100) {
    createGrid(newSize);
  } else {
    alert("Please enter a number between 1 and 100.");
  }
});
