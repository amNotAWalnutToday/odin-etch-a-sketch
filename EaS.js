//create the grid
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


//create the trail
let random = false;

function setTrail() {
    const gridSquare = document.querySelectorAll('.square');
    gridSquare.forEach(square => square.addEventListener('mouseenter',hoverEnter));
    gridSquare.forEach(square => square.addEventListener('mouseleave',hoverLeave));
}

function hoverEnter(e){
    if (random === true) randomColor();
    this.style.backgroundColor = colorType
}

function hoverLeave(e){
    this.setAttribute('class','hoverExit square');
    this.addEventListener('animationend', hoverTrail);
}

function hoverTrail(e) {
    this.setAttribute('class','square');
    this.style.backgroundColor = 'white';
}

//generate new grid
let gridSize = 16;
let randomClick = false;

const range = document.querySelector('#range')
range.addEventListener('click', generateGrid)

function clearGrid(){
    const gridSquare = document.querySelectorAll('.square');
    gridSquare.forEach(square => {
        container.removeChild(square)
    });
}

//specific size
function generateGrid(e) {
    clearGrid();
    if(!randomClick) gridSize = this.value
    createGrid(Math.pow(gridSize,2));
    setTrail();
    rangeSize();
    randomClick = false;
}

function rangeSize() {
    const rangeSize = document.querySelector('#rangeSize')
    rangeSize.textContent = gridSize + ' X ' + gridSize;
}

//random size
const randomGrid = document.querySelector('#random-grid')
randomGrid.addEventListener('click',randomSize)

function randomSize() {
    gridSize = Math.floor(Math.random()*64);
    range.value = gridSize;
    randomClick = true;
    generateGrid();
}

//Choose color
//specific color
let colorType = '#000000';

const colorPicker = document.querySelector('#colorChoose')
colorPicker.addEventListener('change', chooseColor)

function chooseColor(e){
    colorType = this.value;
    colorValue();
}

function colorValue() {
    const cValue = document.querySelector('#colorValue')
    cValue.textContent = colorType;
}
//random color
const rainbowColor = document.querySelector('#rainbow')
rainbowColor.addEventListener('click',setRandom)

function setRandom(e) {
    !random 
        ?random = true
        :random = false;
}

function randomColor () {
    let colorValArr = [];
    for(let i = 6; i > 0; i--){
        let randomNum = Math.floor(Math.random()*15)
        switch(randomNum){
          case 10:
            randomNum = 'A';
          case 11:
            randomNum = 'B';
          case 12:
            randomNum = 'C';
          case 13: 
            randomNum = 'D';
          case 14:
            randomNum = 'E';
          case 15:
            randomNum = 'F';
        }
        colorValArr.push(randomNum);
    }
    colorType = '#' + colorValArr.join("");

    colorValue();
}