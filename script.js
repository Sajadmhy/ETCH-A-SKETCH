// create a grid with number*number of cells.

container = document.querySelector('#container');
function createGrid(number) {
    for (let i = 0; i < number; i++){
        for (j = 0; j < number; j++){
            div = document.createElement('div');
            div.className = "grid";
            n = 960/number;
            div.style.width = `${n}px`;
            div.style.height = `${n}px`;
            container.appendChild(div);
        };
    };
    
};

createGrid(16);

grids = document.getElementsByClassName("grid");

// clearGrid sets all the div's colors to white
function clearGrid() {
   
    for (let k = 0; k < grids.length; k++){
            grids[k].style.backgroundColor = "white";
        }};

// trail set's any cell's color to black on mouse hover
function trail () {
for (let k = 0; k < grids.length; k++){
    grids[k].addEventListener("mouseover", function() {
        grids[k].style.backgroundColor = "black";
    })}};
    
trail();

//refreshGrid asks for number of cells, clears the grid
// and creates new grid and activates the trail function
function refreshGrid () {
    let z = prompt(`How many boxes per side?`);
    while (grids.length > 0) {
        var grid = grids[0];
        grid.parentNode.removeChild(grid);
    };
    createGrid(z);
    trail();
};

document.getElementById("set-grid").addEventListener("click", refreshGrid);
document.getElementById("clear").addEventListener("click", clearGrid);
    
