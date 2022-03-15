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

function clearGrid() {
    while (grids.length > 0) {
        var grid = grids[0];
        grid.parentNode.removeChild(grid);
    };
};

function refreshGrid () {
    let z = prompt(`How many boxes per side?`);
    clearGrid();
    createGrid(z);
};

