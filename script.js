// div = document.createElement('div');
// div.className = "grid";
container = document.querySelector('#container');
function createGrid(number) {
    for (let i = 0; i < number; i++){
        for (j = 0; j < number; j++){
            div = document.createElement('div');
            div.className = "grid";
            div.style.width=`30px`;
            div.style.height=`30px`;
            container.appendChild(div);
        };
    };
    
}

createGrid(16);


// for (let i=0; i<16; i++) {
// const div = document.createElement('div');
// div.style.cssText = "border-style: solid; border-color: gray;"

// document.querySelector('.grid').appendChild(div);
// };