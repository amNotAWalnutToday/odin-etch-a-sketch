//creating the grid
const container = document.querySelector('#container')

function createGrid(squares) {
const lines = Math.sqrt(squares);
const squareSize = container.offsetWidth / lines;
    console.log(squareSize);
    for(let i = squares; i > 0; i--){
        const square = document.createElement('div');
        square.style.cssText = `border:1px solid black; height:${squareSize - 2}px; width:${squareSize - 2}px;`;
        square.classList.add('square');
        container.appendChild(square);
    }
}
createGrid(Math.pow(16,2));
setTrail();


//creating the trail

function setTrail() {
    const gridSquare = document.querySelectorAll('.square');
    gridSquare.forEach(square => square.addEventListener('mouseenter',hoverEnter));
    gridSquare.forEach(square => square.addEventListener('mouseleave',hoverLeave));
}

function hoverEnter(e){
    this.setAttribute('class','hover');
}

function hoverLeave(e){
    this.setAttribute('class','hoverExit hover');
    this.addEventListener('animationend', hoverTrail);
}

function hoverTrail(e) {
    this.setAttribute('class','none');
}

//generate new grid
const button = document.querySelector('#generate')
button.addEventListener('click', generateGrid);

function clearGrid(){
    const gridSquare = document.querySelectorAll('.square');
    gridSquare.forEach(square => container.removeChild(square));
}

function generateGrid(e) {
    clearGrid();
    createGrid(Math.pow(prompt('Enter amount of grid lines'),2));
    setTrail();
}
