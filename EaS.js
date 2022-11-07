//creating the grid
const container = document.querySelector('#container')

function createGrid(squares) {
if (squares >= Math.pow(100,2)) return alert('ERROR');

const lines = Math.sqrt(squares);
const squareSize = container.offsetWidth / lines;
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
    this.setAttribute('class','hover square');
}

function hoverLeave(e){
    this.setAttribute('class','hoverExit hover square');
    this.addEventListener('animationend', hoverTrail);
}

function hoverTrail(e) {
    this.setAttribute('class','square');
}

//generate new grid
const button = document.querySelector('#generate')
button.addEventListener('click', generateGrid);

function clearGrid(){
    const gridSquare = document.querySelectorAll('.square');
    gridSquare.forEach(square => {
        container.removeChild(square)
    });
}

function generateGrid(e) {
    clearGrid();
    createGrid(Math.pow(prompt('Enter amount of grid lines(less than 100)'),2));
    setTrail();
}
